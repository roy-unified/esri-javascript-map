// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/has ../../../../core/libs/gl-matrix-2/gl-matrix ./Object3D ./PerformanceTimer".split(" "),function(p,x,y,b,v,z){var w=b.mat4f64.create(),r=b.vec3f64.create(),t=b.vec3f64.create(),u=b.vec3f64.create();p=function(){function a(d){this.minResult=new q;this.maxResult=new q;this._transform=b.mat4f64.create();this._transformInverse=new n({value:this._transform},b.mat4.invert,b.mat4f64.create);this._transformInverseTranspose=new n(this._transformInverse,b.mat4.transpose,
b.mat4f64.create);this._transformTranspose=new n({value:this._transform},b.mat4.transpose,b.mat4f64.create);this._transformInverseRotation=new n({value:this._transform},b.mat3.normalFromMat4,b.mat3f64.create);this.enableTerrain=this.enableHUDSelection=!0;this.enableInvisibleTerrain=!1;this.enableBackfacesTerrain=!0;this._p0=b.vec3f64.create();this._p1=b.vec3f64.create();this.performanceInfo={queryDuration:0,numObjectsTested:0};this.viewingMode=d||"global"}Object.defineProperty(a.prototype,"p0",{get:function(){return this._p0},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"p1",{get:function(){return this._p1},enumerable:!0,configurable:!0});a.prototype.init=function(d,b,a,e,c,k,g,h){this.minResult.init(b,a);this.maxResult.init(b,a);this._numObjectsTested=0;this.hudResults=[];this.run(d,b,a,e,c,k,g,h)};a.prototype.run=function(d,f,a,e,c,k,g,h){var m=this;this.point=e;this.camera=c;this.isSelection=g;b.vec3.copy(this._p0,f);b.vec3.copy(this._p1,a);this.filterPredicate=h;null==k&&(k=1E-5);this.tolerance=
k;if(d&&0<d.length)for(f&&a&&b.vec3.subtract(u,a,f),f=function(d){m.intersectObject(d)},a=0;a<d.length;a++)if(e=d[a],c=e.getSpatialQueryAccelerator?e.getSpatialQueryAccelerator():void 0)c.forEachAlongRay(this._p0,u,f),g&&c.forEachDegenerateObject(f);else for(c=0,e=e.getObjects();c<e.length;c++)f(e[c])};Object.defineProperty(a.prototype,"transform",{get:function(){return this._transform},enumerable:!0,configurable:!0});a.prototype.setTransform=function(d){b.mat4.copy(this._transform,d);this.invalidateLazyTransform()};
Object.defineProperty(a.prototype,"transformInverse",{get:function(){return this._transformInverse.value},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"transformInverseTranspose",{get:function(){return this._transformInverseTranspose.value},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"transformInverseRotation",{get:function(){return this._transformInverseRotation.value},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"transformTranspose",
{get:function(){return this._transformTranspose.value},enumerable:!0,configurable:!0});a.prototype.invalidateLazyTransform=function(){this._transformInverse.invalidate();this._transformInverseTranspose.invalidate();this._transformTranspose.invalidate();this._transformInverseRotation.invalidate()};a.prototype.intersectObject=function(d){var a=this;this._numObjectsTested++;for(var m=d.id,e=d.getGeometryRecords(),c=d.objectTransformation,k,g=0;g<e.length;g++){var h=e[g],l=h.geometry,n=h.material,p=h.instanceParameters;
p.hidden||(k=l.id,b.mat4.copy(this._transform,c),b.mat4.multiply(this._transform,this._transform,h.getShaderTransformation()),this.invalidateLazyTransform(),b.vec3.transformMat4(r,this.p0,this.transformInverse),b.vec3.transformMat4(t,this.p1,this.transformInverse),n.intersect(l,p,this._transform,this,r,t,function(b,f,e,c,g,h){0<=b&&(null==a.filterPredicate||a.filterPredicate(a._p0,a._p1,b))&&(g?(g=new q,g.init(a._p0,a._p1),g.set(d,m,b,f,w,c,h,k,e),a.hudResults.push(g)):((null==a.minResult.priority||
c>=a.minResult.priority)&&(null==a.minResult.dist||b<a.minResult.dist)&&a.minResult.set(d,m,b,f,a._transform,c,null,k,e),(null==a.maxResult.priority||c>=a.maxResult.priority)&&(null==a.maxResult.dist||b>a.maxResult.dist)&&a.maxResult.set(d,m,b,f,a._transform,c,null,k,e)))},h.shaderTransformation))}};a.DEFAULT_TOLERANCE=1E-5;return a}();var q=function(){function a(a,f){this._p0=b.vec3f64.create();this._p1=b.vec3f64.create();this._normal=b.vec3f64.create();this._transformation=b.mat4f64.create();this.init(a,
f)}Object.defineProperty(a.prototype,"p0",{get:function(){return this._p0},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"p1",{get:function(){return this._p1},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"hasIntersectionPoint",{get:function(){return null!=this.dist},enumerable:!0,configurable:!0});a.prototype.getIntersectionPoint=function(a){if(!this.hasIntersectionPoint)return!1;b.vec3.lerp(a,this.p0,this.p1,this.dist);return!0};a.prototype.getTransformedNormal=
function(a){b.vec3.copy(l,this._normal);l[3]=0;b.vec4.transformMat4(l,l,this._transformation);b.vec3.copy(a,l);b.vec3.normalize(a,a);return a};a.prototype.set=function(a,f,m,e,c,k,g,h,l){a instanceof v&&(a={type:"stage",obj:a});this.dist=m;b.vec3.copy(this._normal,e);b.mat4.copy(this._transformation,c);this.target=a;this.name=f;this.priority=k;this.center=g?b.vec3f64.clone(g):null;this.geometryId=h;this.triangleNr=l};a.prototype.copyFrom=function(a){b.vec3.copy(this._p0,a._p0);b.vec3.copy(this._p1,
a._p1);this.dist=a.dist;this.target=a.target;this.name=a.name;this.priority=a.priority;this.center=a.center?b.vec3f64.clone(a.center):null;this.geometryId=a.geometryId;this.triangleNr=a.triangleNr;this.intersector=a.intersector;b.vec3.copy(this._normal,a._normal);b.mat4.copy(this._transformation,a._transformation)};a.prototype.setIntersector=function(a){this.intersector=a};a.prototype.init=function(a,f){this.priority=this.name=this.target=this.dist=void 0;this.triangleNr=this.geometryId=this.center=
null;this.intersector="Stage";a?b.vec3.copy(this._p0,a):b.vec3.set(this._p0,0,0,0);f?b.vec3.copy(this._p1,f):b.vec3.set(this._p1,0,0,0)};return a}(),n=function(){function a(a,b,l){this.original=a;this.update=b;this.dirty=!0;this.transform=l()}a.prototype.invalidate=function(){this.dirty=!0};Object.defineProperty(a.prototype,"value",{get:function(){this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1);return this.transform},enumerable:!0,configurable:!0});return a}(),l=b.vec4f64.create();
return p});