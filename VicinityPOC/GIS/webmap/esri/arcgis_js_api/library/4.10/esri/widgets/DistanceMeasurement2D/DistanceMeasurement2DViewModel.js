// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Logger ../../core/unitUtils ../../core/accessorSupport/decorators ../../geometry/support/scaleUtils ./DistanceMeasurement2DTool ../support/InteractiveToolViewModel".split(" "),function(r,t,k,d,l,e,c,m,n,p){var f="metric imperial inches feet yards miles nautical-miles us-feet meters kilometers".split(" "),q={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:5,pathPrimaryColor:[255,128,
0,1],pathSecondaryColor:[255,255,255,1]},g=l.getLogger("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel");return function(h){function b(a){a=h.call(this,a)||this;a.supportedViewType="2d";a.geodesicDistanceThreshold=1E5;a.measurement=null;a.mode="auto";a.modes=["auto","planar","geodesic"];a.palette=q;a.tool=null;return a}k(b,h);Object.defineProperty(b.prototype,"defaultUnit",{get:function(){var a=this.get("view.map.portalItem.portal");if(a)switch(a.get("user.units")||a.units){case "metric":return"metric";
case "english":return"imperial"}return m.getDefaultUnitSystem(this.get("view.spatialReference"))||"metric"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"measurementLabel",{get:function(){if(!this.measurement)return null;switch(this.unit){case "metric":return e.formatMetricLength(this.measurement.length,"meters");case "imperial":return e.formatImperialLength(this.measurement.length,"meters");default:var a=e.convertUnit(this.measurement.length,"meters",this.unit);return e.formatDecimal(a,
this.unit)}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this.isDisabled||this.tool.projectionEngineRequired&&!this.tool.projectionEngineSupported?"disabled":this.measurement?"measuring":"ready"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"unit",{get:function(){return this._validateUnit(this.defaultUnit)},set:function(a){void 0===a?this._clearOverride("unit"):this._override("unit",this._validateUnit(a))},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"unitOptions",{get:function(){return f},set:function(a){void 0===a?this._clearOverride("unitOptions"):this._override("unitOptions",this._validateUnits(a))},enumerable:!0,configurable:!0});b.prototype.newMeasurement=function(){this.tool&&this.tool.newMeasurement()};b.prototype.clearMeasurement=function(){this.tool&&this.tool.clearMeasurement()};b.prototype.createTool=function(a){return new n({viewModel:this,view:a})};b.prototype.logUnsupportedError=function(){g.error("DistanceMeasurement2D widget is not implemented for SceneView")};
b.prototype.logError=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];g.error.apply(g,a)};b.prototype._validateUnit=function(a){return-1!==this.unitOptions.indexOf(a)?a:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]};b.prototype._validateUnits=function(a){void 0===a&&(a=[]);a=a.filter(function(a){return-1!==f.indexOf(a)});return 0===a.length?f.slice():a};d([c.property({readOnly:!0,dependsOn:["view.map.portalItem.portal.units","view.map.portalItem.portal.user.units",
"view.spatialReference"]})],b.prototype,"defaultUnit",null);d([c.property({type:Number})],b.prototype,"geodesicDistanceThreshold",void 0);d([c.property()],b.prototype,"measurement",void 0);d([c.property({dependsOn:["measurement","unit","mode","geodesicDistanceThreshold"],readOnly:!0})],b.prototype,"measurementLabel",null);d([c.property()],b.prototype,"mode",void 0);d([c.property({readOnly:!0,type:[String]})],b.prototype,"modes",void 0);d([c.property()],b.prototype,"palette",void 0);d([c.property({dependsOn:["isDisabled",
"measurement","tool.projectionEngineRequired"],readOnly:!0})],b.prototype,"state",null);d([c.property({constructOnly:!0,readOnly:!0})],b.prototype,"tool",void 0);d([c.property({type:String,dependsOn:["unitOptions","defaultUnit"]})],b.prototype,"unit",null);d([c.property({type:[String]})],b.prototype,"unitOptions",null);return b=d([c.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],b)}(c.declared(p))});