parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CGmd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("react")),r=require("../Contexts/GivingFormProvider"),t=require("../Contexts/FormConfigProvider"),n=u(require("../FormComponents/StyledComponents/FormPanel")),o=require("@emotion/core");function u(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(t,o,u):t[o]=e[o]}return t.default=e,r&&r.set(e,t),t}var a=function(e){return{__html:e}},c=function(u){var i=u.confirmed,s=u.successMessage,c=((0,e.useContext)(r.GivingFormContext).trackingVars,(0,e.useContext)(t.FormConfigContext).clearTimeouts);return i&&c(),i&&(0,o.jsx)(n.default,{className:"success-message",dangerouslySetInnerHTML:a(s)})},f=c;exports.default=f;
},{"react":"n8MK","../Contexts/GivingFormProvider":"zetz","../Contexts/FormConfigProvider":"XmuQ","../FormComponents/StyledComponents/FormPanel":"N4C2","@emotion/core":"haMh"}]},{},[], null)
//# sourceMappingURL=/GivingSuccessMessage.8adcf3b0.js.map