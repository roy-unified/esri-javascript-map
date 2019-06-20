// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/clock ../../../../../core/Collection ../../../../../core/compilerUtils ../../../../../core/Handles ../../../../../core/Logger ../../../../../core/scheduling ../../../../../core/watchUtils ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/gl-matrix ../../../../../layers/Layer ../../../../../layers/buildingSublayers/BuildingComponentSublayer ./sliceToolConfig ./sliceToolUtils ../../../support/geometryUtils ../../../support/stack ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Layer ../../../webgl-engine/lib/Object3D ../../../webgl-engine/materials/ColorMaterial ../../../webgl-engine/materials/NativeLineMaterial ../../../webgl-engine/materials/RibbonLineMaterial ../../../webgl-engine/materials/SlicePlaneMaterial ../../../webgl-engine/parts/Model ../../../../interactive/InteractiveToolBase ../../../../interactive/interactiveToolUtils".split(" "),
function(C,ra,U,u,V,W,n,M,X,Y,ka,q,d,N,E,e,g,m,r,x,y,K,L,D,Z,ea,la,z,ma,A){function I(d){return"mouse"!==d.pointerType||0===d.button}var na=W.ofType({key:function(d){return d instanceof N?"layer":d instanceof E?"building-component-sublayer":null},base:null,typeMap:{layer:N,"building-component-sublayer":E},castable:!1}),oa=X.getLogger("esri.views.3d.interactive.analysisTools.slice.SliceTool");C=function(C){function c(a,b){void 0===b&&(b=V.default);a=C.call(this,a)||this;a._clock=b;a.cursor=null;a.layersMode=
"none";a.excludedLayers=new na;a.disableEngineLayers=!1;a._handles=new M;a._viewHandles=new M;a._frameTask=null;a._ignoreClickEventId=null;a._prevPointerMoveTimeout=null;a._activePointerId=null;a._editingEnabled=!0;a.inputState=null;a._startPlane=m.boundedPlane.create();a._previewPlane=null;a._activeKeyModifiers={};a._lastCursorPosition={x:0,y:0};a._baseOpacity=1;a._hoveredResizeHandleIdx=null;a._isShiftRestartHandleHovered=!1;a._isRotateHeadingHandleHovered=!1;a._resizeHandles=[{transform:d.mat4f64.create(),
position:d.vec3f64.create(),scale:1,direction:[1,0],visible:!1},{transform:d.mat4f64.create(),position:d.vec3f64.create(),scale:1,direction:[1,1],visible:!1},{transform:d.mat4f64.create(),position:d.vec3f64.create(),scale:1,direction:[0,1],visible:!1},{transform:d.mat4f64.create(),position:d.vec3f64.create(),scale:1,direction:[-1,1],visible:!1},{transform:d.mat4f64.create(),position:d.vec3f64.create(),scale:1,direction:[-1,0],visible:!1},{transform:d.mat4f64.create(),position:d.vec3f64.create(),scale:1,
direction:[-1,-1],visible:!1},{transform:d.mat4f64.create(),position:d.vec3f64.create(),scale:1,direction:[0,-1],visible:!1},{transform:d.mat4f64.create(),position:d.vec3f64.create(),scale:1,direction:[1,-1],visible:!1}];a._shiftRestartHandle={transform:d.mat4f64.create(),position:d.vec3f64.create(),visible:!1,forceHide:!1,floating:!1};a._rotateHeadingHandle={transform:d.mat4f64.create(),position:d.vec3f64.create(),visible:!1,forceHide:!1};a._areEngineLayersCreated=!1;a._outlineResources=null;a._gridResources=
null;a._shiftRestartResources=null;a._resizeHandleResources=null;a._rotateHeadingHandleResources=null;return a}U(c,C);F=c;c.prototype.initialize=function(){var a=this;this._handles.add([ka.init(this,"state",function(){"slicing"===a.state?A.setActive(a,!0):"sliced"===a.state&&A.setActive(a,!1)}),this.excludedLayers.on("before-add",function(b){var h=b.item;null==h?b.preventDefault():h instanceof E||!g.isAlwaysDrapedLayer(h)?a.excludedLayers.includes(h)&&b.preventDefault():(oa.error("excludedLayers",
"Layer '"+h.title+", id:"+h.id+"' of type '"+h.type+"' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead."),b.preventDefault())})])};c.prototype.destroy=function(){this.detach();this._handles.destroy();this._handles=null;this._viewHandles.destroy();this._viewHandles=null;this._removeFrameTask();this._clearPointerMoveTimeout()};Object.defineProperty(c.prototype,"state",{get:function(){var a=!!this.plane,b=!!this.inputState;if(a){if(a&&b)return"slicing";if(a&&!b)return"sliced"}return"ready"},
enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"isSupported",{get:function(){return"3d"===this.get("view.type")},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"plane",{set:function(a){this._set("plane",a);this.visible&&(this._updateLayerViews(),this.view.slicePlane=a,this._updateEngineLayers(),a&&this._unsetOtherToolPlanes())},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"excludeGroundSurface",{set:function(a){this._set("excludeGroundSurface",
a);this._updateLayerViews()},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"editable",{set:function(a){this._set("editable",a);this._updateEngineLayers()},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"_internallyEditable",{get:function(){return this.editable&&this._editingEnabled&&"none"===this.layersMode},enumerable:!0,configurable:!0});c.prototype.show=function(){var a=this,b=this.view;this._viewHandles.add([b.on("pointer-down",function(b){a._shouldHandlePointerEvent(b)&&
(a._onPointerDown(b)&&b.stopPropagation(),a._activePointerId=b.pointerId)}),b.on("pointer-drag",function(b){a._shouldHandlePointerEvent(b)&&a._onPointerDrag(b)&&b.stopPropagation()}),b.on("pointer-move",function(b){a._onPointerMove(b)&&b.stopPropagation();a._updateMouseCursor()}),b.on("pointer-up",function(b){a._shouldHandlePointerEvent(b)&&(a._onPointerUp(b)&&b.stopPropagation(),a._activePointerId=null)}),b.on("click",function(b){I(b)&&a._onClick(b)&&b.stopPropagation()}),b.on("double-click",function(b){I(b)&&
a._onDoubleClick(b)&&b.stopPropagation()}),b.on("drag",function(b){a.inputState&&b.stopPropagation()}),b.on("key-down",function(b){a._onKeyDown(b)&&b.stopPropagation()}),b.on("key-up",function(b){a._onKeyUp(b)&&b.stopPropagation()}),b.allLayerViews.on("change",function(){a._updateLayerViews()}),this.excludedLayers.on("change",function(b){a._updateLayerViews()})],"general");this._createEngineLayers();this._updateEngineLayers();this._updateMouseCursor();this._updateLayerViews();this.view.slicePlane=
this.plane;this._viewHandles.has("camera")||this.disableEngineLayers||this._viewHandles.add(this.view.state.watch("camera",function(){a._updateEngineLayers();a._updateMouseCursor()}),"camera")};c.prototype.hide=function(){this._removeEngineLayers();this._updateMouseCursor();this._updateLayerViews();this.view.slicePlane=null;this._viewHandles.removeAll();this._clearPointerMoveTimeout()};c.prototype.reset=function(){this.plane=null;this._set("layersMode","none")};c.prototype.newSlice=function(){this.reset();
this._unsetOtherToolPlanes();A.setActive(this,!0)};c.prototype.clearSlice=function(){this.reset()};c.prototype.enterExcludeLayerMode=function(){this._set("layersMode","exclude");A.setActive(this,!0)};c.prototype.exitExcludeLayerMode=function(){this._set("layersMode","none");A.setActive(this,!1)};c.prototype.deactivate=function(){this._updateMouseCursor(!1);this._set("layersMode","none");"sliced"!==this.state&&(this.plane=null)};c.prototype.disableEditing=function(){this._editingEnabled=!1;this._updateEngineLayers()};
c.prototype.enableEditing=function(){this._editingEnabled=!0;this._updateEngineLayers()};c.prototype._createEngineLayers=function(){var a=this;if(!this._areEngineLayersCreated&&!this.disableEngineLayers){this._areEngineLayersCreated=!0;var b=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]],c=new x(y.createPolylineGeometry(b),"slice-outline"),t=e.PLANE_OUTLINE_COLOR.slice(),p=new ea({color:t,writeDepth:!1,width:e.PLANE_OUTLINE_WIDTH},"slice-outline");p.renderOccluded=!0;var f=new K("slice-outline",
{isPickable:!1},"slice-outline"),k=new L({idHint:"slice-outline"}),l=function(b){k.removeAllGeometries();b&&(t[3]=e.PLANE_OUTLINE_COLOR[3]*a._baseOpacity,p.setParameterValues({color:t}),k.addGeometry(c,p,b))};f.addObject(k);this._outlineResources={layer:f,objects:[k],materials:[p],resetGeometry:l};this._addResourcesToStage(this._outlineResources);var m=new x(y.createSquareGeometry(),"slice-grid"),r=e.PLANE_BACKGROUND_COLOR.slice(),n=new la({backgroundColor:r,gridColor:e.GRID_COLOR,gridWidth:4},"slice-grid");
n.renderOccluded=!0;var f=new K("slice-grid",{isPickable:!1},"slice-grid"),q=new L({idHint:"slice-grid"}),u=[0,0,0,0],l=function(b){q.removeAllGeometries();b&&(r[3]=e.PLANE_BACKGROUND_COLOR[3]*a._baseOpacity,n.setParameterValues({backgroundColor:r,gridColor:a.inputState&&"resize"===a.inputState.type?e.GRID_COLOR:u}),q.addGeometry(m,n,b))};f.addObject(q);this._gridResources={layer:f,objects:[q],materials:[n],resetGeometry:l};this._addResourcesToStage(this._gridResources);var z=[d.vec3f64.fromValues(0,
0,-e.SHIFT_RESTART_ARROW_LENGTH/2),d.vec3f64.fromValues(0,0,e.SHIFT_RESTART_ARROW_LENGTH/2)],b=g.addArrowTips(z,!0),f=function(a,b){return g.createArrowGeometry(z,z,{tubeRadius:e.SHIFT_RESTART_TUBE_RADIUS,tipRadius:e.SHIFT_RESTART_TIP_RADIUS,tipLength:e.SHIFT_RESTART_TIP_LENGTH,tubeFocusMultiplier:e.SHIFT_RESTART_TUBE_FOCUS_MULTIPLIER,tipFocusMultiplier:e.SHIFT_RESTART_TIP_FOCUS_MULTIPLIER,padding:a,bothEnds:!0,flat:null,focusTipLength:!0,addCap:b})},A=f(0,!1),C=f(e.SHIFT_RESTART_ARROW_OUTLINE_WIDTH,
!0),F=new D({color:e.SHIFT_RESTART_ARROW_TIP_COLOR},"slice-shift"),E=new D({color:e.SHIFT_RESTART_ARROW_TIP_COLOR,transparent:!0,writeDepth:!1,testDepth:!1,cullFace:"back",order:4},"slice-shift"),I=new D({color:e.SHIFT_RESTART_ARROW_CAP_COLOR,transparent:!0,writeDepth:!1,testDepth:!1,cullFace:"back",order:2},"slice-shift"),H=new D({color:e.SHIFT_RESTART_TUBE_COLOR,transparent:!0,writeDepth:!1,testDepth:!1,cullFace:"back",order:3},"slice-shift"),aa=new D({color:e.SHIFT_RESTART_OUTLINE_COLOR,transparent:!0,
writeDepth:!1,testDepth:!1,cullFace:"front",order:1},"slice-shift"),M=new x(y.createPolylineGeometry([[0,0,0],[-e.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]),"slice-rotate-heading"),N=new x(y.createPolylineGeometry([[0,0,0],[-e.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]),"slice-rotate-heading"),ba=new Z({color:e.SHIFT_RESTART_CALLOUT_COLOR},"slice-rotate-heading");ba.renderOccluded=!0;var v=new L({idHint:"slice-shift"}),f=new K("slice-shift",{isPickable:!1},"slice-shift"),J=d.mat4f64.create(),l=function(b,c){v.removeAllGeometries();
b&&(c?(A.focused.forEach(function(a){var c=a.part,h=a.geometry;a=a.transform;v.addGeometry(h,"tip"===c?E:"cap"===c?I:H,d.mat4.multiply(J,b,a));v.addGeometry(h,F,d.mat4.multiply(J,b,a))}),C.focused.forEach(function(a){v.addGeometry(a.geometry,aa,d.mat4.multiply(J,b,a.transform))}),a._shiftRestartHandle.floating||v.addGeometry(N,ba,b)):(A.normal.forEach(function(a){var c=a.part,h=a.geometry;a=a.transform;v.addGeometry(h,"tip"===c?E:"cap"===c?I:H,d.mat4.multiply(J,b,a));v.addGeometry(h,F,d.mat4.multiply(J,
b,a))}),C.normal.forEach(function(a){v.addGeometry(a.geometry,aa,d.mat4.multiply(J,b,a.transform))}),a._shiftRestartHandle.floating||v.addGeometry(M,ba,b)))};f.addObject(v);this._shiftRestartResources={layer:f,objects:[v],materials:[E,H,aa],intersectPath:b,resetGeometry:l};this._addResourcesToStage(this._shiftRestartResources);var b=[[1,0,0],[0,0,0],[0,1,0]],S=new x(y.createPolylineGeometry(b),"slice-resize"),T=new x(y.createPolylineGeometry([[1,0,0],[-1,0,0]]),"slice-resize"),f=new K("slice-resize",
{isPickable:!1},"slice-resize"),b=this._resizeHandles.map(function(){return new L({idHint:"slice-resize"})}),fa=e.HANDLE_COLOR.concat([1]),ga=this._resizeHandles.map(function(a){a=g.isDiagonalResizeHandle(a);a=new ea({color:fa,width:a?e.RESIZE_HANDLE_CORNER_WIDTH:e.RESIZE_HANDLE_EDGE_WIDTH},"slice-resize");a.renderOccluded=!0;return a}),ca=new Z({color:fa},"slice-resize");ca.renderOccluded=!0;for(var l=b.map(function(b,d){return function(c,h){b.removeAllGeometries();if(c){var t=g.isDiagonalResizeHandle(a._resizeHandles[d]),
f=t?S:T;h=(t?e.RESIZE_HANDLE_CORNER_WIDTH:e.RESIZE_HANDLE_EDGE_WIDTH)*(h?e.DISPLAY_FOCUS_MULTIPLIER:1);1===h?b.addGeometry(f,ca,c):(t=ga[d],t.setParameterValues({width:h}),b.addGeometry(f,t,c))}}}),B=0;B<b.length;B++)f.addObject(b[B]);this._resizeHandleResources={layer:f,objects:b,materials:ga.concat([ca]),resetGeometries:l};this._addResourcesToStage(this._resizeHandleResources);var ha=.1*Math.PI,U=1.7*Math.PI,f=e.ROTATE_HEADING_DISC_RADIUS,l=f*e.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER,b=e.ROTATE_HEADING_DISC_ARROW_RADIUS*
e.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER,O=e.ROTATE_HEADING_OFFSET_DISTANCE,G=function(a){for(var b=[],c=0;32>c;c++){var h=Math.PI+ha+(U-ha)*c/31;b.push(d.vec3f64.fromValues(O+a*Math.cos(h),a*Math.sin(h),0))}return b},B=G(e.ROTATE_HEADING_DISC_ARROW_RADIUS),G=G(b),b=g.addArrowTips(B,!1),ia=g.createArrowGeometry(B,G,{tubeRadius:e.ROTATE_HEADING_TUBE_RADIUS,tipRadius:e.ROTATE_HEADING_TIP_RADIUS,tipLength:e.ROTATE_HEADING_TIP_LENGTH,tubeFocusMultiplier:e.ROTATE_HEADING_TUBE_FOCUS_MULTIPLIER,tipFocusMultiplier:e.ROTATE_HEADING_TIP_FOCUS_MULTIPLIER,
padding:0,bothEnds:!1,flat:{thickness:2},focusTipLength:!0,addCap:!0}),da=new D({color:e.ROTATE_HEADING_ARROW_COLOR,transparent:!0,writeDepth:!1,testDepth:!1,cullFace:"back",order:2},"slice-rotate-heading"),ja=new D({color:e.ROTATE_HEADING_ARROW_COLOR},"slice-rotate-heading"),V=new x(y.createPolylineGeometry([[0,0,0],[O-f,0,0]]),"slice-rotate-heading"),W=new x(y.createPolylineGeometry([[0,0,0],[O-l,0,0]]),"slice-rotate-heading"),P=new Z({color:e.ROTATE_HEADING_CALLOUT_COLOR},"slice-rotate-heading");
P.renderOccluded=!0;var B=d.vec3f64.fromValues(0,0,1),G=d.vec3f64.fromValues(O,0,0),X=new x(y.createCylinderGeometry(1,f,32,B,G),"slice-rotate-heading"),Y=new x(y.createCylinderGeometry(1,l,32,B,G),"slice-rotate-heading"),Q=new D({color:e.ROTATE_HEADING_DISC_COLOR,transparent:!0,writeDepth:!1,testDepth:!1,cullFace:"back",order:1},"slice-rotate-heading");Q.renderOccluded=!0;var f=new K("slice-rotate-heading",{isPickable:!1},"slice-rotate-heading"),w=new L({idHint:"slice-rotate-heading"}),R=d.mat4f64.create(),
l=function(a,b){w.removeAllGeometries();a&&(b?(ia.focused.forEach(function(b){var c=b.geometry;b=b.transform;w.addGeometry(c,da,d.mat4.multiply(R,a,b));w.addGeometry(c,ja,d.mat4.multiply(R,a,b))}),w.addGeometry(W,P,a),w.addGeometry(Y,Q,a)):(ia.normal.forEach(function(b){var c=b.geometry;b=b.transform;w.addGeometry(c,da,d.mat4.multiply(R,a,b));w.addGeometry(c,ja,d.mat4.multiply(R,a,b))}),w.addGeometry(V,P,a),w.addGeometry(X,Q,a)))};f.addObject(w);this._rotateHeadingHandleResources={layer:f,objects:[w],
materials:[da,P,Q],intersectPath:b,resetGeometry:l};this._addResourcesToStage(this._rotateHeadingHandleResources)}};c.prototype._updateEngineLayers=function(){if(this._areEngineLayersCreated){this._outlineResources.resetGeometry();this._gridResources.resetGeometry();this._shiftRestartResources.resetGeometry();this._resizeHandleResources.resetGeometries.forEach(function(a){return a()});this._rotateHeadingHandleResources.resetGeometry();g.hideHandles(this._shiftRestartHandle,this._rotateHeadingHandle,
this._resizeHandles);var a=this.plane||n.isSome(this._previewPlane)&&this._previewPlane,b=a===this._previewPlane;if(a){var c=g.calculateBoundedPlaneTranslateRotate(a,pa),t=d.vec3.set(r.sv3d.get(),d.vec3.length(a.basis1),d.vec3.length(a.basis2),1);d.mat4.fromScaling(H,t);var t=d.mat4.multiply(H,c,H),p=this.view._stage.getCamera(),f=g.calculateScreenSpaceBasisLength2(a.origin,a.basis1,p),k=g.calculateScreenSpaceBasisLength2(a.origin,a.basis2,p),f=Math.max(f,k);this._gridResources.resetGeometry(t);b?
this._outlineResources.resetGeometry(t):(this._internallyEditable&&f>e.SHIFT_MIN_BASIS_SCREEN_LEN2&&(g.updateShiftRestartHandle(this._shiftRestartHandle,c,a,this.view.renderCoordsHelper,p),g.updateShiftRestartObject(this._shiftRestartResources.resetGeometry,this._shiftRestartHandle,this._isShiftRestartHandleFocused())),this._internallyEditable&&f>e.PLANE_MIN_BASIS_SCREEN_LEN2?(g.updateResizeHandles(c,a,this._resizeHandles),g.updateResizeHandleObjects(this._resizeHandleResources.resetGeometries,this._resizeHandles,
this._focusedResizeHandleIdx())):this._outlineResources.resetGeometry(t),this._internallyEditable&&f>e.ROTATE_MIN_BASIS_SCREEN_LEN2&&(g.updateRotateHeadingHandle(c,a,this.view.renderCoordsHelper,p,this._rotateHeadingHandle,this._isRotateHeadingHandleFocused()),g.updateRotateHeadingObject(this._rotateHeadingHandleResources.resetGeometry,this._rotateHeadingHandle,this._isRotateHeadingHandleFocused())))}}};c.prototype._removeEngineLayers=function(){this._areEngineLayersCreated&&(this._areEngineLayersCreated=
!1,this._removeResourcesFromStage(this._outlineResources),this._outlineResources=null,this._removeResourcesFromStage(this._gridResources),this._gridResources=null,this._removeResourcesFromStage(this._shiftRestartResources),this._shiftRestartResources=null,this._removeResourcesFromStage(this._resizeHandleResources),this._resizeHandleResources=null,this._removeResourcesFromStage(this._rotateHeadingHandleResources),this._rotateHeadingHandleResources=null)};c.prototype._updateLayerViews=function(){var a=
this.view.tools.some(function(a){return a instanceof F&&!!a.plane}),b=[],c=function(a){"layers"in a?a.layers.forEach(c):b.push(a)};this.excludedLayers.forEach(c);this.view.allLayerViews.forEach(function(c){"slicePlaneEnabled"in c&&(c.slicePlaneEnabled=a&&0>b.indexOf(c.layer));"componentLayerViews"in c&&c.componentLayerViews.forEach(function(c){c.slicePlaneEnabled=a&&0>b.indexOf(c.layer)})});this.view.basemapTerrain.slicePlaneEnabled=a&&!this.excludeGroundSurface};c.prototype._onPointerDown=function(a){var b=
this;if("exclude"===this.layersMode||!this._internallyEditable)return!1;var c=!1,e=this.view._stage.getCamera(),p=this._calculatePickRay(a),f=function(a,b,c){b=g.createShiftPlane(b,c.plane,p.direction,m.plane.create());c=d.vec3f64.create();m.plane.intersectRay(b,p,c);return{type:"shift",creating:a,shiftPlane:b,depth:0,startPoint:c}};if(this.plane)if(g.intersectsShiftRestartHandle(this._shiftRestartHandle,this._shiftRestartResources.intersectPath,{camera:e,pointerType:a.pointerType,ray:p}))m.boundedPlane.copy(this.plane,
this._startPlane),this.inputState=f(!1,this._shiftRestartHandle.position,this.plane),c=!0;else if(g.intersectsRotateHeadingHandle(this._rotateHeadingHandle,this._rotateHeadingHandleResources.intersectPath,{camera:e,pointerType:a.pointerType,ray:p})){var k=g.createRotatePlane(this.plane,this.view.renderCoordsHelper,m.plane.create()),l=d.vec3f64.create();m.plane.intersectRay(k,p,l)&&(m.boundedPlane.copy(this.plane,this._startPlane),this.inputState={type:"rotate-heading",rotatePlane:k,startPoint:l},
c=!0)}else{k=function(c,h){return g.intersectsResizeHandle(c,b.plane,{camera:e,pointerType:a.pointerType,ray:p})&&(c=r.sv3d.get(),m.plane.intersectRay(b.plane.plane,p,c))?(m.boundedPlane.copy(b.plane,b._startPlane),b.inputState={type:"resize",activeHandleIdx:h,startPoint:d.vec3f64.clone(c)},!0):!1};for(l=0;l<this._resizeHandles.length&&!c;l++){var n=this._resizeHandles[l];g.isDiagonalResizeHandle(n)&&k(n,l)&&(c=!0)}for(l=0;l<this._resizeHandles.length&&!c;l++)n=this._resizeHandles[l],!g.isDiagonalResizeHandle(n)&&
k(n,l)&&(c=!0)}c||this.inputState||this.plane||!this.active||(k=this.plane||m.boundedPlane.create(),this._pickPlane(a,!1,this._activeKeyModifiers,k)&&(m.boundedPlane.copy(k,this._startPlane),this.inputState=f(!0,k.origin,k),this.plane=k,c=!0));c&&this._updateMouseCursor();return c};c.prototype._onPointerDrag=function(a){var b=this.inputState;if(!b||!this.plane)return!1;if("end"===a.action)return this._finishInput(a);a=this._calculatePickRay(a);var c=this.view._stage.getCamera();switch(b.type){case "shift":if(m.plane.intersectRay(b.shiftPlane,
a,S)){a=Math.min((1-Math.abs(d.vec3.dot(this.plane.plane,a.direction)))/.001,1);var e=-m.plane.signedDistance(this._startPlane.plane,S),c=-m.plane.signedDistance(this._startPlane.plane,b.startPoint);b.depth=b.depth*(1-a)+e*a-c;d.vec3.copy(T,this._startPlane.origin);a=d.vec3.copy(r.sv3d.get(),this._startPlane.plane);d.vec3.scale(a,a,-b.depth);d.vec3.add(a,a,T);m.boundedPlane.fromValues(a,this.plane.basis1,this.plane.basis2,this.plane);this.plane=this.plane}break;case "resize":e=r.sv3d.get();m.plane.intersectRay(this.plane.plane,
a,e)&&(this.plane=g.resizePlane(this._resizeHandles[b.activeHandleIdx],b.startPoint,e,c,this._startPlane,this.plane));break;case "rotate-heading":c=r.sm4d.get();e=r.sv3d.get();m.plane.intersectRay(b.rotatePlane,a,e)&&(g.calculateInputRotationTransform(b.startPoint,e,this.plane.origin,b.rotatePlane,c),b=d.vec3.transformMat4(r.sv3d.get(),this._startPlane.basis1,c),a=d.vec3.transformMat4(r.sv3d.get(),this._startPlane.basis2,c),m.boundedPlane.fromValues(this.plane.origin,b,a,this.plane),this.plane=this.plane);
break;default:n.neverReached(b)}return!0};c.prototype._onPointerMove=function(a){this._lastCursorPosition.x=a.x;this._lastCursorPosition.y=a.y;if(this._shiftRestartHandle.forceHide||this._rotateHeadingHandle.forceHide)this._shiftRestartHandle.forceHide=!1,this._rotateHeadingHandle.forceHide=!1,this._updateEngineLayers();this._resetPointerMoveTimeout();if("touch"===a.pointerType)return!1;this._updatePreviewPlane(a,this._activeKeyModifiers);if(!this.plane||!this._internallyEditable)return!1;this._updateHovered(a)&&
(this._updateEngineLayers(),this._updateMouseCursor());return null!=this._hoveredResizeHandleIdx||this._isShiftRestartHandleHovered||this._isRotateHeadingHandleHovered};c.prototype._onPointerUp=function(a){return this._finishInput(a)?(this._ignoreClickEventId=a.eventId,!0):!1};c.prototype._onClick=function(a){var b=this;return"exclude"===this.layersMode?(this.view.hitTest(a).then(function(a){var c=a.results[0];a=c&&c.graphic;c=c&&c.mapPoint;a?(a=a.sourceLayer)&&b.excludedLayers.push(a):c&&(b.excludeGroundSurface=
!0)}),this._set("layersMode","none"),A.setActive(this,!1),!0):!!this.inputState||this._ignoreClickEventId===a.eventId};c.prototype._onDoubleClick=function(a){return this._ignoreClickEventId===a.eventId};c.prototype._onKeyDown=function(a){return"Escape"===a.key&&this.plane&&this.active?(this.plane=null,!0):a.key===e.forceVerticalModifier||a.key===e.forceHorizontalModifier?(this._activeKeyModifiers[a.key]=!0,n.isSome(this._previewPlane)&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),
!0):!1};c.prototype._onKeyUp=function(a){return a.key!==e.forceVerticalModifier&&a.key!==e.forceHorizontalModifier||!this._activeKeyModifiers[a.key]?!1:(delete this._activeKeyModifiers[a.key],n.isSome(this._previewPlane)&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)};c.prototype._finishInput=function(a){var b=this.inputState;this.inputState=null;if(!b||!this.plane)return!1;m.boundedPlane.copy(this.plane,this._startPlane);this._updateHovered(a);this._updateEngineLayers();
this._updateMouseCursor();return!0};c.prototype._updatePreviewPlane=function(a,b){var c=this,g=this._previewPlane;this._previewPlane=null;if(!this.plane&&this.active){var p=n.isSome(g)?g:m.boundedPlane.create(),g=n.isSome(g)?m.boundedPlane.copy(g,qa):null;this._pickPlane(a,!0,b,p)&&(a=e.PREVIEW_FADE_DOT_THRESHOLD,b=!1,n.isSome(g)&&(b=d.vec3.dot(g.plane,p.plane)<a||d.vec3.dot(d.vec3.normalize(r.sv3d.get(),g.basis1),d.vec3.normalize(r.sv3d.get(),p.basis1))<a),b&&(this._baseOpacity=0),this._previewPlane=
p)}n.isSome(this._previewPlane)&&n.isNone(this._frameTask)&&0===this._baseOpacity?this._frameTask=Y.addFrameTask({update:function(a){c._baseOpacity=Math.min(c._baseOpacity+a.deltaTime/(1E3*e.PREVIEW_FADE_DURATION_SECONDS),1);c._updateEngineLayers();1===c._baseOpacity&&c._removeFrameTask()}}):n.isNone(this._frameTask)&&(this._updateEngineLayers(),this._removeFrameTask())};c.prototype._removeFrameTask=function(){n.isSome(this._frameTask)&&(this._frameTask.remove(),this._frameTask=null)};c.prototype._updateHovered=
function(a){var b=this,c=this._hoveredResizeHandleIdx,d=this._isShiftRestartHandleHovered,e=this._isRotateHeadingHandleHovered;this._hoveredResizeHandleIdx=null;this._isRotateHeadingHandleHovered=this._isShiftRestartHandleHovered=!1;var f=a.pointerType,k=function(){return!b._isAnyHandleFocused()&&"touch"!==f};a=this._calculatePickRay(a);var l=this.view._stage.getCamera();k()&&(this._isShiftRestartHandleHovered=g.intersectsShiftRestartHandle(this._shiftRestartHandle,this._shiftRestartResources.intersectPath,
{camera:l,pointerType:f,ray:a}));k()&&(this._isRotateHeadingHandleHovered=g.intersectsRotateHeadingHandle(this._rotateHeadingHandle,this._rotateHeadingHandleResources.intersectPath,{camera:l,pointerType:f,ray:a}));if(k())for(k=0;k<this._resizeHandles.length;k++)if(g.intersectsResizeHandle(this._resizeHandles[k],this.plane,{camera:l,pointerType:f,ray:a})){this._hoveredResizeHandleIdx=k;break}return this._hoveredResizeHandleIdx!==c||this._isShiftRestartHandleHovered!==d||this._isRotateHeadingHandleHovered!==
e};c.prototype._focusedResizeHandleIdx=function(){return this.inputState&&"resize"===this.inputState.type?this.inputState.activeHandleIdx:this._hoveredResizeHandleIdx};c.prototype._isShiftRestartHandleFocused=function(){return this.inputState&&"shift"===this.inputState.type?!0:this._isShiftRestartHandleHovered};c.prototype._isRotateHeadingHandleFocused=function(){return this.inputState&&"rotate-heading"===this.inputState.type?!0:this._isRotateHeadingHandleHovered};c.prototype._calculatePickRay=function(a){a=
d.vec2f64.fromValues(a.x,this.view.height-a.y);var b=m.ray.create();m.ray.fromScreen(this.view.state.camera,a,b);d.vec3.normalize(b.direction,b.direction);return b};c.prototype._pickSelector=function(a){a=d.vec2f64.fromValues(a.x,this.view.height-a.y);return this.view.sceneIntersectionHelper.intersectToolSelectorScreen(a)};c.prototype._pickPlane=function(a,b,c,m){var h=this._pickSelector(a).minResult;a=r.sv3d.get();if(!h.getIntersectionPoint(a))return!1;var h=h.getTransformedNormal(r.sv3d.get()),
f=this.view._stage.getCamera();0<d.vec3.dot(h,f.viewForward)&&d.vec3.scale(h,h,-1);var k=g.calculatePlaneHalfSize(a,f);b=(b?1:-1)*k*e.INITIAL_DEPTH_OFFSET_FRAC;b=d.vec3.scale(r.sv3d.get(),h,b);d.vec3.add(b,b,a);g.createPlane(b,h,0,k,k,f,c[e.forceVerticalModifier]?"vertical":c[e.forceHorizontalModifier]?"horizontal":null,this.view.renderCoordsHelper,m);return!0};c.prototype._addResourcesToStage=function(a){var b=this;a.materials.forEach(function(a){return b.view._stage.add(z.ContentType.MATERIAL,a)});
a.objects.forEach(function(a){return b.view._stage.add(z.ContentType.OBJECT,a)});this.view._stage.add(z.ContentType.LAYER,a.layer);this.view._stage.addToViewContent([a.layer.id])};c.prototype._removeResourcesFromStage=function(a){var b=this;this.view._stage.remove(z.ContentType.LAYER,a.layer.id);this.view._stage.removeFromViewContent([a.layer.id]);a.objects.forEach(function(a){return b.view._stage.remove(z.ContentType.OBJECT,a.id)});a.materials.forEach(function(a){return b.view._stage.remove(z.ContentType.MATERIAL,
a.id)})};c.prototype._updateMouseCursor=function(a){void 0===a&&(a=this.active);this._set("cursor",null);this._isAnyHandleFocused()?this._set("cursor","slicing"===this.state?"grabbing":"pointer"):a&&this._set("cursor","crosshair")};c.prototype._isAnyHandleFocused=function(){return null!=this._focusedResizeHandleIdx()||this._isShiftRestartHandleFocused()||this._isRotateHeadingHandleFocused()};c.prototype._clearPointerMoveTimeout=function(){this._prevPointerMoveTimeout&&(this._prevPointerMoveTimeout.remove(),
this._prevPointerMoveTimeout=null)};c.prototype._resetPointerMoveTimeout=function(){var a=this;this._clearPointerMoveTimeout();this._prevPointerMoveTimeout=this._clock.setTimeout(function(){a._shiftRestartHandle.forceHide=!0;a._isShiftRestartHandleHovered=!1;a._rotateHeadingHandle.forceHide=!0;a._isRotateHeadingHandleHovered=!1;a._updateEngineLayers();a._updateMouseCursor()},e.POINTER_MOVE_TIMER_MS)};c.prototype._shouldHandlePointerEvent=function(a){return I(a)&&(n.isNone(this._activePointerId)||
this._activePointerId===a.pointerId)};c.prototype._unsetOtherToolPlanes=function(){var a=this;this.view.tools.forEach(function(b){b!==a&&b instanceof F&&(b._set("plane",null),b._updateEngineLayers())})};var F;u([q.property({constructOnly:!0})],c.prototype,"view",void 0);u([q.property({dependsOn:["plane","inputState"],readOnly:!0})],c.prototype,"state",null);u([q.property({dependsOn:["view.type"],readOnly:!0})],c.prototype,"isSupported",null);u([q.property({readOnly:!0})],c.prototype,"cursor",void 0);
u([q.property({value:null})],c.prototype,"plane",null);u([q.property({readOnly:!0})],c.prototype,"layersMode",void 0);u([q.property({readOnly:!0})],c.prototype,"excludedLayers",void 0);u([q.property({type:Boolean,value:!1})],c.prototype,"excludeGroundSurface",null);u([q.property({value:!0})],c.prototype,"editable",null);u([q.property()],c.prototype,"inputState",void 0);return c=F=u([q.subclass("esri.views.3d.interactive.analysisTools.slice.SliceTool")],c)}(q.declared(ma));var S=d.vec3f64.create(),
T=d.vec3f64.create(),pa=d.mat4f64.create(),H=d.mat4f64.create(),qa=m.boundedPlane.create();return C});