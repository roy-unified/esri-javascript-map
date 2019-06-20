// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Error ../../../core/Handles ../../../core/Logger ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ./TiledLayerView3D ../../layers/RefreshableLayerView".split(" "),function(u,v,l,e,m,n,p,f,q,c,r,t){var k=p.getLogger("esri.views.3d.layers.WMTSLayerView3d");return function(g){function a(){var b=null!==g&&g.apply(this,arguments)||this;b._handles=
new n;return b}l(a,g);a.prototype.initialize=function(){var b=this,a=q.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeDone").then(function(){var a=function(){return new m("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.")};if(!b.view.basemapTerrain.tilingSchemeLocked)return f.reject(a());var h=b.view.basemapTerrain.tilingScheme,c=b.layer.activeLayer,d;if(c&&c.tileMatrixSet){if(d=c.tileMatrixSet,a=d.tileInfo,h=b._getTileInfoSupportError(a,
d.fullExtent)||b._getTileInfoCompatibilityError(a,h))return f.reject(h)}else{d=b._getCompatibleTileMatrixSet();if(!d)return f.reject(a());c.tileMatrixSetId=d.id}b.tileInfo=d.tileInfo;b.fullExtent=d.fullExtent;b._updateMinMaxDataLevel()});this.addResolvingPromise(a);this.when(function(){return b._initialized()})};a.prototype.destroy=function(){this._handles.removeAll()};a.prototype.refresh=function(){this.emit("data-changed")};a.prototype.canResume=function(){if(!this.inherited(arguments))return!1;
var b=this.layer.activeLayer.tileMatrixSet;return b&&!this._getTileInfoError(b.tileInfo,b.fullExtent)};a.prototype.doRefresh=function(){this.suspended||this.emit("data-changed")};a.prototype._initialized=function(){var b=this;this._handles.add(this.watch("layer.activeLayer.styleId, tileMatrixSet",function(){return b.refresh()}));this._handles.add(this.layer.watch("activeLayer",function(a){var c=a.tileMatrixSet;if(c){if(a=b._getTileInfoError(c.tileInfo,c.fullExtent))k.error("The selected tile matrix set is not compatible with the view",
a),c=null}else(c=b._getCompatibleTileMatrixSet())?a.tileMatrixSetId=c.id:k.error("The layer does not provide a tiling scheme that is compatible with the view");b.notifyChange("suspended");b.canResume()&&b.refresh()}))};a.prototype._getCompatibleTileMatrixSet=function(){var b=this;return this.layer.activeLayer.tileMatrixSets.find(function(a){return!b._getTileInfoError(a.tileInfo,a.fullExtent)})};a.prototype._getTileInfoError=function(a,c){return this._getTileInfoSupportError(a,c)||this._getTileInfoCompatibilityError(a,
this.view.basemapTerrain.tilingScheme)};e([c.property({aliasOf:"layer.fullExtent"})],a.prototype,"fullExtent",void 0);e([c.property()],a.prototype,"layer",void 0);e([c.property({dependsOn:["layer.activeLayer"]})],a.prototype,"suspended",void 0);e([c.property({aliasOf:"layer.tileInfo"})],a.prototype,"tileInfo",void 0);return a=e([c.subclass("esri.views.3d.layers.WMTSLayerView3D")],a)}(c.declared(r,t))});