// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix-2/gl-matrix ../../../camera/constraintUtils ../InteractiveController ../../utils/navigationUtils ../../../support/geometryUtils".split(" "),function(d,m,n,b,k,p,g,l){Object.defineProperty(m,"__esModule",{value:!0});d=function(d){function h(c,e){var a=d.call(this)||this;a.view=c;a.intersectionHelper=e;a.pickPoint=b.vec3f64.create();a.tmpP0=b.vec2f64.create();a.panAxisAngle=l.axisAngle.create();a.tmpRayDir=
b.vec3f64.create();a.targetOnSphere=b.vec3f64.create();a.dragBeginPoint=b.vec2f64.create();a.normalizedAnchorPoint=b.vec2f64.create();a.constraintOptions={selection:7,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0};a.sphere=l.sphere.create();a.hasPickPoint=!1;return a}n(h,d);h.prototype.begin=function(c){this.active&&(b.vec2.copy(this.dragBeginPoint,c),g.normalizeCoordinate(this.beginCamera,c,this.normalizedAnchorPoint),c=g.pickPointAndInitSphere(this.intersectionHelper,
this.beginCamera,c,!1),this.hasPickPoint=!!c.scenePickPoint,this.pickPoint=c.scenePickPoint,this.sphere=c.sphere,this.constraintOptions.interactionStartCamera=this.beginCamera)};h.prototype.update=function(c){if(this.active){this.currentCamera.eye=this.beginCamera.eye;this.currentCamera.center=this.beginCamera.center;this.currentCamera.up=this.beginCamera.up;b.vec3.subtract(this.tmpRayDir,this.currentCamera.center,this.currentCamera.eye);var e=b.vec3.length(this.tmpRayDir);g.normalizeCoordinate(this.currentCamera,
c,this.tmpP0);var a=12*(this.tmpP0[1]-this.normalizedAnchorPoint[1]),f=e*Math.pow(2,a),d=this.view.state.constraints.minimumPoiDistance;0>a&&f<d&&(f=d);1E-6>Math.abs(e-f)||(this.hasPickPoint&&f<e&&(a=1-(1-f/e)*(1-this.sphere.radius/b.vec3.length(this.currentCamera.center)),b.vec3.scale(this.currentCamera.center,this.currentCamera.center,a)),b.vec3.scale(this.tmpRayDir,this.tmpRayDir,-f/e),b.vec3.add(this.currentCamera.eye,this.currentCamera.center,this.tmpRayDir),this.constraintOptions.interactionFactor=
k.pixelDistanceToInteractionFactor(this.dragBeginPoint,c),k.applyAll(this.view,this.currentCamera,this.constraintOptions),this.hasPickPoint&&(g.sphereOrPlanePointFromScreenPoint(this.sphere,this.currentCamera,this.dragBeginPoint,this.targetOnSphere),l.axisAngle.fromPoints(this.pickPoint,this.targetOnSphere,this.panAxisAngle),g.applyRotation(this.currentCamera,this.sphere.center,this.panAxisAngle)),k.applySurfaceCollision(this.view,this.currentCamera))}};h.prototype.end=function(){this.active&&this.finishController()};
return h}(p.InteractiveController);m.ZoomController=d});