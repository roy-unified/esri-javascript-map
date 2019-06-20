// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../Logger","../promiseUtils"],function(k,l,g,e){var h=g.getLogger("esri.core.workers.Connection");return function(){function b(a){this._clientIdx=0;this._clients=a}b.prototype.broadcast=function(a,c,b){for(var d=[],f=0,e=this._clients;f<e.length;f++)d.push(e[f].invoke(a,c,b));return d};b.prototype.close=function(){for(var a=0,c=this._clients;a<c.length;a++)c[a].close();this._clients=[]};b.prototype.getAvailableClient=function(){var a;this._clients.some(function(c){return c.isBusy()?
!1:(a=c,!0)})||(this._clientIdx=(this._clientIdx+1)%this._clients.length,a=this._clients[this._clientIdx]);return a};b.prototype.invoke=function(a,c,b){var d=null;Array.isArray(b)?(h.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),d={transferList:b}):d=b;return this._clients&&this._clients.length?this.getAvailableClient().invoke(a,c,d):e.reject(Error("Connection closed"))};b.prototype.openPorts=function(){return e.all(this._clients.map(function(a){return a.openPort()}))};
return b}()});