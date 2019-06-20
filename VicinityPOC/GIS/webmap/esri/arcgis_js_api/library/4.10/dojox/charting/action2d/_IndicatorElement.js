//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/declare ../plot2d/Indicator dojo/has ../plot2d/common ../axis2d/common dojox/gfx".split(" "),function(p,x,l,y,w){var v=function(b,a,d){var e,c=b?{x:a[0],y:d[0][0]}:{x:d[0][0],y:a[0]};1<a.length&&(e=b?{x:a[1],y:d[1][0]}:{x:d[1][0],y:a[1]});return[c,e]};l=l("dojox.charting.action2d._IndicatorElement",y,{constructor:function(b,a){a||(a={});this.inter=a.inter},_updateVisibility:function(b,a,d){var e="x"==d?this._hAxis:this._vAxis,c=e.getWindowScale();
this.chart.setAxisWindow(e.name,c,e.getWindowOffset()+(b[d]-a[d])/c);this._noDirty=!0;this.chart.render();this._noDirty=!1;this._initTrack()},_trackMove:function(){this._updateIndicator(this.pageCoord);this._tracker=setTimeout(p.hitch(this,this._trackMove),100)},_initTrack:function(){this._tracker||(this._tracker=setTimeout(p.hitch(this,this._trackMove),500))},stopTrack:function(){this._tracker&&(clearTimeout(this._tracker),this._tracker=null)},render:function(){if(this.isDirty()){var b=this.inter,
a=b.plot,d=b.opt.vertical;this.opt.offset=b.opt.offset||(d?{x:0,y:5}:{x:5,y:0});b.opt.labelFunc&&(this.opt.labelFunc=function(a,c,g,f,h){a=v(d,c,g);return b.opt.labelFunc(a[0],a[1],f,h)});b.opt.fillFunc&&(this.opt.fillFunc=function(a,c,g){a=v(d,c,g);return b.opt.fillFunc(a[0],a[1])});this.opt=p.delegate(b.opt,this.opt);this.pageCoord?(this.opt.values=[],this.opt.labels=this.secondCoord?"trend":"markers"):(this.opt.values=null,this.inter.onChange({}));this.hAxis=a.hAxis;this.vAxis=a.vAxis;this.inherited(arguments)}},
_updateIndicator:function(){var b=this._updateCoordinates(this.pageCoord,this.secondCoord);if(1<b.length){var a=this.opt.vertical;this._data=[];this.opt.values=[];x.forEach(b,function(b){b&&(this.opt.values.push(a?b.x:b.y),this._data.push([a?b.y:b.x]))},this);this.inherited(arguments)}else this.inter.onChange({})},_renderText:function(b,a,d,e,c,g,f,h){this.inter.opt.labels&&this.inherited(arguments);var k=v(this.opt.vertical,f,h);this.inter.onChange({start:k[0],end:k[1],label:a})},_updateCoordinates:function(b,
a){w("dojo-bidi")&&this._checkXCoords(b,a);var d=this.inter,e=d.plot,c=d.opt.vertical,g=this.chart.getAxis(e.hAxis),f=this.chart.getAxis(e.vAxis),h=g.name,k=f.name,l=g.getScaler().bounds,p=f.getScaler().bounds,f=c?"x":"y",g=c?h:k,t=c?l:p;if(a){var m;c?b.x>a.x&&(m=a,a=b,b=m):b.y>a.y&&(m=a,a=b,b=m)}var r=e.toData(b),n;a&&(n=e.toData(a));var q={};q[h]=l.from;q[k]=p.from;m=e.toPage(q);q[h]=l.to;q[k]=p.to;h=e.toPage(q);if(r[g]<t.from){if(n||!d.opt.autoScroll||d.opt.mouseOver){if(d.opt.mouseOver)return[];
b[f]=m[f]}else return this._updateVisibility(b,m,f),[];r=e.toData(b)}else if(r[g]>t.to){if(n||!d.opt.autoScroll||d.opt.mouseOver){if(d.opt.mouseOver)return[];b[f]=h[f]}else return this._updateVisibility(b,h,f),[];r=e.toData(b)}b=this._snapData(r,f,c);var u;if(null==b.y)return[];a&&(n[g]<t.from?(a[f]=m[f],n=e.toData(a)):n[g]>t.to&&(a[f]=h[f],n=e.toData(a)),u=this._snapData(n,f,c),null==u.y&&(u=null));return[b,u]},_snapData:function(b,a,d){var e=this.chart.getSeries(this.inter.opt.series).data,c,g,
f=e.length;for(c=0;c<f;++c)if(g=e[c],null!=g)if("number"==typeof g){if(c+1>b[a])break}else if(g[a]>b[a])break;var h,k;"number"==typeof g?(f=c+1,0<c&&(h=c,k=e[c-1])):(f=g.x,g=g.y,0<c&&(h=e[c-1].x,k=e[c-1].y));0<c&&b[a]<=(d?(f+h)/2:(g+k)/2)&&(f=h,g=k);return{x:f,y:g}},cleanGroup:function(b){this.inherited(arguments);this.group.moveToFront();return this},isDirty:function(){return!this._noDirty&&(this.dirty||this.inter.plot.isDirty())}});w("dojo-bidi")&&l.extend({_checkXCoords:function(b,a){if(this.chart.isRightToLeft()&&
this.isDirty()){var d=function(a,b){return a.chart.dim.width+(a.chart.offsets.l-a.chart.offsets.r)-(b.x-e)+e},e=this.chart.node.offsetLeft;b&&(b.x=d(this,b));a&&(a.x=d(this,a))}}});return l});