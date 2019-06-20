// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../webgl-engine/lib/Camera"],function(e,f,b,d){return function(){function c(a){this.view=a;this._renderTargetHelper=null;this.camera=new d;this.sunLight={direction:b.vec3f64.create(),diffuse:{color:b.vec3f64.create(),intensity:1},ambient:{color:b.vec3f64.create(),intensity:1}}}c.prototype.resetWebGLState=function(){null!=this.rctx&&(this.rctx.enforceState(),this._renderTargetHelper&&this._renderTargetHelper.bindFramebuffer())};
c.prototype.bindRenderTarget=function(){if(this._renderTargetHelper){var a=this._renderTargetHelper.framebuffer;a.initialize();this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,a.glName)}};return c}()});