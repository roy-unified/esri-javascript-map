// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/PooledArray"],function(k,n,m){k=function(){function d(a,b){this.layerView=a;this.lodGlobalDirtyChanged=b}d.prototype.startNodeLoading=function(a,b,c,d,g,l){this._lodGlobalDirty=!1;this._maxLodLevel=l.maxLodLevel;this._nodeIndex=d;this._rootId=g;this._nodeTraversalState=c;this._isNodeVisible=a;this._isGeometryVisible=b;this.lodGlobalDirtyChanged(this._lodGlobalDirty)};d.prototype.shouldLoadNode=function(a){var b=this._nodeTraversalState(a);return b.isChosen?
b.lodLevel===this._maxLodLevel?!0:this._childrenRequireLoading(a):!1};d.prototype.setLodGlobalDirty=function(){this._lodGlobalDirty=!0;this.lodGlobalDirtyChanged(this._lodGlobalDirty)};d.prototype.lodSwapBundleLoaded=function(a){this.setLodGlobalDirty()};Object.defineProperty(d.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._rootId&&(!0===this._lodGlobalDirty||1.1<this.layerView.view.resourceController.usedMemory)},enumerable:!0,configurable:!0});d.prototype.lodGlobalHandling=
function(){if(this.requiresLODGlobalHandling){var a=this._rootId,b=Math.max(0,Math.floor(10*(this.layerView.view.resourceController.usedMemory-1)));h.clear();this._lodGlobalHandlingRecursion(a,b);this.layerView.removeNodeData(h);h.clear();this._lodGlobalDirty=!1;this.lodGlobalDirtyChanged(this._lodGlobalDirty)}};d.prototype._lodGlobalHandlingRecursion=function(a,b){a=this._nodeIndex[a];if(null==a)return!1;var c=this._nodeTraversalState(a),d=c.isChosen&&(!c.nodeHasLOD||c.lodLevel===this._maxLodLevel);
(c=this.layerView.isNodeLoaded(a))&&null!=this.layerView.setPolygonOffset&&this.layerView.setPolygonOffset(a,!d);if(d&&c)return this._removeChildrenRecursive(a),!0;var g=!1;if(null!=a.children&&0!==a.children.length)for(var g=!0,l=0,f=a.children;l<f.length;l++){var e=f[l],k=this._nodeIndex[e.id];if(k?this._isGeometryVisible(k):this._isNodeVisible(e))e=this._lodGlobalHandlingRecursion(e.id,b),g=g&&e}c&&!d&&(g||h.length<b)&&(h.push(a),c=!1);b=!a.featureData||0===a.featureData.length;return g||c||b};
d.prototype._removeChildrenRecursive=function(a){if(null!=a.children){var b=0;for(a=a.children;b<a.length;b++){var c=this._nodeIndex[a[b].id];null!=c&&(this._removeChildrenRecursive(c),h.push(c))}}};d.prototype.childrenEmpty=function(a){if(null==a.children)return!0;var b=0;for(a=a.children;b<a.length;b++){var c=a[b];if(this._isNodeVisible(c)&&(c=this._nodeIndex[c.id],null!=c&&(this.layerView.isNodeLoaded(c)||!this.childrenEmpty(c))))return!1}return!0};d.prototype._childrenRequireLoading=function(a){var b=
this,c={finalInvisible:!0},d=function(a,c){var f=b._nodeTraversalState(a);f.isChosen&&(0===f.lodLevel||f.lodLevel===b._maxLodLevel)&&b._isGeometryVisible(a)&&(c.finalInvisible=!1);if(null==a.children)return!0;f=0;for(a=a.children;f<a.length;f++){var e=a[f];if(b._isNodeVisible(e)&&(e=b._nodeIndex[e.id],null!=e&&(b.layerView.isNodeLoaded(e)||!d(e,c))))return!1}return!0};return d(a,c)?!c.finalInvisible:!1};return d}();var h=new m;return k});