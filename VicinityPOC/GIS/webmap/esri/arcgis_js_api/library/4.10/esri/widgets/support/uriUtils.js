// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/i18n!./nls/uriUtils","../../core/lang"],function(k,d,a,f){function g(a){var b=null;h.some(function(e){e.pattern.test(a)&&(b=e);return!!b});return b}Object.defineProperty(d,"__esModule",{value:!0});var h=[{id:"http",pattern:/^\s*(https?:\/\/([^\s]+))\s*$/i,target:"_blank",label:a.view},{id:"tel",pattern:/^\s*(tel:([^\s]+))\s*$/i,label:"{hierPart}"},{id:"mailto",pattern:/^\s*(mailto:([^\s]+))\s*$/i,label:"{hierPart}"},{id:"arcgis-appstudio-player",pattern:/^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,
label:a.openInApp,appName:"App Studio Player"},{id:"arcgis-collector",pattern:/^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Collector"},{id:"arcgis-explorer",pattern:/^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Explorer"},{id:"arcgis-navigator",pattern:/^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Navigator"},{id:"arcgis-survey123",pattern:/^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Survey123"},{id:"arcgis-trek2there",
pattern:/^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Trek2There"},{id:"arcgis-workforce",pattern:/^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:a.workforce},{id:"iform",pattern:/^\s*(iform:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"iForm"},{id:"flow",pattern:/^\s*(flow:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"FlowFinity"},{id:"lfmobile",pattern:/^\s*(lfmobile:\/\/([^\s]+))\s*$/i,label:a.openInApp,appName:"Laserfische"},{id:"mspbi",pattern:/^\s*(mspbi:\/\/([^\s]+))\s*$/i,
label:a.openInApp,appName:"Microsoft Power Bi"}];d.autoLink=function(a){if("string"!==typeof a||!a)return a;var b=g(a);if(!b)return a;var c=a.match(b.pattern),c=f.substitute({appName:b.appName,hierPart:c&&c[2]},b.label);return a.replace(b.pattern,"\x3ca "+(b.target?'target\x3d"'+b.target+'"':"")+'" href\x3d"$1"\x3e'+c+"\x3c/a\x3e")}});