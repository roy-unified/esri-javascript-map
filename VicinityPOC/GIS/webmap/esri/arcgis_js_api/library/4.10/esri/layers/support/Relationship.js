// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/kebabDictionary ../../core/accessorSupport/decorators".split(" "),function(k,l,f,c,g,h,b){var d=h({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"});return function(e){function a(a){a=e.call(this,a)||this;a.cardinality=null;a.id=null;a.keyField=null;a.name=null;a.relatedTableId=null;return a}
f(a,e);c([b.property({json:{read:d.read,write:d.write}})],a.prototype,"cardinality",void 0);c([b.property({json:{read:!0,write:!0}})],a.prototype,"id",void 0);c([b.property({json:{read:!0,write:!0}})],a.prototype,"keyField",void 0);c([b.property({json:{read:!0,write:!0}})],a.prototype,"name",void 0);c([b.property({json:{read:!0,write:!0}})],a.prototype,"relatedTableId",void 0);return a=c([b.subclass("esri.layers.support.Relationship")],a)}(b.declared(g))});