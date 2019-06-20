// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/DynamicLayer":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../request ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ./Layer".split(" "),function(n,u,l,r,c,m,e,p,q){return function(k){function b(){return null!==k&&k.apply(this,arguments)||this}l(b,k);b.prototype.getImageUrl=function(a,c,b,e){throw new m("dynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented");};b.prototype.fetchImage=
function(a,b,v,f){a=this.getImageUrl(a,b,v,f);var t={responseType:"image"};f&&f.timestamp&&(t.query={_ts:f.timestamp});var g;"string"===typeof a?(g=a,f=c(a,t)):f=a.then(function(a){g=a;return c(g,t)});return f.then(function(a){return a.data}).catch(function(a){return a&&"cancel"===a.dojoType?e.reject(a):g?e.reject(new m("dynamiclayer:image-fetch-error","Unable to load image: "+g,{error:a})):e.reject(new m("dynamiclayer:getImageUrl-error","Unable to create image url",{error:a}))})};b.prototype.importLayerViewModule=
function(a){switch(a.type){case "2d":return e.create(function(a){return n(["../views/2d/layers/MapImageLayerView2D"],a)});case "3d":return e.create(function(a){return n(["../views/3d/layers/MapImageLayerView3D"],a)})}};return b=r([p.subclass("esri.layers.DynamicLayer")],b)}(p.declared(q))})},"esri/layers/support/ExportImageParameters":function(){define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/accessorSupport/decorators ./sublayerUtils".split(" "),
function(n,u,l,r,c,m,e,p){Object.defineProperty(u,"__esModule",{value:!0});var q={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};n=function(k){function b(){var a=null!==k&&k.apply(this,arguments)||this;a.scale=0;return a}r(b,k);Object.defineProperty(b.prototype,"dynamicLayers",{get:function(){if(!this.hasDynamicLayers)return null;
var a=this.visibleSublayers.map(function(a){return a.toExportImageJSON()});return a.length?JSON.stringify(a):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasDynamicLayers",{get:function(){return p.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layer",{set:function(a){var b=this;this._get("layer")!==a&&(this._set("layer",a),this._layerHandles&&(this._layerHandles.forEach(function(a){return a.remove()}),
this._layerHandles.length=0),a&&(this._layerHandles=[a.allSublayers.on("change",function(){return b.notifyChange("visibleSublayers")}),a.on("sublayer-update",function(a){return b.notifyChange(q[a.propertyName])})]))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layers",{get:function(){var a=this.visibleSublayers;return a?a.length?"show:"+a.map(function(a){return a.id}).join(","):"show:-1":null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layerDefs",{get:function(){var a=
this.visibleSublayers.filter(function(a){return null!=a.definitionExpression});return a.length?JSON.stringify(a.reduce(function(a,b){a[b.id]=b.definitionExpression;return a},{})):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(a){this._set("version",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visibleSublayers",{get:function(){var a=this,b=this.layer.sublayers,c=[],e=function(b){var g=
a.scale,k=0===b.minScale||g<=b.minScale,f=0===b.maxScale||g>=b.maxScale;b.visible&&(0===g||k&&f)&&(b.sublayers?b.sublayers.forEach(e):c.unshift(b))};b&&b.forEach(e);return c},enumerable:!0,configurable:!0});b.prototype.toJSON=function(){var a=this.layer,a={dpi:a.dpi,format:a.imageFormat,transparent:a.imageTransparency,gdbVersion:a.gdbVersion||null};this.hasDynamicLayers&&this.dynamicLayers?a.dynamicLayers=this.dynamicLayers:a=l({},a,{layers:this.layers,layerDefs:this.layerDefs});return a};c([e.property({readOnly:!0,
dependsOn:["hasDynamicLayers","visibleSublayers"]})],b.prototype,"dynamicLayers",null);c([e.property({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],b.prototype,"hasDynamicLayers",null);c([e.property()],b.prototype,"layer",null);c([e.property({readOnly:!0,dependsOn:["visibleSublayers"]})],b.prototype,"layers",null);c([e.property({readOnly:!0,dependsOn:["visibleSublayers"]})],b.prototype,"layerDefs",null);c([e.property({type:Number})],b.prototype,"scale",
void 0);c([e.property({dependsOn:"layers layerDefs dynamicLayers layer.dpi layer.imageFormat layer.imageTransparency layer.gdbVersion".split(" ")})],b.prototype,"version",null);c([e.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],b.prototype,"visibleSublayers",null);return b=c([e.subclass("esri.layers.mixins.ExportImageParameters")],b)}(e.declared(m));u.ExportImageParameters=n})},"*noref":1}});
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper dojo/io-query ../config ../request ../core/Error ../core/promiseUtils ../core/accessorSupport/decorators ../geometry/Extent ../geometry/support/scaleUtils ./DynamicLayer ./mixins/ArcGISMapService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/SublayersOwner ./support/commonProperties ./support/ExportImageParameters".split(" "),function(n,
u,l,r,c,m,e,p,q,k,b,a,t,v,f,w,g,x,y,z,A,B,C){return function(f){function d(a,b){a=f.call(this)||this;a.alwaysRefetch=!1;a.dpi=96;a.gdbVersion=null;a.imageFormat="png24";a.imageMaxHeight=2048;a.imageMaxWidth=2048;a.imageTransparency=!0;a.labelsVisible=!1;a.operationalLayerType="ArcGISMapServiceLayer";a.sublayers=null;a.type="map-image";a.url=null;return a}r(d,f);d.prototype.normalizeCtorArgs=function(a,b){return"string"===typeof a?l({url:a},b):a};d.prototype.load=function(){var a=this;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]}).then(function(){return a._fetchService()}));
return this.when()};d.prototype.readImageFormat=function(a,b){return(a=b.supportedImageFormatTypes)&&-1<a.indexOf("PNG32")?"png32":"png24"};d.prototype.createExportImageParameters=function(a,b,c,d){var e=d&&d.pixelRatio||1;a&&10<=this.version&&(a=a.clone().shiftCentralMeridian());var h=new C.ExportImageParameters({layer:this,scale:v.getScale({extent:a,width:b})*e}),f=h.toJSON();h.layer=null;h.destroy();d=!d||!d.rotation||10.3>this.version?{}:{rotation:-d.rotation};h=a&&a.spatialReference;h=h.wkid||
JSON.stringify(h.toJSON());f.dpi*=e;return l({bbox:a&&a.xmin+","+a.ymin+","+a.xmax+","+a.ymax,bboxSR:h,imageSR:h,size:b+","+c},f,d)};d.prototype.getImageUrl=function(a,c,d,f){var h=this,g=this.parsedUrl.path+"/export";a=l({},this.parsedUrl.query,this.createExportImageParameters(a,c,d,f),{f:"image",token:this.token,_ts:this.alwaysRefetch?(new Date).getTime():null});if(null!=a.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return b.reject(new k("mapimagelayer:dynamiclayer-not-supported",
"service "+this.url+" doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.",{query:a}));c=g+"?"+e.objectToQuery(a);return c.length>p.request.maxUrlLength?(a.f="json",q(g,{query:a,responseType:"json"}).then(function(a){if("imageData"in a.data)return a=a.data,"data:"+(a.contentType||"image")+";base64,"+a.imageData;a=a.data.href;return h.token?a+(-1===a.indexOf("?")?"?token\x3d"+h.token:"\x26token\x3d"+h.token):a})):c};d.prototype._fetchService=
function(){var a=this;return b.resolve().then(function(){return a.resourceInfo?{ssl:!1,data:a.resourceInfo}:q(a.parsedUrl.path,{query:l({f:"json"},a.parsedUrl.query),responseType:"json"})}).then(function(b){b.ssl&&(a.url=a.url.replace(/^http:/i,"https:"));a.read(b.data,{origin:"service",url:a.parsedUrl})})};c([a.property()],d.prototype,"alwaysRefetch",void 0);c([a.property()],d.prototype,"dpi",void 0);c([a.property()],d.prototype,"gdbVersion",void 0);c([a.property()],d.prototype,"imageFormat",void 0);
c([a.reader("imageFormat",["supportedImageFormatTypes"])],d.prototype,"readImageFormat",null);c([a.property({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],d.prototype,"imageMaxHeight",void 0);c([a.property({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],d.prototype,"imageMaxWidth",void 0);c([a.property()],d.prototype,"imageTransparency",void 0);c([a.property({json:{read:!1,write:!1}})],d.prototype,"labelsVisible",void 0);c([a.property({type:["ArcGISMapServiceLayer"]})],
d.prototype,"operationalLayerType",void 0);c([a.property()],d.prototype,"resourceInfo",void 0);c([a.property()],d.prototype,"sublayers",void 0);c([a.property({json:{read:!1},readOnly:!0,value:"map-image"})],d.prototype,"type",void 0);c([a.property(B.url)],d.prototype,"url",void 0);c([m(0,a.cast(t))],d.prototype,"getImageUrl",null);return d=c([a.subclass("esri.layers.MapImageLayer")],d)}(a.declared(f,w,A.default,g,x,y,z))});