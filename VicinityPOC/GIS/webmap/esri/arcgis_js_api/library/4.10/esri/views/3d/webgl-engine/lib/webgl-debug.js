// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define([],function(){function y(a){if(null==m){m={};t={};for(var c in a)"number"==typeof a[c]&&(m[a[c]]=c,t[c]=a[c])}}function z(){if(null==m)throw"WebGLDebugUtils.init(ctx) not called";}function n(a){z();var c=m[a];return void 0!==c?"gl."+c:"/*UNKNOWN WebGL ENUM*/ 0x"+a.toString(16)+""}function p(a,c,e,d){a=D[a];if(void 0!==a&&(a=a[c],void 0!==a&&a[e])){if("object"===typeof a[e]&&void 0!==a[e].enumBitwiseOr){c=a[e].enumBitwiseOr;e=0;a=[];for(var k=0;k<c.length;++k){var l=t[c[k]];0!==(d&l)&&(e|=l,
a.push(n(l)))}return e===d?a.join(" | "):n(d)}return n(d)}return null===d?"null":void 0===d?"undefined":d.toString()}function A(a,c,e){a.__defineGetter__(e,function(){return c[e]});a.__defineSetter__(e,function(a){c[e]=a})}function B(a,c,e,d){function k(a,f){return function(){e&&e(f,arguments);var g=a[f].apply(a,arguments),h=d.getError();0!=h&&(l[h]=!0,c(h,f,arguments));return g}}d=d||a;y(a);c=c||function(a,d,c){for(var f="",g=c.length,e=0;e<g;++e)f+=(0==e?"":", ")+p(d,g,e,c[e]);a="WebGL error "+
n(a)+" in "+d+"("+f+")";window.console&&window.console.error?window.console.error(a):window.console&&window.console.log&&window.console.log(a)};var l={},q={},f;for(f in a)if("function"==typeof a[f])if("getExtension"!=f)q[f]=k(a,f);else{var g=k(a,f);q[f]=function(){var f=g.apply(a,arguments);return B(f,c,e,d)}}else A(q,a,f);q.getError=function(){for(var d in l)if(l.hasOwnProperty(d)&&l[d])return l[d]=!1,d;return a.NO_ERROR};return q}function C(a){var c=a.getParameter(a.MAX_VERTEX_ATTRIBS),e=a.createBuffer();
a.bindBuffer(a.ARRAY_BUFFER,e);for(var d=0;d<c;++d)a.disableVertexAttribArray(d),a.vertexAttribPointer(d,4,a.FLOAT,!1,0,0),a.vertexAttrib1f(d,0);a.deleteBuffer(e);c=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);for(d=0;d<c;++d)a.activeTexture(a.TEXTURE0+d),a.bindTexture(a.TEXTURE_CUBE_MAP,null),a.bindTexture(a.TEXTURE_2D,null);a.activeTexture(a.TEXTURE0);a.useProgram(null);a.bindBuffer(a.ARRAY_BUFFER,null);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);a.bindFramebuffer(a.FRAMEBUFFER,null);a.bindRenderbuffer(a.RENDERBUFFER,
null);a.disable(a.BLEND);a.disable(a.CULL_FACE);a.disable(a.DEPTH_TEST);a.disable(a.DITHER);a.disable(a.SCISSOR_TEST);a.blendColor(0,0,0,0);a.blendEquation(a.FUNC_ADD);a.blendFunc(a.ONE,a.ZERO);a.clearColor(0,0,0,0);a.clearDepth(1);a.clearStencil(-1);a.colorMask(!0,!0,!0,!0);a.cullFace(a.BACK);a.depthFunc(a.LESS);a.depthMask(!0);a.depthRange(0,1);a.frontFace(a.CCW);a.hint(a.GENERATE_MIPMAP_HINT,a.DONT_CARE);a.lineWidth(1);a.pixelStorei(a.PACK_ALIGNMENT,4);a.pixelStorei(a.UNPACK_ALIGNMENT,4);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,
!1);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);a.UNPACK_COLORSPACE_CONVERSION_WEBGL&&a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL);a.polygonOffset(0,0);a.sampleCoverage(1,!1);a.scissor(0,0,a.canvas.width,a.canvas.height);a.stencilFunc(a.ALWAYS,0,4294967295);a.stencilMask(4294967295);a.stencilOp(a.KEEP,a.KEEP,a.KEEP);a.viewport(0,0,a.canvas.width,a.canvas.height);for(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);a.getError(););}var D={enable:{1:{0:!0}},
disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,
6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,
1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,
2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},m=null,t=null;return{init:y,mightBeEnum:function(a){z();return void 0!==m[a]},glEnumToString:n,glFunctionArgToString:p,glFunctionArgsToString:function(a,c){for(var e="",d=c.length,k=0;k<d;++k)e+=(0==k?"":", ")+p(a,d,k,c[k]);return e},makeDebugContext:B,makeLostContextSimulatingCanvas:function(a){function c(a){return"function"==
typeof a?a:function(b){a.handleEvent(b)}}function e(){for(var a=Object.keys(r),b=0;b<a.length;++b)delete r[a]}function d(){++u;h||v==u&&a.loseContext()}function k(a,b){var c=a[b];return function(){d();if(!h)return c.apply(a,arguments)}}function l(a){return{statusMessage:a,preventDefault:function(){w=!0}}}function q(a){for(var b in a)"function"==typeof a[b]?g[b]=k(a,b):A(g,a,b);g.getError=function(){d();if(!h)for(var a;a=f.getError();)r[a]=!0;for(a in r)if(r[a])return delete r[a],a;return g.NO_ERROR};
var c="createBuffer createFramebuffer createProgram createRenderbuffer createShader createTexture".split(" ");for(b=0;b<c.length;++b){var e=c[b];g[e]=function(b){return function(){d();if(h)return null;var c=b.apply(a,arguments);c.__webglDebugContextLostId__=t;p.push(c);return c}}(a[e])}c="getActiveAttrib getActiveUniform getBufferParameter getContextAttributes getAttachedShaders getFramebufferAttachmentParameter getParameter getProgramParameter getProgramInfoLog getRenderbufferParameter getShaderParameter getShaderInfoLog getShaderSource getTexParameter getUniform getUniformLocation getVertexAttrib".split(" ");
for(b=0;b<c.length;++b)e=c[b],g[e]=function(b){return function(){d();return h?null:b.apply(a,arguments)}}(g[e]);c="isBuffer isEnabled isFramebuffer isProgram isRenderbuffer isShader isTexture".split(" ");for(b=0;b<c.length;++b)e=c[b],g[e]=function(b){return function(){d();return h?!1:b.apply(a,arguments)}}(g[e]);g.checkFramebufferStatus=function(b){return function(){d();return h?g.FRAMEBUFFER_UNSUPPORTED:b.apply(a,arguments)}}(g.checkFramebufferStatus);g.getAttribLocation=function(b){return function(){d();
return h?-1:b.apply(a,arguments)}}(g.getAttribLocation);g.getVertexAttribOffset=function(b){return function(){d();return h?0:b.apply(a,arguments)}}(g.getVertexAttribOffset);g.isContextLost=function(){return h};return g}var f,g,m=[],n=[];g={};var t=1,h=!1,p=[],v=0,u=0,w=!1,x=0,r={};a.getContext=function(c){return function(){var b=c.apply(a,arguments);if(b instanceof WebGLRenderingContext){if(b!=f){if(f)throw"got different context";f=b;g=q(f)}return g}return b}}(a.getContext);(function(a){var b=a.addEventListener;
a.addEventListener=function(d,e,f){switch(d){case "webglcontextlost":m.push(c(e));break;case "webglcontextrestored":n.push(c(e));break;default:b.apply(a,arguments)}}})(a);a.loseContext=function(){if(!h){h=!0;v=0;for(++t;f.getError(););e();r[f.CONTEXT_LOST_WEBGL]=!0;var c=l("context lost"),b=m.slice();setTimeout(function(){for(var d=0;d<b.length;++d)b[d](c);0<=x&&setTimeout(function(){a.restoreContext()},x)},0)}};a.restoreContext=function(){h&&n.length&&setTimeout(function(){if(!w)throw"can not restore. webglcontestlost listener did not call event.preventDefault";
for(var a=0;a<p.length;++a){var b=p[a];b instanceof WebGLBuffer?f.deleteBuffer(b):b instanceof WebGLFramebuffer?f.deleteFramebuffer(b):b instanceof WebGLProgram?f.deleteProgram(b):b instanceof WebGLRenderbuffer?f.deleteRenderbuffer(b):b instanceof WebGLShader?f.deleteShader(b):b instanceof WebGLTexture&&f.deleteTexture(b)}C(f);h=!1;u=0;w=!1;for(var a=n.slice(),b=l("context restored"),c=0;c<a.length;++c)a[c](b)},0)};a.loseContextInNCalls=function(a){if(h)throw"You can not ask a lost contet to be lost";
v=u+a};a.getNumCalls=function(){return u};a.setRestoreTimeout=function(a){x=a};return a},resetToInitialState:C}});