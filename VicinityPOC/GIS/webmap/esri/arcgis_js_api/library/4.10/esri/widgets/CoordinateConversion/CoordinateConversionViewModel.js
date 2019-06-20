// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/_base/config ../../Graphic ../../core/Accessor ../../core/Collection ../../core/Error ../../core/Evented ../../core/Handles ../../core/has ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/Point ../../geometry/projection ../../geometry/SpatialReference ../../portal/support/geometryServiceUtils ../../symbols/PictureMarkerSymbol ./support/Conversion ./support/coordinateConversionUtils ./support/formatUtils ../support/GoTo".split(" "),
function(x,M,y,e,z,A,B,p,g,C,D,E,F,f,l,d,q,r,G,H,I,t,m,J,K){var L=new q([0,0,500]),u=window.location.pathname+"__coordinateConversionWidgetState",k=F.getLogger("esri.widgets.CoordinateConversion.CoordinateConversionViewModel"),v=0,h=[];return function(w){function c(a){a=w.call(this,a)||this;a._conversionPromise=null;a._handles=new D;a._locationGraphic=null;a._locale=z.locale;a._pointerCount=0;a.conversions=new p;a.formats=new p(J.generateDefaultFormats());a.formatterAvailable=!1;a.geometryServicePromise=
null;a.requestDelay=300;a.locationSymbol=new I({url:x.toUrl(E("trident")?"../../images/search/search-symbol-32.png":"../../images/search/search-symbol-32.svg"),size:12,width:12,height:12});a.view=null;a._instanceNumber=v;v++;a._saveWidgetState=a._saveWidgetState.bind(a);a._handleFormatChange=a._handleFormatChange.bind(a);a._handleConversionChange=a._handleConversionChange.bind(a);a._handleViewChange=a._handleViewChange.bind(a);a._onClick=a._onClick.bind(a);a._onPointerMove=a._onPointerMove.bind(a);
a._onPointerDown=a._onPointerDown.bind(a);a._onPointerUp=a._onPointerUp.bind(a);return a}y(c,w);c.prototype.initialize=function(){var a=this;this._loadWidgetState();this.formats.forEach(function(b){b.viewModel=a;a._handles.add(b.watch("currentPattern",a._saveWidgetState),b.name)});this._handles.add(this.conversions.on("change",this._handleConversionChange),"conversions");this._handles.add(this.formats.on("change",this._handleFormatChange),"formats");this._handles.add(l.init(this,"view.map",function(b){a.geometryServicePromise=
H.create(a.get("view.map.portalItem"))}),"view-change");r.isSupported()?r.load().then(function(){a.formatterAvailable=!0}).catch(function(b){k.error(new g("coordinate-conversion:projection-load-failed","Failed to load the projection module.",{error:b}));a.formatterAvailable=!1}).then(function(){return a._handles.add(l.init(a,"view",a._handleViewChange),"view-change")}):(this.formatterAvailable=!1,this._handles.add(l.init(this,"view",this._handleViewChange),"view-change"));if(0===this.conversions.length){var b=
this.formats.find(function(a){return"xy"===a.name})||this.formats.getItemAt(0);this.conversions.add(new t({format:b}))}};c.prototype.destroy=function(){this._handles.removeAll();this._cleanUpView(this.view);this.view=null};Object.defineProperty(c.prototype,"currentLocation",{get:function(){return this._get("currentLocation")||null},set:function(a){this._set("currentLocation",a);this._updateConversions()},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"mode",{get:function(){return this._get("mode")||
"live"},set:function(a){switch(a){case "capture":this.currentLocation=null;this._startCaptureMode();this._set("mode",a);break;case "live":this._startLiveMode(),this._set("mode",a)}},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"state",{get:function(){var a=this.get("view");return this.get("view.ready")?"ready":a?"loading":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"waitingForConversions",{get:function(){var a=this._conversionPromise;return a?
!a.isFulfilled():!1},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"_debouncedConvert",{get:function(){return m.debounceDeferred(function(a,b){return f.eachAlways(a.map(function(a){return a.convert(b)}))},this,this.requestDelay)},enumerable:!0,configurable:!0});c.prototype.setLocation=function(a){this.view.graphics.remove(this._locationGraphic);a&&(a=a.clone(),a.hasZ&&(a.z=void 0),this._locationGraphic=new A({geometry:a,symbol:this.get("locationSymbol")}),this.view.graphics.add(this._locationGraphic))};
c.prototype.convert=function(a,b){return m.isValidPoint(b)?f.resolve().then(function(){return a.convert(b)}):f.reject(new g("coordinate-conversion:invalid-point","Invalid point cannot be converted.",{point:b}))};c.prototype.goToLocation=function(a){if(this.get("view.clippingArea")||0<this.get("view.map.basemap.baseLayers.length")){var b=this.get("view.clippingArea")||this.view.map.basemap.baseLayers.getItemAt(0).fullExtent;return b?b.contains(a)?this.callGoTo({target:a}):f.reject(new g("coordinate-conversion:go-to-failed",
"Point outside basemap extent.",{point:a})):this.callGoTo({target:a})}return this.callGoTo({target:a})};c.prototype.pause=function(){this.currentLocation=null;this._handles.remove("view");this.view&&(this.view.cursor="default",this.view.graphics.remove(this._locationGraphic))};c.prototype.previewConversion=function(a,b){void 0===b&&(b=this.currentLocation||L);return this._convertMany([a],b).then(function(b){return a.displayCoordinate})};c.prototype.resume=function(){"capture"===this.mode?this._startCaptureMode():
this._startLiveMode()};c.prototype.reverseConvert=function(a,b,c){void 0===c&&(c=this.get("view.spatialReference")||G.WGS84);return b.reverseConvert(a)};c.prototype.updateConversions=function(a,b){return b&&b.type&&"point"===b.type?this._convertMany(a,b).then(function(a){return a.client.concat(a.server)}):(this._clearConversions(this.conversions),f.reject(new g("coordinate-conversion:invalid-input-point","Point is invalid, conversions cannot be updated.",{point:b})))};c.prototype._cleanUpView=function(a){a&&
(a.graphics.remove(this._locationGraphic),this._handles.remove("view"),a.cursor="default")};c.prototype._clearConversions=function(a){a.forEach(function(a){a.position={location:null,coordinate:null}})};c.prototype._convertMany=function(a,b){var c=this;a=a.reduce(function(a,c){var n=c.format.getConversionStrategy(b);a[n].push(c);return a},{client:[],server:[]});var d=a.server;a=f.all(a.client.map(function(a){return a.format.convert(b).then(function(b){a.position=b;return a}).catch(function(b){a.position=
null})}));var e=function(a){if(!a)return[];c.notifyChange("waitingForConversions");return a.map(function(a,b){b=d[b];if(a.error)return b.position=null,b;b.position=a.value;return b})};this._conversionPromise=0<d.length?this._debouncedConvert(d.map(function(a){return a.format}),b).then(e,e):f.resolve([]);this.waitingForConversions||this.notifyChange("waitingForConversions");return f.all([a,this._conversionPromise]).then(function(a){return{client:a[0],server:a[1]}})};c.prototype._handleConversionChange=
function(a){var b=this;a.added.forEach(function(a){var c=a.format;c.viewModel=b;b.currentLocation&&(b._set("waitingForConversions",!0),b.convert(c,b.currentLocation).then(function(c){a.position=c;b._set("waitingForConversions",!1)}))});this._saveWidgetState()};c.prototype._handleFormatChange=function(a){var b=this;a.added.forEach(function(a){b._handles.add(a.watch("currentPattern",b._saveWidgetState),a.name);a.viewModel=b});a.removed.forEach(function(a){a.viewModel=null;b._handles.remove(a.name)})};
c.prototype._loadWidgetState=function(){if(0===this._instanceNumber)try{var a=JSON.parse(localStorage.getItem(u));a&&(h=a)}catch(b){k.error(new g("coordinate-conversion:invalid-local-storage-json","Could not read from localStorge.",{error:b}))}this._setWidgetState()};c.prototype._startCaptureMode=function(){this._handles.remove("view");this.view&&(this.view.cursor="crosshair",this.currentLocation&&this.setLocation(this.currentLocation),this._handles.add(this.view.on("click",this._onClick),"view"))};
c.prototype._startLiveMode=function(){this._pointerCount=0;this._handles.remove("view");this.view&&(this.view.cursor="default",this.view.graphics.remove(this._locationGraphic),this._handles.add([this.view.on("pointer-down",this._onPointerDown),this.view.on("pointer-up",this._onPointerUp),this.view.on("pointer-move",this._onPointerMove)],"view"))};c.prototype._handleViewChange=function(a,b){b&&b!==a&&this._cleanUpView(b);a&&("capture"===this.mode&&this._startCaptureMode(),this._startLiveMode())};c.prototype._onClick=
function(a){0===a.button&&(a=(a=this.view.toMap(a))&&a.normalize(),this.setLocation(a),this.currentLocation=a)};c.prototype._onPointerDown=function(a){var b=a.pointerType;this._pointerCount++;"touch"!==b&&"pen"!==b||1!==this._pointerCount||(this.currentLocation=(a=this.view.toMap(a))&&a.normalize())};c.prototype._onPointerMove=function(a){if("mouse"===a.pointerType||1===this._pointerCount)this.currentLocation=(a=this.view.toMap(a))&&a.normalize()};c.prototype._onPointerUp=function(a){this._pointerCount--};
c.prototype._setWidgetState=function(){var a=this,b=h[this._instanceNumber];if(b)try{b.formats.forEach(function(c){var d=a.formats.find(function(a){return a.name===c.name});d&&b.locale===a._locale&&c.currentPattern&&(d.currentPattern=c.currentPattern);d&&0<=c.index&&a.conversions.add(new t({format:d}))})}catch(n){k.warn(new g("coordinate-conversion:local-storage-read-error","Could not get widget state from stored JSON.",{error:n})),h[this._instanceNumber]={formats:[],locale:this._locale}}else h[this._instanceNumber]=
{formats:[],locale:this._locale}};c.prototype._saveWidgetState=function(){var a=this._toJSON();h[this._instanceNumber]={formats:a,locale:this._locale};try{localStorage.setItem(u,JSON.stringify(h))}catch(b){k.error(new g("coordinate-conversion:local-storage-write-error","Could not write to localStorage.",{error:b}))}};c.prototype._updateConversions=function(){var a=this.conversions.toArray();return this.updateConversions(a,this.currentLocation)};c.prototype._toJSON=function(){var a=this;return this.formats.filter(function(a){a=
a.name;return"xy"===a||"basemap"===a||m.isSupportedNotation(a)}).map(function(b){return{name:b.name,currentPattern:b.currentPattern,index:a.conversions.findIndex(function(a){return a.format===b})}}).sort(function(a,c){return a.index-c.index}).toArray()};e([d.property()],c.prototype,"conversions",void 0);e([d.property({type:q})],c.prototype,"currentLocation",null);e([d.property()],c.prototype,"formats",void 0);e([d.property()],c.prototype,"mode",null);e([d.property()],c.prototype,"requestDelay",void 0);
e([d.property({dependsOn:["view","view.ready"],readOnly:!0})],c.prototype,"state",null);e([d.property()],c.prototype,"locationSymbol",void 0);e([d.property({readOnly:!0})],c.prototype,"waitingForConversions",null);e([d.property()],c.prototype,"view",void 0);e([d.property({readOnly:!0,dependsOn:["requestDelay"]})],c.prototype,"_debouncedConvert",null);e([d.property()],c.prototype,"reverseConvert",null);return c=e([d.subclass("esri.widgets.CoordinateConversion.CoordinateConversionViewModel")],c)}(d.declared(B,
C,K))});