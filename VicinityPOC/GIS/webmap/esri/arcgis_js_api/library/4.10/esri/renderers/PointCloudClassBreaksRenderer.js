// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ../core/accessorSupport/decorators ./PointCloudRenderer ./support/LegendOptions ./support/pointCloud/ColorClassBreakInfo".split(" "),function(n,p,h,k,c,f,b,d,l,m){return function(g){function a(a){a=g.call(this)||this;a.type="point-cloud-class-breaks";a.field=null;a.legendOptions=null;a.fieldTransformType=null;a.colorClassBreakInfos=null;return a}k(a,g);e=a;a.prototype.clone=
function(){return new e(h({},this.cloneProperties(),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:f.clone(this.colorClassBreakInfos),legendOptions:f.clone(this.legendOptions)}))};var e;c([b.enumeration.serializable()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],a.prototype,"type",void 0);c([b.property({json:{write:!0},type:String})],a.prototype,"field",void 0);c([b.property({type:l.default,json:{write:!0}})],a.prototype,"legendOptions",void 0);c([b.property({type:d.fieldTransformTypeKebabDict.apiValues,
json:{type:d.fieldTransformTypeKebabDict.jsonValues,read:d.fieldTransformTypeKebabDict.read,write:d.fieldTransformTypeKebabDict.write}})],a.prototype,"fieldTransformType",void 0);c([b.property({type:[m.default],json:{write:!0}})],a.prototype,"colorClassBreakInfos",void 0);return a=e=c([b.subclass("esri.renderers.PointCloudClassBreaksRenderer")],a)}(b.declared(d))});