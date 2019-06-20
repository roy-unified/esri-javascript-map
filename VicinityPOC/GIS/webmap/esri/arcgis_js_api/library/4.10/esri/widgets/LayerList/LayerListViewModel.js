// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Collection ../../core/Evented ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators ./ListItem ./support/layerListUtils".split(" "),function(u,v,m,f,n,p,q,r,g,d,h,t){var k=p.ofType(h);return function(l){function b(a){a=l.call(this)||this;a._handles=new r;a.listItemCreatedFunction=null;a.operationalItems=new k;a.view=null;return a}m(b,l);b.prototype.initialize=
function(){var a=this;this._handles.add(g.init(this,"view",function(){return a._viewHandles()}),"view")};b.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null;this.operationalItems.removeAll()};Object.defineProperty(b.prototype,"state",{get:function(){var a=this.get("view");return this.get("view.ready")?"ready":a?"loading":"disabled"},enumerable:!0,configurable:!0});b.prototype.triggerAction=function(a,e){a&&this.emit("trigger-action",{action:a,item:e})};b.prototype._createLayerViewHandles=
function(a){var e=this,b=this._handles;b.remove("layer-views");this._compileList();a&&b.add(a.on("change",function(){return e._compileList()}),"layer-views")};b.prototype._createMapLayerHandles=function(a){var b=this,c=this._handles;c.remove("map-layers");this._compileList();a&&c.add(a.on("change",function(){return b._compileList()}),"map-layers")};b.prototype._watchItemProperties=function(a){var b=this;this._handles.add([a.children.on("change",function(){b._modifyListItemChildren(a.children)})],
"children-change-"+a.uid)};b.prototype._modifyListItemChildren=function(a){var b=this;a.forEach(function(a){return b._modifyListItem(a)})};b.prototype._modifyListItem=function(a){"function"===typeof this.listItemCreatedFunction&&this.listItemCreatedFunction.call(null,{item:a});this._modifyListItemChildren(a.children)};b.prototype._createListItem=function(a){a=new h({layer:a,view:this.view});this._watchItemProperties(a);return a};b.prototype._removeAllItems=function(){var a=this._handles,b=this.operationalItems;
b.forEach(function(b){a.remove("children-change-"+b.uid)});b.removeAll()};b.prototype._getViewableLayers=function(a){if(a)return a.filter(function(a){return"hide"!==t.findLayerListMode(a)})};b.prototype._watchLayersListMode=function(a){var b=this,c=this._handles;c.remove("layer-list-mode");a&&a.forEach(function(a){c.add(g.watch(a,"listMode",function(){return b._compileList()}),"layer-list-mode")})};b.prototype._compileList=function(){var a=this.get("view.map.layers");this._watchLayersListMode(a);
(a=this._getViewableLayers(a))&&a.length?(this._createNewItems(a),this._modifyOrRemoveItems(a),this._sortItems(a)):this._removeAllItems()};b.prototype._createNewItems=function(a){var b=this,c=this.operationalItems;a.forEach(function(a){c.find(function(b){return b.layer===a})||c.add(b._createListItem(a))})};b.prototype._modifyOrRemoveItems=function(a){var b=this,c=this._handles,d=this.operationalItems;d.forEach(function(e){e&&(a.find(function(a){return e.layer===a})?b._modifyListItem(e):(c.remove("children-change-"+
e.uid),d.remove(e)))})};b.prototype._sortItems=function(a){this.operationalItems.sort(function(b,c){b=a.indexOf(b.layer);c=a.indexOf(c.layer);return b>c?-1:b<c?1:0})};b.prototype._viewHandles=function(){var a=this,b=this._handles,c=this.view;b.remove(["map-layers","layer-views","view-layers"]);this._compileList();c&&b.add([g.init(this,"view.map.layers",function(b){return a._createMapLayerHandles(b)}),g.init(this,"view.layerViews",function(b){return a._createLayerViewHandles(b)}),g.init(this,"listItemCreatedFunction",
function(){return a._compileList()})],"view-layers")};f([d.property()],b.prototype,"listItemCreatedFunction",void 0);f([d.property({type:k})],b.prototype,"operationalItems",void 0);f([d.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);f([d.property()],b.prototype,"view",void 0);f([d.property()],b.prototype,"triggerAction",null);return b=f([d.subclass("esri.widgets.LayerList.LayerListViewModel")],b)}(d.declared(n,q))});