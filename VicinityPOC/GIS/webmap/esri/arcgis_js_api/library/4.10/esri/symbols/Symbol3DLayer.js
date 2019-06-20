// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/kebabDictionary ../core/accessorSupport/decorators ./support/ElevationInfo ./support/Symbol3DMaterial".split(" "),function(b,m,f,d,g,h,c,k,l){var e=h.strict()({Icon:"icon",Object:"object",Line:"line",Path:"path",Fill:"fill",Extrude:"extrude",Text:"text"});b=function(b){function a(a){a=b.call(this)||this;a.enabled=!0;a.material=null;a.type=null;return a}f(a,b);a.prototype.writeEnabled=
function(a,b,c){a||(b[c]=a)};d([c.property({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],a.prototype,"enabled",void 0);d([c.writer("enabled")],a.prototype,"writeEnabled",null);d([c.property({type:k,json:{read:!1,write:!1}})],a.prototype,"elevationInfo",void 0);d([c.property({type:l.default,json:{write:!0}})],a.prototype,"material",void 0);d([c.property({type:e.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:e.write}}})],a.prototype,"type",void 0);return a=
d([c.subclass("esri.symbols.Symbol3DLayer")],a)}(c.declared(g));(b||(b={})).typeJSONDictionary=e;return b});