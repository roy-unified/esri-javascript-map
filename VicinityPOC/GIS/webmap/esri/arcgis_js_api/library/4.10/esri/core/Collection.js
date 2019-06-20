// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/declareExtendsHelper ./tsSupport/decorateHelper dojo/aspect ./Accessor ./ArrayPool ./Evented ./lang ./ObjectPool ./scheduling ./accessorSupport/decorators ./accessorSupport/ensureType".split(" "),function(D,Q,H,y,I,J,x,K,L,M,N,r,E){function w(f){return f?f.isInstanceOf&&f.isInstanceOf(F):!1}function z(f){return f?w(f)?f.toArray():f.length?Array.prototype.slice.apply(f):[]:[]}function A(f){if(f&&f.length)return f[0]}function G(f,b,k,a){b&&b.forEach(function(c,n,
b){f.push(c);G(f,k.call(a,c,n,b),k,a)})}D=function(){function f(){this.target=null;this.defaultPrevented=this.cancellable=!1}f.prototype.preventDefault=function(){this.cancellable&&(this.defaultPrevented=!0)};f.prototype.reset=function(b){this.defaultPrevented=!1;this.item=b};return f}();var O=function(){},k=new M(D,!0,function(f){f.item=null;f.target=null}),q=new Set,u=new Set,v=new Set,B=new Map,P=0,F=function(f){function b(a){a=f.call(this,a)||this;a._boundDispatch=a._dispatchColChange.bind(a);
a._chgListeners=[];a._notifications=null;a._timer=null;a.length=0;a._items=[];Object.defineProperty(a,"uid",{value:P++});return a}H(b,f);t=b;b.ofType=function(a){if(!a)return t;if(B.has(a))return B.get(a);var c;if("function"===typeof a)c=a.prototype.declaredClass;else if(a.base)c=a.base.prototype.declaredClass;else for(var n in a.typeMap){var b=a.typeMap[n].prototype.declaredClass;c=c?c+(" | "+b):b}c=t.createSubclass({declaredClass:"esri.core.Collection\x3c"+c+"\x3e"});c.isCollection=w;n={Type:a,
ensureType:"function"===typeof a?E.ensureType(a):E.ensureOneOfType(a)};Object.defineProperty(c.prototype,"itemType",{value:n});B.set(a,c);return c};b.prototype.normalizeCtorArgs=function(a){return a?Array.isArray(a)||w(a)?{items:a}:a:{}};Object.defineProperty(b.prototype,"items",{get:function(){return this._items},set:function(a){this._emitBeforeChanges()||(this._splice.apply(this,[0,this.length].concat(z(a))),this._emitAfterChanges())},enumerable:!0,configurable:!0});b.prototype.on=function(a,c){var n;
Array.isArray(a)?n=a:-1<a.indexOf(",")&&(n=a.split(/\s*,\s*/));if(n){var b=[];for(a=0;a<n.length;a++)b.push(this.on(n[a],c));b.remove=function(){for(var a=0;a<b.length;a++)b[a].remove()};return b}if("change"===a){var d=this._chgListeners,h={removed:!1,callback:c};d.push(h);this._notifications&&this._notifications.push({listeners:d.slice(),items:this._items.slice(),changes:[]});return{remove:function(){this.remove=O;h.removed=!0;d.splice(d.indexOf(h),1)}}}return I.after(this,"on"+a,c,!0)};b.prototype.hasEventListener=
function(a){return"change"===a?0<this._chgListeners.length:this.inherited(arguments)};b.prototype.add=function(a,c){if(this._emitBeforeChanges())return this;c=this.getNextIndex(c);this._splice(c,0,a);this._emitAfterChanges();return this};b.prototype.addMany=function(a,c){void 0===c&&(c=this._items.length);if(!a||!a.length||this._emitBeforeChanges())return this;c=this.getNextIndex(c);this._splice.apply(this,[c,0].concat(z(a)));this._emitAfterChanges();return this};b.prototype.removeAll=function(){if(!this.length||
this._emitBeforeChanges())return[];var a=this._splice(0,this.length)||[];this._emitAfterChanges();return a};b.prototype.clone=function(){return this._createNewInstance({items:this._items.map(L.clone)})};b.prototype.concat=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];var b,a=a.map(z);return this._createNewInstance({items:(b=this._items).concat.apply(b,a)})};b.prototype.drain=function(a,c){if(this.length&&!this._emitBeforeChanges()){for(var b=this._splice(0,this.length),e=b.length,
d=0;d<e;d++)a.call(c,b[d],d,b);this._emitAfterChanges()}};b.prototype.every=function(a,c){return this._items.every(a,c)};b.prototype.filter=function(a,c){var b;b=2===arguments.length?this._items.filter(a,c):this._items.filter(a);return this._createNewInstance({items:b})};b.prototype.find=function(a,c){if("function"!==typeof a)throw new TypeError(a+" is not a function");for(var b=this._items,e=b.length,d=0;d<e;d++){var h=b[d];if(a.call(c,h,d,b))return h}};b.prototype.findIndex=function(a,c){if("function"!==
typeof a)throw new TypeError(a+" is not a function");for(var b=this._items,e=b.length,d=0;d<e;d++)if(a.call(c,b[d],d,b))return d;return-1};b.prototype.flatten=function(a,c){var b=[];G(b,this,a,c);return new t(b)};b.prototype.forEach=function(a,c){for(var b=this._items,e=b.length,d=0;d<e;d++)a.call(c,b[d],d,b)};b.prototype.getItemAt=function(a){return this._items[a]};b.prototype.getNextIndex=function(a){var c=this.length;a=null==a?c:a;0>a?a=0:a>c&&(a=c);return a};b.prototype.includes=function(a,c){void 0===
c&&(c=0);return arguments.length?-1!==this._items.indexOf(a,c):!1};b.prototype.indexOf=function(a,c){void 0===c&&(c=0);return this._items.indexOf(a,c)};b.prototype.join=function(a){void 0===a&&(a=",");return this._items.join(a)};b.prototype.lastIndexOf=function(a,c){void 0===c&&(c=this.length-1);return this._items.lastIndexOf(a,c)};b.prototype.map=function(a,c){a=this._items.map(a,c);return new t({items:a})};b.prototype.reorder=function(a,c){void 0===c&&(c=this.length-1);var b=this.indexOf(a);if(-1!==
b){0>c?c=0:c>=this.length&&(c=this.length-1);if(b!==c){if(this._emitBeforeChanges())return a;this._splice(b,1);this._splice(c,0,a);this._emitAfterChanges()}return a}};b.prototype.pop=function(){if(this.length&&!this._emitBeforeChanges()){var a=A(this._splice(this.length-1,1));this._emitAfterChanges();return a}};b.prototype.push=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];if(this._emitBeforeChanges())return this.length;this._splice.apply(this,[this.length,0].concat(a));this._emitAfterChanges();
return this.length};b.prototype.reduce=function(a,c){var b=this._items;return 2===arguments.length?b.reduce(a,c):b.reduce(a)};b.prototype.reduceRight=function(a,c){var b=this._items;return 2===arguments.length?b.reduceRight(a,c):b.reduceRight(a)};b.prototype.remove=function(a){return this.removeAt(this.indexOf(a))};b.prototype.removeAt=function(a){if(!(0>a||a>=this.length||this._emitBeforeChanges()))return a=A(this._splice(a,1)),this._emitAfterChanges(),a};b.prototype.removeMany=function(a){if(!a||
!a.length||this._emitBeforeChanges())return[];a=w(a)?a.toArray():a;for(var c=this._items,b=[],e=a.length,d=0;d<e;d++){var h=c.indexOf(a[d]);if(-1<h){for(var f=d+1,l=h+1,g=Math.min(a.length-f,c.length-l),m=0;m<g&&a[f+m]===c[l+m];)m++;f=1+m;(h=this._splice(h,f))&&0<h.length&&b.push.apply(b,h);d+=f-1}}this._emitAfterChanges();return b};b.prototype.reverse=function(){if(this._emitBeforeChanges())return this;var a=this._splice(0,this.length);a&&(a.reverse(),this._splice.apply(this,[0,0].concat(a)));this._emitAfterChanges();
return this};b.prototype.shift=function(){if(this.length&&!this._emitBeforeChanges()){var a=A(this._splice(0,1));this._emitAfterChanges();return a}};b.prototype.slice=function(a,c){void 0===a&&(a=0);void 0===c&&(c=this.length);return this._createNewInstance({items:this._items.slice(a,c)})};b.prototype.some=function(a,c){return this._items.some(a,c)};b.prototype.sort=function(a){if(!this.length||this._emitBeforeChanges())return this;var c=this._splice(0,this.length);arguments.length?c.sort(a):c.sort();
this._splice.apply(this,[0,0].concat(c));return this};b.prototype.splice=function(a,c){for(var b=[],e=2;e<arguments.length;e++)b[e-2]=arguments[e];if(this._emitBeforeChanges())return[];b=this._splice.apply(this,[a,c].concat(b))||[];this._emitAfterChanges();return b};b.prototype.toArray=function(){return this._items.slice()};b.prototype.toJSON=function(){return this.toArray()};b.prototype.toLocaleString=function(){return this._items.toLocaleString()};b.prototype.toString=function(){return this._items.toString()};
b.prototype.unshift=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];if(this._emitBeforeChanges())return this.length;this._splice.apply(this,[0,0].concat(a));this._emitAfterChanges();return this.length};b.prototype._createNewInstance=function(a){return new this.constructor(a)};b.prototype._splice=function(a,c){for(var b=[],e=2;e<arguments.length;e++)b[e-2]=arguments[e];var e=this._items,d=this.constructor.prototype.itemType,h,f;!this._notifications&&this.hasEventListener("change")&&
(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=N.schedule(this._boundDispatch));if(c){f=e.splice(a,c);if(this.hasEventListener("before-remove")){var l=k.acquire();l.target=this;l.cancellable=!0;for(var g=0,m=f.length;g<m;g++)h=f[g],l.reset(h),this.emit("before-remove",l),l.defaultPrevented&&(f.splice(g,1),e.splice(a,0,h),a+=1,--g,--m);k.release(l)}this.length=this._items.length;if(this.hasEventListener("after-remove")){h=
k.acquire();h.target=this;h.cancellable=!1;m=f.length;for(g=0;g<m;g++)h.reset(f[g]),this.emit("after-remove",h);k.release(h)}}if(b&&b.length){if(d){g=[];for(m=0;m<b.length;m++)h=b[m],l=d.ensureType(h),null==l&&null!=h||g.push(l);b=g}d=this.hasEventListener("before-add");g=this.hasEventListener("after-add");m=a===this.length;if(d||g){h=k.acquire();h.target=this;h.cancellable=!0;l=k.acquire();l.target=this;l.cancellable=!1;for(var C=0,q=b;C<q.length;C++){var p=q[C];d?(h.reset(p),this.emit("before-add",
h),h.defaultPrevented||(m?e.push(p):e.splice(a++,0,p),this._set("length",e.length),g&&(l.reset(p),this.emit("after-add",l)))):(m?e.push(p):e.splice(a++,0,p),this._set("length",e.length),l.reset(p),this.emit("after-add",l))}k.release(h)}else m?e.push.apply(e,b):e.splice.apply(e,[a,0].concat(b)),this._set("length",e.length)}(b&&b.length||f&&f.length)&&this._notifyChangeEvent(b,f);return f};b.prototype._emitBeforeChanges=function(){var a=!1;if(this.hasEventListener("before-changes")){var b=k.acquire();
b.target=this;b.cancellable=!0;this.emit("before-changes",b);a=b.defaultPrevented;k.release(b)}return a};b.prototype._emitAfterChanges=function(){if(this.hasEventListener("after-changes")){var a=k.acquire();a.target=this;a.cancellable=!1;this.emit("after-changes",a);k.release(a)}};b.prototype._notifyChangeEvent=function(a,b){this.hasEventListener("change")&&this._notifications[this._notifications.length-1].changes.push({added:a,removed:b})};b.prototype._dispatchColChange=function(){this._timer&&(this._timer.remove(),
this._timer=null);if(this._notifications){var a=this._notifications;this._notifications=null;for(var b=function(a){var b=a.changes;q.clear();u.clear();v.clear();for(var c=0;c<b.length;c++){var e=b[c],g=e.added,e=e.removed;if(g)if(0===v.size&&0===u.size)for(var d=0,k=g;d<k.length;d++)g=k[d],q.add(g);else for(d=0,k=g;d<k.length;d++)g=k[d],u.has(g)?(v.add(g),u.delete(g)):v.has(g)||q.add(g);if(e)if(0===v.size&&0===q.size)for(d=0;d<e.length;d++)g=e[d],u.add(g);else for(d=0;d<e.length;d++)g=e[d],q.has(g)?
q.delete(g):(v.delete(g),u.add(g))}var n=x.acquire();q.forEach(function(a){n.push(a)});var p=x.acquire();u.forEach(function(a){p.push(a)});var t=f._items,w=a.items,r=x.acquire();v.forEach(function(a){w.indexOf(a)!==t.indexOf(a)&&r.push(a)});if(a.listeners&&(n.length||p.length||r.length))for(b={target:f,added:n,removed:p,moved:r},c=a.listeners.length,g=0;g<c;g++)e=a.listeners[g],e.removed||e.callback.call(f,b);x.release(n);x.release(p);x.release(r)},f=this,e=0;e<a.length;e++)b(a[e]);q.clear();u.clear();
v.clear()}};var t;b.isCollection=w;y([r.property()],b.prototype,"length",void 0);y([r.property()],b.prototype,"items",null);return b=t=y([r.subclass("esri.core.Collection")],b)}(r.declared(J,K));return F});