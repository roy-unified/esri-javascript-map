// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/kebabDictionary ../core/accessorSupport/decorators ./support/AuthoringInfo".split(" "),function(l,m,f,c,g,h,b,k){var d=h({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap"},{ignoreUnknown:!0});return function(e){function a(a){a=e.call(this,a)||this;a.authoringInfo=null;a.type=null;return a}f(a,e);a.prototype.getSymbol=function(a,b){};a.prototype.getSymbols=
function(){return[]};c([b.property({type:k,json:{write:!0}})],a.prototype,"authoringInfo",void 0);c([b.property({type:d.apiValues,readOnly:!0,json:{type:d.jsonValues,read:!1,write:{writer:d.write,ignoreOrigin:!0}}})],a.prototype,"type",void 0);return a=c([b.subclass("esri.renderers.Renderer")],a)}(b.declared(g))});