var app = {
  currentLevel: config.levelQuery.defaultLevel || 0,
  mapLayers: {},
  identifyTasks: []
}

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/widgets/Expand",
  "esri/widgets/LayerList",
  "esri/widgets/Home",
  "esri/core/watchUtils",
  "esri/tasks/QueryTask",
  "esri/tasks/support/Query",
  "esri/tasks/IdentifyTask",
  "esri/tasks/support/IdentifyParameters"
],
function(
  Map, MapView, FeatureLayer, GraphicsLayer, Graphic, Expand, LayerList, Home, watchUtils, QueryTask, Query, IdentifyTask, IdentifyParameters
) {

  // Configure the map and view
  app.map = new Map({
    basemap: config.basemap
  });

  app.view = new MapView({
    container: "viewDiv",
    map: app.map,
    zoom: config.zoom,
    center: config.center
  });

  app.identifyParams = new IdentifyParameters({
    tolerance: 10,
    returnFieldName: true
  });

  // Display the loading indicator when the view is updating
  watchUtils.whenTrue(app.view, "updating", function(evt) {
    $("#loading").show();
  });
  watchUtils.whenFalse(app.view, "updating", function(evt) {
    $("#loading").hide();
  });
  // Wait until the view is ready, then....
  app.view.when(function() {

    // Load the widgets (for controlling layers, zooming to home extent, etc)
    addWidgets();

    // Load the layers from the config file
    loadLayers();

    // Configure the pop

    // Update the Level Selector when the map first loads, based on the chosen Shopping Centre ID
    updateLevelSelectors();

    app.resultsLayer = new GraphicsLayer({title: "results", listMode: "hide"});
    app.map.add(app.resultsLayer);

    // Configure the Identify parameters
    app.clickListener = app.view.on("click", executeIdentifyTasks);

    // // How to listen for when the view is moving, and then stops moving:
    // watchUtils.whenTrue(app.view, "stationary", function() {
    //   // do something
    // });

  });

  function loadLayers(){
    // Load all layers from the config file
    var layers = Object.keys(config.layers);
    for (var i=0; i < layers.length; i++){
      var layerName = layers[i];
      var layerDef = config.layers[layerName];
      var options = layerDef.options || {};
      var layer = new FeatureLayer(layerDef.url, options);

      if (layer !== undefined){
        app.mapLayers[layerName] = layer; // Keep track of the layers so they can be queried by the Level selector
        app.map.add(layer);
      }
    }

    // Configure the Workers popup template
    var workersSource = document.getElementById("workers-popup-template").innerHTML;
    app.workersPopupTemplate = Handlebars.compile(workersSource);
  }

  function executeIdentifyTasks(event){
    console.log("click")
  }

  function updateLevelSelectors(){
    // Based on the Shopping Centre which has been chosen, extract its Level
    // values. Create the buttons to allow the levels (floors) to be chosen.

    var floorQueryTask = new QueryTask({
      url: config.layers['centres'].url
    })

    var floorQuery = new Query();
    floorQuery.returnGeometry = false;

    //TODO - temporarily hard-coded for testing
    //floorQuery.outFields = [config.levelQuery.levelField];
    floorQuery.outFields = ["st"];

    floorQuery.where = config.levelQuery.storeIDField + "=" + config.centreID;

    floorQueryTask.execute(floorQuery).then(function(results) {
      clearLevelSelectors();

      // Only show the Level Selector if there is more than one floor in this asset
      //var floors = results.features[0][config.levelQuery.field];
      var floors = "-1, G,       1, 2,  3".split(",");
      if (floors.length > 1) {
        var container = $('#levelSelector');
        $('<ul/>', {
              id: 'ulLevelSelector'
          }).appendTo(container);
        for (var f=0; f<floors.length; f++) {
          var level = floors[f];
          createLevelButton(level);
        }

        $('.btnLevelSelector').click(function (event) {
          buildLevelQuery(event);
        });

        // Select the ground floor by default, unless there is already a
        // level selected and we are only panning
        $('#btnLevelSelector_level_' + app.currentLevel).click();
        $("#btnLevelSelector_level_" + app.currentLevel).addClass("active");
      } else {
        // There are no floors found within the current map extent, so reset
        // the definition expression on the layers
        app.currentLevel = config.levelQuery.defaultLevel || 0;
        clearLevelSelectors();
        clearLevelQueries();
      }

    }, function(error){
      console.log("There was an error running the Floor selector query:", error);
    });

  }

  function clearLevelSelectors() {
    // If there is only one floor in the current view, remove the Level buttons
    // and listeners
    $('.btnLevelSelector').off("click");
    $('#levelSelector').empty();

  }

  function createLevelButton(level){
    // This function is called when a floor/level is found for this asset. The function
    // creates a button allowing stores on this floor to be filtered
    level == 0 ? label = 'G' : label = level;
    var container = $('#ulLevelSelector');
    var li = $('<li/>', {
          class: "liLevelSelector"
      })
     $('<button/>', {
        text: label,
        class: "btnLevelSelector esri-component esri-widget--button esri-widget",
        value: level,
        id: 'btnLevelSelector_level_' + level
      }).appendTo(li);
    li.appendTo(container);
  }

  function buildLevelQuery(event) {
    // This function is called when a Level button is chosen, and filters
    // stores found on that floor/level
    app.currentLevel = event.currentTarget.value || 0;

    // un-select all other floors and select this floor
    $(".btnLevelSelector").removeClass('active');
    event.currentTarget.classList.add('active')

    // Check whether a floor has been selected in the floor selector
    var buttons = document.querySelectorAll('.btnLevelSelector');
    var brackets = false;
    var where;
    for (var b = 0; b < buttons.length; b++){
      var button = buttons[b];
      if (button.classList.contains("active")) {
        if (where) {
          // TODO: remove single quotes once we are using numerical level values
          if (!brackets) {
            where += " and (" + config.levelQuery.field + "='" + button.value + "'";
            brackets = true;
          } else {
            where += " or " + config.levelQuery.field + "='" + button.value + "'";
          }
        } else {
          if (!brackets) {
            where = "(" + config.levelQuery.field + "='" + button.value + "'";
            brackets = true;
          } else {
            where += " or " + config.levelQuery.field + "='" + button.value + "'";
          }
        }
      }
    }
    if (brackets) {
      where += ")";
    }

    applyLevelQuery(where);

  };

  function applyLevelQuery(where) {
    // Apply the where clause as a filter to all query-able layers, ie those which have a Level attribute
    for (var l=0; l < config.levelQuery.queryLayers.length; l++) {
      var layerId = config.levelQuery.queryLayers[l];
      var layer = app.mapLayers[layerId];
      if (layer !== undefined){
        layer.definitionExpression = where;
      }
    }
  }

  function clearLevelQueries() {
    // Remove the where clause as a filter to all query-able layers, ie those which have a Level attribute
    for (var l=0; l < config.levelQuery.queryLayers.length; l++) {
      var layerId = config.levelQuery.queryLayers[l];
      var layer = app.mapLayers[layerId];
      if (layer !== undefined){
        layer.definitionExpression = null;
      }
    }
    app.currentLevel = config.levelQuery.defaultLevel || 0;
  }

  function addWidgets(){
    app.layerList = new Expand({
      expandIconClass: "esri-icon-layer-list",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
      expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
      view: app.view,
      content: new LayerList({
        view: app.view
      }),
      expanded: true
    });
    app.view.ui.add(app.layerList, "top-right");

    app.homeWidget = new Home({
      view: app.view
    });
    app.view.ui.add(app.homeWidget, "top-left");

    // Create the Level Selector, styled to look like a standard Esri widget
    $('<div id="levelSelector" class=""></div>').appendTo($(".esri-ui-top-left")[0]);
  }

});

