// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/assignHelper @dojo/framework/shim/array @dojo/framework/shim/Map ../../../../../geometry ../../../../../request ../../../../../core/Error ../../../../../core/Logger ../../../../../core/promiseUtils ../../../../../core/throttle ../../../../../core/accessorSupport/decorators ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/data/FeatureStore ../../../../../layers/graphics/data/QueryEngine ../../../../../tasks/operations/query ../../../../../tasks/support/Query ./BaseController ./support/DispatchQueue".split(" "),
function(r,t,y,f,z,A,u,B,C,h,D,k,E,g,v,F,G,H,m,I,J){function w(g){for(var b=0,a=0;a<g.length;a++)b=(b<<5)-b+g.charCodeAt(a),b|=0;return b}Object.defineProperty(t,"__esModule",{value:!0});var n=D.getLogger("esri.views.2d.layers.features.controllers.StreamController");r=function(p){function b(){var a=null!==p&&p.apply(this,arguments)||this;a.errorString=null;a._started=!1;a._idCounter=0;a._tileDispatchMap=new u.default;a._updateIntervalId=0;a._reconnectWebSocketT=E.throttle(a._reconnectWebSocket,5E3,
a);a._featureIds=[];return a}y(b,p);b.prototype.initialize=function(){var a=this;this.handles.add(this.watch("processor",this._switchProcessor.bind(this)));["connectionStatus","errorString"].forEach(function(c){a.watch(c,function(d){return a.remoteClient.invoke("setProperty",{propertyName:c,value:d})})});this._updateIntervalId=setInterval(function(){return a._checkForUpdates()},64)};b.prototype.destroy=function(){clearInterval(this._updateIntervalId);this._destroyWebSocket();this._tileDispatchMap.forEach(function(a){return a.destroy()});
this.queryEngine&&(this.queryEngine.destroy(),this._set("queryEngine",null));this._tempQueryEngine&&this._tempQueryEngine.destroy()};Object.defineProperty(b.prototype,"updating",{get:function(){return!this._started||this._tempQueryEngine&&!!this._tempQueryEngine.spatialIndex.numFeatures||this._anyUpdatesQueued()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"connectionStatus",{get:function(){if(!this._websocket)return"disconnected";switch(this._websocket.readyState){case 0:case 1:return"connected";
case 2:case 3:return"disconnected"}},enumerable:!0,configurable:!0});b.prototype.onEdits=function(a){};b.prototype.redraw=function(){};b.prototype.refresh=function(){};b.prototype.setViewState=function(a){};b.prototype.queryFeatures=function(a){return this.queryEngine.executeQuery(m.fromJSON(a))};b.prototype.queryFeatureCount=function(a){return this.queryEngine.executeQueryForCount(m.fromJSON(a))};b.prototype.queryObjectIds=function(a){return this.queryEngine.executeQueryForIds(m.fromJSON(a))};b.prototype.queryExtent=
function(a){return this.queryEngine.executeQueryForExtent(m.fromJSON(a))};b.prototype.queryLatestObservations=function(a){return this.queryEngine.executeQueryForLatestObservations(m.fromJSON(a))};b.prototype.onTileUpdate=function(a){var c=this,d=a.added;this._started&&(a.removed.forEach(function(a){return c._handleTileRemove(a)}),d.forEach(function(a){return c._handleTileAdd(a)}))};b.prototype.enableEvent=function(a){"data-received"===a.name&&(this._shouldPushDataReceived=a.value)};b.prototype._start=
function(){var a=this;this._started||this._queryBuddies().then(function(){a._startWebSocket();a.tileStore.tiles.forEach(function(c){return a._handleTileAdd(c)});a._started=!0;a._updateActiveTiles(a.queryEngine)})};b.prototype._getService=function(){var a=z({},this.service.content,{f:"json"});return C(this.service.source,{query:a,responseType:"json"}).then(function(a){return a.data})};b.prototype._startWebSocket=function(){var a=this;this._getService().then(function(c){return a._createWebSocket(c)}).then(function(c){return a._setFilter(c)}).catch(function(a){return n.error(h("stream-socket",
"Encountered an error while creating listening stream",a))})};b.prototype._destroyWebSocket=function(){this._websocket&&(this._websocket.onmessage=null,this._websocket.onerror=null,this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.close(),this.notifyChange("connectionStatus"))};b.prototype._createWebSocket=function(a){var c=this;return k.create(function(d){for(var b=a.streamUrls.filter(function(a){return"ws"===a.transport})[0],K=b.token,g=null,x=null,q=0,b=b.urls;q<b.length;q++){var f=
b[q];-1!==f.indexOf("wss")?g=f:x=f}var l=new WebSocket((g||x)+"/subscribe?token\x3d"+K+"\x26outSR\x3d"+c.spatialReference.wkid);l.onopen=function(){c.notifyChange("connectionStatus");d(l)};l.onmessage=c._handleWebSocketMessage.bind(c);l.onclose=c._handleWebSocketClose.bind(c);c._destroyWebSocket();c._websocket=l})};b.prototype._setFilter=function(a){var c=this,b={},e=this.processor.queryInfo.outFields;this.configuration.filter.geometry&&(b.geometry=JSON.stringify(this.configuration.filter.geometry));
this.configuration.filter.where&&(b.where=this.configuration.filter.where);.75<=e.length/this.service.fields.length&&(b.outFields=e.join(","));b.geometry||b.where||b.outFields||k.resolve();return k.create(function(d,e){var g=a.onmessage;a.onmessage=function(b){b=JSON.parse(b.data);b.filter&&(a.onmessage=g,b.error?(c.set("errorString","Could not set filter - "+b.error),e(h("stream-socket-filter",c.errorString,{activeFilter:b.filter}))):d())};a.send(JSON.stringify({filter:b}))})};b.prototype._reconnectWebSocket=
function(a){this.set("errorString","Lost websocket connection - "+a+", attempting to reconnect");n.error(h("stream-socket",this.errorString));this._startWebSocket()};b.prototype._handleWebSocketClose=function(a){a=a.code;this.notifyChange("connectionStatus");if(1001===a||4E3<=a){var c=this._getErrorMessage(a);this.set("errorString","Encountered a service error "+a+" - "+c+", terminating websocket connection");n.error(h("stream-socket",this.errorString))}else 1E3!==a&&this._reconnectWebSocketT(a)};
b.prototype._getErrorMessage=function(a){switch(a){case 1001:return"Service is going away";case 4400:return"Invalid URL parameters. Check filter properties.";case 4401:case 4403:return"Not authorized";case 4404:return"Service not found";default:return"Encountered error code "+a}};b.prototype._handleWebSocketMessage=function(a){try{var c=JSON.parse(a.data);this._shouldPushDataReceived&&this.remoteClient.invoke("emitEvent",{name:"data-received",event:c});this._normalizeFeatureId(c);this._enrichFeature(c);
if(c.geometry||c.centroid){var b=v.convertFromFeature(c,this.service.geometryType,!1,!1,this.service.objectIdField);this._featureIds.push(b.attributes[this.service.objectIdField]);this._tempQueryEngine.spatialIndex.add(b)}else n.error(h("stream-socket","Found malformed feature"))}catch(e){n.error(h("stream-socket","Encountered an error when parsing socket message",e))}};b.prototype._handleTileAdd=function(a){if(this._tileDispatchMap.has(a.id)){var c=this._tileDispatchMap.get(a.id);c.up()}else c=new J.default,
this._tileDispatchMap.set(a.id,c);this._queryTileFeatures(a,!0,this.queryEngine)};b.prototype._handleTileRemove=function(a){this._tileDispatchMap.get(a.id).destroy();this._tileDispatchMap.delete(a.id)};b.prototype._checkForUpdates=function(){if(this._started){var a=this._getFeaturesToAdd(),c=this._getFeaturesToRemove(),b=[];a.spatialIndex.forEachFeature(function(a){return b.push(a)});c.spatialIndex.addMany(b);this.processor.supportsTileUpdates?(this._updateActiveTiles(a,c),a.spatialIndex.transferAll(this.queryEngine.spatialIndex)):
(a.spatialIndex.transferAll(this.queryEngine.spatialIndex),this._repushActiveTiles(a,c));c.destroy()}};b.prototype._anyUpdatesQueued=function(){return A.from(this._tileDispatchMap).some(function(a){return a[1].hasAction()})};b.prototype._updateActiveTiles=function(a,c){for(var b=0,e=this.tileStore.tiles;b<e.length;b++)this._queryTileFeatures(e[b],!1,a,c)};b.prototype._repushActiveTiles=function(a,c){a=0;for(c=this.tileStore.tiles;a<c.length;a++)this._queryTileFeatures(c[a],!0,this.queryEngine)};b.prototype._getFeaturesToAdd=
function(){return this._tempQueryEngine};b.prototype._getFeaturesToRemove=function(){var a=this.configuration.purgeOptions,c=a.displayCount,a=a.age,b=this._createQueryEngine();this._purgeByDisplayCount(c,b);this._purgeByAge(a,b);return b};b.prototype._purgeByDisplayCount=function(a,b){if(null!=a){var c=this.queryEngine.spatialIndex.numFeatures;c>a&&(a=this._featureIds.splice(0,c-a),this.queryEngine.spatialIndex.transferIds(b.spatialIndex,a))}};b.prototype._purgeByAge=function(a,b){if(null==a)return k.resolve();
a*=6E4;var c=Date.now()-a,e=this.service.timeInfo.startTimeField;this.queryEngine.spatialIndex.transferIf(b.spatialIndex,function(a){return a.attributes[e]<c})};b.prototype._queryTileFeatures=function(a,b,d,e){var c=this,g={hasZ:!1,hasM:!1,transform:{originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]}},f=this.processor.queryInfo,f={returnCentroid:f.returnCentroid,returnGeometry:f.returnGeometry,pixelBuffer:f.pixelBuffer},h=this._tileDispatchMap.get(a.id),
k=(d=d&&d.executeTileQuery(a,f))&&d.features,l=e&&e.executeTileQueryForIds(a,f);h.enqueue(function(){return c.processor.onTileData(a,{addOrUpdate:k,remove:l,clear:b,transformParams:g})})};b.prototype._queryBuddies=function(){var a=this,b=this.service.buddyLayers,d=b.keepLatestArchive,b=this._queryBuddy(b.relatedFeatures),d=this._queryBuddy(d);return k.all([b,d]).then(function(b){return a._addBuddyFeatures(b[0],b[1])})};b.prototype._queryBuddy=function(a){if(!a)return k.resolve();var b=this._createQuery(this.processor.queryInfo);
return H.executeQuery(a.source,b).then(function(a){return a.data})};b.prototype._addBuddyFeatures=function(a,b){a&&this._setEnrichmentData(a);b&&this._addFeatures(b)};b.prototype._setEnrichmentData=function(a){a=a.features;for(var b=new u.default,d=this.service.buddyLayers.relatedFeatures.joinField,e=0;e<a.length;e++){var f=a[e];d===this.service.objectIdField&&"string"===typeof d&&(f.attributes[d]=w(f.attributes[d]));b.set(f.attributes[d],f)}this._enrichmentData=b};b.prototype._enrichFeature=function(a){if(!this._enrichmentData)return a;
var b=a.attributes[this.service.buddyLayers.relatedFeatures.joinField];if(this._enrichmentData.has(b)){var d=this._enrichmentData.get(b),b=d.attributes,d=d.geometry,e;for(e in b)a.attributes[e]=b[e];d&&(a.geometry=d)}return a};b.prototype._normalizeFeatureId=function(a){var b;b="__OBJECTID"===this.service.objectIdField?this._idCounter++:"string"===typeof a.attributes[this.service.objectIdField]?w(a.attributes[this.service.objectIdField]):a.attributes[this.service.objectIdField];a.attributes[this.service.objectIdField]=
b};b.prototype._addFeatures=function(a){a.objectIdFieldName=this.service.objectIdField;for(var b=0,d=a.features;b<d.length;b++){var e=d[b];this._normalizeFeatureId(e);this._enrichFeature(e)}a=v.convertFromFeatureSet(a).features;this.queryEngine.spatialIndex.addMany(a)};b.prototype._createQuery=function(a){var b=new m,d=a.historicMoment,e=a.outFields;b.historicMoment=null!=d?new Date(d):null;b.outFields=.75<=e.length/this.service.fields.length?["*"]:e;b.returnExceededLimitFeatures=!0;b.returnGeometry=
!0;b.gdbVersion=a.gdbVersion;b.returnCentroid=a.returnCentroid;b.orderByFields=a.orderByFields;b.outSpatialReference=this.spatialReference;b.where=this.configuration.filter.where||"1\x3d1";this.configuration.filter.geometry&&(b.geometry=B.Extent.fromJSON(this.configuration.filter.geometry));return b};b.prototype._createQueryEngine=function(){var a=this.processor.queryInfo,b=a.gdbVersion,d=a.historicMoment;return new G.default({definitionExpression:a.definitionExpression,fields:this.service.fields,
geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!0,gdbVersion:b,historicMoment:null!=d&&new Date(d),spatialIndex:new F.default({geometryType:this.service.geometryType,hasM:!1,hasZ:!1}),timeInfo:this.service.timeInfo})};b.prototype._resetTempStore=function(){this._tempQueryEngine&&this._tempQueryEngine.destroy();this._tempQueryEngine=this._createQueryEngine()};b.prototype._switchProcessor=
function(a,b){this.queryEngine&&this.queryEngine.destroy();this._set("queryEngine",this._createQueryEngine());this._resetTempStore();this._start();this.notifyChange("updating")};f([g.property()],b.prototype,"service",void 0);f([g.property()],b.prototype,"configuration",void 0);f([g.property({readOnly:!0})],b.prototype,"queryEngine",void 0);f([g.property()],b.prototype,"updating",null);f([g.property()],b.prototype,"connectionStatus",null);f([g.property()],b.prototype,"errorString",void 0);return b=
f([g.subclass()],b)}(g.declared(I.default));t.default=r});