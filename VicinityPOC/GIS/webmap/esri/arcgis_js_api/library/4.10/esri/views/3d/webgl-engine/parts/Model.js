// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports dojo/string ../../support/mathUtils ../lib/localOrigin ../lib/ModelContentType ../lib/ModelDirtySet ../lib/RenderGeometry ../lib/Util".split(" "),function(r,t,k,n,l,e,m,p,h){var g=h.assert,q=h.logWithBase;return function(){function d(){this.dirtySet=new m(this);this._uniqueIdx=0;this._id2origin={};this.content={};for(var a in e)this.content[e[a]]={}}d.prototype.getAll=function(a){a=this.content[a];g(void 0!==a);return a};d.prototype.get=function(a,b){return this.getAll(a)[b]};
d.prototype.add=function(a,b){var c=this.content[a];g(void 0!==c);var f=b.id;g(null==c[f],"Model/Stage already contains object to be added");c[f]=b;a===e.LAYER&&this.notifyDirty(a,b,"layerAdded")};d.prototype.remove=function(a,b){var c=this.content[a];g(void 0!==c);var f=c[b];g(void 0!==f,"Model/Stage doesn't contain object to be removed");delete c[b];a===e.TEXTURE&&f.unload();a===e.LAYER&&this.notifyDirty(a,f,"layerRemoved");return f};d.prototype.getDirtySet=function(){return this.dirtySet};d.prototype.notifyDirty=
function(a,b,c,f){this.dirtySet.handleUpdate(b,c,f)};d.prototype.getOrigin=function(a,b,c){void 0===c&&(c=10);var f=0;b=b*c/1E4;1<b&&(f=Math.ceil(q(b,2)));b=1E4*Math.pow(2,f);c=Math.round(a[0]/b);var e=Math.round(a[1]/b);a=Math.round(a[2]/b);var f=f+"_"+c+"_"+e+"_"+a,d=this._id2origin[f];null==d&&(d=l.fromValues(c*b,e*b,a*b,f),this._id2origin[f]=d);return d};d.prototype.getGeometryRenderGeometries=function(a,b,c){var d=a.id,e=b.geometry,g=a.getCombinedStaticTransformation(b),h=n.maxScale(g),k=b.origin,
l=b.id,m=this._uniqueIdx++;a=new p(e.data,e.boundingInfo,b.material,g,b.shaderTransformation,h,a.getCastShadow(),!!e.singleUse,d,l,m);a.origin=k||this.getOrigin(a.center,a.bsRadius);a.instanceParameters=b.instanceParameters;c.push(a)};d.prototype.updateRenderGeometryTransformation=function(a,b,c){a.getCombinedStaticTransformation(b,c.transformation);c.updateTransformation(c.transformation)};d.prototype.formatDebugInfo=function(a){var b=[];if(a){b[0]="\x3ctable\x3e";for(var c in e)a=e[c],b[0]+="\x3ctr\x3e\x3ctd\x3e"+
a+'\x3c/td\x3e\x3ctd style\x3d"text-align: right"\x3e'+Object.keys(this.getAll(a)).length+"\x3c/td\x3e\x3c/tr\x3e";b[0]+="\x3c/table\x3e";b[1]=this.dirtySet.formatDebugInfo(!0)}else{b[0]="";for(c in e)a=e[c],b[0]+=k.pad(String(Object.keys(this.getAll(a)).length),6," ")+" "+a+", ";b[1]=this.dirtySet.formatDebugInfo(!1)}return b};d.prototype.validateContent=function(){var a=this.getAll(e.OBJECT),b;for(b in a)this.validateObject(a[b]);var a=this.getAll(e.LAYER),c;for(c in a)this.validateLayer(a[c]);
c=this.getAll(e.MATERIAL);for(var d in c)this.validateMaterial(c[d])};d.prototype.validateObject=function(a){a=a.geometryRecords;for(var b=0;b<a.length;++b){var c=a[b];g(null!=this.get(e.GEOMETRY,c.geometry.id));g(null!=this.get(e.MATERIAL,c.material.id))}};d.prototype.validateLayer=function(a){a=a.getObjects();for(var b=0;b<a.length;++b){var c=this.get(e.OBJECT,a[b].id);g(null!=c)}};d.prototype.validateMaterial=function(a){a=a.getAllTextureIds();for(var b=0;b<a.length;++b){var c=this.get(e.TEXTURE,
a[b]);g(null!=c)}};d.ContentType=e;return d}()});