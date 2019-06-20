# ArcGIS Server JS API web map

Stand-alone web map functionality will be prototyped here, and can be incorporated into the Angular app as required.

To run this demo, ensure that the entire VicinityPOC project is available within your web server, then open the appropriate location in a browser, eg http://localhost/VicinityPOC/webmap/

(The demo currently uses sample USA datasets but will be re-pointed to the Vicinity database as soon as this is available online)

This sample demonstrates how to:
 - create the framework required for the index.html page, the JS code, and the CSS
 - specify parameters in a separate config file. This could be generated at run-time by the Node backend if necessary
 - load the map at a custom extent, with a specified base map
 - load some Esri widgets including the Home button and Layer List (to control which layers are visible)
 - load a series of Feature Layers into the map
 - listen for events on the map (eg, to show/hide the loading indicator) and react to these events
 - query the visible Stores to determine which Levels are present in the current view extent, and build a dynamic Level Selector control from these
 - filter the Stores, Zones (with other layers to be added) using the Level Selector buttons
