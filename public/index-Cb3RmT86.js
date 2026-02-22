var xS=Object.defineProperty;var SS=(t,e,n)=>e in t?xS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var nt=(t,e,n)=>SS(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function MS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yv={exports:{}},Gu={},$v={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),ES=Symbol.for("react.portal"),TS=Symbol.for("react.fragment"),wS=Symbol.for("react.strict_mode"),AS=Symbol.for("react.profiler"),CS=Symbol.for("react.provider"),bS=Symbol.for("react.context"),RS=Symbol.for("react.forward_ref"),PS=Symbol.for("react.suspense"),LS=Symbol.for("react.memo"),DS=Symbol.for("react.lazy"),Bp=Symbol.iterator;function IS(t){return t===null||typeof t!="object"?null:(t=Bp&&t[Bp]||t["@@iterator"],typeof t=="function"?t:null)}var qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kv=Object.assign,Qv={};function _o(t,e,n){this.props=t,this.context=e,this.refs=Qv,this.updater=n||qv}_o.prototype.isReactComponent={};_o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jv(){}Jv.prototype=_o.prototype;function th(t,e,n){this.props=t,this.context=e,this.refs=Qv,this.updater=n||qv}var nh=th.prototype=new Jv;nh.constructor=th;Kv(nh,_o.prototype);nh.isPureReactComponent=!0;var kp=Array.isArray,e1=Object.prototype.hasOwnProperty,ih={current:null},t1={key:!0,ref:!0,__self:!0,__source:!0};function n1(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)e1.call(e,i)&&!t1.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ia,type:t,key:s,ref:o,props:r,_owner:ih.current}}function US(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function NS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vp=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NS(""+t.key):e.toString(36)}function kl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ia:case ES:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xc(o,0):i,kp(r)?(n="",t!=null&&(n=t.replace(Vp,"$&/")+"/"),kl(r,e,n,"",function(u){return u})):r!=null&&(rh(r)&&(r=US(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Vp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",kp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+xc(s,a);o+=kl(s,e,n,l,r)}else if(l=IS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+xc(s,a++),o+=kl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var i=[],r=0;return kl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function FS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},Vl={transition:null},OS={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:Vl,ReactCurrentOwner:ih};$e.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=_o;$e.Fragment=TS;$e.Profiler=AS;$e.PureComponent=th;$e.StrictMode=wS;$e.Suspense=PS;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Kv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ih.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)e1.call(e,l)&&!t1.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:bS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CS,_context:t},t.Consumer=t};$e.createElement=n1;$e.createFactory=function(t){var e=n1.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:RS,render:t}};$e.isValidElement=rh;$e.lazy=function(t){return{$$typeof:DS,_payload:{_status:-1,_result:t},_init:FS}};$e.memo=function(t,e){return{$$typeof:LS,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Vl.transition;Vl.transition={};try{t()}finally{Vl.transition=e}};$e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$e.useCallback=function(t,e){return ln.current.useCallback(t,e)};$e.useContext=function(t){return ln.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};$e.useEffect=function(t,e){return ln.current.useEffect(t,e)};$e.useId=function(){return ln.current.useId()};$e.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return ln.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};$e.useRef=function(t){return ln.current.useRef(t)};$e.useState=function(t){return ln.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return ln.current.useTransition()};$e.version="18.2.0";$v.exports=$e;var ie=$v.exports;const B=MS(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BS=ie,kS=Symbol.for("react.element"),VS=Symbol.for("react.fragment"),zS=Object.prototype.hasOwnProperty,HS=BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GS={key:!0,ref:!0,__self:!0,__source:!0};function i1(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)zS.call(e,i)&&!GS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:kS,type:t,key:s,ref:o,props:r,_owner:HS.current}}Gu.Fragment=VS;Gu.jsx=i1;Gu.jsxs=i1;Yv.exports=Gu;var ve=Yv.exports,Of={},r1={exports:{}},Rn={},s1={exports:{}},o1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,F){var V=I.length;I.push(F);e:for(;0<V;){var Y=V-1>>>1,Q=I[Y];if(0<r(Q,F))I[Y]=F,I[V]=Q,V=Y;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var F=I[0],V=I.pop();if(V!==F){I[0]=V;e:for(var Y=0,Q=I.length,Z=Q>>>1;Y<Z;){var K=2*(Y+1)-1,he=I[K],me=K+1,ye=I[me];if(0>r(he,V))me<Q&&0>r(ye,he)?(I[Y]=ye,I[me]=V,Y=me):(I[Y]=he,I[K]=V,Y=K);else if(me<Q&&0>r(ye,V))I[Y]=ye,I[me]=V,Y=me;else break e}}return F}function r(I,F){var V=I.sortIndex-F.sortIndex;return V!==0?V:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=I)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function x(I){if(y=!1,g(I),!_)if(n(l)!==null)_=!0,z(b);else{var F=n(u);F!==null&&q(x,F.startTime-I)}}function b(I,F){_=!1,y&&(y=!1,h(D),D=-1),p=!0;var V=d;try{for(g(F),f=n(l);f!==null&&(!(f.expirationTime>F)||I&&!W());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,d=f.priorityLevel;var Q=Y(f.expirationTime<=F);F=t.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&i(l),g(F)}else i(l);f=n(l)}if(f!==null)var Z=!0;else{var K=n(u);K!==null&&q(x,K.startTime-F),Z=!1}return Z}finally{f=null,d=V,p=!1}}var C=!1,E=null,D=-1,S=5,T=-1;function W(){return!(t.unstable_now()-T<S)}function $(){if(E!==null){var I=t.unstable_now();T=I;var F=!0;try{F=E(!0,I)}finally{F?te():(C=!1,E=null)}}else C=!1}var te;if(typeof v=="function")te=function(){v($)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,O=L.port2;L.port1.onmessage=$,te=function(){O.postMessage(null)}}else te=function(){m($,0)};function z(I){E=I,C||(C=!0,te())}function q(I,F){D=m(function(){I(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,z(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var V=d;d=F;try{return I()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var V=d;d=I;try{return F()}finally{d=V}},t.unstable_scheduleCallback=function(I,F,V){var Y=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Y+V:Y):V=Y,I){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=V+Q,I={id:c++,callback:F,priorityLevel:I,startTime:V,expirationTime:Q,sortIndex:-1},V>Y?(I.sortIndex=V,e(u,I),n(l)===null&&I===n(u)&&(y?(h(D),D=-1):y=!0,q(x,V-Y))):(I.sortIndex=Q,e(l,I),_||p||(_=!0,z(b))),I},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(I){var F=d;return function(){var V=d;d=F;try{return I.apply(this,arguments)}finally{d=V}}}})(o1);s1.exports=o1;var WS=s1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1=ie,Cn=WS;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l1=new Set,ua={};function is(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(ua[t]=e,t=0;t<e.length;t++)l1.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bf=Object.prototype.hasOwnProperty,jS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zp={},Hp={};function XS(t){return Bf.call(Hp,t)?!0:Bf.call(zp,t)?!1:jS.test(t)?Hp[t]=!0:(zp[t]=!0,!1)}function ZS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YS(t,e,n,i){if(e===null||typeof e>"u"||ZS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var sh=/[\-:]([a-z])/g;function oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sh,oh);Gt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sh,oh);Gt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sh,oh);Gt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function ah(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YS(e,n,r,i)&&(n=null),i||r===null?XS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Oi=a1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),lh=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),u1=Symbol.for("react.provider"),c1=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),zf=Symbol.for("react.suspense_list"),ch=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),f1=Symbol.for("react.offscreen"),Gp=Symbol.iterator;function Ao(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Sc;function Ho(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var Mc=!1;function Ec(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ho(t):""}function $S(t){switch(t.tag){case 5:return Ho(t.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function Hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Ps:return"Portal";case kf:return"Profiler";case lh:return"StrictMode";case Vf:return"Suspense";case zf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c1:return(t.displayName||"Context")+".Consumer";case u1:return(t._context.displayName||"Context")+".Provider";case uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ch:return e=t.displayName||null,e!==null?e:Hf(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return Hf(t(e))}catch{}}return null}function qS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hf(e);case 8:return e===lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function d1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KS(t){var e=d1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=KS(t))}function h1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=d1(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gf(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p1(t,e){e=e.checked,e!=null&&ah(t,"checked",e,!1)}function Wf(t,e){p1(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jf(t,e.type,n):e.hasOwnProperty("defaultValue")&&jf(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jf(t,e,n){(e!=="number"||tu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Go=Array.isArray;function $s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Go(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function m1(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,v1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QS=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(t){QS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zo[e]=Zo[t]})});function _1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zo.hasOwnProperty(t)&&Zo[t]?(""+e).trim():e+"px"}function y1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_1(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var JS=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yf(t,e){if(e){if(JS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function $f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qf=null;function fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kf=null,qs=null,Ks=null;function Yp(t){if(t=Fa(t)){if(typeof Kf!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Yu(e),Kf(t.stateNode,t.type,e))}}function x1(t){qs?Ks?Ks.push(t):Ks=[t]:qs=t}function S1(){if(qs){var t=qs,e=Ks;if(Ks=qs=null,Yp(t),e)for(t=0;t<e.length;t++)Yp(e[t])}}function M1(t,e){return t(e)}function E1(){}var Tc=!1;function T1(t,e,n){if(Tc)return t(e,n);Tc=!0;try{return M1(t,e,n)}finally{Tc=!1,(qs!==null||Ks!==null)&&(E1(),S1())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var i=Yu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Qf=!1;if(Li)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{Qf=!1}function eM(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Yo=!1,nu=null,iu=!1,Jf=null,tM={onError:function(t){Yo=!0,nu=t}};function nM(t,e,n,i,r,s,o,a,l){Yo=!1,nu=null,eM.apply(tM,arguments)}function iM(t,e,n,i,r,s,o,a,l){if(nM.apply(this,arguments),Yo){if(Yo){var u=nu;Yo=!1,nu=null}else throw Error(se(198));iu||(iu=!0,Jf=u)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function w1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $p(t){if(rs(t)!==t)throw Error(se(188))}function rM(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return $p(r),t;if(s===i)return $p(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function A1(t){return t=rM(t),t!==null?C1(t):null}function C1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=C1(t);if(e!==null)return e;t=t.sibling}return null}var b1=Cn.unstable_scheduleCallback,qp=Cn.unstable_cancelCallback,sM=Cn.unstable_shouldYield,oM=Cn.unstable_requestPaint,Et=Cn.unstable_now,aM=Cn.unstable_getCurrentPriorityLevel,dh=Cn.unstable_ImmediatePriority,R1=Cn.unstable_UserBlockingPriority,ru=Cn.unstable_NormalPriority,lM=Cn.unstable_LowPriority,P1=Cn.unstable_IdlePriority,Wu=null,ui=null;function uM(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Wu,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:dM,cM=Math.log,fM=Math.LN2;function dM(t){return t>>>=0,t===0?32:31-(cM(t)/fM|0)|0}var qa=64,Ka=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function su(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Wo(a):(s&=o,s!==0&&(i=Wo(s)))}else o=n&~r,o!==0?i=Wo(o):s!==0&&(i=Wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function hM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=hM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L1(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function mM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function hh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function D1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I1,ph,U1,N1,F1,td=!1,Qa=[],tr=null,nr=null,ir=null,da=new Map,ha=new Map,$i=[],gM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function bo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fa(e),e!==null&&ph(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vM(t,e,n,i,r){switch(e){case"focusin":return tr=bo(tr,t,e,n,i,r),!0;case"dragenter":return nr=bo(nr,t,e,n,i,r),!0;case"mouseover":return ir=bo(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,bo(da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,bo(ha.get(s)||null,t,e,n,i,r)),!0}return!1}function O1(t){var e=kr(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=w1(n),e!==null){t.blockedOn=e,F1(t.priority,function(){U1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qf=i,n.target.dispatchEvent(i),qf=null}else return e=Fa(n),e!==null&&ph(e),t.blockedOn=n,!1;e.shift()}return!0}function Qp(t,e,n){zl(t)&&n.delete(e)}function _M(){td=!1,tr!==null&&zl(tr)&&(tr=null),nr!==null&&zl(nr)&&(nr=null),ir!==null&&zl(ir)&&(ir=null),da.forEach(Qp),ha.forEach(Qp)}function Ro(t,e){t.blockedOn===e&&(t.blockedOn=null,td||(td=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,_M)))}function pa(t){function e(r){return Ro(r,t)}if(0<Qa.length){Ro(Qa[0],t);for(var n=1;n<Qa.length;n++){var i=Qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&Ro(tr,t),nr!==null&&Ro(nr,t),ir!==null&&Ro(ir,t),da.forEach(e),ha.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)O1(n),n.blockedOn===null&&$i.shift()}var Qs=Oi.ReactCurrentBatchConfig,ou=!0;function yM(t,e,n,i){var r=it,s=Qs.transition;Qs.transition=null;try{it=1,mh(t,e,n,i)}finally{it=r,Qs.transition=s}}function xM(t,e,n,i){var r=it,s=Qs.transition;Qs.transition=null;try{it=4,mh(t,e,n,i)}finally{it=r,Qs.transition=s}}function mh(t,e,n,i){if(ou){var r=nd(t,e,n,i);if(r===null)Nc(t,e,i,au,n),Kp(t,i);else if(vM(r,t,e,n,i))i.stopPropagation();else if(Kp(t,i),e&4&&-1<gM.indexOf(t)){for(;r!==null;){var s=Fa(r);if(s!==null&&I1(s),s=nd(t,e,n,i),s===null&&Nc(t,e,i,au,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(t,e,i,null,n)}}var au=null;function nd(t,e,n,i){if(au=null,t=fh(i),t=kr(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=w1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return au=t,null}function B1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aM()){case dh:return 1;case R1:return 4;case ru:case lM:return 16;case P1:return 536870912;default:return 16}default:return 16}}var Ki=null,gh=null,Hl=null;function k1(){if(Hl)return Hl;var t,e=gh,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Hl=r.slice(t,1<i?1-i:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function Jp(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:Jp,this.isPropagationStopped=Jp,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vh=Pn(yo),Na=vt({},yo,{view:0,detail:0}),SM=Pn(Na),Ac,Cc,Po,ju=vt({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_h,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Po&&(Po&&t.type==="mousemove"?(Ac=t.screenX-Po.screenX,Cc=t.screenY-Po.screenY):Cc=Ac=0,Po=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),em=Pn(ju),MM=vt({},ju,{dataTransfer:0}),EM=Pn(MM),TM=vt({},Na,{relatedTarget:0}),bc=Pn(TM),wM=vt({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),AM=Pn(wM),CM=vt({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bM=Pn(CM),RM=vt({},yo,{data:0}),tm=Pn(RM),PM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DM[t])?!!e[t]:!1}function _h(){return IM}var UM=vt({},Na,{key:function(t){if(t.key){var e=PM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_h,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NM=Pn(UM),FM=vt({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=Pn(FM),OM=vt({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_h}),BM=Pn(OM),kM=vt({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),VM=Pn(kM),zM=vt({},ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HM=Pn(zM),GM=[9,13,27,32],yh=Li&&"CompositionEvent"in window,$o=null;Li&&"documentMode"in document&&($o=document.documentMode);var WM=Li&&"TextEvent"in window&&!$o,V1=Li&&(!yh||$o&&8<$o&&11>=$o),im=" ",rm=!1;function z1(t,e){switch(t){case"keyup":return GM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function jM(t,e){switch(t){case"compositionend":return H1(e);case"keypress":return e.which!==32?null:(rm=!0,im);case"textInput":return t=e.data,t===im&&rm?null:t;default:return null}}function XM(t,e){if(Ds)return t==="compositionend"||!yh&&z1(t,e)?(t=k1(),Hl=gh=Ki=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return V1&&e.locale!=="ko"?null:e.data;default:return null}}var ZM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZM[t.type]:e==="textarea"}function G1(t,e,n,i){x1(i),e=lu(e,"onChange"),0<e.length&&(n=new vh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,ma=null;function YM(t){e_(t,0)}function Xu(t){var e=Ns(t);if(h1(e))return t}function $M(t,e){if(t==="change")return e}var W1=!1;if(Li){var Rc;if(Li){var Pc="oninput"in document;if(!Pc){var om=document.createElement("div");om.setAttribute("oninput","return;"),Pc=typeof om.oninput=="function"}Rc=Pc}else Rc=!1;W1=Rc&&(!document.documentMode||9<document.documentMode)}function am(){qo&&(qo.detachEvent("onpropertychange",j1),ma=qo=null)}function j1(t){if(t.propertyName==="value"&&Xu(ma)){var e=[];G1(e,ma,t,fh(t)),T1(YM,e)}}function qM(t,e,n){t==="focusin"?(am(),qo=e,ma=n,qo.attachEvent("onpropertychange",j1)):t==="focusout"&&am()}function KM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xu(ma)}function QM(t,e){if(t==="click")return Xu(e)}function JM(t,e){if(t==="input"||t==="change")return Xu(e)}function eE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:eE;function ga(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bf.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function um(t,e){var n=lm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lm(n)}}function X1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z1(){for(var t=window,e=tu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tu(t.document)}return e}function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tE(t){var e=Z1(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X1(n.ownerDocument.documentElement,n)){if(i!==null&&xh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=um(n,s);var o=um(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nE=Li&&"documentMode"in document&&11>=document.documentMode,Is=null,id=null,Ko=null,rd=!1;function cm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||Is==null||Is!==tu(i)||(i=Is,"selectionStart"in i&&xh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ko&&ga(Ko,i)||(Ko=i,i=lu(id,"onSelect"),0<i.length&&(e=new vh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Is)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Lc={},Y1={};Li&&(Y1=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Zu(t){if(Lc[t])return Lc[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y1)return Lc[t]=e[n];return t}var $1=Zu("animationend"),q1=Zu("animationiteration"),K1=Zu("animationstart"),Q1=Zu("transitionend"),J1=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){J1.set(t,e),is(e,[t])}for(var Dc=0;Dc<fm.length;Dc++){var Ic=fm[Dc],iE=Ic.toLowerCase(),rE=Ic[0].toUpperCase()+Ic.slice(1);yr(iE,"on"+rE)}yr($1,"onAnimationEnd");yr(q1,"onAnimationIteration");yr(K1,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(Q1,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function dm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,iM(i,e,void 0,t),t.currentTarget=null}function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;dm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;dm(r,a,u),s=l}}}if(iu)throw t=Jf,iu=!1,Jf=null,t}function lt(t,e){var n=e[ud];n===void 0&&(n=e[ud]=new Set);var i=t+"__bubble";n.has(i)||(t_(e,t,2,!1),n.add(i))}function Uc(t,e,n){var i=0;e&&(i|=4),t_(n,t,i,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[tl]){t[tl]=!0,l1.forEach(function(n){n!=="selectionchange"&&(sE.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,Uc("selectionchange",!1,e))}}function t_(t,e,n,i){switch(B1(e)){case 1:var r=yM;break;case 4:r=xM;break;default:r=mh}n=r.bind(null,e,n,t),r=void 0,!Qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}T1(function(){var u=s,c=fh(n),f=[];e:{var d=J1.get(t);if(d!==void 0){var p=vh,_=t;switch(t){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":p=NM;break;case"focusin":_="focus",p=bc;break;case"focusout":_="blur",p=bc;break;case"beforeblur":case"afterblur":p=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=EM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=BM;break;case $1:case q1:case K1:p=AM;break;case Q1:p=VM;break;case"scroll":p=SM;break;case"wheel":p=HM;break;case"copy":case"cut":case"paste":p=bM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=nm}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var v=u,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=fa(v,h),x!=null&&y.push(_a(v,x,g)))),m)break;v=v.return}0<y.length&&(d=new p(d,_,null,n,c),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==qf&&(_=n.relatedTarget||n.fromElement)&&(kr(_)||_[Di]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?kr(_):null,_!==null&&(m=rs(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=em,x="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=nm,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:Ns(p),g=_==null?d:Ns(_),d=new y(x,v+"leave",p,n,c),d.target=m,d.relatedTarget=g,x=null,kr(c)===u&&(y=new y(h,v+"enter",_,n,c),y.target=g,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,h=_,v=0,g=y;g;g=ls(g))v++;for(g=0,x=h;x;x=ls(x))g++;for(;0<v-g;)y=ls(y),v--;for(;0<g-v;)h=ls(h),g--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=ls(y),h=ls(h)}y=null}else y=null;p!==null&&hm(f,d,p,y,!1),_!==null&&m!==null&&hm(f,m,_,y,!0)}}e:{if(d=u?Ns(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=$M;else if(sm(d))if(W1)b=JM;else{b=KM;var C=qM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=QM);if(b&&(b=b(t,u))){G1(f,b,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&jf(d,"number",d.value)}switch(C=u?Ns(u):window,t){case"focusin":(sm(C)||C.contentEditable==="true")&&(Is=C,id=u,Ko=null);break;case"focusout":Ko=id=Is=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,cm(f,n,c);break;case"selectionchange":if(nE)break;case"keydown":case"keyup":cm(f,n,c)}var E;if(yh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ds?z1(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(V1&&n.locale!=="ko"&&(Ds||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ds&&(E=k1()):(Ki=c,gh="value"in Ki?Ki.value:Ki.textContent,Ds=!0)),C=lu(u,D),0<C.length&&(D=new tm(D,t,null,n,c),f.push({event:D,listeners:C}),E?D.data=E:(E=H1(n),E!==null&&(D.data=E)))),(E=WM?jM(t,n):XM(t,n))&&(u=lu(u,"onBeforeInput"),0<u.length&&(c=new tm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=E))}e_(f,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fa(t,n),s!=null&&i.unshift(_a(t,s,r)),s=fa(t,e),s!=null&&i.push(_a(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=fa(n,s),l!=null&&o.unshift(_a(n,l,a))):r||(l=fa(n,s),l!=null&&o.push(_a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oE=/\r\n?/g,aE=/\u0000|\uFFFD/g;function pm(t){return(typeof t=="string"?t:""+t).replace(oE,`
`).replace(aE,"")}function nl(t,e,n){if(e=pm(e),pm(t)!==e&&n)throw Error(se(425))}function uu(){}var sd=null,od=null;function ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,lE=typeof clearTimeout=="function"?clearTimeout:void 0,mm=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof mm<"u"?function(t){return mm.resolve(null).then(t).catch(cE)}:ld;function cE(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pa(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),ai="__reactFiber$"+xo,ya="__reactProps$"+xo,Di="__reactContainer$"+xo,ud="__reactEvents$"+xo,fE="__reactListeners$"+xo,dE="__reactHandles$"+xo;function kr(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gm(t);t!==null;){if(n=t[ai])return n;t=gm(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[ai]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Yu(t){return t[ya]||null}var cd=[],Fs=-1;function xr(t){return{current:t}}function ct(t){0>Fs||(t.current=cd[Fs],cd[Fs]=null,Fs--)}function ot(t,e){Fs++,cd[Fs]=t.current,t.current=e}var hr={},Jt=xr(hr),pn=xr(!1),Kr=hr;function ro(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function cu(){ct(pn),ct(Jt)}function vm(t,e,n){if(Jt.current!==hr)throw Error(se(168));ot(Jt,e),ot(pn,n)}function n_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,qS(t)||"Unknown",r));return vt({},n,i)}function fu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Kr=Jt.current,ot(Jt,t),ot(pn,pn.current),!0}function _m(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=n_(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,ct(pn),ct(Jt),ot(Jt,t)):ct(pn),ot(pn,n)}var Mi=null,$u=!1,Oc=!1;function i_(t){Mi===null?Mi=[t]:Mi.push(t)}function hE(t){$u=!0,i_(t)}function Sr(){if(!Oc&&Mi!==null){Oc=!0;var t=0,e=it;try{var n=Mi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,$u=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),b1(dh,Sr),r}finally{it=e,Oc=!1}}return null}var Os=[],Bs=0,du=null,hu=0,Nn=[],Fn=0,Qr=null,Ei=1,Ti="";function Lr(t,e){Os[Bs++]=hu,Os[Bs++]=du,du=t,hu=e}function r_(t,e,n){Nn[Fn++]=Ei,Nn[Fn++]=Ti,Nn[Fn++]=Qr,Qr=t;var i=Ei;t=Ti;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-Jn(e)+r|n<<r|i,Ti=s+t}else Ei=1<<s|n<<r|i,Ti=t}function Sh(t){t.return!==null&&(Lr(t,1),r_(t,1,0))}function Mh(t){for(;t===du;)du=Os[--Bs],Os[Bs]=null,hu=Os[--Bs],Os[Bs]=null;for(;t===Qr;)Qr=Nn[--Fn],Nn[Fn]=null,Ti=Nn[--Fn],Nn[Fn]=null,Ei=Nn[--Fn],Nn[Fn]=null}var An=null,wn=null,ft=!1,qn=null;function s_(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ym(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,wn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,wn=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dd(t){if(ft){var e=wn;if(e){var n=e;if(!ym(t,e)){if(fd(t))throw Error(se(418));e=rr(n.nextSibling);var i=An;e&&ym(t,e)?s_(i,n):(t.flags=t.flags&-4097|2,ft=!1,An=t)}}else{if(fd(t))throw Error(se(418));t.flags=t.flags&-4097|2,ft=!1,An=t}}}function xm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function il(t){if(t!==An)return!1;if(!ft)return xm(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ad(t.type,t.memoizedProps)),e&&(e=wn)){if(fd(t))throw o_(),Error(se(418));for(;e;)s_(t,e),e=rr(e.nextSibling)}if(xm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=An?rr(t.stateNode.nextSibling):null;return!0}function o_(){for(var t=wn;t;)t=rr(t.nextSibling)}function so(){wn=An=null,ft=!1}function Eh(t){qn===null?qn=[t]:qn.push(t)}var pE=Oi.ReactCurrentBatchConfig;function Yn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var pu=xr(null),mu=null,ks=null,Th=null;function wh(){Th=ks=mu=null}function Ah(t){var e=pu.current;ct(pu),t._currentValue=e}function hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){mu=t,Th=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(Th!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(mu===null)throw Error(se(308));ks=t,mu.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Vr=null;function Ch(t){Vr===null?Vr=[t]:Vr.push(t)}function a_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ch(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,Ch(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function Wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hh(t,n)}}function Sm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gu(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=vt({},f,d);break e;case 2:Xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=f}}function Mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var u_=new a1.Component().refs;function pd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qu={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=ar(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ei(e,t,r,i),Wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=ar(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ei(e,t,r,i),Wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=ar(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(ei(e,t,i,n),Wl(e,t,i))}};function Em(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,i)||!ga(r,s):!0}function c_(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=mn(e)?Kr:Jt.current,i=e.contextTypes,s=(i=i!=null)?ro(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&qu.enqueueReplaceState(e,e.state,null)}function md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=u_,bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=mn(e)?Kr:Jt.current,r.context=ro(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&qu.enqueueReplaceState(r,r.state,null),gu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===u_&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wm(t){var e=t._init;return e(t._payload)}function f_(t){function e(h,v){if(t){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=lr(h,v),h.index=0,h.sibling=null,h}function s(h,v,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,g,x){return v===null||v.tag!==6?(v=Wc(g,h.mode,x),v.return=h,v):(v=r(v,g),v.return=h,v)}function l(h,v,g,x){var b=g.type;return b===Ls?c(h,v,g.props.children,x,g.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ji&&wm(b)===v.type)?(x=r(v,g.props),x.ref=Lo(h,v,g),x.return=h,x):(x=ql(g.type,g.key,g.props,null,h.mode,x),x.ref=Lo(h,v,g),x.return=h,x)}function u(h,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=jc(g,h.mode,x),v.return=h,v):(v=r(v,g.children||[]),v.return=h,v)}function c(h,v,g,x,b){return v===null||v.tag!==7?(v=jr(g,h.mode,x,b),v.return=h,v):(v=r(v,g),v.return=h,v)}function f(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wc(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Za:return g=ql(v.type,v.key,v.props,null,h.mode,g),g.ref=Lo(h,null,v),g.return=h,g;case Ps:return v=jc(v,h.mode,g),v.return=h,v;case ji:var x=v._init;return f(h,x(v._payload),g)}if(Go(v)||Ao(v))return v=jr(v,h.mode,g,null),v.return=h,v;rl(h,v)}return null}function d(h,v,g,x){var b=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(h,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Za:return g.key===b?l(h,v,g,x):null;case Ps:return g.key===b?u(h,v,g,x):null;case ji:return b=g._init,d(h,v,b(g._payload),x)}if(Go(g)||Ao(g))return b!==null?null:c(h,v,g,x,null);rl(h,g)}return null}function p(h,v,g,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,a(v,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:return h=h.get(x.key===null?g:x.key)||null,l(v,h,x,b);case Ps:return h=h.get(x.key===null?g:x.key)||null,u(v,h,x,b);case ji:var C=x._init;return p(h,v,g,C(x._payload),b)}if(Go(x)||Ao(x))return h=h.get(g)||null,c(v,h,x,b,null);rl(v,x)}return null}function _(h,v,g,x){for(var b=null,C=null,E=v,D=v=0,S=null;E!==null&&D<g.length;D++){E.index>D?(S=E,E=null):S=E.sibling;var T=d(h,E,g[D],x);if(T===null){E===null&&(E=S);break}t&&E&&T.alternate===null&&e(h,E),v=s(T,v,D),C===null?b=T:C.sibling=T,C=T,E=S}if(D===g.length)return n(h,E),ft&&Lr(h,D),b;if(E===null){for(;D<g.length;D++)E=f(h,g[D],x),E!==null&&(v=s(E,v,D),C===null?b=E:C.sibling=E,C=E);return ft&&Lr(h,D),b}for(E=i(h,E);D<g.length;D++)S=p(E,h,D,g[D],x),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?D:S.key),v=s(S,v,D),C===null?b=S:C.sibling=S,C=S);return t&&E.forEach(function(W){return e(h,W)}),ft&&Lr(h,D),b}function y(h,v,g,x){var b=Ao(g);if(typeof b!="function")throw Error(se(150));if(g=b.call(g),g==null)throw Error(se(151));for(var C=b=null,E=v,D=v=0,S=null,T=g.next();E!==null&&!T.done;D++,T=g.next()){E.index>D?(S=E,E=null):S=E.sibling;var W=d(h,E,T.value,x);if(W===null){E===null&&(E=S);break}t&&E&&W.alternate===null&&e(h,E),v=s(W,v,D),C===null?b=W:C.sibling=W,C=W,E=S}if(T.done)return n(h,E),ft&&Lr(h,D),b;if(E===null){for(;!T.done;D++,T=g.next())T=f(h,T.value,x),T!==null&&(v=s(T,v,D),C===null?b=T:C.sibling=T,C=T);return ft&&Lr(h,D),b}for(E=i(h,E);!T.done;D++,T=g.next())T=p(E,h,D,T.value,x),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?D:T.key),v=s(T,v,D),C===null?b=T:C.sibling=T,C=T);return t&&E.forEach(function($){return e(h,$)}),ft&&Lr(h,D),b}function m(h,v,g,x){if(typeof g=="object"&&g!==null&&g.type===Ls&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Za:e:{for(var b=g.key,C=v;C!==null;){if(C.key===b){if(b=g.type,b===Ls){if(C.tag===7){n(h,C.sibling),v=r(C,g.props.children),v.return=h,h=v;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ji&&wm(b)===C.type){n(h,C.sibling),v=r(C,g.props),v.ref=Lo(h,C,g),v.return=h,h=v;break e}n(h,C);break}else e(h,C);C=C.sibling}g.type===Ls?(v=jr(g.props.children,h.mode,x,g.key),v.return=h,h=v):(x=ql(g.type,g.key,g.props,null,h.mode,x),x.ref=Lo(h,v,g),x.return=h,h=x)}return o(h);case Ps:e:{for(C=g.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(h,v.sibling),v=r(v,g.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=jc(g,h.mode,x),v.return=h,h=v}return o(h);case ji:return C=g._init,m(h,v,C(g._payload),x)}if(Go(g))return _(h,v,g,x);if(Ao(g))return y(h,v,g,x);rl(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,g),v.return=h,h=v):(n(h,v),v=Wc(g,h.mode,x),v.return=h,h=v),o(h)):n(h,v)}return m}var oo=f_(!0),d_=f_(!1),Oa={},ci=xr(Oa),xa=xr(Oa),Sa=xr(Oa);function zr(t){if(t===Oa)throw Error(se(174));return t}function Rh(t,e){switch(ot(Sa,e),ot(xa,t),ot(ci,Oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zf(e,t)}ct(ci),ot(ci,e)}function ao(){ct(ci),ct(xa),ct(Sa)}function h_(t){zr(Sa.current);var e=zr(ci.current),n=Zf(e,t.type);e!==n&&(ot(xa,t),ot(ci,n))}function Ph(t){xa.current===t&&(ct(ci),ct(xa))}var pt=xr(0);function vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function Lh(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var jl=Oi.ReactCurrentDispatcher,kc=Oi.ReactCurrentBatchConfig,Jr=0,gt=null,Ct=null,Nt=null,_u=!1,Qo=!1,Ma=0,mE=0;function jt(){throw Error(se(321))}function Dh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function Ih(t,e,n,i,r,s){if(Jr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=t===null||t.memoizedState===null?yE:xE,t=n(i,r),Qo){s=0;do{if(Qo=!1,Ma=0,25<=s)throw Error(se(301));s+=1,Nt=Ct=null,e.updateQueue=null,jl.current=SE,t=n(i,r)}while(Qo)}if(jl.current=yu,e=Ct!==null&&Ct.next!==null,Jr=0,Nt=Ct=gt=null,_u=!1,e)throw Error(se(300));return t}function Uh(){var t=Ma!==0;return Ma=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Gn(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Nt===null?gt.memoizedState:Nt.next;if(e!==null)Nt=e,Ct=t;else{if(t===null)throw Error(se(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Ea(t,e){return typeof e=="function"?e(t):e}function Vc(t){var e=Gn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=c,es|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=Gn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function p_(){}function m_(t,e){var n=gt,i=Gn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Nh(__.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ta(9,v_.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(se(349));Jr&30||g_(n,e,r)}return r}function g_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v_(t,e,n,i){e.value=n,e.getSnapshot=i,y_(e)&&x_(t)}function __(t,e,n){return n(function(){y_(e)&&x_(t)})}function y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function x_(t){var e=Ii(t,1);e!==null&&ei(e,t,1,-1)}function Am(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=_E.bind(null,gt,t),[e.memoizedState,t]}function Ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function S_(){return Gn().memoizedState}function Xl(t,e,n,i){var r=si();gt.flags|=t,r.memoizedState=Ta(1|e,n,void 0,i===void 0?null:i)}function Ku(t,e,n,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Dh(i,o.deps)){r.memoizedState=Ta(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Ta(1|e,n,s,i)}function Cm(t,e){return Xl(8390656,8,t,e)}function Nh(t,e){return Ku(2048,8,t,e)}function M_(t,e){return Ku(4,2,t,e)}function E_(t,e){return Ku(4,4,t,e)}function T_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w_(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4,4,T_.bind(null,e,t),n)}function Fh(){}function A_(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function C_(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function b_(t,e,n){return Jr&21?(ni(n,e)||(n=L1(),gt.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function gE(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{it=n,kc.transition=i}}function R_(){return Gn().memoizedState}function vE(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},P_(t))L_(e,n);else if(n=a_(t,e,n,i),n!==null){var r=an();ei(n,t,i,r),D_(n,e,i)}}function _E(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(P_(t))L_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,Ch(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=a_(t,e,r,i),n!==null&&(r=an(),ei(n,t,i,r),D_(n,e,i))}}function P_(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function L_(t,e){Qo=_u=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hh(t,n)}}var yu={readContext:Hn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},yE={readContext:Hn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:Cm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,T_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vE.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:Am,useDebugValue:Fh,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=Am(!1),e=t[0];return t=gE.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=si();if(ft){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Bt===null)throw Error(se(349));Jr&30||g_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Cm(__.bind(null,i,s,t),[t]),i.flags|=2048,Ta(9,v_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Bt.identifierPrefix;if(ft){var n=Ti,i=Ei;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xE={readContext:Hn,useCallback:A_,useContext:Hn,useEffect:Nh,useImperativeHandle:w_,useInsertionEffect:M_,useLayoutEffect:E_,useMemo:C_,useReducer:Vc,useRef:S_,useState:function(){return Vc(Ea)},useDebugValue:Fh,useDeferredValue:function(t){var e=Gn();return b_(e,Ct.memoizedState,t)},useTransition:function(){var t=Vc(Ea)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:p_,useSyncExternalStore:m_,useId:R_,unstable_isNewReconciler:!1},SE={readContext:Hn,useCallback:A_,useContext:Hn,useEffect:Nh,useImperativeHandle:w_,useInsertionEffect:M_,useLayoutEffect:E_,useMemo:C_,useReducer:zc,useRef:S_,useState:function(){return zc(Ea)},useDebugValue:Fh,useDeferredValue:function(t){var e=Gn();return Ct===null?e.memoizedState=t:b_(e,Ct.memoizedState,t)},useTransition:function(){var t=zc(Ea)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:p_,useSyncExternalStore:m_,useId:R_,unstable_isNewReconciler:!1};function lo(t,e){try{var n="",i=e;do n+=$S(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ME=typeof WeakMap=="function"?WeakMap:Map;function I_(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Su||(Su=!0,Ad=i),gd(t,e)},n}function U_(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gd(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ME;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=FE.bind(null,t,e,n),e.then(t,t))}function Rm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var EE=Oi.ReactCurrentOwner,dn=!1;function sn(t,e,n,i){e.child=t===null?d_(e,null,n,i):oo(e,t.child,n,i)}function Lm(t,e,n,i,r){n=n.render;var s=e.ref;return Js(e,r),i=Ih(t,e,n,i,s,r),n=Uh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(ft&&n&&Sh(e),e.flags|=1,sn(t,e,i,r),e.child)}function Dm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Wh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,N_(t,e,s,i,r)):(t=ql(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function N_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ga(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return vd(t,e,n,i,r)}function F_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(zs,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(zs,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(zs,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(zs,En),En|=i;return sn(t,e,r,n),e.child}function O_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vd(t,e,n,i,r){var s=mn(n)?Kr:Jt.current;return s=ro(e,s),Js(e,r),n=Ih(t,e,n,i,s,r),i=Uh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(ft&&i&&Sh(e),e.flags|=1,sn(t,e,n,r),e.child)}function Im(t,e,n,i,r){if(mn(n)){var s=!0;fu(e)}else s=!1;if(Js(e,r),e.stateNode===null)Zl(t,e),c_(e,n,i),md(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Hn(u):(u=mn(n)?Kr:Jt.current,u=ro(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Tm(e,o,i,u),Xi=!1;var d=e.memoizedState;o.state=d,gu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||pn.current||Xi?(typeof c=="function"&&(pd(e,n,c,i),l=e.memoizedState),(a=Xi||Em(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,l_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=mn(n)?Kr:Jt.current,l=ro(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Tm(e,o,i,l),Xi=!1,d=e.memoizedState,o.state=d,gu(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||pn.current||Xi?(typeof p=="function"&&(pd(e,n,p,i),_=e.memoizedState),(u=Xi||Em(e,n,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return _d(t,e,n,i,s,r)}function _d(t,e,n,i,r,s){O_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&_m(e,n,!1),Ui(t,e,s);i=e.stateNode,EE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&_m(e,n,!0),e.child}function B_(t){var e=t.stateNode;e.pendingContext?vm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vm(t,e.context,!1),Rh(t,e.containerInfo)}function Um(t,e,n,i,r){return so(),Eh(r),e.flags|=256,sn(t,e,n,i),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function k_(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return dd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ec(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xd(n),e.memoizedState=yd,t):Oh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return TE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yd,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Oh(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,i){return i!==null&&Eh(i),oo(e,t.child,null,n),t=Oh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Hc(Error(se(422))),sl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ec({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=xd(o),e.memoizedState=yd,s);if(!(e.mode&1))return sl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Hc(s,i,void 0),sl(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),ei(i,t,r,-1))}return Gh(),i=Hc(Error(se(421))),sl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=OE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=rr(r.nextSibling),An=e,ft=!0,qn=null,t!==null&&(Nn[Fn++]=Ei,Nn[Fn++]=Ti,Nn[Fn++]=Qr,Ei=t.id,Ti=t.overflow,Qr=e),e=Oh(e,i.children),e.flags|=4096,e)}function Nm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hd(t.return,e,n)}function Gc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function V_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nm(t,n,e);else if(t.tag===19)Nm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gc(e,!0,n,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wE(t,e,n){switch(e.tag){case 3:B_(e),so();break;case 5:h_(e);break;case 1:mn(e.type)&&fu(e);break;case 4:Rh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(pu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?k_(t,e,n):(ot(pt,pt.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return V_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,F_(t,e,n)}return Ui(t,e,n)}var z_,Sd,H_,G_;z_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};H_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(ci.current);var s=null;switch(n){case"input":r=Gf(t,r),i=Gf(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Xf(t,r),i=Xf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=uu)}Yf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};G_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Do(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function AE(t,e,n){var i=e.pendingProps;switch(Mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return mn(e.type)&&cu(),Xt(e),null;case 3:return i=e.stateNode,ao(),ct(pn),ct(Jt),Lh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Rd(qn),qn=null))),Sd(t,e),Xt(e),null;case 5:Ph(e);var r=zr(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)H_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Xt(e),null}if(t=zr(ci.current),il(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[ya]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<jo.length;r++)lt(jo[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Wp(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":Xp(i,s),lt("invalid",i)}Yf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,t),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":Ya(i),jp(i,s,!0);break;case"textarea":Ya(i),Zp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=uu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ai]=e,t[ya]=i,z_(t,e,!1,!1),e.stateNode=t;e:{switch(o=$f(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<jo.length;r++)lt(jo[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Wp(t,i),r=Gf(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Xp(t,i),r=Xf(t,i),lt("invalid",t);break;default:r=i}Yf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?y1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&ah(t,s,l,o))}switch(n){case"input":Ya(t),jp(t,i,!1);break;case"textarea":Ya(t),Zp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?$s(t,!!i.multiple,s,!1):i.defaultValue!=null&&$s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=uu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)G_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=zr(Sa.current),zr(ci.current),il(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:nl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Xt(e),null;case 13:if(ct(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&wn!==null&&e.mode&1&&!(e.flags&128))o_(),so(),e.flags|=98560,s=!1;else if(s=il(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ai]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else qn!==null&&(Rd(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?bt===0&&(bt=3):Gh())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return ao(),Sd(t,e),t===null&&va(e.stateNode.containerInfo),Xt(e),null;case 10:return Ah(e.type._context),Xt(e),null;case 17:return mn(e.type)&&cu(),Xt(e),null;case 19:if(ct(pt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Do(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vu(t),o!==null){for(e.flags|=128,Do(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>uo&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304)}else{if(!i)if(t=vu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Xt(e),null}else 2*Et()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Hh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function CE(t,e){switch(Mh(e),e.tag){case 1:return mn(e.type)&&cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),ct(pn),ct(Jt),Lh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ph(e),null;case 13:if(ct(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(pt),null;case 4:return ao(),null;case 10:return Ah(e.type._context),null;case 22:case 23:return Hh(),null;case 24:return null;default:return null}}var ol=!1,Kt=!1,bE=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Md(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Fm=!1;function RE(t,e){if(sd=ou,t=Z1(),xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:t,selectionRange:n},ou=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(x){yt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return _=Fm,Fm=!1,_}function Jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Md(e,n,s)}r=r.next}while(r!==i)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W_(t){var e=t.alternate;e!==null&&(t.alternate=null,W_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[ya],delete e[ud],delete e[fE],delete e[dE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function j_(t){return t.tag===5||t.tag===3||t.tag===4}function Om(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||j_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uu));else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}var Vt=null,$n=!1;function Bi(t,e,n){for(n=n.child;n!==null;)X_(t,e,n),n=n.sibling}function X_(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Wu,n)}catch{}switch(n.tag){case 5:Kt||Vs(n,e);case 6:var i=Vt,r=$n;Vt=null,Bi(t,e,n),Vt=i,$n=r,Vt!==null&&($n?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&($n?(t=Vt,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),pa(t)):Fc(Vt,n.stateNode));break;case 4:i=Vt,r=$n,Vt=n.stateNode.containerInfo,$n=!0,Bi(t,e,n),Vt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Md(n,e,o),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Kt&&(Vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Bi(t,e,n),Kt=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function Bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bE),e.forEach(function(i){var r=BE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,$n=!1;break e;case 3:Vt=a.stateNode.containerInfo,$n=!0;break e;case 4:Vt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Vt===null)throw Error(se(160));X_(s,o,r),Vt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Z_(e,t),e=e.sibling}function Z_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),ri(t),i&4){try{Jo(3,t,t.return),Qu(3,t)}catch(y){yt(t,t.return,y)}try{Jo(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Wn(e,t),ri(t),i&512&&n!==null&&Vs(n,n.return);break;case 5:if(Wn(e,t),ri(t),i&512&&n!==null&&Vs(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&p1(r,s),$f(a,o);var u=$f(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?y1(r,f):c==="dangerouslySetInnerHTML"?v1(r,f):c==="children"?ca(r,f):ah(r,c,f,u)}switch(a){case"input":Wf(r,s);break;case"textarea":m1(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?$s(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?$s(r,!!s.multiple,s.defaultValue,!0):$s(r,!!s.multiple,s.multiple?[]:"",!1))}r[ya]=s}catch(y){yt(t,t.return,y)}}break;case 6:if(Wn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){yt(t,t.return,y)}}break;case 3:if(Wn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Wn(e,t),ri(t);break;case 13:Wn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vh=Et())),i&4&&Bm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(u=Kt)||c,Wn(e,t),Kt=u):Wn(e,t),ri(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(_e=t,c=t.child;c!==null;){for(f=_e=c;_e!==null;){switch(d=_e,p=d.child,d.tag){case 0:case 11:case 14:case 15:Jo(4,d,d.return);break;case 1:Vs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:Vs(d,d.return);break;case 22:if(d.memoizedState!==null){Vm(f);continue}}p!==null?(p.return=d,_e=p):Vm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_1("display",o))}catch(y){yt(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){yt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Wn(e,t),ri(t),i&4&&Bm(t);break;case 21:break;default:Wn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(j_(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=Om(t);wd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Om(t);Td(t,a,o);break;default:throw Error(se(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PE(t,e,n){_e=t,Y_(t)}function Y_(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ol;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=ol;var u=Kt;if(ol=o,(Kt=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?zm(r):l!==null?(l.return=o,_e=l):zm(r);for(;s!==null;)_e=s,Y_(s),s=s.sibling;_e=r,ol=a,Kt=u}km(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):km(t)}}function km(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Qu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&pa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Kt||e.flags&512&&Ed(e)}catch(d){yt(e,e.return,d)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Vm(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function zm(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Ed(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Ed(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var LE=Math.ceil,xu=Oi.ReactCurrentDispatcher,Bh=Oi.ReactCurrentOwner,Vn=Oi.ReactCurrentBatchConfig,Je=0,Bt=null,wt=null,Ht=0,En=0,zs=xr(0),bt=0,wa=null,es=0,Ju=0,kh=0,ea=null,cn=null,Vh=0,uo=1/0,Si=null,Su=!1,Ad=null,or=null,al=!1,Qi=null,Mu=0,ta=0,Cd=null,Yl=-1,$l=0;function an(){return Je&6?Et():Yl!==-1?Yl:Yl=Et()}function ar(t){return t.mode&1?Je&2&&Ht!==0?Ht&-Ht:pE.transition!==null?($l===0&&($l=L1()),$l):(t=it,t!==0||(t=window.event,t=t===void 0?16:B1(t.type)),t):1}function ei(t,e,n,i){if(50<ta)throw ta=0,Cd=null,Error(se(185));Ua(t,n,i),(!(Je&2)||t!==Bt)&&(t===Bt&&(!(Je&2)&&(Ju|=n),bt===4&&qi(t,Ht)),gn(t,i),n===1&&Je===0&&!(e.mode&1)&&(uo=Et()+500,$u&&Sr()))}function gn(t,e){var n=t.callbackNode;pM(t,e);var i=su(t,t===Bt?Ht:0);if(i===0)n!==null&&qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qp(n),e===1)t.tag===0?hE(Hm.bind(null,t)):i_(Hm.bind(null,t)),uE(function(){!(Je&6)&&Sr()}),n=null;else{switch(D1(i)){case 1:n=dh;break;case 4:n=R1;break;case 16:n=ru;break;case 536870912:n=P1;break;default:n=ru}n=ny(n,$_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $_(t,e){if(Yl=-1,$l=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var i=su(t,t===Bt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Eu(t,i);else{e=i;var r=Je;Je|=2;var s=K_();(Bt!==t||Ht!==e)&&(Si=null,uo=Et()+500,Wr(t,e));do try{UE();break}catch(a){q_(t,a)}while(!0);wh(),xu.current=s,Je=r,wt!==null?e=0:(Bt=null,Ht=0,e=bt)}if(e!==0){if(e===2&&(r=ed(t),r!==0&&(i=r,e=bd(t,r))),e===1)throw n=wa,Wr(t,0),qi(t,i),gn(t,Et()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!DE(r)&&(e=Eu(t,i),e===2&&(s=ed(t),s!==0&&(i=s,e=bd(t,s))),e===1))throw n=wa,Wr(t,0),qi(t,i),gn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Dr(t,cn,Si);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=Vh+500-Et(),10<e)){if(su(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ld(Dr.bind(null,t,cn,Si),e);break}Dr(t,cn,Si);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*LE(i/1960))-i,10<i){t.timeoutHandle=ld(Dr.bind(null,t,cn,Si),i);break}Dr(t,cn,Si);break;case 5:Dr(t,cn,Si);break;default:throw Error(se(329))}}}return gn(t,Et()),t.callbackNode===n?$_.bind(null,t):null}function bd(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=Eu(t,e),t!==2&&(e=cn,cn=n,e!==null&&Rd(e)),t}function Rd(t){cn===null?cn=t:cn.push.apply(cn,t)}function DE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~kh,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function Hm(t){if(Je&6)throw Error(se(327));eo();var e=su(t,0);if(!(e&1))return gn(t,Et()),null;var n=Eu(t,e);if(t.tag!==0&&n===2){var i=ed(t);i!==0&&(e=i,n=bd(t,i))}if(n===1)throw n=wa,Wr(t,0),qi(t,e),gn(t,Et()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,cn,Si),gn(t,Et()),null}function zh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(uo=Et()+500,$u&&Sr())}}function ts(t){Qi!==null&&Qi.tag===0&&!(Je&6)&&eo();var e=Je;Je|=1;var n=Vn.transition,i=it;try{if(Vn.transition=null,it=1,t)return t()}finally{it=i,Vn.transition=n,Je=e,!(Je&6)&&Sr()}}function Hh(){En=zs.current,ct(zs)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lE(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Mh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cu();break;case 3:ao(),ct(pn),ct(Jt),Lh();break;case 5:Ph(i);break;case 4:ao();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:Ah(i.type._context);break;case 22:case 23:Hh()}n=n.return}if(Bt=t,wt=t=lr(t.current,null),Ht=En=e,bt=0,wa=null,kh=Ju=es=0,cn=ea=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function q_(t,e){do{var n=wt;try{if(wh(),jl.current=yu,_u){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_u=!1}if(Jr=0,Nt=Ct=gt=null,Qo=!1,Ma=0,Bh.current=null,n===null||n.return===null){bt=1,wa=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Rm(o);if(p!==null){p.flags&=-257,Pm(p,o,a,s,e),p.mode&1&&bm(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){bm(s,u,e),Gh();break e}l=Error(se(426))}}else if(ft&&a.mode&1){var m=Rm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Pm(m,o,a,s,e),Eh(lo(l,a));break e}}s=l=lo(l,a),bt!==4&&(bt=2),ea===null?ea=[s]:ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=I_(s,l,e);Sm(s,h);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(or===null||!or.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=U_(s,a,e);Sm(s,x);break e}}s=s.return}while(s!==null)}J_(n)}catch(b){e=b,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function K_(){var t=xu.current;return xu.current=yu,t===null?yu:t}function Gh(){(bt===0||bt===3||bt===2)&&(bt=4),Bt===null||!(es&268435455)&&!(Ju&268435455)||qi(Bt,Ht)}function Eu(t,e){var n=Je;Je|=2;var i=K_();(Bt!==t||Ht!==e)&&(Si=null,Wr(t,e));do try{IE();break}catch(r){q_(t,r)}while(!0);if(wh(),Je=n,xu.current=i,wt!==null)throw Error(se(261));return Bt=null,Ht=0,bt}function IE(){for(;wt!==null;)Q_(wt)}function UE(){for(;wt!==null&&!sM();)Q_(wt)}function Q_(t){var e=ty(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?J_(t):wt=e,Bh.current=null}function J_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CE(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,wt=null;return}}else if(n=AE(n,e,En),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);bt===0&&(bt=5)}function Dr(t,e,n){var i=it,r=Vn.transition;try{Vn.transition=null,it=1,NE(t,e,n,i)}finally{Vn.transition=r,it=i}return null}function NE(t,e,n,i){do eo();while(Qi!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mM(t,s),t===Bt&&(wt=Bt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,ny(ru,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var o=it;it=1;var a=Je;Je|=4,Bh.current=null,RE(t,n),Z_(n,t),tE(od),ou=!!sd,od=sd=null,t.current=n,PE(n),oM(),Je=a,it=o,Vn.transition=s}else t.current=n;if(al&&(al=!1,Qi=t,Mu=r),s=t.pendingLanes,s===0&&(or=null),uM(n.stateNode),gn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Su)throw Su=!1,t=Ad,Ad=null,t;return Mu&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===Cd?ta++:(ta=0,Cd=t):ta=0,Sr(),null}function eo(){if(Qi!==null){var t=D1(Mu),e=Vn.transition,n=it;try{if(Vn.transition=null,it=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,Mu=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:Jo(8,c,s)}var f=c.child;if(f!==null)f.return=c,_e=f;else for(;_e!==null;){c=_e;var d=c.sibling,p=c.return;if(W_(c),c===u){_e=null;break}if(d!==null){d.return=p,_e=d;break}_e=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,_e=h;break e}_e=s.return}}var v=t.current;for(_e=v;_e!==null;){o=_e;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,_e=g;else e:for(o=v;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qu(9,a)}}catch(b){yt(a,a.return,b)}if(a===o){_e=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,_e=x;break e}_e=a.return}}if(Je=r,Sr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Wu,t)}catch{}i=!0}return i}finally{it=n,Vn.transition=e}}return!1}function Gm(t,e,n){e=lo(n,e),e=I_(t,e,1),t=sr(t,e,1),e=an(),t!==null&&(Ua(t,1,e),gn(t,e))}function yt(t,e,n){if(t.tag===3)Gm(t,t,n);else for(;e!==null;){if(e.tag===3){Gm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=lo(n,t),t=U_(e,t,1),e=sr(e,t,1),t=an(),e!==null&&(Ua(e,1,t),gn(e,t));break}}e=e.return}}function FE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Ht&n)===n&&(bt===4||bt===3&&(Ht&130023424)===Ht&&500>Et()-Vh?Wr(t,0):kh|=n),gn(t,e)}function ey(t,e){e===0&&(t.mode&1?(e=Ka,Ka<<=1,!(Ka&130023424)&&(Ka=4194304)):e=1);var n=an();t=Ii(t,e),t!==null&&(Ua(t,e,n),gn(t,n))}function OE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ey(t,n)}function BE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),ey(t,n)}var ty;ty=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,wE(t,e,n);dn=!!(t.flags&131072)}else dn=!1,ft&&e.flags&1048576&&r_(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zl(t,e),t=e.pendingProps;var r=ro(e,Jt.current);Js(e,n),r=Ih(null,e,i,t,r,n);var s=Uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,fu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=qu,e.stateNode=r,r._reactInternals=e,md(e,i,t,n),e=_d(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Sh(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=VE(i),t=Yn(i,t),r){case 0:e=vd(null,e,i,t,n);break e;case 1:e=Im(null,e,i,t,n);break e;case 11:e=Lm(null,e,i,t,n);break e;case 14:e=Dm(null,e,i,Yn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Im(t,e,i,r,n);case 3:e:{if(B_(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,l_(t,e),gu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=lo(Error(se(423)),e),e=Um(t,e,i,n,r);break e}else if(i!==r){r=lo(Error(se(424)),e),e=Um(t,e,i,n,r);break e}else for(wn=rr(e.stateNode.containerInfo.firstChild),An=e,ft=!0,qn=null,n=d_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),i===r){e=Ui(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return h_(e),t===null&&dd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ad(i,r)?o=null:s!==null&&ad(i,s)&&(e.flags|=32),O_(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&dd(e),null;case 13:return k_(t,e,n);case 4:return Rh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=oo(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Lm(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(pu,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!pn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Js(e,n),r=Hn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Dm(t,e,i,r,n);case 15:return N_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Zl(t,e),e.tag=1,mn(i)?(t=!0,fu(e)):t=!1,Js(e,n),c_(e,i,r),md(e,i,r,n),_d(null,e,i,!0,t,n);case 19:return V_(t,e,n);case 22:return F_(t,e,n)}throw Error(se(156,e.tag))};function ny(t,e){return b1(t,e)}function kE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new kE(t,e,n,i)}function Wh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VE(t){if(typeof t=="function")return Wh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uh)return 11;if(t===ch)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ql(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Wh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ls:return jr(n.children,r,s,e);case lh:o=8,r|=8;break;case kf:return t=kn(12,n,e,r|2),t.elementType=kf,t.lanes=s,t;case Vf:return t=kn(13,n,e,r),t.elementType=Vf,t.lanes=s,t;case zf:return t=kn(19,n,e,r),t.elementType=zf,t.lanes=s,t;case f1:return ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u1:o=10;break e;case c1:o=9;break e;case uh:o=11;break e;case ch:o=14;break e;case ji:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=kn(22,t,i,e),t.elementType=f1,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jh(t,e,n,i,r,s,o,a,l){return t=new zE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function HE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function iy(t){if(!t)return hr;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(mn(n))return n_(t,n,e)}return e}function ry(t,e,n,i,r,s,o,a,l){return t=jh(n,i,!0,t,r,s,o,a,l),t.context=iy(null),n=t.current,i=an(),r=ar(n),s=Ci(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,Ua(t,r,i),gn(t,i),t}function tc(t,e,n,i){var r=e.current,s=an(),o=ar(r);return n=iy(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,o),t!==null&&(ei(t,r,o,s),Wl(t,r,o)),o}function Tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xh(t,e){Wm(t,e),(t=t.alternate)&&Wm(t,e)}function GE(){return null}var sy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zh(t){this._internalRoot=t}nc.prototype.render=Zh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));tc(t,e,null,null)};nc.prototype.unmount=Zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){tc(null,t,null,null)}),e[Di]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=N1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&O1(t)}};function Yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jm(){}function WE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Tu(o);s.call(u)}}var o=ry(e,i,t,0,null,!1,!1,"",jm);return t._reactRootContainer=o,t[Di]=o.current,va(t.nodeType===8?t.parentNode:t),ts(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Tu(l);a.call(u)}}var l=jh(t,0,!1,null,null,!1,!1,"",jm);return t._reactRootContainer=l,t[Di]=l.current,va(t.nodeType===8?t.parentNode:t),ts(function(){tc(e,l,n,i)}),l}function rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Tu(o);a.call(l)}}tc(e,o,t,r)}else o=WE(n,e,t,r,i);return Tu(o)}I1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(hh(e,n|1),gn(e,Et()),!(Je&6)&&(uo=Et()+500,Sr()))}break;case 13:ts(function(){var i=Ii(t,1);if(i!==null){var r=an();ei(i,t,1,r)}}),Xh(t,1)}};ph=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=an();ei(e,t,134217728,n)}Xh(t,134217728)}};U1=function(t){if(t.tag===13){var e=ar(t),n=Ii(t,e);if(n!==null){var i=an();ei(n,t,e,i)}Xh(t,e)}};N1=function(){return it};F1=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Kf=function(t,e,n){switch(e){case"input":if(Wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yu(i);if(!r)throw Error(se(90));h1(i),Wf(i,r)}}}break;case"textarea":m1(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};M1=zh;E1=ts;var jE={usingClientEntryPoint:!1,Events:[Fa,Ns,Yu,x1,S1,zh]},Io={findFiberByHostInstance:kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},XE={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A1(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||GE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Wu=ll.inject(XE),ui=ll}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jE;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yh(e))throw Error(se(200));return HE(t,e,null,n)};Rn.createRoot=function(t,e){if(!Yh(t))throw Error(se(299));var n=!1,i="",r=sy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jh(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,va(t.nodeType===8?t.parentNode:t),new Zh(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=A1(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return ts(t)};Rn.hydrate=function(t,e,n){if(!ic(e))throw Error(se(200));return rc(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Yh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=sy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ry(e,null,t,1,n??null,r,!1,s,o),t[Di]=e.current,va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nc(e)};Rn.render=function(t,e,n){if(!ic(e))throw Error(se(200));return rc(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!ic(t))throw Error(se(40));return t._reactRootContainer?(ts(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Rn.unstable_batchedUpdates=zh;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return rc(t,e,n,!1,i)};Rn.version="18.2.0-next-9e3b772b8-20220608";function oy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oy)}catch(t){console.error(t)}}oy(),r1.exports=Rn;var ZE=r1.exports,Xm=ZE;Of.createRoot=Xm.createRoot,Of.hydrateRoot=Xm.hydrateRoot;const ay=ie.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),sc=ie.createContext({}),oc=ie.createContext(null),ac=typeof document<"u",$h=ac?ie.useLayoutEffect:ie.useEffect,ly=ie.createContext({strict:!1}),qh=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),YE="framerAppearId",uy="data-"+qh(YE),cy={skipAnimations:!1,useManualTiming:!1};class Zm{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function $E(t){let e=new Zm,n=new Zm,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const f=c&&r,d=f?e:n;return u&&o.add(l),d.add(l)&&f&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let u=0;u<i;u++){const c=e.order[u];o.has(c)&&(a.schedule(c),t()),c(l)}r=!1,s&&(s=!1,a.process(l))}};return a}const ul=["prepare","read","update","preRender","render","postRender"],qE=40;function fy(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=ul.reduce((f,d)=>(f[d]=$E(()=>n=!0),f),{}),o=f=>{s[f].process(r)},a=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,qE),1),r.timestamp=f,r.isProcessing=!0,ul.forEach(o),r.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,r.isProcessing||t(a)};return{schedule:ul.reduce((f,d)=>{const p=s[d];return f[d]=(_,y=!1,m=!1)=>(n||l(),p.schedule(_,y,m)),f},{}),cancel:f=>ul.forEach(d=>s[d].cancel(f)),state:r,steps:s}}const{schedule:Kh}=fy(queueMicrotask,!1);function KE(t,e,n,i){const{visualElement:r}=ie.useContext(sc),s=ie.useContext(ly),o=ie.useContext(oc),a=ie.useContext(ay).reducedMotion,l=ie.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;ie.useInsertionEffect(()=>{u&&u.update(n,o)});const c=ie.useRef(!!(n[uy]&&!window.HandoffComplete));return $h(()=>{u&&(Kh.postRender(u.render),c.current&&u.animationState&&u.animationState.animateChanges())}),ie.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function Hs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function QE(t,e,n){return ie.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Hs(n)&&(n.current=i))},[e])}function Aa(t){return typeof t=="string"||Array.isArray(t)}function lc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Qh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Jh=["initial",...Qh];function uc(t){return lc(t.animate)||Jh.some(e=>Aa(t[e]))}function dy(t){return!!(uc(t)||t.variants)}function JE(t,e){if(uc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Aa(n)?n:void 0,animate:Aa(i)?i:void 0}}return t.inherit!==!1?e:{}}function e2(t){const{initial:e,animate:n}=JE(t,ie.useContext(sc));return ie.useMemo(()=>({initial:e,animate:n}),[Ym(e),Ym(n)])}function Ym(t){return Array.isArray(t)?t.join(" "):t}const $m={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ca={};for(const t in $m)Ca[t]={isEnabled:e=>$m[t].some(n=>!!e[n])};function t2(t){for(const e in t)Ca[e]={...Ca[e],...t[e]}}const ep=ie.createContext({}),hy=ie.createContext({}),n2=Symbol.for("motionComponentSymbol");function i2({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&t2(t);function s(a,l){let u;const c={...ie.useContext(ay),...a,layoutId:r2(a)},{isStatic:f}=c,d=e2(a),p=i(a,f);if(!f&&ac){d.visualElement=KE(r,p,c,e);const _=ie.useContext(hy),y=ie.useContext(ly).strict;d.visualElement&&(u=d.visualElement.loadFeatures(c,y,t,_))}return ie.createElement(sc.Provider,{value:d},u&&d.visualElement?ie.createElement(u,{visualElement:d.visualElement,...c}):null,n(r,a,QE(p,d.visualElement,l),p,f,d.visualElement))}const o=ie.forwardRef(s);return o[n2]=r,o}function r2({layoutId:t}){const e=ie.useContext(ep).id;return e&&t!==void 0?e+"-"+t:t}function s2(t){function e(i,r={}){return i2(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const o2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tp(t){return typeof t!="string"||t.includes("-")?!1:!!(o2.indexOf(t)>-1||/[A-Z]/.test(t))}const wu={};function a2(t){Object.assign(wu,t)}const Ba=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ss=new Set(Ba);function py(t,{layout:e,layoutId:n}){return ss.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!wu[t]||t==="opacity")}const yn=t=>!!(t&&t.getVelocity),l2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},u2=Ba.length;function c2(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<u2;o++){const a=Ba[o];if(t[a]!==void 0){const l=l2[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const my=t=>e=>typeof e=="string"&&e.startsWith(t),gy=my("--"),f2=my("var(--"),Au=t=>f2(t)?d2.test(t.split("/*")[0].trim()):!1,d2=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,h2=(t,e)=>e&&typeof t=="number"?e.transform(t):t,pr=(t,e,n)=>n>e?e:n<t?t:n,So={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},na={...So,transform:t=>pr(0,1,t)},cl={...So,default:1},ia=t=>Math.round(t*1e5)/1e5,np=/(-)?([\d]*\.?[\d])+/g,p2=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,m2=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ka(t){return typeof t=="string"}const Va=t=>({test:e=>ka(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Wi=Va("deg"),fi=Va("%"),Pe=Va("px"),g2=Va("vh"),v2=Va("vw"),qm={...fi,parse:t=>fi.parse(t)/100,transform:t=>fi.transform(t*100)},Km={...So,transform:Math.round},vy={borderWidth:Pe,borderTopWidth:Pe,borderRightWidth:Pe,borderBottomWidth:Pe,borderLeftWidth:Pe,borderRadius:Pe,radius:Pe,borderTopLeftRadius:Pe,borderTopRightRadius:Pe,borderBottomRightRadius:Pe,borderBottomLeftRadius:Pe,width:Pe,maxWidth:Pe,height:Pe,maxHeight:Pe,size:Pe,top:Pe,right:Pe,bottom:Pe,left:Pe,padding:Pe,paddingTop:Pe,paddingRight:Pe,paddingBottom:Pe,paddingLeft:Pe,margin:Pe,marginTop:Pe,marginRight:Pe,marginBottom:Pe,marginLeft:Pe,rotate:Wi,rotateX:Wi,rotateY:Wi,rotateZ:Wi,scale:cl,scaleX:cl,scaleY:cl,scaleZ:cl,skew:Wi,skewX:Wi,skewY:Wi,distance:Pe,translateX:Pe,translateY:Pe,translateZ:Pe,x:Pe,y:Pe,z:Pe,perspective:Pe,transformPerspective:Pe,opacity:na,originX:qm,originY:qm,originZ:Pe,zIndex:Km,fillOpacity:na,strokeOpacity:na,numOctaves:Km};function ip(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,u=!1,c=!0;for(const f in e){const d=e[f];if(gy(f)){s[f]=d;continue}const p=vy[f],_=h2(d,p);if(ss.has(f)){if(l=!0,o[f]=_,!c)continue;d!==(p.default||0)&&(c=!1)}else f.startsWith("origin")?(u=!0,a[f]=_):r[f]=_}if(e.transform||(l||i?r.transform=c2(t.transform,n,c,i):r.transform&&(r.transform="none")),u){const{originX:f="50%",originY:d="50%",originZ:p=0}=a;r.transformOrigin=`${f} ${d} ${p}`}}const rp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function _y(t,e,n){for(const i in e)!yn(e[i])&&!py(i,n)&&(t[i]=e[i])}function _2({transformTemplate:t},e,n){return ie.useMemo(()=>{const i=rp();return ip(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function y2(t,e,n){const i=t.style||{},r={};return _y(r,i,t),Object.assign(r,_2(t,e,n)),r}function x2(t,e,n){const i={},r=y2(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const S2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Cu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||S2.has(t)}let yy=t=>!Cu(t);function M2(t){t&&(yy=e=>e.startsWith("on")?!Cu(e):t(e))}try{M2(require("@emotion/is-prop-valid").default)}catch{}function E2(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(yy(r)||n===!0&&Cu(r)||!e&&!Cu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Qm(t,e,n){return typeof t=="string"?t:Pe.transform(e+n*t)}function T2(t,e,n){const i=Qm(e,t.x,t.width),r=Qm(n,t.y,t.height);return`${i} ${r}`}const w2={offset:"stroke-dashoffset",array:"stroke-dasharray"},A2={offset:"strokeDashoffset",array:"strokeDasharray"};function C2(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?w2:A2;t[s.offset]=Pe.transform(-i);const o=Pe.transform(e),a=Pe.transform(n);t[s.array]=`${o} ${a}`}function sp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f,d){if(ip(t,u,c,d),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:_,dimensions:y}=t;p.transform&&(y&&(_.transform=p.transform),delete p.transform),y&&(r!==void 0||s!==void 0||_.transform)&&(_.transformOrigin=T2(y,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&C2(p,o,a,l,!1)}const xy=()=>({...rp(),attrs:{}}),op=t=>typeof t=="string"&&t.toLowerCase()==="svg";function b2(t,e,n,i){const r=ie.useMemo(()=>{const s=xy();return sp(s,e,{enableHardwareAcceleration:!1},op(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};_y(s,t.style,t),r.style={...s,...r.style}}return r}function R2(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(tp(n)?b2:x2)(i,s,o,n),u=E2(i,typeof n=="string",t),c=n!==ie.Fragment?{...u,...l,ref:r}:{},{children:f}=i,d=ie.useMemo(()=>yn(f)?f.get():f,[f]);return ie.createElement(n,{...c,children:d})}}function Sy(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const My=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ey(t,e,n,i){Sy(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(My.has(r)?r:qh(r),e.attrs[r])}function ap(t,e){const{style:n}=t,i={};for(const r in n)(yn(n[r])||e.style&&yn(e.style[r])||py(r,t))&&(i[r]=n[r]);return i}function Ty(t,e){const n=ap(t,e);for(const i in t)if(yn(t[i])||yn(e[i])){const r=Ba.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function lp(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function wy(t){const e=ie.useRef(null);return e.current===null&&(e.current=t()),e.current}const bu=t=>Array.isArray(t),P2=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),L2=t=>bu(t)?t[t.length-1]||0:t;function Kl(t){const e=yn(t)?t.get():t;return P2(e)?e.toValue():e}function D2({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:I2(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const Ay=t=>(e,n)=>{const i=ie.useContext(sc),r=ie.useContext(oc),s=()=>D2(t,e,i,r);return n?s():wy(s)};function I2(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Kl(s[d]);let{initial:o,animate:a}=t;const l=uc(t),u=dy(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;return f&&typeof f!="boolean"&&!lc(f)&&(Array.isArray(f)?f:[f]).forEach(p=>{const _=lp(t,p);if(!_)return;const{transitionEnd:y,transition:m,...h}=_;for(const v in h){let g=h[v];if(Array.isArray(g)){const x=c?g.length-1:0;g=g[x]}g!==null&&(r[v]=g)}for(const v in y)r[v]=y[v]}),r}const At=t=>t,{schedule:dt,cancel:Ni,state:zt,steps:Xc}=fy(typeof requestAnimationFrame<"u"?requestAnimationFrame:At,!0),U2={useVisualState:Ay({scrapeMotionValuesFromProps:Ty,createRenderState:xy,onMount:(t,e,{renderState:n,latestValues:i})=>{dt.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),dt.render(()=>{sp(n,i,{enableHardwareAcceleration:!1},op(e.tagName),t.transformTemplate),Ey(e,n)})}})},N2={useVisualState:Ay({scrapeMotionValuesFromProps:ap,createRenderState:rp})};function F2(t,{forwardMotionProps:e=!1},n,i){return{...tp(t)?U2:N2,preloadedFeatures:n,useRender:R2(e),createVisualElement:i,Component:t}}function wi(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Cy=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function cc(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const O2=t=>e=>Cy(e)&&t(e,cc(e));function bi(t,e,n,i){return wi(t,e,O2(n),i)}const B2=(t,e)=>n=>e(t(n)),Ri=(...t)=>t.reduce(B2);function by(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Jm=by("dragHorizontal"),e0=by("dragVertical");function Ry(t){let e=!1;if(t==="y")e=e0();else if(t==="x")e=Jm();else{const n=Jm(),i=e0();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Py(){const t=Ry(!0);return t?(t(),!1):!0}class Mr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function t0(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.pointerType==="touch"||Py())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&dt.update(()=>a[i](s,o))};return bi(t.current,n,r,{passive:!t.getProps()[i]})}class k2 extends Mr{mount(){this.unmount=Ri(t0(this.node,!0),t0(this.node,!1))}unmount(){}}class V2 extends Mr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ri(wi(this.node.current,"focus",()=>this.onFocus()),wi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Ly=(t,e)=>e?t===e?!0:Ly(t,e.parentElement):!1;function Zc(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,cc(n))}class z2 extends Mr{constructor(){super(...arguments),this.removeStartListeners=At,this.removeEndListeners=At,this.removeAccessibleListeners=At,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=bi(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:f}=this.node.getProps();dt.update(()=>{!f&&!Ly(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=bi(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Ri(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Zc("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&dt.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=wi(this.node.current,"keyup",o),Zc("down",(a,l)=>{this.startPress(a,l)})},n=wi(this.node.current,"keydown",e),i=()=>{this.isPressing&&Zc("cancel",(s,o)=>this.cancelPress(s,o))},r=wi(this.node.current,"blur",i);this.removeAccessibleListeners=Ri(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&dt.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Py()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&dt.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=bi(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=wi(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ri(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Pd=new WeakMap,Yc=new WeakMap,H2=t=>{const e=Pd.get(t.target);e&&e(t)},G2=t=>{t.forEach(H2)};function W2({root:t,...e}){const n=t||document;Yc.has(n)||Yc.set(n,{});const i=Yc.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(G2,{root:t,...e})),i[r]}function j2(t,e,n){const i=W2(e);return Pd.set(t,n),i.observe(t),()=>{Pd.delete(t),i.unobserve(t)}}const X2={some:0,all:1};class Z2 extends Mr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:X2[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return j2(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Y2(e,n))&&this.startObserver()}unmount(){}}function Y2({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const $2={inView:{Feature:Z2},tap:{Feature:z2},focus:{Feature:V2},hover:{Feature:k2}};function Dy(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function q2(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function K2(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function fc(t,e,n){const i=t.getProps();return lp(i,e,n!==void 0?n:i.custom,q2(t),K2(t))}let up=At;const Xr=t=>t*1e3,Pi=t=>t/1e3,Q2={current:!1},Iy=t=>Array.isArray(t)&&typeof t[0]=="number";function Uy(t){return!!(!t||typeof t=="string"&&Ny[t]||Iy(t)||Array.isArray(t)&&t.every(Uy))}const Xo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Ny={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xo([0,.65,.55,1]),circOut:Xo([.55,0,1,.45]),backIn:Xo([.31,.01,.66,-.59]),backOut:Xo([.33,1.53,.69,.99])};function Fy(t){if(t)return Iy(t)?Xo(t):Array.isArray(t)?t.map(Fy):Ny[t]}function J2(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=Fy(a);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function eT(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const Oy=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,tT=1e-7,nT=12;function iT(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Oy(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>tT&&++a<nT);return o}function za(t,e,n,i){if(t===e&&n===i)return At;const r=s=>iT(s,0,1,t,n);return s=>s===0||s===1?s:Oy(r(s),e,i)}const rT=za(.42,0,1,1),sT=za(0,0,.58,1),By=za(.42,0,.58,1),oT=t=>Array.isArray(t)&&typeof t[0]!="number",ky=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Vy=t=>e=>1-t(1-e),cp=t=>1-Math.sin(Math.acos(t)),zy=Vy(cp),aT=ky(cp),Hy=za(.33,1.53,.69,.99),fp=Vy(Hy),lT=ky(fp),uT=t=>(t*=2)<1?.5*fp(t):.5*(2-Math.pow(2,-10*(t-1))),cT={linear:At,easeIn:rT,easeInOut:By,easeOut:sT,circIn:cp,circInOut:aT,circOut:zy,backIn:fp,backInOut:lT,backOut:Hy,anticipate:uT},n0=t=>{if(Array.isArray(t)){up(t.length===4);const[e,n,i,r]=t;return za(e,n,i,r)}else if(typeof t=="string")return cT[t];return t},ba=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},mt=(t,e,n)=>t+(e-t)*n;function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function fT({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=$c(l,a,t+1/3),s=$c(l,a,t),o=$c(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const dp=(t,e)=>n=>!!(ka(n)&&m2.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Gy=(t,e,n)=>i=>{if(!ka(i))return i;const[r,s,o,a]=i.match(np);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},dT=t=>pr(0,255,t),qc={...So,transform:t=>Math.round(dT(t))},Hr={test:dp("rgb","red"),parse:Gy("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+qc.transform(t)+", "+qc.transform(e)+", "+qc.transform(n)+", "+ia(na.transform(i))+")"};function hT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Ld={test:dp("#"),parse:hT,transform:Hr.transform},Gs={test:dp("hsl","hue"),parse:Gy("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+fi.transform(ia(e))+", "+fi.transform(ia(n))+", "+ia(na.transform(i))+")"},Kc=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},pT=[Ld,Hr,Gs],mT=t=>pT.find(e=>e.test(t));function i0(t){const e=mT(t);let n=e.parse(t);return e===Gs&&(n=fT(n)),n}const r0=(t,e)=>{const n=i0(t),i=i0(e),r={...n};return s=>(r.red=Kc(n.red,i.red,s),r.green=Kc(n.green,i.green,s),r.blue=Kc(n.blue,i.blue,s),r.alpha=mt(n.alpha,i.alpha,s),Hr.transform(r))},qt={test:t=>Hr.test(t)||Ld.test(t)||Gs.test(t),parse:t=>Hr.test(t)?Hr.parse(t):Gs.test(t)?Gs.parse(t):Ld.parse(t),transform:t=>ka(t)?t:t.hasOwnProperty("red")?Hr.transform(t):Gs.transform(t)};function gT(t){var e,n;return isNaN(t)&&ka(t)&&(((e=t.match(np))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(p2))===null||n===void 0?void 0:n.length)||0)>0}const Wy="number",jy="color",vT="var",_T="var(",s0="${}",o0=/(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;function Ru(t){const e=t.toString(),n=e.match(o0)||[],i=[],r={color:[],number:[],var:[]},s=[];for(let l=0;l<n.length;l++){const u=n[l];qt.test(u)?(r.color.push(l),s.push(jy),i.push(qt.parse(u))):u.startsWith(_T)?(r.var.push(l),s.push(vT),i.push(u)):(r.number.push(l),s.push(Wy),i.push(parseFloat(u)))}const a=e.replace(o0,s0).split(s0);return{values:i,split:a,indexes:r,types:s}}function Xy(t){return Ru(t).values}function Zy(t){const{split:e,types:n}=Ru(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===Wy?s+=ia(r[o]):a===jy?s+=qt.transform(r[o]):s+=r[o]}return s}}const yT=t=>typeof t=="number"?0:t;function xT(t){const e=Xy(t);return Zy(t)(e.map(yT))}const mr={test:gT,parse:Xy,createTransformer:Zy,getAnimatableNone:xT};function Dd(t,e){return n=>n>0?e:t}function ST(t,e){return n=>mt(t,e,n)}function hp(t){return typeof t=="number"?ST:typeof t=="string"?Au(t)?Dd:qt.test(t)?r0:TT:Array.isArray(t)?Yy:typeof t=="object"?qt.test(t)?r0:MT:Dd}function Yy(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>hp(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function MT(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=hp(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function ET(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const TT=(t,e)=>{const n=mr.createTransformer(e),i=Ru(t),r=Ru(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Ri(Yy(ET(i,r),r.values),n):Dd(t,e)};function $y(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?mt(t,e,n):hp(t)(t,e)}function wT(t,e,n){const i=[],r=n||$y,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||At:e;a=Ri(l,a)}i.push(a)}return i}function AT(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(up(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=wT(e,i,r),a=o.length,l=u=>{let c=0;if(a>1)for(;c<t.length-2&&!(u<t[c+1]);c++);const f=ba(t[c],t[c+1],u);return o[c](f)};return n?u=>l(pr(t[0],t[s-1],u)):l}function CT(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=ba(0,e,i);t.push(mt(n,1,r))}}function bT(t){const e=[0];return CT(e,t.length-1),e}function RT(t,e){return t.map(n=>n*e)}function PT(t,e){return t.map(()=>e||By).splice(0,t.length-1)}function Pu({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=oT(i)?i.map(n0):n0(i),s={done:!1,value:e[0]},o=RT(n&&n.length===e.length?n:bT(e),t),a=AT(o,e,{ease:Array.isArray(r)?r:PT(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function qy(t,e){return e?t*(1e3/e):0}const LT=5;function Ky(t,e,n){const i=Math.max(e-LT,0);return qy(n-t(i),e-i)}const Qc=.001,DT=.01,IT=10,UT=.05,NT=1;function FT({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,o=1-e;o=pr(UT,NT,o),t=pr(DT,IT,Pi(t)),o<1?(r=u=>{const c=u*o,f=c*t,d=c-n,p=Id(u,o),_=Math.exp(-f);return Qc-d/p*_},s=u=>{const f=u*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,_=Math.exp(-f),y=Id(Math.pow(u,2),o);return(-r(u)+Qc>0?-1:1)*((d-p)*_)/y}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-Qc+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=BT(r,s,a);if(t=Xr(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const OT=12;function BT(t,e,n){let i=n;for(let r=1;r<OT;r++)i=i-t(i)/e(i);return i}function Id(t,e){return t*Math.sqrt(1-e*e)}const kT=["duration","bounce"],VT=["stiffness","damping","mass"];function a0(t,e){return e.some(n=>t[n]!==void 0)}function zT(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!a0(t,VT)&&a0(t,kT)){const n=FT(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Qy({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:u,duration:c,velocity:f,isResolvedFromDuration:d}=zT({...i,velocity:-Pi(i.velocity||0)}),p=f||0,_=l/(2*Math.sqrt(a*u)),y=s-r,m=Pi(Math.sqrt(a/u)),h=Math.abs(y)<5;n||(n=h?.01:2),e||(e=h?.005:.5);let v;if(_<1){const g=Id(m,_);v=x=>{const b=Math.exp(-_*m*x);return s-b*((p+_*m*y)/g*Math.sin(g*x)+y*Math.cos(g*x))}}else if(_===1)v=g=>s-Math.exp(-m*g)*(y+(p+m*y)*g);else{const g=m*Math.sqrt(_*_-1);v=x=>{const b=Math.exp(-_*m*x),C=Math.min(g*x,300);return s-b*((p+_*m*y)*Math.sinh(C)+g*y*Math.cosh(C))/g}}return{calculatedDuration:d&&c||null,next:g=>{const x=v(g);if(d)o.done=g>=c;else{let b=p;g!==0&&(_<1?b=Ky(v,g,x):b=0);const C=Math.abs(b)<=n,E=Math.abs(s-x)<=e;o.done=C&&E}return o.value=o.done?s:x,o}}}function l0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],d={done:!1,value:f},p=D=>a!==void 0&&D<a||l!==void 0&&D>l,_=D=>a===void 0?l:l===void 0||Math.abs(a-D)<Math.abs(l-D)?a:l;let y=n*e;const m=f+y,h=o===void 0?m:o(m);h!==m&&(y=h-f);const v=D=>-y*Math.exp(-D/i),g=D=>h+v(D),x=D=>{const S=v(D),T=g(D);d.done=Math.abs(S)<=u,d.value=d.done?h:T};let b,C;const E=D=>{p(d.value)&&(b=D,C=Qy({keyframes:[d.value,_(d.value)],velocity:Ky(g,D,d.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return E(0),{calculatedDuration:null,next:D=>{let S=!1;return!C&&b===void 0&&(S=!0,x(D),E(D)),b!==void 0&&D>b?C.next(D-b):(!S&&x(D),d)}}}let Ql;function HT(){Ql=void 0}const Zr={now:()=>(Ql===void 0&&Zr.set(zt.isProcessing||cy.useManualTiming?zt.timestamp:performance.now()),Ql),set:t=>{Ql=t,queueMicrotask(HT)}},GT=t=>{const e=({timestamp:n})=>t(n);return{start:()=>dt.update(e,!0),stop:()=>Ni(e),now:()=>zt.isProcessing?zt.timestamp:Zr.now()}},u0=2e4;function c0(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<u0;)e+=n,i=t.next(e);return e>=u0?1/0:e}const WT={decay:l0,inertia:l0,tween:Pu,keyframes:Pu,spring:Qy},jT=t=>t/100;function Lu({autoplay:t=!0,delay:e=0,driver:n=GT,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:f,...d}){let p=1,_=!1,y,m;const h=()=>{m=new Promise(Y=>{y=Y})};h();let v;const g=WT[r]||Pu;let x;g!==Pu&&typeof i[0]!="number"&&(x=Ri(jT,$y(i[0],i[1])),i=[0,100]);const b=g({...d,keyframes:i});let C;a==="mirror"&&(C=g({...d,keyframes:[...i].reverse(),velocity:-(d.velocity||0)}));let E="idle",D=null,S=null,T=null;b.calculatedDuration===null&&s&&(b.calculatedDuration=c0(b));const{calculatedDuration:W}=b;let $=1/0,te=1/0;W!==null&&($=W+o,te=$*(s+1)-o);let L=0;const O=Y=>{if(S===null)return;p>0&&(S=Math.min(S,Y)),p<0&&(S=Math.min(Y-te/p,S)),D!==null?L=D:L=Math.round(Y-S)*p;const Q=L-e*(p>=0?1:-1),Z=p>=0?Q<0:Q>te;L=Math.max(Q,0),E==="finished"&&D===null&&(L=te);let K=L,he=b;if(s){const De=Math.min(L,te)/$;let Ae=Math.floor(De),Oe=De%1;!Oe&&De>=1&&(Oe=1),Oe===1&&Ae--,Ae=Math.min(Ae,s+1),!!(Ae%2)&&(a==="reverse"?(Oe=1-Oe,o&&(Oe-=o/$)):a==="mirror"&&(he=C)),K=pr(0,1,Oe)*$}const me=Z?{done:!1,value:i[0]}:he.next(K);x&&(me.value=x(me.value));let{done:ye}=me;!Z&&W!==null&&(ye=p>=0?L>=te:L<=0);const Ie=D===null&&(E==="finished"||E==="running"&&ye);return f&&f(me.value),Ie&&I(),me},z=()=>{v&&v.stop(),v=void 0},q=()=>{E="idle",z(),y(),h(),S=T=null},I=()=>{E="finished",c&&c(),z(),y()},F=()=>{if(_)return;v||(v=n(O));const Y=v.now();l&&l(),D!==null?S=Y-D:(!S||E==="finished")&&(S=Y),E==="finished"&&h(),T=S,D=null,E="running",v.start()};t&&F();const V={then(Y,Q){return m.then(Y,Q)},get time(){return Pi(L)},set time(Y){Y=Xr(Y),L=Y,D!==null||!v||p===0?D=Y:S=v.now()-Y/p},get duration(){const Y=b.calculatedDuration===null?c0(b):b.calculatedDuration;return Pi(Y)},get speed(){return p},set speed(Y){Y===p||!v||(p=Y,V.time=Pi(L))},get state(){return E},play:F,pause:()=>{E="paused",D=L},stop:()=>{_=!0,E!=="idle"&&(E="idle",u&&u(),q())},cancel:()=>{T!==null&&O(T),q()},complete:()=>{E="finished"},sample:Y=>(S=0,O(Y))};return V}function XT(t){let e;return()=>(e===void 0&&(e=t()),e)}const ZT=XT(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),YT=new Set(["opacity","clipPath","filter","transform"]),fl=10,$T=2e4,qT=(t,e)=>e.type==="spring"||t==="backgroundColor"||!Uy(e.ease);function KT(t,e,{onUpdate:n,onComplete:i,...r}){if(!(ZT()&&YT.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,a,l,u=!1;const c=()=>{l=new Promise(g=>{a=g})};c();let{keyframes:f,duration:d=300,ease:p,times:_}=r;if(qT(e,r)){const g=Lu({...r,repeat:0,delay:0});let x={done:!1,value:f[0]};const b=[];let C=0;for(;!x.done&&C<$T;)x=g.sample(C),b.push(x.value),C+=fl;_=void 0,f=b,d=C-fl,p="linear"}const y=J2(t.owner.current,e,f,{...r,duration:d,ease:p,times:_}),m=()=>{u=!1,y.cancel()},h=()=>{u=!0,dt.update(m),a(),c()};return y.onfinish=()=>{u||(t.set(eT(f,r)),i&&i(),h())},{then(g,x){return l.then(g,x)},attachTimeline(g){return y.timeline=g,y.onfinish=null,At},get time(){return Pi(y.currentTime||0)},set time(g){y.currentTime=Xr(g)},get speed(){return y.playbackRate},set speed(g){y.playbackRate=g},get duration(){return Pi(d)},play:()=>{o||(y.play(),Ni(m))},pause:()=>y.pause(),stop:()=>{if(o=!0,y.playState==="idle")return;const{currentTime:g}=y;if(g){const x=Lu({...r,autoplay:!1});t.setWithVelocity(x.sample(g-fl).value,x.sample(g).value,fl)}h()},complete:()=>{u||y.finish()},cancel:h}}function QT({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:At,pause:At,stop:At,then:s=>(s(),Promise.resolve()),cancel:At,complete:At});return e?Lu({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const JT={type:"spring",stiffness:500,damping:25,restSpeed:10},ew=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),tw={type:"keyframes",duration:.8},nw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},iw=(t,{keyframes:e})=>e.length>2?tw:ss.has(t)?t.startsWith("scale")?ew(e[1]):JT:nw,Ud=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(mr.test(e)||e==="0")&&!e.startsWith("url(")),rw=new Set(["brightness","contrast","saturate","opacity"]);function sw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(np)||[];if(!i)return t;const r=n.replace(i,"");let s=rw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const ow=/([a-z-]*)\(.*?\)/g,Nd={...mr,getAnimatableNone:t=>{const e=t.match(ow);return e?e.map(sw).join(" "):t}},aw={...vy,color:qt,backgroundColor:qt,outlineColor:qt,fill:qt,stroke:qt,borderColor:qt,borderTopColor:qt,borderRightColor:qt,borderBottomColor:qt,borderLeftColor:qt,filter:Nd,WebkitFilter:Nd},pp=t=>aw[t];function Jy(t,e){let n=pp(t);return n!==Nd&&(n=mr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const ex=t=>/^0[^.\s]+$/.test(t);function lw(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||ex(t)}function uw(t,e,n,i){const r=Ud(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),lw(s[u])&&l.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(a=s[u]);if(r&&l.length&&a)for(let u=0;u<l.length;u++){const c=l[u];s[c]=Jy(e,a)}return s}function cw({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function mp(t,e){return t[e]||t.default||t}const gp=(t,e,n,i={})=>r=>{const s=mp(i,t)||{},o=s.delay||i.delay||0;let{elapsed:a=0}=i;a=a-Xr(o);const l=uw(e,t,n,s),u=l[0],c=l[l.length-1],f=Ud(t,u),d=Ud(t,c);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:_=>{e.set(_),s.onUpdate&&s.onUpdate(_)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(cw(s)||(p={...p,...iw(t,p)}),p.duration&&(p.duration=Xr(p.duration)),p.repeatDelay&&(p.repeatDelay=Xr(p.repeatDelay)),!f||!d||Q2.current||s.type===!1||cy.skipAnimations)return QT(p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const _=KT(e,t,p);if(_)return _}return Lu(p)};function Du(t){return!!(yn(t)&&t.add)}const tx=t=>/^\-?\d*\.?\d+$/.test(t);function vp(t,e){t.indexOf(e)===-1&&t.push(e)}function _p(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class yp{constructor(){this.subscriptions=[]}add(e){return vp(this.subscriptions,e),()=>_p(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const f0=30,fw=t=>!isNaN(parseFloat(t));class dw{constructor(e,n={}){this.version="11.0.8",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=Zr.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.canTrackVelocity=fw(this.current),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Zr.now()}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new yp);const i=this.events[e].add(n);return e==="change"?()=>{i(),dt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Zr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>f0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,f0);return qy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function co(t,e){return new dw(t,e)}const nx=t=>e=>e.test(t),hw={test:t=>t==="auto",parse:t=>t},ix=[So,Pe,fi,Wi,v2,g2,hw],Uo=t=>ix.find(nx(t)),pw=[...ix,qt,mr],mw=t=>pw.find(nx(t));function gw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,co(n))}function vw(t,e){const n=fc(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const o in s){const a=L2(s[o]);gw(t,o,a)}}function _w(t,e,n){var i,r;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=e[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),c!=null&&(typeof c=="string"&&(tx(c)||ex(c))?c=parseFloat(c):!mw(c)&&mr.test(u)&&(c=Jy(l,u)),t.addValue(l,co(c,{owner:t})),n[l]===void 0&&(n[l]=c),c!==null&&t.setBaseTarget(l,c))}}function yw(t,e){return e?(e[t]||e.default||e).from:void 0}function xw(t,e,n){const i={};for(const r in t){const s=yw(r,e);if(s!==void 0)i[r]=s;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function Sw({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Mw(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function rx(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const d=t.getValue(f),p=a[f];if(!d||p===void 0||c&&Sw(c,f))continue;const _={delay:n,elapsed:0,...mp(s||{},f)};if(window.HandoffAppearAnimations){const h=t.getProps()[uy];if(h){const v=window.HandoffAppearAnimations(h,f,d,dt);v!==null&&(_.elapsed=v,_.isHandoff=!0)}}let y=!_.isHandoff&&!Mw(d,p);if(_.type==="spring"&&(d.getVelocity()||_.velocity)&&(y=!1),d.animation&&(y=!1),y)continue;d.start(gp(f,d,p,t.shouldReduceMotion&&ss.has(f)?{type:!1}:_));const m=d.animation;Du(l)&&(l.add(f),m.then(()=>l.remove(f))),u.push(m)}return o&&Promise.all(u).then(()=>{o&&vw(t,o)}),u}function Fd(t,e,n={}){const i=fc(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(rx(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:f}=r;return Ew(t,e,u+l,c,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function Ew(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(Tw).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(Fd(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function Tw(t,e){return t.sortNodePosition(e)}function ww(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Fd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Fd(t,e,n);else{const r=typeof e=="function"?fc(t,e,n.custom):e;i=Promise.all(rx(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const Aw=[...Qh].reverse(),Cw=Qh.length;function bw(t){return e=>Promise.all(e.map(({animation:n,options:i})=>ww(t,n,i)))}function Rw(t){let e=bw(t);const n=Lw();let i=!0;const r=(l,u)=>{const c=fc(t,u);if(c){const{transition:f,transitionEnd:d,...p}=c;l={...l,...p,...d}}return l};function s(l){e=l(t)}function o(l,u){const c=t.getProps(),f=t.getVariantContext(!0)||{},d=[],p=new Set;let _={},y=1/0;for(let h=0;h<Cw;h++){const v=Aw[h],g=n[v],x=c[v]!==void 0?c[v]:f[v],b=Aa(x),C=v===u?g.isActive:null;C===!1&&(y=h);let E=x===f[v]&&x!==c[v]&&b;if(E&&i&&t.manuallyAnimateOnMount&&(E=!1),g.protectedKeys={..._},!g.isActive&&C===null||!x&&!g.prevProp||lc(x)||typeof x=="boolean")continue;let S=Pw(g.prevProp,x)||v===u&&g.isActive&&!E&&b||h>y&&b,T=!1;const W=Array.isArray(x)?x:[x];let $=W.reduce(r,{});C===!1&&($={});const{prevResolvedValues:te={}}=g,L={...te,...$},O=z=>{S=!0,p.has(z)&&(T=!0,p.delete(z)),g.needsAnimating[z]=!0};for(const z in L){const q=$[z],I=te[z];if(_.hasOwnProperty(z))continue;let F=!1;bu(q)&&bu(I)?F=!Dy(q,I):F=q!==I,F?q!==void 0?O(z):p.add(z):q!==void 0&&p.has(z)?O(z):g.protectedKeys[z]=!0}g.prevProp=x,g.prevResolvedValues=$,g.isActive&&(_={..._,...$}),i&&t.blockInitialAnimation&&(S=!1),S&&(!E||T)&&d.push(...W.map(z=>({animation:z,options:{type:v,...l}})))}if(p.size){const h={};p.forEach(v=>{const g=t.getBaseTarget(v);g!==void 0&&(h[v]=g)}),d.push({animation:h})}let m=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(m=!1),i=!1,m?e(d):Promise.resolve()}function a(l,u,c){var f;if(n[l].isActive===u)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(p=>{var _;return(_=p.animationState)===null||_===void 0?void 0:_.setActive(l,u)}),n[l].isActive=u;const d=o(c,l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function Pw(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Dy(e,t):!1}function Ar(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lw(){return{animate:Ar(!0),whileInView:Ar(),whileHover:Ar(),whileTap:Ar(),whileDrag:Ar(),whileFocus:Ar(),exit:Ar()}}class Dw extends Mr{constructor(e){super(e),e.animationState||(e.animationState=Rw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),lc(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let Iw=0;class Uw extends Mr{constructor(){super(...arguments),this.id=Iw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Nw={animation:{Feature:Dw},exit:{Feature:Uw}},d0=(t,e)=>Math.abs(t-e);function Fw(t,e){const n=d0(t.x,e.x),i=d0(t.y,e.y);return Math.sqrt(n**2+i**2)}class sx{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=ef(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=Fw(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:_}=f,{timestamp:y}=zt;this.history.push({..._,timestamp:y});const{onStart:m,onMove:h}=this.handlers;d||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Jc(d,this.transformPagePoint),dt.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:_,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=ef(f.type==="pointercancel"?this.lastMoveEventInfo:Jc(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,m),_&&_(f,m)},!Cy(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=cc(e),a=Jc(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=zt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,ef(a,this.history)),this.removeListeners=Ri(bi(this.contextWindow,"pointermove",this.handlePointerMove),bi(this.contextWindow,"pointerup",this.handlePointerUp),bi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ni(this.updatePoint)}}function Jc(t,e){return e?{point:e(t.point)}:t}function h0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ef({point:t},e){return{point:t,delta:h0(t,ox(e)),offset:h0(t,Ow(e)),velocity:Bw(e,.1)}}function Ow(t){return t[0]}function ox(t){return t[t.length-1]}function Bw(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=ox(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Xr(e)));)n--;if(!i)return{x:0,y:0};const s=Pi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function bn(t){return t.max-t.min}function Od(t,e=0,n=.01){return Math.abs(t-e)<=n}function p0(t,e,n,i=.5){t.origin=i,t.originPoint=mt(e.min,e.max,t.origin),t.scale=bn(n)/bn(e),(Od(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=mt(n.min,n.max,t.origin)-t.originPoint,(Od(t.translate)||isNaN(t.translate))&&(t.translate=0)}function ra(t,e,n,i){p0(t.x,e.x,n.x,i?i.originX:void 0),p0(t.y,e.y,n.y,i?i.originY:void 0)}function m0(t,e,n){t.min=n.min+e.min,t.max=t.min+bn(e)}function kw(t,e,n){m0(t.x,e.x,n.x),m0(t.y,e.y,n.y)}function g0(t,e,n){t.min=e.min-n.min,t.max=t.min+bn(e)}function sa(t,e,n){g0(t.x,e.x,n.x),g0(t.y,e.y,n.y)}function Vw(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?mt(n,t,i.max):Math.min(t,n)),t}function v0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function zw(t,{top:e,left:n,bottom:i,right:r}){return{x:v0(t.x,n,r),y:v0(t.y,e,i)}}function _0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Hw(t,e){return{x:_0(t.x,e.x),y:_0(t.y,e.y)}}function Gw(t,e){let n=.5;const i=bn(t),r=bn(e);return r>i?n=ba(e.min,e.max-i,t.min):i>r&&(n=ba(t.min,t.max-r,e.min)),pr(0,1,n)}function Ww(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Bd=.35;function jw(t=Bd){return t===!1?t=0:t===!0&&(t=Bd),{x:y0(t,"left","right"),y:y0(t,"top","bottom")}}function y0(t,e,n){return{min:x0(t,e),max:x0(t,n)}}function x0(t,e){return typeof t=="number"?t:t[e]||0}const S0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ws=()=>({x:S0(),y:S0()}),M0=()=>({min:0,max:0}),Mt=()=>({x:M0(),y:M0()});function Un(t){return[t("x"),t("y")]}function ax({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Xw({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Zw(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function tf(t){return t===void 0||t===1}function kd({scale:t,scaleX:e,scaleY:n}){return!tf(t)||!tf(e)||!tf(n)}function Ir(t){return kd(t)||lx(t)||t.z||t.rotate||t.rotateX||t.rotateY}function lx(t){return E0(t.x)||E0(t.y)}function E0(t){return t&&t!=="0%"}function Iu(t,e,n){const i=t-n,r=e*i;return n+r}function T0(t,e,n,i,r){return r!==void 0&&(t=Iu(t,r,i)),Iu(t,n,i)+e}function Vd(t,e=0,n=1,i,r){t.min=T0(t.min,e,n,i,r),t.max=T0(t.max,e,n,i,r)}function ux(t,{x:e,y:n}){Vd(t.x,e.translate,e.scale,e.originPoint),Vd(t.y,n.translate,n.scale,n.originPoint)}function Yw(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&js(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,ux(t,o)),i&&Ir(s.latestValues)&&js(t,s.latestValues))}e.x=w0(e.x),e.y=w0(e.y)}function w0(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Zi(t,e){t.min=t.min+e,t.max=t.max+e}function A0(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=mt(t.min,t.max,s);Vd(t,e[n],e[i],o,e.scale)}const $w=["x","scaleX","originX"],qw=["y","scaleY","originY"];function js(t,e){A0(t.x,e,$w),A0(t.y,e,qw)}function cx(t,e){return ax(Zw(t.getBoundingClientRect(),e))}function Kw(t,e,n){const i=cx(t,n),{scroll:r}=e;return r&&(Zi(i.x,r.offset.x),Zi(i.y,r.offset.y)),i}const fx=({current:t})=>t?t.ownerDocument.defaultView:null,Qw=new WeakMap;class Jw{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Mt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(cc(c,"page").point)},s=(c,f)=>{const{drag:d,dragPropagation:p,onDragStart:_}=this.getProps();if(d&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ry(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Un(m=>{let h=this.getAxisMotionValue(m).get()||0;if(fi.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const g=v.layout.layoutBox[m];g&&(h=bn(g)*(parseFloat(h)/100))}}this.originPoint[m]=h}),_&&dt.update(()=>_(c,f),!1,!0);const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:_,onDrag:y}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:m}=f;if(p&&this.currentDirection===null){this.currentDirection=eA(m),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),y&&y(c,f)},a=(c,f)=>this.stop(c,f),l=()=>Un(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new sx(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:fx(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&dt.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!dl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Vw(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Hs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=zw(r.layoutBox,n):this.constraints=!1,this.elastic=jw(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Un(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=Ww(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Hs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=Kw(i,r.root,this.visualElement.getTransformPagePoint());let o=Hw(r.layout.layoutBox,s);if(n){const a=n(Xw(o));this.hasMutatedConstraints=!!a,a&&(o=ax(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Un(c=>{if(!dl(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,_={type:"inertia",velocity:i?e[c]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,_)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(gp(e,i,0,n))}stopAnimation(){Un(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Un(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Un(n=>{const{drag:i}=this.getProps();if(!dl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-mt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Hs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Un(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();r[o]=Gw({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Un(o=>{if(!dl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(mt(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;Qw.set(this.visualElement,this);const e=this.visualElement.current,n=bi(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Hs(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=wi(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Un(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Bd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function dl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function eA(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class tA extends Mr{constructor(e){super(e),this.removeGroupControls=At,this.removeListeners=At,this.controls=new Jw(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||At}unmount(){this.removeGroupControls(),this.removeListeners()}}const C0=t=>(e,n)=>{t&&dt.update(()=>t(e,n))};class nA extends Mr{constructor(){super(...arguments),this.removePointerDownListener=At}onPointerDown(e){this.session=new sx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:fx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:C0(e),onStart:C0(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&dt.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=bi(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function iA(){const t=ie.useContext(oc);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=ie.useId();return ie.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const Jl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function b0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const No={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Pe.test(t))t=parseFloat(t);else return t;const n=b0(t,e.target.x),i=b0(t,e.target.y);return`${n}% ${i}%`}},rA={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=mr.parse(t);if(r.length>5)return i;const s=mr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class sA extends B.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;a2(oA),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Jl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||dt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Kh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function dx(t){const[e,n]=iA(),i=ie.useContext(ep);return B.createElement(sA,{...t,layoutGroup:i,switchLayoutGroup:ie.useContext(hy),isPresent:e,safeToRemove:n})}const oA={borderRadius:{...No,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:No,borderTopRightRadius:No,borderBottomLeftRadius:No,borderBottomRightRadius:No,boxShadow:rA},hx=["TopLeft","TopRight","BottomLeft","BottomRight"],aA=hx.length,R0=t=>typeof t=="string"?parseFloat(t):t,P0=t=>typeof t=="number"||Pe.test(t);function lA(t,e,n,i,r,s){r?(t.opacity=mt(0,n.opacity!==void 0?n.opacity:1,uA(i)),t.opacityExit=mt(e.opacity!==void 0?e.opacity:1,0,cA(i))):s&&(t.opacity=mt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<aA;o++){const a=`border${hx[o]}Radius`;let l=L0(e,a),u=L0(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||P0(l)===P0(u)?(t[a]=Math.max(mt(R0(l),R0(u),i),0),(fi.test(u)||fi.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=mt(e.rotate||0,n.rotate||0,i))}function L0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const uA=px(0,.5,zy),cA=px(.5,.95,At);function px(t,e,n){return i=>i<t?0:i>e?1:n(ba(t,e,i))}function D0(t,e){t.min=e.min,t.max=e.max}function Dn(t,e){D0(t.x,e.x),D0(t.y,e.y)}function I0(t,e,n,i,r){return t-=e,t=Iu(t,1/n,i),r!==void 0&&(t=Iu(t,1/r,i)),t}function fA(t,e=0,n=1,i=.5,r,s=t,o=t){if(fi.test(e)&&(e=parseFloat(e),e=mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=mt(s.min,s.max,i);t===s&&(a-=e),t.min=I0(t.min,e,n,a,r),t.max=I0(t.max,e,n,a,r)}function U0(t,e,[n,i,r],s,o){fA(t,e[n],e[i],e[r],e.scale,s,o)}const dA=["x","scaleX","originX"],hA=["y","scaleY","originY"];function N0(t,e,n,i){U0(t.x,e,dA,n?n.x:void 0,i?i.x:void 0),U0(t.y,e,hA,n?n.y:void 0,i?i.y:void 0)}function F0(t){return t.translate===0&&t.scale===1}function mx(t){return F0(t.x)&&F0(t.y)}function pA(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function gx(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function O0(t){return bn(t.x)/bn(t.y)}class mA{constructor(){this.members=[]}add(e){vp(this.members,e),e.scheduleRender()}remove(e){if(_p(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function B0(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(i+=`rotate(${l}deg) `),u&&(i+=`rotateX(${u}deg) `),c&&(i+=`rotateY(${c}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const gA=(t,e)=>t.depth-e.depth;class vA{constructor(){this.children=[],this.isDirty=!1}add(e){vp(this.children,e),this.isDirty=!0}remove(e){_p(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(gA),this.isDirty=!1,this.children.forEach(e)}}function _A(t,e){const n=Zr.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ni(i),t(s-e))};return dt.read(i,!0),()=>Ni(i)}function yA(t){window.MotionDebug&&window.MotionDebug.record(t)}function xA(t){return t instanceof SVGElement&&t.tagName!=="svg"}function SA(t,e,n){const i=yn(t)?t:co(t);return i.start(gp("",i,e,n)),i.animation}const k0=["","X","Y","Z"],MA={visibility:"hidden"},V0=1e3;let EA=0;const Ur={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function vx({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=EA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ur.totalNodes=Ur.resolvedTargetDeltas=Ur.recalculatedProjection=0,this.nodes.forEach(AA),this.nodes.forEach(LA),this.nodes.forEach(DA),this.nodes.forEach(CA),yA(Ur)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new vA)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new yp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=xA(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=_A(d,250),Jl.hasAnimatedSinceResize&&(Jl.hasAnimatedSinceResize=!1,this.nodes.forEach(H0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||OA,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=c.getProps(),v=!this.targetLayout||!gx(this.targetLayout,_)||p,g=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const x={...mp(y,"layout"),onPlay:m,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else d||H0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ni(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(IA),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(z0);return}this.isUpdating||this.nodes.forEach(RA),this.isUpdating=!1,window.HandoffCancelAllAnimations&&window.HandoffCancelAllAnimations(),this.nodes.forEach(PA),this.nodes.forEach(TA),this.nodes.forEach(wA),this.clearAllSnapshots();const a=Zr.now();zt.delta=pr(0,1e3/60,a-zt.timestamp),zt.timestamp=a,zt.isProcessing=!0,Xc.update.process(zt),Xc.preRender.process(zt),Xc.render.process(zt),zt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Kh.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(bA),this.sharedNodes.forEach(UA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,dt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){dt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Mt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!mx(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Ir(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),BA(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Mt();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Zi(a.x,l.offset.x),Zi(a.y,l.offset.y)),a}removeElementScroll(o){const a=Mt();Dn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:f}=u;if(u!==this.root&&c&&f.layoutScroll){if(c.isRoot){Dn(a,o);const{scroll:d}=this.root;d&&(Zi(a.x,-d.offset.x),Zi(a.y,-d.offset.y))}Zi(a.x,c.offset.x),Zi(a.y,c.offset.y)}}return a}applyTransform(o,a=!1){const l=Mt();Dn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&js(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Ir(c.latestValues)&&js(l,c.latestValues)}return Ir(this.latestValues)&&js(l,this.latestValues),l}removeTransform(o){const a=Mt();Dn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Ir(u.latestValues))continue;kd(u.latestValues)&&u.updateSnapshot();const c=Mt(),f=u.measurePageBox();Dn(c,f),N0(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Ir(this.latestValues)&&N0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==zt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=zt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),sa(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Dn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Mt(),this.targetWithTransforms=Mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),kw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Dn(this.target,this.layout.layoutBox),ux(this.target,this.targetDelta)):Dn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),sa(this.relativeTargetOrigin,this.target,p.target),Dn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ur.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||kd(this.parent.latestValues)||lx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===zt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Dn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;Yw(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Mt());const{target:_}=a;if(!_){this.projectionTransform&&(this.projectionDelta=Ws(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Ws(),this.projectionDeltaWithTransform=Ws());const y=this.projectionTransform;ra(this.projectionDelta,this.layoutCorrected,_,this.latestValues),this.projectionTransform=B0(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==d||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),Ur.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Ws();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Mt(),p=l?l.source:void 0,_=this.layout?this.layout.source:void 0,y=p!==_,m=this.getStack(),h=!m||m.members.length<=1,v=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(FA));this.animationProgress=0;let g;this.mixTargetDelta=x=>{const b=x/1e3;G0(f.x,o.x,b),G0(f.y,o.y,b),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(sa(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),NA(this.relativeTarget,this.relativeTargetOrigin,d,b),g&&pA(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=Mt()),Dn(g,this.relativeTarget)),y&&(this.animationValues=c,lA(c,u,this.latestValues,b,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ni(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=dt.update(()=>{Jl.hasAnimatedSinceResize=!0,this.currentAnimation=SA(0,V0,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(V0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&_x(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Mt();const f=bn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=bn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Dn(a,l),js(a,c),ra(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new mA),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<k0.length;c++){const f="rotate"+k0[c];l[f]&&(u[f]=l[f],o.setStaticValue(f,0))}o.render();for(const c in u)o.setStaticValue(c,u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return MA;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Kl(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Kl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ir(this.latestValues)&&(y.transform=c?c({},""):"none",this.hasProjected=!1),y}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=B0(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:p,y:_}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${_.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in wu){if(d[y]===void 0)continue;const{correct:m,applyTo:h}=wu[y],v=u.transform==="none"?d[y]:m(d[y],f);if(h){const g=h.length;for(let x=0;x<g;x++)u[h[x]]=v}else u[y]=v}return this.options.layoutId&&(u.pointerEvents=f===this?Kl(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(z0),this.root.sharedNodes.clear()}}}function TA(t){t.updateLayout()}function wA(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Un(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=bn(d);d.min=i[f].min,d.max=d.min+p}):_x(s,n.layoutBox,i)&&Un(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=bn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Ws();ra(a,i,n.layoutBox);const l=Ws();o?ra(l,t.applyTransform(r,!0),n.measuredBox):ra(l,i,n.layoutBox);const u=!mx(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const _=Mt();sa(_,n.layoutBox,d.layoutBox);const y=Mt();sa(y,i,p.layoutBox),gx(_,y)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=_,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function AA(t){Ur.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function CA(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function bA(t){t.clearSnapshot()}function z0(t){t.clearMeasurements()}function RA(t){t.isLayoutDirty=!1}function PA(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function H0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function LA(t){t.resolveTargetDelta()}function DA(t){t.calcProjection()}function IA(t){t.resetRotation()}function UA(t){t.removeLeadSnapshot()}function G0(t,e,n){t.translate=mt(e.translate,0,n),t.scale=mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function W0(t,e,n,i){t.min=mt(e.min,n.min,i),t.max=mt(e.max,n.max,i)}function NA(t,e,n,i){W0(t.x,e.x,n.x,i),W0(t.y,e.y,n.y,i)}function FA(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const OA={duration:.45,ease:[.4,0,.1,1]},j0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),X0=j0("applewebkit/")&&!j0("chrome/")?Math.round:At;function Z0(t){t.min=X0(t.min),t.max=X0(t.max)}function BA(t){Z0(t.x),Z0(t.y)}function _x(t,e,n){return t==="position"||t==="preserve-aspect"&&!Od(O0(e),O0(n),.2)}const kA=vx({attachResizeListener:(t,e)=>wi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nf={current:void 0},yx=vx({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!nf.current){const t=new kA({});t.mount(window),t.setOptions({layoutScroll:!0}),nf.current=t}return nf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),VA={pan:{Feature:nA},drag:{Feature:tA,ProjectionNode:yx,MeasureLayout:dx}},zA=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function HA(t){const e=zA.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function zd(t,e,n=1){const[i,r]=HA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return tx(o)?parseFloat(o):o}else return Au(r)?zd(r,e,n+1):r}function GA(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!Au(s))return;const o=zd(s,i);o&&r.set(o)});for(const r in e){const s=e[r];if(!Au(s))continue;const o=zd(s,i);o&&(e[r]=o,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const WA=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),xx=t=>WA.has(t),jA=t=>Object.keys(t).some(xx),Y0=t=>t===So||t===Pe,$0=(t,e)=>parseFloat(t.split(", ")[e]),q0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return $0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?$0(s[1],t):0}},XA=new Set(["x","y","z"]),ZA=Ba.filter(t=>!XA.has(t));function YA(t){const e=[];return ZA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const fo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:q0(4,13),y:q0(5,14)};fo.translateX=fo.x;fo.translateY=fo.y;const $A=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(u=>{a[u]=fo[u](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(u=>{const c=e.getValue(u);c&&c.jump(a[u]),t[u]=fo[u](l,s)}),t},qA=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(xx);let s=[],o=!1;const a=[];if(r.forEach(l=>{const u=t.getValue(l);if(!t.hasValue(l))return;let c=n[l],f=Uo(c);const d=e[l];let p;if(bu(d)){const _=d.length,y=d[0]===null?1:0;c=d[y],f=Uo(c);for(let m=y;m<_&&d[m]!==null;m++)p?up(Uo(d[m])===p):p=Uo(d[m])}else p=Uo(d);if(f!==p)if(Y0(f)&&Y0(p)){const _=u.get();typeof _=="string"&&u.set(parseFloat(_)),typeof d=="string"?e[l]=parseFloat(d):Array.isArray(d)&&p===Pe&&(e[l]=d.map(parseFloat))}else f!=null&&f.transform&&(p!=null&&p.transform)&&(c===0||d===0)?c===0?u.set(p.transform(c)):e[l]=f.transform(d):(o||(s=YA(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],u.jump(d))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=$A(e,t,a);return s.length&&s.forEach(([c,f])=>{t.getValue(c).set(f)}),t.render(),ac&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:i}}else return{target:e,transitionEnd:i}};function KA(t,e,n,i){return jA(e)?qA(t,e,n,i):{target:e,transitionEnd:i}}const QA=(t,e,n,i)=>{const r=GA(t,e,i);return e=r.target,i=r.transitionEnd,KA(t,e,n,i)},Hd={current:null},Sx={current:!1};function JA(){if(Sx.current=!0,!!ac)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Hd.current=t.matches;t.addListener(e),e()}else Hd.current=!1}function eC(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if(yn(s))t.addValue(r,s),Du(i)&&i.add(r);else if(yn(o))t.addValue(r,co(s,{owner:t})),Du(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,co(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const K0=new WeakMap,Mx=Object.keys(Ca),tC=Mx.length,Q0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],nC=Jh.length;class iC{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>dt.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=uc(n),this.isVariantNode=dy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const f in c){const d=c[f];a[f]!==void 0&&yn(d)&&(d.set(a[f],!1),Du(u)&&u.add(f))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,K0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Sx.current||JA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Hd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){K0.delete(this.current),this.projection&&this.projection.unmount(),Ni(this.notifyUpdate),Ni(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=ss.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&dt.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let o,a;for(let l=0;l<tC;l++){const u=Mx[l],{isEnabled:c,Feature:f,ProjectionNode:d,MeasureLayout:p}=Ca[u];d&&(o=d),c(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:f,layoutScroll:d,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||f&&Hs(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:d,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Mt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Q0.length;i++){const r=Q0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=eC(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<nC;i++){const r=Jh[i],s=this.props[r];(Aa(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=co(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=lp(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!yn(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new yp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Ex extends iC{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},r){const s=xw(i,e||{},this);if(r){_w(this,i,s);const o=QA(this,i,s,n);n=o.transitionEnd,i=o.target}return{transition:e,transitionEnd:n,...i}}}function rC(t){return window.getComputedStyle(t)}class sC extends Ex{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(ss.has(n)){const i=pp(n);return i&&i.default||0}else{const i=rC(e),r=(gy(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return cx(e,n)}build(e,n,i,r){ip(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return ap(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;yn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){Sy(e,n,i,r)}}class oC extends Ex{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ss.has(n)){const i=pp(n);return i&&i.default||0}return n=My.has(n)?n:qh(n),e.getAttribute(n)}measureInstanceViewportBox(){return Mt()}scrapeMotionValuesFromProps(e,n){return Ty(e,n)}build(e,n,i,r){sp(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){Ey(e,n,i,r)}mount(e){this.isSVGTag=op(e.tagName),super.mount(e)}}const aC=(t,e)=>tp(t)?new oC(e,{enableHardwareAcceleration:!1}):new sC(e,{enableHardwareAcceleration:!0}),lC={layout:{ProjectionNode:yx,MeasureLayout:dx}},uC={...Nw,...$2,...VA,...lC},Gr=s2((t,e)=>F2(t,e,uC,aC));function Tx(){const t=ie.useRef(!1);return $h(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function cC(){const t=Tx(),[e,n]=ie.useState(0),i=ie.useCallback(()=>{t.current&&n(e+1)},[e]);return[ie.useCallback(()=>dt.postRender(i),[i]),e]}class fC extends ie.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function dC({children:t,isPresent:e}){const n=ie.useId(),i=ie.useRef(null),r=ie.useRef({width:0,height:0,top:0,left:0});return ie.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=r.current;if(e||!i.current||!s||!o)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),ie.createElement(fC,{isPresent:e,childRef:i,sizeRef:r},ie.cloneElement(t,{ref:i}))}const rf=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=wy(hC),l=ie.useId(),u=ie.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c=>{a.set(c,!0);for(const f of a.values())if(!f)return;i&&i()},register:c=>(a.set(c,!1),()=>a.delete(c))}),s?void 0:[n]);return ie.useMemo(()=>{a.forEach((c,f)=>a.set(f,!1))},[n]),ie.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=ie.createElement(dC,{isPresent:n},t)),ie.createElement(oc.Provider,{value:u},t)};function hC(){return new Map}function pC(t){return ie.useEffect(()=>()=>t(),[])}const Nr=t=>t.key||"";function mC(t,e){t.forEach(n=>{const i=Nr(n);e.set(i,n)})}function gC(t){const e=[];return ie.Children.forEach(t,n=>{ie.isValidElement(n)&&e.push(n)}),e}const Gd=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=ie.useContext(ep).forceRender||cC()[0],l=Tx(),u=gC(t);let c=u;const f=ie.useRef(new Map).current,d=ie.useRef(c),p=ie.useRef(new Map).current,_=ie.useRef(!0);if($h(()=>{_.current=!1,mC(u,p),d.current=c}),pC(()=>{_.current=!0,p.clear(),f.clear()}),_.current)return ie.createElement(ie.Fragment,null,c.map(v=>ie.createElement(rf,{key:Nr(v),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},v)));c=[...c];const y=d.current.map(Nr),m=u.map(Nr),h=y.length;for(let v=0;v<h;v++){const g=y[v];m.indexOf(g)===-1&&!f.has(g)&&f.set(g,void 0)}return o==="wait"&&f.size&&(c=[]),f.forEach((v,g)=>{if(m.indexOf(g)!==-1)return;const x=p.get(g);if(!x)return;const b=y.indexOf(g);let C=v;if(!C){const E=()=>{f.delete(g);const D=Array.from(p.keys()).filter(S=>!m.includes(S));if(D.forEach(S=>p.delete(S)),d.current=u.filter(S=>{const T=Nr(S);return T===g||D.includes(T)}),!f.size){if(l.current===!1)return;a(),i&&i()}};C=ie.createElement(rf,{key:Nr(x),isPresent:!1,onExitComplete:E,custom:e,presenceAffectsLayout:s,mode:o},x),f.set(g,C)}c.splice(b,0,C)}),c=c.map(v=>{const g=v.key;return f.has(g)?v:ie.createElement(rf,{key:Nr(v),isPresent:!0,presenceAffectsLayout:s,mode:o},v)}),ie.createElement(ie.Fragment,null,f.size?c:c.map(v=>ie.cloneElement(v)))},vC=ie.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var _C=Object.defineProperty,Uu=Object.getOwnPropertySymbols,wx=Object.prototype.hasOwnProperty,Ax=Object.prototype.propertyIsEnumerable,J0=(t,e,n)=>e in t?_C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,eg=(t,e)=>{for(var n in e||(e={}))wx.call(e,n)&&J0(t,n,e[n]);if(Uu)for(var n of Uu(e))Ax.call(e,n)&&J0(t,n,e[n]);return t},tg=(t,e)=>{var n={};for(var i in t)wx.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Uu)for(var i of Uu(t))e.indexOf(i)<0&&Ax.call(t,i)&&(n[i]=t[i]);return n};const Er=ie.forwardRef((t,e)=>{const n=t,{alt:i,color:r,size:s,weight:o,mirrored:a,children:l,weights:u}=n,c=tg(n,["alt","color","size","weight","mirrored","children","weights"]),f=ie.useContext(vC),{color:d="currentColor",size:p,weight:_="regular",mirrored:y=!1}=f,m=tg(f,["color","size","weight","mirrored"]);return B.createElement("svg",eg(eg({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s??p,height:s??p,fill:r??d,viewBox:"0 0 256 256",transform:a||y?"scale(-1, 1)":void 0},m),c),!!i&&B.createElement("title",null,i),l,u.get(o??_))});Er.displayName="IconBase";var yC=Object.defineProperty,xC=Object.defineProperties,SC=Object.getOwnPropertyDescriptors,ng=Object.getOwnPropertySymbols,MC=Object.prototype.hasOwnProperty,EC=Object.prototype.propertyIsEnumerable,ig=(t,e,n)=>e in t?yC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,TC=(t,e)=>{for(var n in e||(e={}))MC.call(e,n)&&ig(t,n,e[n]);if(ng)for(var n of ng(e))EC.call(e,n)&&ig(t,n,e[n]);return t},wC=(t,e)=>xC(t,SC(e));const AC=new Map([["bold",B.createElement(B.Fragment,null,B.createElement("path",{d:"M228,128a100,100,0,0,1-98.66,100H128a99.39,99.39,0,0,1-68.62-27.29,12,12,0,0,1,16.48-17.45,76,76,0,1,0-1.57-109c-.13.13-.25.25-.39.37L54.89,92H72a12,12,0,0,1,0,24H24a12,12,0,0,1-12-12V56a12,12,0,0,1,24,0V76.72L57.48,57.06A100,100,0,0,1,228,128Z"}))],["duotone",B.createElement(B.Fragment,null,B.createElement("path",{d:"M72,104H24V56Z",opacity:"0.2"}),B.createElement("path",{d:"M195.88,60.08A96.08,96.08,0,0,0,60.25,60L49.31,70,29.66,50.3A8,8,0,0,0,16,56v48a8,8,0,0,0,8,8H72a8,8,0,0,0,5.66-13.66l-17-17,10.54-9.65a3.07,3.07,0,0,0,.26-.25,80,80,0,1,1,1.65,114.78,8,8,0,0,0-11,11.63A95.38,95.38,0,0,0,128,224h1.32A96,96,0,0,0,195.88,60.08ZM32,96V75.28L52.69,96Z"}))],["fill",B.createElement(B.Fragment,null,B.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L60.63,81.29l17,17A8,8,0,0,1,72,112H24a8,8,0,0,1-8-8V56A8,8,0,0,1,29.66,50.3L49.31,70,60.25,60A96,96,0,0,1,224,128Z"}))],["light",B.createElement(B.Fragment,null,B.createElement("path",{d:"M222,128a94,94,0,0,1-92.74,94H128a93.43,93.43,0,0,1-64.5-25.65,6,6,0,1,1,8.24-8.72A82,82,0,1,0,70,70l-.19.19L39.44,98H72a6,6,0,0,1,0,12H24a6,6,0,0,1-6-6V56a6,6,0,0,1,12,0V90.34L61.63,61.4A94,94,0,0,1,222,128Z"}))],["regular",B.createElement(B.Fragment,null,B.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"}))],["thin",B.createElement(B.Fragment,null,B.createElement("path",{d:"M220,128a92,92,0,0,1-90.77,92H128a91.47,91.47,0,0,1-63.13-25.1,4,4,0,1,1,5.5-5.82A84,84,0,1,0,68.6,68.57l-.13.12L34.3,100H72a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V56a4,4,0,0,1,8,0V94.89l35-32A92,92,0,0,1,220,128Z"}))]]),Cx=ie.forwardRef((t,e)=>B.createElement(Er,wC(TC({ref:e},t),{weights:AC})));Cx.displayName="ArrowCounterClockwise";var CC=Object.defineProperty,bC=Object.defineProperties,RC=Object.getOwnPropertyDescriptors,rg=Object.getOwnPropertySymbols,PC=Object.prototype.hasOwnProperty,LC=Object.prototype.propertyIsEnumerable,sg=(t,e,n)=>e in t?CC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,DC=(t,e)=>{for(var n in e||(e={}))PC.call(e,n)&&sg(t,n,e[n]);if(rg)for(var n of rg(e))LC.call(e,n)&&sg(t,n,e[n]);return t},IC=(t,e)=>bC(t,RC(e));const UC=new Map([["bold",B.createElement(B.Fragment,null,B.createElement("path",{d:"M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"}))],["duotone",B.createElement(B.Fragment,null,B.createElement("path",{d:"M160,48V208L80,128Z",opacity:"0.2"}),B.createElement("path",{d:"M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z"}))],["fill",B.createElement(B.Fragment,null,B.createElement("path",{d:"M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"}))],["light",B.createElement(B.Fragment,null,B.createElement("path",{d:"M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z"}))],["regular",B.createElement(B.Fragment,null,B.createElement("path",{d:"M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"}))],["thin",B.createElement(B.Fragment,null,B.createElement("path",{d:"M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"}))]]),bx=ie.forwardRef((t,e)=>B.createElement(Er,IC(DC({ref:e},t),{weights:UC})));bx.displayName="CaretLeft";var NC=Object.defineProperty,FC=Object.defineProperties,OC=Object.getOwnPropertyDescriptors,og=Object.getOwnPropertySymbols,BC=Object.prototype.hasOwnProperty,kC=Object.prototype.propertyIsEnumerable,ag=(t,e,n)=>e in t?NC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,VC=(t,e)=>{for(var n in e||(e={}))BC.call(e,n)&&ag(t,n,e[n]);if(og)for(var n of og(e))kC.call(e,n)&&ag(t,n,e[n]);return t},zC=(t,e)=>FC(t,OC(e));const HC=new Map([["bold",B.createElement(B.Fragment,null,B.createElement("path",{d:"M203.57,51A107.9,107.9,0,0,0,20,128c0,44.72,27.6,82.25,72,97.94A36,36,0,0,0,140,192a12,12,0,0,1,12-12h46.21a35.79,35.79,0,0,0,35.1-28A108.6,108.6,0,0,0,236,127.09,107.23,107.23,0,0,0,203.57,51Zm6.34,95.67a11.91,11.91,0,0,1-11.7,9.3H152a36,36,0,0,0-36,36,12,12,0,0,1-16,11.3c-16.65-5.88-30.65-15.76-40.48-28.56A76,76,0,0,1,44,128a84,84,0,0,1,83.13-84H128a84.35,84.35,0,0,1,84,83.29A84.72,84.72,0,0,1,209.91,146.71ZM144,76a16,16,0,1,1-16-16A16,16,0,0,1,144,76Zm-44,24A16,16,0,1,1,84,84,16,16,0,0,1,100,100Zm0,56a16,16,0,1,1-16-16A16,16,0,0,1,100,156Zm88-56a16,16,0,1,1-16-16A16,16,0,0,1,188,100Z"}))],["duotone",B.createElement(B.Fragment,null,B.createElement("path",{d:"M224,127.17a96.48,96.48,0,0,1-2.39,22.18A24,24,0,0,1,198.21,168H152a24,24,0,0,0-24,24,24,24,0,0,1-32,22.61C58.73,201.44,32,169.81,32,128a96,96,0,0,1,95-96C179.84,31.47,223.55,74.35,224,127.17Z",opacity:"0.2"}),B.createElement("path",{d:"M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"}))],["fill",B.createElement(B.Fragment,null,B.createElement("path",{d:"M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89ZM84,168a12,12,0,1,1,12-12A12,12,0,0,1,84,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,84,112Zm44-24a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm44,24a12,12,0,1,1,12-12A12,12,0,0,1,172,112Z"}))],["light",B.createElement(B.Fragment,null,B.createElement("path",{d:"M199.37,55.31A101.32,101.32,0,0,0,128,26h-1A102,102,0,0,0,26,128c0,42.09,26.07,77.44,68,92.26A30.21,30.21,0,0,0,104.11,222,30.06,30.06,0,0,0,134,192a18,18,0,0,1,18-18h46.21a29.82,29.82,0,0,0,29.25-23.31A102.71,102.71,0,0,0,230,127.11,101.25,101.25,0,0,0,199.37,55.31ZM215.76,148a17.89,17.89,0,0,1-17.55,14H152a30,30,0,0,0-30,30,18,18,0,0,1-24,17C61,195.86,38,164.85,38,128a90,90,0,0,1,89.07-90H128a90.34,90.34,0,0,1,90,89.22A90.46,90.46,0,0,1,215.76,148ZM138,76a10,10,0,1,1-10-10A10,10,0,0,1,138,76ZM94,100A10,10,0,1,1,84,90,10,10,0,0,1,94,100Zm0,56a10,10,0,1,1-10-10A10,10,0,0,1,94,156Zm88-56a10,10,0,1,1-10-10A10,10,0,0,1,182,100Z"}))],["regular",B.createElement(B.Fragment,null,B.createElement("path",{d:"M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"}))],["thin",B.createElement(B.Fragment,null,B.createElement("path",{d:"M198,56.74A99.31,99.31,0,0,0,128,28h-1A100,100,0,0,0,28,128c0,41.22,25.55,75.85,66.69,90.38a28.34,28.34,0,0,0,9.42,1.63A28,28,0,0,0,132,192a20,20,0,0,1,20-20h46.21a27.84,27.84,0,0,0,27.3-21.76,100.37,100.37,0,0,0,2.49-23.1A99.26,99.26,0,0,0,198,56.74Zm19.74,91.72A19.89,19.89,0,0,1,198.21,164H152a28,28,0,0,0-28,28,20,20,0,0,1-26.64,18.83C59.51,197.46,36,165.72,36,128a92,92,0,0,1,91.05-92H128a92,92,0,0,1,89.72,112.46ZM136,76a8,8,0,1,1-8-8A8,8,0,0,1,136,76ZM92,100a8,8,0,1,1-8-8A8,8,0,0,1,92,100Zm0,56a8,8,0,1,1-8-8A8,8,0,0,1,92,156Zm88-56a8,8,0,1,1-8-8A8,8,0,0,1,180,100Z"}))]]),Rx=ie.forwardRef((t,e)=>B.createElement(Er,zC(VC({ref:e},t),{weights:HC})));Rx.displayName="Palette";var GC=Object.defineProperty,WC=Object.defineProperties,jC=Object.getOwnPropertyDescriptors,lg=Object.getOwnPropertySymbols,XC=Object.prototype.hasOwnProperty,ZC=Object.prototype.propertyIsEnumerable,ug=(t,e,n)=>e in t?GC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,YC=(t,e)=>{for(var n in e||(e={}))XC.call(e,n)&&ug(t,n,e[n]);if(lg)for(var n of lg(e))ZC.call(e,n)&&ug(t,n,e[n]);return t},$C=(t,e)=>WC(t,jC(e));const qC=new Map([["bold",B.createElement(B.Fragment,null,B.createElement("path",{d:"M251.62,39.65a12,12,0,0,0-11.27-11.27c-53.28-3.14-96.2,13.37-114.84,44.14-12.14,20-12.56,44.17-1.46,67.3a75.21,75.21,0,0,0-11.24,20l-9.7-9.7c7.19-16.77,6.43-34.11-2.4-48.69C86.73,78.36,54.89,66,15.55,68.28A12,12,0,0,0,4.28,79.55C2,118.89,14.36,150.73,37.45,164.71a49.76,49.76,0,0,0,26,7.27,57.54,57.54,0,0,0,22.7-4.87L108,189v27a12,12,0,0,0,24,0V186.51a51.63,51.63,0,0,1,9.49-29.95A76.81,76.81,0,0,0,173.58,164a64.92,64.92,0,0,0,33.9-9.46C238.25,135.85,254.76,92.92,251.62,39.65ZM49.88,144.18c-13.19-8-21.18-27.46-21.83-52.13,24.67.65,44.14,8.65,52.13,21.83a26,26,0,0,1,3.63,17L72.48,119.51a12,12,0,0,0-17,17l11.34,11.34A26.27,26.27,0,0,1,49.88,144.18ZM195.05,134c-10.66,6.45-23,7.67-35.81,3.76l37.25-37.24a12,12,0,0,0-17-17l-37.25,37.24C138.37,108,139.59,95.61,146,85c12.77-21.09,43-33.07,82-33C228.14,91,216.14,121.18,195.05,134Z"}))],["duotone",B.createElement(B.Fragment,null,B.createElement("path",{d:"M138.54,141.46C106.62,88.25,149.18,35.05,239.63,40.37,245,130.82,191.75,173.39,138.54,141.46ZM16.26,80.26c-3.8,64.61,34.21,95,72.21,72.21C111.27,114.47,80.87,76.46,16.26,80.26Z",opacity:"0.2"}),B.createElement("path",{d:"M247.63,39.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.48-11.78,43.16-.16,65.74a71.37,71.37,0,0,0-14.17,26.95L98.33,151c7.82-16.33,7.52-33.36-1-47.49C84.09,81.73,53.62,70,15.79,72.27a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,168,54.58,54.58,0,0,0,87,162.33l25,25V216a8,8,0,0,0,16,0V186.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,133.21,250.67,91.65,247.63,39.89ZM86.06,138.74l-24.41-24.4a8,8,0,0,0-11.31,11.31l24.41,24.41c-9.61,3.18-18.93,2.39-26.94-2.46C32.47,138.31,23.79,116.32,24,88c28.31-.25,50.31,8.47,59.6,23.81C88.45,119.82,89.24,129.14,86.06,138.74Zm111.06-1.36c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.32L140.65,128c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.8,89.33-34.83C232.94,90.34,220.14,123.44,197.12,137.38Z"}))],["fill",B.createElement(B.Fragment,null,B.createElement("path",{d:"M205.41,151.07a60.9,60.9,0,0,1-31.83,8.86,71.71,71.71,0,0,1-27.36-5.66A55.55,55.55,0,0,0,136,186.51V216a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.25V203.31L81.38,164.69A52.5,52.5,0,0,1,63.44,168a45.82,45.82,0,0,1-23.92-6.67C17.73,148.09,6,117.62,8.27,79.79a8,8,0,0,1,7.52-7.52c37.83-2.23,68.3,9.46,81.5,31.25A46,46,0,0,1,103.74,132a4,4,0,0,1-6.89,2.43l-19.2-20.1a8,8,0,0,0-11.31,11.31l53.88,55.25c.06-.78.13-1.56.21-2.33a68.56,68.56,0,0,1,18.64-39.46l50.59-53.46a8,8,0,0,0-11.31-11.32l-49,51.82a4,4,0,0,1-6.78-1.74c-4.74-17.48-2.65-34.88,6.4-49.82,17.86-29.48,59.42-45.26,111.18-42.22a8,8,0,0,1,7.52,7.52C250.67,91.65,234.89,133.21,205.41,151.07Z"}))],["light",B.createElement(B.Fragment,null,B.createElement("path",{d:"M245.63,40A6,6,0,0,0,240,34.37c-51-3-91.88,12.42-109.35,41.26-11.63,19.21-11.38,42.68.53,65a69.42,69.42,0,0,0-15.48,30.59L95.9,151.41c8.15-16.1,8.1-32.95-.32-46.85C82.77,83.41,53,72.07,15.9,74.27a6,6,0,0,0-5.63,5.64C8.09,117,19.41,146.77,40.56,159.58A43.75,43.75,0,0,0,63.44,166a53.17,53.17,0,0,0,24-6L114,186.48V216a6,6,0,0,0,12,0V186.51A57.55,57.55,0,0,1,139.76,149c11.21,5.93,22.72,8.91,33.82,8.91a58.9,58.9,0,0,0,30.79-8.57C233.21,131.89,248.63,91,245.63,40ZM46.78,149.31C30.47,139.44,21.39,116,22,86c30-.65,53.41,8.44,63.28,24.75,5.68,9.37,6.16,20.38,1.54,31.59L60.24,115.75a6,6,0,0,0-8.49,8.49l26.62,26.61C67.16,155.47,56.15,155,46.78,149.31Zm151.38-10.22c-14.74,8.92-32.14,9.18-49.67.9l55.76-55.75a6,6,0,0,0-8.49-8.49L140,131.51c-8.28-17.53-8-34.93.9-49.66,14.52-24,49.06-37.18,93-35.75C235.33,90,222.14,124.56,198.16,139.09Z"}))],["regular",B.createElement(B.Fragment,null,B.createElement("path",{d:"M247.63,39.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,151c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,168,54.58,54.58,0,0,0,87,162.33l25,25V216a8,8,0,0,0,16,0V186.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,133.21,250.67,91.65,247.63,39.89ZM47.81,147.6C32.47,138.31,23.79,116.32,24,88c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,114.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,153.24,55.82,152.45,47.81,147.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,128c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,90.34,220.14,123.44,197.12,137.38Z"}))],["thin",B.createElement(B.Fragment,null,B.createElement("path",{d:"M243.63,40.12a4,4,0,0,0-3.76-3.75c-50.25-3-90.44,12.1-107.52,40.29-11.64,19.22-11.17,41.92,1.24,64.21a67.33,67.33,0,0,0-16.65,34.41L93.45,151.79c8.63-16,8.81-32.33.42-46.19C81.45,85.09,52.35,74.13,16,76.26A4,4,0,0,0,12.26,80c-2.13,36.33,8.83,65.43,29.34,77.85a41.82,41.82,0,0,0,21.88,6.18,51.29,51.29,0,0,0,24.31-6.6L116,185.67c0,.28,0,.56,0,.84V216a4,4,0,0,0,8,0V186.51a59.57,59.57,0,0,1,15.29-40c11.49,6.36,23.07,9.56,34.24,9.56a57,57,0,0,0,29.81-8.41C231.52,130.57,246.59,90.38,243.63,40.12ZM45.74,151C28.47,140.56,19,115.69,20.08,84.08,51.69,83,76.56,92.47,87,109.74c6.48,10.71,6.59,23.37.46,36.09L58.82,117.17a4,4,0,0,0-5.65,5.65l28.67,28.67C69.11,157.62,56.45,157.51,45.74,151ZM199.19,140.8c-16.05,9.72-35.09,9.59-54.08-.25l57.72-57.73a4,4,0,0,0-5.65-5.66l-57.73,57.73c-9.84-19-10-38-.25-54.08,15.11-25,51.08-38.53,96.63-36.64C237.73,89.72,224.15,125.69,199.19,140.8Z"}))]]),Px=ie.forwardRef((t,e)=>B.createElement(Er,$C(YC({ref:e},t),{weights:qC})));Px.displayName="Plant";var KC=Object.defineProperty,QC=Object.defineProperties,JC=Object.getOwnPropertyDescriptors,cg=Object.getOwnPropertySymbols,e3=Object.prototype.hasOwnProperty,t3=Object.prototype.propertyIsEnumerable,fg=(t,e,n)=>e in t?KC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,n3=(t,e)=>{for(var n in e||(e={}))e3.call(e,n)&&fg(t,n,e[n]);if(cg)for(var n of cg(e))t3.call(e,n)&&fg(t,n,e[n]);return t},i3=(t,e)=>QC(t,JC(e));const r3=new Map([["bold",B.createElement(B.Fragment,null,B.createElement("path",{d:"M68,102.06V40a12,12,0,0,0-24,0v62.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V169.94a36,36,0,0,0,0-67.88ZM56,148a12,12,0,1,1,12-12A12,12,0,0,1,56,148ZM164,88a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0V54.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V121.94A36.07,36.07,0,0,0,164,88Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,128,100Zm108,68a36.07,36.07,0,0,0-24-33.94V40a12,12,0,0,0-24,0v94.06a36,36,0,0,0,0,67.88V216a12,12,0,0,0,24,0V201.94A36.07,36.07,0,0,0,236,168Zm-36,12a12,12,0,1,1,12-12A12,12,0,0,1,200,180Z"}))],["duotone",B.createElement(B.Fragment,null,B.createElement("path",{d:"M80,136a24,24,0,1,1-24-24A24,24,0,0,1,80,136Zm48-72a24,24,0,1,0,24,24A24,24,0,0,0,128,64Zm72,80a24,24,0,1,0,24,24A24,24,0,0,0,200,144Z",opacity:"0.2"}),B.createElement("path",{d:"M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"}))],["fill",B.createElement(B.Fragment,null,B.createElement("path",{d:"M84,136a28,28,0,0,1-20,26.83V216a8,8,0,0,1-16,0V162.83a28,28,0,0,1,0-53.66V40a8,8,0,0,1,16,0v69.17A28,28,0,0,1,84,136Zm52-74.83V40a8,8,0,0,0-16,0V61.17a28,28,0,0,0,0,53.66V216a8,8,0,0,0,16,0V114.83a28,28,0,0,0,0-53.66Zm72,80V40a8,8,0,0,0-16,0V141.17a28,28,0,0,0,0,53.66V216a8,8,0,0,0,16,0V194.83a28,28,0,0,0,0-53.66Z"}))],["light",B.createElement(B.Fragment,null,B.createElement("path",{d:"M62,106.6V40a6,6,0,0,0-12,0v66.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V165.4a30,30,0,0,0,0-58.8ZM56,154a18,18,0,1,1,18-18A18,18,0,0,1,56,154Zm78-95.4V40a6,6,0,0,0-12,0V58.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V117.4a30,30,0,0,0,0-58.8ZM128,106a18,18,0,1,1,18-18A18,18,0,0,1,128,106Zm102,62a30.05,30.05,0,0,0-24-29.4V40a6,6,0,0,0-12,0v98.6a30,30,0,0,0,0,58.8V216a6,6,0,0,0,12,0V197.4A30.05,30.05,0,0,0,230,168Zm-30,18a18,18,0,1,1,18-18A18,18,0,0,1,200,186Z"}))],["regular",B.createElement(B.Fragment,null,B.createElement("path",{d:"M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"}))],["thin",B.createElement(B.Fragment,null,B.createElement("path",{d:"M60,108.29V40a4,4,0,0,0-8,0v68.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V163.71a28,28,0,0,0,0-55.42ZM56,156a20,20,0,1,1,20-20A20,20,0,0,1,56,156Zm76-95.71V40a4,4,0,0,0-8,0V60.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V115.71a28,28,0,0,0,0-55.42ZM128,108a20,20,0,1,1,20-20A20,20,0,0,1,128,108Zm100,60a28,28,0,0,0-24-27.71V40a4,4,0,0,0-8,0V140.29a28,28,0,0,0,0,55.42V216a4,4,0,0,0,8,0V195.71A28,28,0,0,0,228,168Zm-28,20a20,20,0,1,1,20-20A20,20,0,0,1,200,188Z"}))]]),Lx=ie.forwardRef((t,e)=>B.createElement(Er,i3(n3({ref:e},t),{weights:r3})));Lx.displayName="Sliders";var s3=Object.defineProperty,o3=Object.defineProperties,a3=Object.getOwnPropertyDescriptors,dg=Object.getOwnPropertySymbols,l3=Object.prototype.hasOwnProperty,u3=Object.prototype.propertyIsEnumerable,hg=(t,e,n)=>e in t?s3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c3=(t,e)=>{for(var n in e||(e={}))l3.call(e,n)&&hg(t,n,e[n]);if(dg)for(var n of dg(e))u3.call(e,n)&&hg(t,n,e[n]);return t},f3=(t,e)=>o3(t,a3(e));const d3=new Map([["bold",B.createElement(B.Fragment,null,B.createElement("path",{d:"M116,32V16a12,12,0,0,1,24,0V32a12,12,0,0,1-24,0Zm80,96a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM44,128a12,12,0,0,0-12-12H16a12,12,0,0,0,0,24H32A12,12,0,0,0,44,128Zm84,84a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V224A12,12,0,0,0,128,212Zm112-96H224a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"}))],["duotone",B.createElement(B.Fragment,null,B.createElement("path",{d:"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",opacity:"0.2"}),B.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["fill",B.createElement(B.Fragment,null,B.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["light",B.createElement(B.Fragment,null,B.createElement("path",{d:"M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"}))],["regular",B.createElement(B.Fragment,null,B.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["thin",B.createElement(B.Fragment,null,B.createElement("path",{d:"M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"}))]]),Dx=ie.forwardRef((t,e)=>B.createElement(Er,f3(c3({ref:e},t),{weights:d3})));Dx.displayName="Sun";var h3=Object.defineProperty,p3=Object.defineProperties,m3=Object.getOwnPropertyDescriptors,pg=Object.getOwnPropertySymbols,g3=Object.prototype.hasOwnProperty,v3=Object.prototype.propertyIsEnumerable,mg=(t,e,n)=>e in t?h3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_3=(t,e)=>{for(var n in e||(e={}))g3.call(e,n)&&mg(t,n,e[n]);if(pg)for(var n of pg(e))v3.call(e,n)&&mg(t,n,e[n]);return t},y3=(t,e)=>p3(t,m3(e));const x3=new Map([["bold",B.createElement(B.Fragment,null,B.createElement("path",{d:"M24,104a12,12,0,0,1,0-24h96a12,12,0,0,0,0-24,15.07,15.07,0,0,0-10.26,4.45,12,12,0,0,1-17-16.9A39.34,39.34,0,0,1,120,32a36,36,0,0,1,0,72ZM208,68a39.34,39.34,0,0,0-27.3,11.55,12,12,0,0,0,17,16.9A15.07,15.07,0,0,1,208,92a12,12,0,0,1,0,24H32a12,12,0,0,0,0,24H208a36,36,0,0,0,0-72Zm-56,84H40a12,12,0,0,0,0,24H152a12,12,0,0,1,0,24,15.11,15.11,0,0,1-10.27-4.45,12,12,0,1,0-17,16.9A39.34,39.34,0,0,0,152,224a36,36,0,0,0,0-72Z"}))],["duotone",B.createElement(B.Fragment,null,B.createElement("path",{d:"M120,96a24,24,0,1,1,24-24A24,24,0,0,1,120,96Zm88-16a24,24,0,1,0,24,24A24,24,0,0,0,208,80Zm-56,80a24,24,0,1,0,24,24A24,24,0,0,0,152,160Z",opacity:"0.2"}),B.createElement("path",{d:"M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"}))],["fill",B.createElement(B.Fragment,null,B.createElement("path",{d:"M120,104H24a8,8,0,0,1-8-8.53A8.17,8.17,0,0,1,24.27,88H112a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,111.73,72H92.29a4,4,0,0,1-4-4.58A32,32,0,1,1,120,104Zm119.92-2.29a32,32,0,0,0-63.59-2.29,4,4,0,0,0,4,4.58h19.44a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H32.27A8.17,8.17,0,0,0,24,127.47,8,8,0,0,0,32,136H208A32,32,0,0,0,239.92,101.71ZM152,152H40.27A8.17,8.17,0,0,0,32,159.47,8,8,0,0,0,40,168H143.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H124.29a4,4,0,0,0-4,4.58A32,32,0,1,0,152,152Z"}))],["light",B.createElement(B.Fragment,null,B.createElement("path",{d:"M182,184a30,30,0,0,1-30,30c-12.9,0-25.36-8.38-29.63-19.92a6,6,0,0,1,11.26-4.16C136.13,196.69,144.2,202,152,202a18,18,0,0,0,0-36H40a6,6,0,0,1,0-12H152A30,30,0,0,1,182,184ZM150,72a30,30,0,0,0-30-30c-12.9,0-25.36,8.38-29.63,19.92a6,6,0,1,0,11.26,4.16C104.13,59.31,112.2,54,120,54a18,18,0,0,1,0,36H24a6,6,0,0,0,0,12h96A30,30,0,0,0,150,72Zm58,2c-12.9,0-25.36,8.38-29.63,19.92a6,6,0,1,0,11.26,4.16C192.13,91.31,200.2,86,208,86a18,18,0,0,1,0,36H32a6,6,0,0,0,0,12H208a30,30,0,0,0,0-60Z"}))],["regular",B.createElement(B.Fragment,null,B.createElement("path",{d:"M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"}))],["thin",B.createElement(B.Fragment,null,B.createElement("path",{d:"M180,184a28,28,0,0,1-28,28c-12.09,0-23.76-7.83-27.75-18.61a4,4,0,1,1,7.5-2.78C134.58,198.24,143.28,204,152,204a20,20,0,0,0,0-40H40a4,4,0,0,1,0-8H152A28,28,0,0,1,180,184ZM148,72a28,28,0,0,0-28-28c-12.09,0-23.76,7.83-27.75,18.61a4,4,0,0,0,7.5,2.78C102.58,57.76,111.28,52,120,52a20,20,0,0,1,0,40H24a4,4,0,0,0,0,8h96A28,28,0,0,0,148,72Zm60,4c-12.09,0-23.76,7.83-27.75,18.61a4,4,0,1,0,7.5,2.78C190.58,89.76,199.28,84,208,84a20,20,0,0,1,0,40H32a4,4,0,0,0,0,8H208a28,28,0,0,0,0-56Z"}))]]),Ix=ie.forwardRef((t,e)=>B.createElement(Er,y3(_3({ref:e},t),{weights:x3})));Ix.displayName="Wind";const Zt={colors:{surface:"rgba(8, 8, 8, 0.6)",border:"rgba(255, 255, 255, 0.08)",primary:"#ffffff",secondary:"#71717a",accent:"#d9f99d",accentGlow:"rgba(217, 249, 157, 0.4)"}},Ze={container:{position:"absolute",top:"32px",left:"32px",zIndex:20,display:"flex",alignItems:"flex-start",gap:"12px",fontFamily:'"Google Sans", sans-serif'},panel:{width:"300px",backgroundColor:Zt.colors.surface,border:`1px solid ${Zt.colors.border}`,borderRadius:"16px",padding:"0",overflow:"hidden",boxShadow:"0 32px 64px -12px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(255,255,255,0.05)",display:"flex",flexDirection:"column"},header:{padding:"20px 24px",background:"linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0))",borderBottom:`1px solid ${Zt.colors.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"},titleGroup:{display:"flex",flexDirection:"column",gap:"4px"},title:{fontFamily:'"Google Sans", sans-serif',fontSize:"24px",color:Zt.colors.primary,letterSpacing:"0.05em",lineHeight:.9,margin:0,textShadow:"0 2px 10px rgba(0,0,0,0.5)"},subtitle:{fontFamily:'"Google Sans", sans-serif',fontSize:"9px",color:Zt.colors.secondary,textTransform:"uppercase",letterSpacing:"0.1em"},scrollArea:{padding:"24px",maxHeight:"60vh",overflowY:"auto",scrollbarWidth:"none"},section:{marginBottom:"28px"},sectionHeader:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"16px",color:Zt.colors.primary,opacity:.8},sectionIcon:{color:Zt.colors.accent},sectionTitle:{fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",margin:0},controlGroup:{marginBottom:"18px"},labelRow:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"10px"},label:{color:Zt.colors.secondary,fontSize:"10px",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05em"},value:{color:Zt.colors.accent,fontSize:"10px",fontFamily:'"Google Sans", sans-serif',background:"rgba(255,255,255,0.05)",padding:"2px 6px",borderRadius:"4px"},sliderContainer:{position:"relative",width:"100%",height:"24px",display:"flex",alignItems:"center",cursor:"grab"},sliderTrack:{position:"absolute",width:"100%",height:"4px",backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden"},sliderFill:{height:"100%",backgroundColor:Zt.colors.accent,boxShadow:`0 0 10px ${Zt.colors.accentGlow}`},sliderInput:{position:"absolute",width:"100%",height:"100%",opacity:0,cursor:"grab",zIndex:2,margin:0},sliderThumb:{position:"absolute",height:"14px",width:"4px",backgroundColor:"#fff",borderRadius:"1px",transform:"translateX(-50%)",pointerEvents:"none",zIndex:1,boxShadow:"0 1px 4px rgba(0,0,0,0.5)"},colorGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},colorButton:{height:"36px",borderRadius:"8px",border:`1px solid ${Zt.colors.border}`,position:"relative",overflow:"hidden",cursor:"pointer",transition:"transform 0.1s ease"},colorInput:{position:"absolute",top:"-10px",left:"-10px",width:"calc(100% + 20px)",height:"calc(100% + 20px)",opacity:0,cursor:"pointer"},colorLabel:{position:"absolute",bottom:"4px",left:"6px",fontSize:"8px",fontFamily:'"Google Sans", sans-serif',color:"rgba(0,0,0,0.7)",fontWeight:700,pointerEvents:"none",textTransform:"uppercase",background:"rgba(255,255,255,0.4)",padding:"1px 3px",borderRadius:"3px"},toggleBtn:{width:"44px",height:"44px",borderRadius:"12px",backgroundColor:Zt.colors.surface,border:`1px solid ${Zt.colors.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:Zt.colors.primary,cursor:"pointer",boxShadow:"0 8px 24px rgba(0,0,0,0.3)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)"},resetBtn:{background:"transparent",border:"none",color:Zt.colors.secondary,cursor:"pointer",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px",transition:"color 0.2s"}},us=({label:t,value:e,min:n,max:i,step:r,onChange:s})=>{const o=Math.min(100,Math.max(0,(e-n)/(i-n)*100));return ve.jsxs("div",{style:Ze.controlGroup,children:[ve.jsxs("div",{style:Ze.labelRow,children:[ve.jsx("span",{style:Ze.label,children:t}),ve.jsx("span",{style:Ze.value,children:e.toFixed(r<.1?2:1)})]}),ve.jsxs("div",{style:Ze.sliderContainer,children:[ve.jsx("input",{type:"range",min:n,max:i,step:r,value:e,onChange:a=>s(parseFloat(a.target.value)),style:Ze.sliderInput}),ve.jsx("div",{style:Ze.sliderTrack,children:ve.jsx("div",{style:{...Ze.sliderFill,width:`${o}%`}})}),ve.jsx("div",{style:{...Ze.sliderThumb,left:`${o}%`}})]})]})},gg=({label:t,value:e,onChange:n})=>ve.jsxs("div",{style:Ze.colorButton,title:t,children:[ve.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:e}}),ve.jsx("input",{type:"color",value:e,onChange:i=>n(i.target.value),style:Ze.colorInput}),ve.jsx("div",{style:Ze.colorLabel,children:t})]}),S3=({config:t,onChange:e,onReset:n})=>{const[i,r]=ie.useState(!0);return ve.jsxs("div",{style:Ze.container,children:[ve.jsx(Gd,{mode:"wait",children:i&&ve.jsxs(Gr.div,{initial:{opacity:0,x:-20,width:0},animate:{opacity:1,x:0,width:300},exit:{opacity:0,x:-20,width:0},transition:{type:"spring",stiffness:300,damping:30},style:{...Ze.panel,backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)"},children:[ve.jsxs("div",{style:Ze.header,children:[ve.jsxs("div",{style:Ze.titleGroup,children:[ve.jsx("h1",{style:Ze.title,children:"Zenith Grass"}),ve.jsx("span",{style:Ze.subtitle,children:"v1.0 • GLSL Simulation"})]}),n&&ve.jsx(Gr.button,{style:Ze.resetBtn,onClick:n,whileHover:{color:"#fff",rotate:180},title:"Reset to Defaults",children:ve.jsx(Cx,{size:16})})]}),ve.jsxs("div",{style:Ze.scrollArea,children:[ve.jsxs("div",{style:Ze.section,children:[ve.jsxs("div",{style:Ze.sectionHeader,children:[ve.jsx(Dx,{size:14,weight:"fill",style:Ze.sectionIcon}),ve.jsx("h3",{style:Ze.sectionTitle,children:"Solar Dynamics"})]}),ve.jsx(us,{label:"Azimuth",value:t.sunAzimuth,min:0,max:360,step:1,onChange:s=>e("sunAzimuth",s)}),ve.jsx(us,{label:"Elevation",value:t.sunElevation,min:0,max:90,step:.5,onChange:s=>e("sunElevation",s)})]}),ve.jsxs("div",{style:Ze.section,children:[ve.jsxs("div",{style:Ze.sectionHeader,children:[ve.jsx(Ix,{size:14,weight:"fill",style:Ze.sectionIcon}),ve.jsx("h3",{style:Ze.sectionTitle,children:"Atmosphere"})]}),ve.jsx(us,{label:"Wind Speed",value:t.windSpeed,min:0,max:5,step:.1,onChange:s=>e("windSpeed",s)}),ve.jsx(us,{label:"Turbulence",value:t.windStrength,min:0,max:3,step:.1,onChange:s=>e("windStrength",s)})]}),ve.jsxs("div",{style:Ze.section,children:[ve.jsxs("div",{style:Ze.sectionHeader,children:[ve.jsx(Px,{size:14,weight:"fill",style:Ze.sectionIcon}),ve.jsx("h3",{style:Ze.sectionTitle,children:"Vegetation"})]}),ve.jsx(us,{label:"Density",value:t.bladeCount,min:1e3,max:1e5,step:1e3,onChange:s=>e("bladeCount",s)}),ve.jsx(us,{label:"Blade Width",value:t.bladeWidth,min:.05,max:.3,step:.01,onChange:s=>e("bladeWidth",s)})]}),ve.jsxs("div",{style:{...Ze.section,marginBottom:0},children:[ve.jsxs("div",{style:Ze.sectionHeader,children:[ve.jsx(Rx,{size:14,weight:"fill",style:Ze.sectionIcon}),ve.jsx("h3",{style:Ze.sectionTitle,children:"Pigmentation"})]}),ve.jsxs("div",{style:Ze.colorGrid,children:[ve.jsx(gg,{label:"Root / Base",value:t.baseColor,onChange:s=>e("baseColor",s)}),ve.jsx(gg,{label:"Tip / Highlight",value:t.tipColor,onChange:s=>e("tipColor",s)})]})]})]})]})}),ve.jsx(Gr.button,{whileHover:{scale:1.05,borderColor:"rgba(255,255,255,0.3)"},whileTap:{scale:.95},onClick:()=>r(!i),style:Ze.toggleBtn,children:i?ve.jsx(bx,{size:20}):ve.jsx(Lx,{size:20})})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xp="160",cs={ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},M3=0,vg=1,E3=2,Ux=1,Nx=2,xi=3,gr=0,vn=1,li=2,ur=0,to=1,Wd=2,_g=3,yg=4,T3=5,Or=100,w3=101,A3=102,xg=103,Sg=104,C3=200,b3=201,R3=202,P3=203,jd=204,Xd=205,L3=206,D3=207,I3=208,U3=209,N3=210,F3=211,O3=212,B3=213,k3=214,V3=0,z3=1,H3=2,Nu=3,G3=4,W3=5,j3=6,X3=7,Fx=0,Z3=1,Y3=2,cr=0,$3=1,q3=2,K3=3,Ox=4,Q3=5,J3=6,Bx=300,ho=301,po=302,Zd=303,Yd=304,dc=306,Ra=1e3,Qn=1001,$d=1002,on=1003,Mg=1004,sf=1005,fn=1006,eb=1007,Pa=1008,fr=1009,tb=1010,nb=1011,Sp=1012,kx=1013,Ji=1014,er=1015,La=1016,Vx=1017,zx=1018,Yr=1020,ib=1021,On=1023,rb=1024,sb=1025,$r=1026,mo=1027,ob=1028,Hx=1029,ab=1030,Gx=1031,Wx=1033,of=33776,af=33777,lf=33778,uf=33779,Eg=35840,Tg=35841,wg=35842,Ag=35843,jx=36196,Cg=37492,bg=37496,Rg=37808,Pg=37809,Lg=37810,Dg=37811,Ig=37812,Ug=37813,Ng=37814,Fg=37815,Og=37816,Bg=37817,kg=37818,Vg=37819,zg=37820,Hg=37821,cf=36492,Gg=36494,Wg=36495,lb=36283,jg=36284,Xg=36285,Zg=36286,Xx=3e3,qr=3001,ub=3200,cb=3201,Zx=0,fb=1,Bn="",Ft="srgb",Fi="srgb-linear",Mp="display-p3",hc="display-p3-linear",Fu="linear",ut="srgb",Ou="rec709",Bu="p3",ds=7680,Yg=519,db=512,hb=513,pb=514,Yx=515,mb=516,gb=517,vb=518,_b=519,$g=35044,qg="300 es",qd=1035,Ai=2e3,ku=2001;class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kg=1234567;const oa=Math.PI/180,go=180/Math.PI;function Mo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function Ep(t,e){return(t%e+e)%e}function yb(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function xb(t,e,n){return t!==e?(n-t)/(e-t):0}function aa(t,e,n){return(1-n)*t+n*e}function Sb(t,e,n,i){return aa(t,e,1-Math.exp(-n*i))}function Mb(t,e=1){return e-Math.abs(Ep(t,e*2)-e)}function Eb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Tb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function wb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Ab(t,e){return t+Math.random()*(e-t)}function Cb(t){return t*(.5-Math.random())}function bb(t){t!==void 0&&(Kg=t);let e=Kg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rb(t){return t*oa}function Pb(t){return t*go}function Kd(t){return(t&t-1)===0&&t!==0}function Lb(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Vu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Db(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*f,l*d,a*u);break;case"YZY":t.set(l*d,a*c,l*f,a*u);break;case"ZXZ":t.set(l*f,l*d,a*c,a*u);break;case"XZX":t.set(a*c,l*_,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*_,a*u);break;case"ZYZ":t.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Qd={DEG2RAD:oa,RAD2DEG:go,generateUUID:Mo,clamp:Qt,euclideanModulo:Ep,mapLinear:yb,inverseLerp:xb,lerp:aa,damp:Sb,pingpong:Mb,smoothstep:Eb,smootherstep:Tb,randInt:wb,randFloat:Ab,randFloatSpread:Cb,seededRandom:bb,degToRad:Rb,radToDeg:Pb,isPowerOfTwo:Kd,ceilPowerOfTwo:Lb,floorPowerOfTwo:Vu,setQuaternionFromProperEuler:Db,normalize:nn,denormalize:Rs};class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],h=r[6],v=r[1],g=r[4],x=r[7],b=r[2],C=r[5],E=r[8];return s[0]=o*y+a*v+l*b,s[3]=o*m+a*g+l*C,s[6]=o*h+a*x+l*E,s[1]=u*y+c*v+f*b,s[4]=u*m+c*g+f*C,s[7]=u*h+c*x+f*E,s[2]=d*y+p*v+_*b,s[5]=d*m+p*g+_*C,s[8]=d*h+p*x+_*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ff.makeScale(e,n)),this}rotate(e){return this.premultiply(ff.makeRotation(-e)),this}translate(e,n){return this.premultiply(ff.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ff=new Ye;function $x(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ib(){const t=zu("canvas");return t.style.display="block",t}const Qg={};function la(t){t in Qg||(Qg[t]=!0,console.warn(t))}const Jg=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ev=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hl={[Fi]:{transfer:Fu,primaries:Ou,toReference:t=>t,fromReference:t=>t},[Ft]:{transfer:ut,primaries:Ou,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[hc]:{transfer:Fu,primaries:Bu,toReference:t=>t.applyMatrix3(ev),fromReference:t=>t.applyMatrix3(Jg)},[Mp]:{transfer:ut,primaries:Bu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ev),fromReference:t=>t.applyMatrix3(Jg).convertLinearToSRGB()}},Ub=new Set([Fi,hc]),rt={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Ub.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=hl[e].toReference,r=hl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return hl[t].primaries},getTransfer:function(t){return t===Bn?Fu:hl[t].transfer}};function no(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function df(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hs;class qx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=zu("canvas")),hs.width=e.width,hs.height=e.height;const i=hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=hs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=no(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(no(n[i]/255)*255):n[i]=no(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nb=0;class Kx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=Mo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hf(r[o].image)):s.push(hf(r[o]))}else s=hf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fb=0;class _n extends os{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=Qn,r=Qn,s=fn,o=Pa,a=On,l=fr,u=_n.DEFAULT_ANISOTROPY,c=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Mo(),this.name="",this.source=new Kx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(la("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===qr?Ft:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return la("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?qr:Xx}set encoding(e){la("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qr?Ft:Bn}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Bx;_n.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,x=(p+1)/2,b=(h+1)/2,C=(c+d)/4,E=(f+y)/4,D=(_+m)/4;return g>x&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=E/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=D/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=E/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-y)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ob extends os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(la("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qr?Ft:Bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Kx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends Ob{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qx extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bb extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==d||u!==p||c!==_){let m=1-a;const h=l*d+u*p+c*_+f*y,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const b=Math.sqrt(g),C=Math.atan2(b,h*v);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const x=a*v;if(l=l*m+d*x,u=u*m+p*x,c=c*m+_*x,f=f*m+y*x,m===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+c*f+l*p-u*d,e[n+1]=l*_+c*d+u*f-a*p,e[n+2]=u*_+c*p+a*d-l*f,e[n+3]=c*_-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pf.copy(this).projectOnVector(e),this.sub(pf)}reflect(e){return this.sub(pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pf=new N,tv=new ns;class as{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pl.copy(i.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),ml.subVectors(this.max,Fo),ps.subVectors(e.a,Fo),ms.subVectors(e.b,Fo),gs.subVectors(e.c,Fo),ki.subVectors(ms,ps),Vi.subVectors(gs,ms),Cr.subVectors(ps,gs);let n=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-Cr.z,Cr.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,Cr.z,0,-Cr.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-Cr.y,Cr.x,0];return!mf(n,ps,ms,gs,ml)||(n=[1,0,0,0,1,0,0,0,1],!mf(n,ps,ms,gs,ml))?!1:(gl.crossVectors(ki,Vi),n=[gl.x,gl.y,gl.z],mf(n,ps,ms,gs,ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new N,new N,new N,new N,new N,new N,new N,new N],jn=new N,pl=new as,ps=new N,ms=new N,gs=new N,ki=new N,Vi=new N,Cr=new N,Fo=new N,ml=new N,gl=new N,br=new N;function mf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){br.fromArray(t,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),u=n.dot(br),c=i.dot(br);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const kb=new as,Oo=new N,gf=new N;class Ha{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const n=Oo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Oo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(gf)),this.expandByPoint(Oo.copy(e.center).sub(gf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new N,vf=new N,vl=new N,zi=new N,_f=new N,_l=new N,yf=new N;class Tp{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vf.copy(e).add(n).multiplyScalar(.5),vl.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(vf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(vl),a=zi.dot(this.direction),l=-zi.dot(vl),u=zi.lengthSq(),c=Math.abs(1-o*o);let f,d,p,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const y=1/c;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vf).addScaledVector(vl,d),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){_f.subVectors(n,e),_l.subVectors(i,e),yf.crossVectors(_f,_l);let o=this.direction.dot(yf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(_l.crossVectors(zi,_l));if(l<0)return null;const u=a*this.direction.dot(_f.cross(zi));if(u<0||l+u>o)return null;const c=-a*zi.dot(yf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,u,c,f,d,p,_,y,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,p,_,y,m)}set(e,n,i,r,s,o,a,l,u,c,f,d,p,_,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,_=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,y=u*f;n[0]=d+y*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,y=u*f;n[0]=d-y*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*c,n[9]=y-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,_=a*c,y=a*f;n[0]=l*c,n[4]=_*u-p,n[8]=d*u+y,n[1]=l*f,n[5]=y*u+d,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=y-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+_,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+y,n[5]=o*c,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*c,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vb,e,zb)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Hi.crossVectors(i,Sn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Hi.crossVectors(i,Sn)),Hi.normalize(),yl.crossVectors(Sn,Hi),r[0]=Hi.x,r[4]=yl.x,r[8]=Sn.x,r[1]=Hi.y,r[5]=yl.y,r[9]=Sn.y,r[2]=Hi.z,r[6]=yl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],h=i[14],v=i[3],g=i[7],x=i[11],b=i[15],C=r[0],E=r[4],D=r[8],S=r[12],T=r[1],W=r[5],$=r[9],te=r[13],L=r[2],O=r[6],z=r[10],q=r[14],I=r[3],F=r[7],V=r[11],Y=r[15];return s[0]=o*C+a*T+l*L+u*I,s[4]=o*E+a*W+l*O+u*F,s[8]=o*D+a*$+l*z+u*V,s[12]=o*S+a*te+l*q+u*Y,s[1]=c*C+f*T+d*L+p*I,s[5]=c*E+f*W+d*O+p*F,s[9]=c*D+f*$+d*z+p*V,s[13]=c*S+f*te+d*q+p*Y,s[2]=_*C+y*T+m*L+h*I,s[6]=_*E+y*W+m*O+h*F,s[10]=_*D+y*$+m*z+h*V,s[14]=_*S+y*te+m*q+h*Y,s[3]=v*C+g*T+x*L+b*I,s[7]=v*E+g*W+x*O+b*F,s[11]=v*D+g*$+x*z+b*V,s[15]=v*S+g*te+x*q+b*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],h=e[15],v=f*m*u-y*d*u+y*l*p-a*m*p-f*l*h+a*d*h,g=_*d*u-c*m*u-_*l*p+o*m*p+c*l*h-o*d*h,x=c*y*u-_*f*u+_*a*p-o*y*p-c*a*h+o*f*h,b=_*f*l-c*y*l-_*a*d+o*y*d+c*a*m-o*f*m,C=n*v+i*g+r*x+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return e[0]=v*E,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*h-i*d*h)*E,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*h+i*l*h)*E,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*E,e[4]=g*E,e[5]=(c*m*s-_*d*s+_*r*p-n*m*p-c*r*h+n*d*h)*E,e[6]=(_*l*s-o*m*s-_*r*u+n*m*u+o*r*h-n*l*h)*E,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*E,e[8]=x*E,e[9]=(_*f*s-c*y*s-_*i*p+n*y*p+c*i*h-n*f*h)*E,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*h+n*a*h)*E,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*E,e[12]=b*E,e[13]=(c*y*r-_*f*r+_*i*d-n*y*d-c*i*m+n*f*m)*E,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*E,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,_=s*f,y=o*c,m=o*f,h=a*f,v=l*u,g=l*c,x=l*f,b=i.x,C=i.y,E=i.z;return r[0]=(1-(y+h))*b,r[1]=(p+x)*b,r[2]=(_-g)*b,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(d+h))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(_+g)*E,r[9]=(m-v)*E,r[10]=(1-(d+y))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),a=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const u=1/s,c=1/o,f=1/a;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===Ai)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ku)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,p=(i+r)*c;let _,y;if(a===Ai)_=(o+s)*f,y=-2*f;else if(a===ku)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new N,Xn=new xt,Vb=new N(0,0,0),zb=new N(1,1,1),Hi=new N,yl=new N,Sn=new N,nv=new xt,iv=new ns;class pc{constructor(e=0,n=0,i=0,r=pc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return iv.setFromEuler(this),this.setFromQuaternion(iv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pc.DEFAULT_ORDER="XYZ";class wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hb=0;const rv=new N,_s=new ns,gi=new xt,xl=new N,Bo=new N,Gb=new N,Wb=new ns,sv=new N(1,0,0),ov=new N(0,1,0),av=new N(0,0,1),jb={type:"added"},Xb={type:"removed"};class kt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new N,n=new pc,i=new ns,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ye}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(sv,e)}rotateY(e){return this.rotateOnAxis(ov,e)}rotateZ(e){return this.rotateOnAxis(av,e)}translateOnAxis(e,n){return rv.copy(e).applyQuaternion(this.quaternion),this.position.add(rv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sv,e)}translateY(e){return this.translateOnAxis(ov,e)}translateZ(e){return this.translateOnAxis(av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xl.copy(e):xl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Bo,xl,this.up):gi.lookAt(xl,Bo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(gi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Xb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Wb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new N(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new N,vi=new N,xf=new N,_i=new N,ys=new N,xs=new N,lv=new N,Sf=new N,Mf=new N,Ef=new N;let Sl=!1;class Kn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),vi.subVectors(i,n),xf.subVectors(e,n);const o=Zn.dot(Zn),a=Zn.dot(vi),l=Zn.dot(xf),u=vi.dot(vi),c=vi.dot(xf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,n,i,r,s,o,a,l){return Sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),vi.subVectors(e,n),Zn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Zn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sl=!0),Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ys.subVectors(r,i),xs.subVectors(s,i),Sf.subVectors(e,i);const l=ys.dot(Sf),u=xs.dot(Sf);if(l<=0&&u<=0)return n.copy(i);Mf.subVectors(e,r);const c=ys.dot(Mf),f=xs.dot(Mf);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ys,o);Ef.subVectors(e,s);const p=ys.dot(Ef),_=xs.dot(Ef);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(xs,a);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return lv.subVectors(s,r),a=(f-c)/(f-c+(p-_)),n.copy(r).addScaledVector(lv,a);const h=1/(m+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(ys,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function Tf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=Ep(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Tf(o,s,e+1/3),this.g=Tf(o,s,e),this.b=Tf(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=Ft){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ft){const i=Jx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}copyLinearToSRGB(e){return this.r=df(e.r),this.g=df(e.g),this.b=df(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return rt.fromWorkingColorSpace($t.copy(this),e),Math.round(Qt($t.r*255,0,255))*65536+Math.round(Qt($t.g*255,0,255))*256+Math.round(Qt($t.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Ft){rt.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Ft?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+n,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gi),e.getHSL(Ml);const i=aa(Gi.h,Ml.h,n),r=aa(Gi.s,Ml.s,n),s=aa(Gi.l,Ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Qe;Qe.NAMES=Jx;let Zb=0;class Eo extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=Mo(),this.name="",this.type="Material",this.blending=to,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Xd,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Nu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jd&&(i.blendSrc=this.blendSrc),this.blendDst!==Xd&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hu extends Eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new N,El=new Fe;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$g,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Rs(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Rs(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Rs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Rs(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$g&&(e.usage=this.usage),e}}class eS extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class tS extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zn extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Yb=0;const In=new xt,wf=new kt,Ss=new N,Mn=new as,ko=new as,Ut=new N;class di extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Mo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($x(e)?tS:eS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(Mn.min,ko.min),Mn.expandByPoint(Ut),Ut.addVectors(Mn.max,ko.max),Mn.expandByPoint(Ut)):(Mn.expandByPoint(ko.min),Mn.expandByPoint(ko.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ut.fromBufferAttribute(a,u),l&&(Ss.fromBufferAttribute(e,u),Ut.add(Ss)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new N,c[T]=new N;const f=new N,d=new N,p=new N,_=new Fe,y=new Fe,m=new Fe,h=new N,v=new N;function g(T,W,$){f.fromArray(r,T*3),d.fromArray(r,W*3),p.fromArray(r,$*3),_.fromArray(o,T*2),y.fromArray(o,W*2),m.fromArray(o,$*2),d.sub(f),p.sub(f),y.sub(_),m.sub(_);const te=1/(y.x*m.y-m.x*y.y);isFinite(te)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(te),v.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(te),u[T].add(h),u[W].add(h),u[$].add(h),c[T].add(v),c[W].add(v),c[$].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,W=x.length;T<W;++T){const $=x[T],te=$.start,L=$.count;for(let O=te,z=te+L;O<z;O+=3)g(i[O+0],i[O+1],i[O+2])}const b=new N,C=new N,E=new N,D=new N;function S(T){E.fromArray(s,T*3),D.copy(E);const W=u[T];b.copy(W),b.sub(E.multiplyScalar(E.dot(W))).normalize(),C.crossVectors(D,W);const te=C.dot(c[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=te}for(let T=0,W=x.length;T<W;++T){const $=x[T],te=$.start,L=$.count;for(let O=te,z=te+L;O<z;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new ti(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uv=new xt,Rr=new Tp,Tl=new Ha,cv=new N,Ms=new N,Es=new N,Ts=new N,Af=new N,wl=new N,Al=new Fe,Cl=new Fe,bl=new Fe,fv=new N,dv=new N,hv=new N,Rl=new N,Pl=new N;class hn extends kt{constructor(e=new di,n=new Hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Af.fromBufferAttribute(f,e),o?wl.addScaledVector(Af,c):wl.addScaledVector(Af.sub(n),c))}n.add(wl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(Tl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Tl,cv)===null||Rr.origin.distanceToSquared(cv)>(e.far-e.near)**2))&&(uv.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(uv),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=g;x<b;x+=3){const C=a.getX(x),E=a.getX(x+1),D=a.getX(x+2);r=Ll(this,h,e,i,u,c,f,C,E,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=Ll(this,o,e,i,u,c,f,v,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=g;x<b;x+=3){const C=x,E=x+1,D=x+2;r=Ll(this,h,e,i,u,c,f,C,E,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=m,g=m+1,x=m+2;r=Ll(this,o,e,i,u,c,f,v,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function $b(t,e,n,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gr,a),l===null)return null;Pl.copy(a),Pl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Pl);return u<n.near||u>n.far?null:{distance:u,point:Pl.clone(),object:t}}function Ll(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ms),t.getVertexPosition(l,Es),t.getVertexPosition(u,Ts);const c=$b(t,e,n,i,Ms,Es,Ts,Rl);if(c){r&&(Al.fromBufferAttribute(r,a),Cl.fromBufferAttribute(r,l),bl.fromBufferAttribute(r,u),c.uv=Kn.getInterpolation(Rl,Ms,Es,Ts,Al,Cl,bl,new Fe)),s&&(Al.fromBufferAttribute(s,a),Cl.fromBufferAttribute(s,l),bl.fromBufferAttribute(s,u),c.uv1=Kn.getInterpolation(Rl,Ms,Es,Ts,Al,Cl,bl,new Fe),c.uv2=c.uv1),o&&(fv.fromBufferAttribute(o,a),dv.fromBufferAttribute(o,l),hv.fromBufferAttribute(o,u),c.normal=Kn.getInterpolation(Rl,Ms,Es,Ts,fv,dv,hv,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new N,materialIndex:0};Kn.getNormal(Ms,Es,Ts,f.normal),c.face=f}return c}class Ga extends di{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zn(u,3)),this.setAttribute("normal",new zn(c,3)),this.setAttribute("uv",new zn(f,2));function _(y,m,h,v,g,x,b,C,E,D,S){const T=x/E,W=b/D,$=x/2,te=b/2,L=C/2,O=E+1,z=D+1;let q=0,I=0;const F=new N;for(let V=0;V<z;V++){const Y=V*W-te;for(let Q=0;Q<O;Q++){const Z=Q*T-$;F[y]=Z*v,F[m]=Y*g,F[h]=L,u.push(F.x,F.y,F.z),F[y]=0,F[m]=0,F[h]=C>0?1:-1,c.push(F.x,F.y,F.z),f.push(Q/E),f.push(1-V/D),q+=1}}for(let V=0;V<D;V++)for(let Y=0;Y<E;Y++){const Q=d+Y+O*V,Z=d+Y+O*(V+1),K=d+(Y+1)+O*(V+1),he=d+(Y+1)+O*V;l.push(Q,Z,he),l.push(Z,K,he),I+=6}a.addGroup(p,I,S),p+=I,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=vo(t[n]);for(const r in i)e[r]=i[r]}return e}function qb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nS(t){return t.getRenderTarget()===null?t.outputColorSpace:rt.workingColorSpace}const Kb={clone:vo,merge:rn};var Qb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qb,this.fragmentShader=Jb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=qb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class iS extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tn extends iS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ws=-90,As=1;class eR extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(ws,As,e,n);r.layers=this.layers,this.add(r);const s=new Tn(ws,As,e,n);s.layers=this.layers,this.add(s);const o=new Tn(ws,As,e,n);o.layers=this.layers,this.add(o);const a=new Tn(ws,As,e,n);a.layers=this.layers,this.add(a);const l=new Tn(ws,As,e,n);l.layers=this.layers,this.add(l);const u=new Tn(ws,As,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class rS extends _n{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ho,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tR extends vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(la("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qr?Ft:Bn),this.texture=new rS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ga(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:ur});s.uniforms.tEquirect.value=n;const o=new hn(r,s),a=n.minFilter;return n.minFilter===Pa&&(n.minFilter=fn),new eR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Cf=new N,nR=new N,iR=new Ye;class Yi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cf.subVectors(i,n).cross(nR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iR.getNormalMatrix(e),r=this.coplanarPoint(Cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Ha,Dl=new N;class Ap{constructor(e=new Yi,n=new Yi,i=new Yi,r=new Yi,s=new Yi,o=new Yi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],_=r[9],y=r[10],m=r[11],h=r[12],v=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,d-u,m-p,x-h).normalize(),i[1].setComponents(l+s,d+u,m+p,x+h).normalize(),i[2].setComponents(l+o,d+c,m+_,x+v).normalize(),i[3].setComponents(l-o,d-c,m-_,x-v).normalize(),i[4].setComponents(l-a,d-f,m-y,x-g).normalize(),n===Ai)i[5].setComponents(l+a,d+f,m+y,x+g).normalize();else if(n===ku)i[5].setComponents(a,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Dl.x=r.normal.x>0?e.max.x:e.min.x,Dl.y=r.normal.y>0?e.max.y:e.min.y,Dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function rR(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=f.byteLength,_=t.createBuffer();t.bindBuffer(c,_),t.bufferData(c,f,d),u.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const d=c.array,p=c._updateRange,_=c.updateRanges;if(t.bindBuffer(f,u),p.count===-1&&_.length===0&&t.bufferSubData(f,0,d),_.length!==0){for(let y=0,m=_.length;y<m;y++){const h=_[y];n?t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Da extends di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],_=[],y=[],m=[];for(let h=0;h<c;h++){const v=h*d-o;for(let g=0;g<u;g++){const x=g*f-s;_.push(x,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const g=v+u*h,x=v+u*(h+1),b=v+1+u*(h+1),C=v+1+u*h;p.push(g,x,C),p.push(x,b,C)}this.setIndex(p),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(y,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}var sR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uR=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_R=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,SR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,CR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NR="gl_FragColor = linearToOutputTexel( gl_FragColor );",FR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,OR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,YR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$R=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,QR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_P=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xP=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,SP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,MP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,EP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,UP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$P=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_L=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ML=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:sR,alphahash_pars_fragment:oR,alphamap_fragment:aR,alphamap_pars_fragment:lR,alphatest_fragment:uR,alphatest_pars_fragment:cR,aomap_fragment:fR,aomap_pars_fragment:dR,batching_pars_vertex:hR,batching_vertex:pR,begin_vertex:mR,beginnormal_vertex:gR,bsdfs:vR,iridescence_fragment:_R,bumpmap_pars_fragment:yR,clipping_planes_fragment:xR,clipping_planes_pars_fragment:SR,clipping_planes_pars_vertex:MR,clipping_planes_vertex:ER,color_fragment:TR,color_pars_fragment:wR,color_pars_vertex:AR,color_vertex:CR,common:bR,cube_uv_reflection_fragment:RR,defaultnormal_vertex:PR,displacementmap_pars_vertex:LR,displacementmap_vertex:DR,emissivemap_fragment:IR,emissivemap_pars_fragment:UR,colorspace_fragment:NR,colorspace_pars_fragment:FR,envmap_fragment:OR,envmap_common_pars_fragment:BR,envmap_pars_fragment:kR,envmap_pars_vertex:VR,envmap_physical_pars_fragment:QR,envmap_vertex:zR,fog_vertex:HR,fog_pars_vertex:GR,fog_fragment:WR,fog_pars_fragment:jR,gradientmap_pars_fragment:XR,lightmap_fragment:ZR,lightmap_pars_fragment:YR,lights_lambert_fragment:$R,lights_lambert_pars_fragment:qR,lights_pars_begin:KR,lights_toon_fragment:JR,lights_toon_pars_fragment:eP,lights_phong_fragment:tP,lights_phong_pars_fragment:nP,lights_physical_fragment:iP,lights_physical_pars_fragment:rP,lights_fragment_begin:sP,lights_fragment_maps:oP,lights_fragment_end:aP,logdepthbuf_fragment:lP,logdepthbuf_pars_fragment:uP,logdepthbuf_pars_vertex:cP,logdepthbuf_vertex:fP,map_fragment:dP,map_pars_fragment:hP,map_particle_fragment:pP,map_particle_pars_fragment:mP,metalnessmap_fragment:gP,metalnessmap_pars_fragment:vP,morphcolor_vertex:_P,morphnormal_vertex:yP,morphtarget_pars_vertex:xP,morphtarget_vertex:SP,normal_fragment_begin:MP,normal_fragment_maps:EP,normal_pars_fragment:TP,normal_pars_vertex:wP,normal_vertex:AP,normalmap_pars_fragment:CP,clearcoat_normal_fragment_begin:bP,clearcoat_normal_fragment_maps:RP,clearcoat_pars_fragment:PP,iridescence_pars_fragment:LP,opaque_fragment:DP,packing:IP,premultiplied_alpha_fragment:UP,project_vertex:NP,dithering_fragment:FP,dithering_pars_fragment:OP,roughnessmap_fragment:BP,roughnessmap_pars_fragment:kP,shadowmap_pars_fragment:VP,shadowmap_pars_vertex:zP,shadowmap_vertex:HP,shadowmask_pars_fragment:GP,skinbase_vertex:WP,skinning_pars_vertex:jP,skinning_vertex:XP,skinnormal_vertex:ZP,specularmap_fragment:YP,specularmap_pars_fragment:$P,tonemapping_fragment:qP,tonemapping_pars_fragment:KP,transmission_fragment:QP,transmission_pars_fragment:JP,uv_pars_fragment:eL,uv_pars_vertex:tL,uv_vertex:nL,worldpos_vertex:iL,background_vert:rL,background_frag:sL,backgroundCube_vert:oL,backgroundCube_frag:aL,cube_vert:lL,cube_frag:uL,depth_vert:cL,depth_frag:fL,distanceRGBA_vert:dL,distanceRGBA_frag:hL,equirect_vert:pL,equirect_frag:mL,linedashed_vert:gL,linedashed_frag:vL,meshbasic_vert:_L,meshbasic_frag:yL,meshlambert_vert:xL,meshlambert_frag:SL,meshmatcap_vert:ML,meshmatcap_frag:EL,meshnormal_vert:TL,meshnormal_frag:wL,meshphong_vert:AL,meshphong_frag:CL,meshphysical_vert:bL,meshphysical_frag:RL,meshtoon_vert:PL,meshtoon_frag:LL,points_vert:DL,points_frag:IL,shadow_vert:UL,shadow_frag:NL,sprite_vert:FL,sprite_frag:OL},de={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},oi={basic:{uniforms:rn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:rn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:rn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:rn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:rn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:rn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:rn([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:rn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:rn([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:rn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:rn([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:rn([de.common,de.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:rn([de.lights,de.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};oi.physical={uniforms:rn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Il={r:0,b:0,g:0};function BL(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function _(m,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),v=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===dc)?(c===void 0&&(c=new hn(new Ga(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:vo(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=rt.getTransfer(g.colorSpace)!==ut,(f!==g||d!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,d=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new hn(new Da(2,2),new _r({name:"BackgroundMaterial",uniforms:vo(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=rt.getTransfer(g.colorSpace)!==ut,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,d=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,h){m.getRGB(Il,nS(t)),i.buffers.color.setClear(Il.r,Il.g,Il.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function kL(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(L,O,z,q,I){let F=!1;if(o){const V=y(q,z,O);u!==V&&(u=V,p(u.object)),F=h(L,q,z,I),F&&v(L,q,z,I)}else{const V=O.wireframe===!0;(u.geometry!==q.id||u.program!==z.id||u.wireframe!==V)&&(u.geometry=q.id,u.program=z.id,u.wireframe=V,F=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,D(L,O,z,q),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,O,z){const q=z.wireframe===!0;let I=a[L.id];I===void 0&&(I={},a[L.id]=I);let F=I[O.id];F===void 0&&(F={},I[O.id]=F);let V=F[q];return V===void 0&&(V=m(d()),F[q]=V),V}function m(L){const O=[],z=[],q=[];for(let I=0;I<r;I++)O[I]=0,z[I]=0,q[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:q,object:L,attributes:{},index:null}}function h(L,O,z,q){const I=u.attributes,F=O.attributes;let V=0;const Y=z.getAttributes();for(const Q in Y)if(Y[Q].location>=0){const K=I[Q];let he=F[Q];if(he===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),K===void 0||K.attribute!==he||he&&K.data!==he.data)return!0;V++}return u.attributesNum!==V||u.index!==q}function v(L,O,z,q){const I={},F=O.attributes;let V=0;const Y=z.getAttributes();for(const Q in Y)if(Y[Q].location>=0){let K=F[Q];K===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const he={};he.attribute=K,K&&K.data&&(he.data=K.data),I[Q]=he,V++}u.attributes=I,u.attributesNum=V,u.index=q}function g(){const L=u.newAttributes;for(let O=0,z=L.length;O<z;O++)L[O]=0}function x(L){b(L,0)}function b(L,O){const z=u.newAttributes,q=u.enabledAttributes,I=u.attributeDivisors;z[L]=1,q[L]===0&&(t.enableVertexAttribArray(L),q[L]=1),I[L]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),I[L]=O)}function C(){const L=u.newAttributes,O=u.enabledAttributes;for(let z=0,q=O.length;z<q;z++)O[z]!==L[z]&&(t.disableVertexAttribArray(z),O[z]=0)}function E(L,O,z,q,I,F,V){V===!0?t.vertexAttribIPointer(L,O,z,I,F):t.vertexAttribPointer(L,O,z,q,I,F)}function D(L,O,z,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=q.attributes,F=z.getAttributes(),V=O.defaultAttributeValues;for(const Y in F){const Q=F[Y];if(Q.location>=0){let Z=I[Y];if(Z===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const K=Z.normalized,he=Z.itemSize,me=n.get(Z);if(me===void 0)continue;const ye=me.buffer,Ie=me.type,De=me.bytesPerElement,Ae=i.isWebGL2===!0&&(Ie===t.INT||Ie===t.UNSIGNED_INT||Z.gpuType===kx);if(Z.isInterleavedBufferAttribute){const Oe=Z.data,k=Oe.stride,Lt=Z.offset;if(Oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)b(Q.location+Ce,Oe.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)x(Q.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Ce=0;Ce<Q.locationSize;Ce++)E(Q.location+Ce,he/Q.locationSize,Ie,K,k*De,(Lt+he/Q.locationSize*Ce)*De,Ae)}else{if(Z.isInstancedBufferAttribute){for(let Oe=0;Oe<Q.locationSize;Oe++)b(Q.location+Oe,Z.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Oe=0;Oe<Q.locationSize;Oe++)x(Q.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Oe=0;Oe<Q.locationSize;Oe++)E(Q.location+Oe,he/Q.locationSize,Ie,K,he*De,he/Q.locationSize*Oe*De,Ae)}}else if(V!==void 0){const K=V[Y];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Q.location,K);break;case 3:t.vertexAttrib3fv(Q.location,K);break;case 4:t.vertexAttrib4fv(Q.location,K);break;default:t.vertexAttrib1fv(Q.location,K)}}}}C()}function S(){$();for(const L in a){const O=a[L];for(const z in O){const q=O[z];for(const I in q)_(q[I].object),delete q[I];delete O[z]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const z in O){const q=O[z];for(const I in q)_(q[I].object),delete q[I];delete O[z]}delete a[L.id]}function W(L){for(const O in a){const z=a[O];if(z[L.id]===void 0)continue;const q=z[L.id];for(const I in q)_(q[I].object),delete q[I];delete z[L.id]}}function $(){te(),c=!0,u!==l&&(u=l,p(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:te,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:W,initAttributes:g,enableAttribute:x,disableUnusedAttributes:C}}function VL(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){t.drawArrays(s,c,f),n.update(f,s,1)}function l(c,f,d){if(d===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,f,d),n.update(f,s,d)}function u(c,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(c[_],f[_]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=f[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function zL(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,x=o||e.has("OES_texture_float"),b=g&&x,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:C}}function HL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Yi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,g=v*4;let x=h.clippingState||null;l.value=x,x=c(_,d,g,p);for(let b=0;b!==g;++b)x[b]=n[b];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const h=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,x=p;g!==y;++g,x+=4)o.copy(f[g]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function GL(t){let e=new WeakMap;function n(o,a){return a===Zd?o.mapping=ho:a===Yd&&(o.mapping=po),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zd||a===Yd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new tR(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Cp extends iS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xs=4,pv=[.125,.215,.35,.446,.526,.582],Br=20,bf=new Cp,mv=new Qe;let Rf=null,Pf=0,Lf=0;const Fr=(1+Math.sqrt(5))/2,Cs=1/Fr,gv=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Fr,Cs),new N(0,Fr,-Cs),new N(Cs,0,Fr),new N(-Cs,0,Fr),new N(Fr,Cs,0),new N(-Fr,Cs,0)];class vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Rf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,Pf,Lf),e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:La,format:On,colorSpace:Fi,depthBuffer:!1},r=_v(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_v(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WL(s)),this._blurMaterial=jL(s,e,n)}return r}_compileMaterial(e){const n=new hn(this._lodPlanes[0],e);this._renderer.compile(n,bf)}_sceneToCubeUV(e,n,i,r){const a=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(mv),c.toneMapping=cr,c.autoClear=!1;const p=new Hu({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),_=new hn(new Ga,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(mv),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const g=this._cubeSize;Ul(r,v*g,h>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ho||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ul(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,bf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gv[(r-1)%gv.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new hn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Br-1),y=s/_,m=isFinite(s)?1+Math.floor(c*y):Br;m>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const h=[];let v=0;for(let E=0;E<Br;++E){const D=E/y,S=Math.exp(-D*D/2);h.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-i;const x=this._sizeLods[r],b=3*x*(r>g-Xs?r-g+Xs:0),C=4*(this._cubeSize-x);Ul(n,b,C,3*x,2*x),l.setRenderTarget(n),l.render(f,bf)}}function WL(t){const e=[],n=[],i=[];let r=t;const s=t-Xs+1+pv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xs?l=pv[o-t+Xs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,y=3,m=2,h=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let C=0;C<p;C++){const E=C%3*2/3-1,D=C>2?0:-1,S=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];v.set(S,y*_*C),g.set(d,m*_*C);const T=[C,C,C,C,C,C];x.set(T,h*_*C)}const b=new di;b.setAttribute("position",new ti(v,y)),b.setAttribute("uv",new ti(g,m)),b.setAttribute("faceIndex",new ti(x,h)),e.push(b),r>Xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _v(t,e,n){const i=new vr(t,e,n);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ul(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jL(t,e,n){const i=new Float32Array(Br),r=new N(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function yv(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function xv(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function bp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Zd||l===Yd,c=l===ho||l===po;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new vv(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new vv(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ZL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YL(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,x=v.length;g<x;g+=3){const b=v[g+0],C=v[g+1],E=v[g+2];d.push(b,C,C,E,E,b)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const b=g+0,C=g+1,E=g+2;d.push(b,C,C,E,E,b)}}else return;const m=new($x(d)?tS:eS)(d,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function $L(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){t.drawElements(s,_,a,p*l),n.update(_,s,1)}function f(p,_,y){if(y===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,_,a,p*l,y),n.update(_,s,y)}function d(p,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<y;h++)this.render(p[h]/l,_[h]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,y);let h=0;for(let v=0;v<y;v++)h+=_[v];n.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function qL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KL(t,e){return t[0]-e[0]}function QL(t,e){return Math.abs(e[1])-Math.abs(t[1])}function JL(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ot,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==y){let O=function(){te.dispose(),s.delete(c),c.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,C=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),b===!0&&(S=3);let T=c.attributes.position.count*S,W=1;T>e.maxTextureSize&&(W=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const $=new Float32Array(T*W*4*y),te=new Qx($,T,W,y);te.type=er,te.needsUpdate=!0;const L=S*4;for(let z=0;z<y;z++){const q=C[z],I=E[z],F=D[z],V=T*W*4*z;for(let Y=0;Y<q.count;Y++){const Q=Y*L;g===!0&&(o.fromBufferAttribute(q,Y),$[V+Q+0]=o.x,$[V+Q+1]=o.y,$[V+Q+2]=o.z,$[V+Q+3]=0),x===!0&&(o.fromBufferAttribute(I,Y),$[V+Q+4]=o.x,$[V+Q+5]=o.y,$[V+Q+6]=o.z,$[V+Q+7]=0),b===!0&&(o.fromBufferAttribute(F,Y),$[V+Q+8]=o.x,$[V+Q+9]=o.y,$[V+Q+10]=o.z,$[V+Q+11]=F.itemSize===4?o.w:1)}}m={count:y,texture:te,size:new Fe(T,W)},s.set(c,m),c.addEventListener("dispose",O)}let h=0;for(let g=0;g<d.length;g++)h+=d[g];const v=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let y=i[c.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[c.id]=y}for(let x=0;x<_;x++){const b=y[x];b[0]=x,b[1]=d[x]}y.sort(QL);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(KL);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const b=a[x],C=b[0],E=b[1];C!==Number.MAX_SAFE_INTEGER&&E?(m&&c.getAttribute("morphTarget"+x)!==m[C]&&c.setAttribute("morphTarget"+x,m[C]),h&&c.getAttribute("morphNormal"+x)!==h[C]&&c.setAttribute("morphNormal"+x,h[C]),r[x]=E,v+=E):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),h&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const g=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function eD(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class oS extends _n{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:$r,c!==$r&&c!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===$r&&(i=Ji),i===void 0&&c===mo&&(i=Yr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const aS=new _n,lS=new oS(1,1);lS.compareFunction=Yx;const uS=new Qx,cS=new Bb,fS=new rS,Sv=[],Mv=[],Ev=new Float32Array(16),Tv=new Float32Array(9),wv=new Float32Array(4);function To(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sv[r];if(s===void 0&&(s=new Float32Array(r),Sv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mc(t,e){let n=Mv[e];n===void 0&&(n=new Int32Array(e),Mv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function tD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function nD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function iD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function rD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function sD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;wv.set(i),t.uniformMatrix2fv(this.addr,!1,wv),Pt(n,i)}}function oD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Tv.set(i),t.uniformMatrix3fv(this.addr,!1,Tv),Pt(n,i)}}function aD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Ev.set(i),t.uniformMatrix4fv(this.addr,!1,Ev),Pt(n,i)}}function lD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function uD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function cD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function fD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function dD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function pD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function mD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function gD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?lS:aS;n.setTexture2D(e||s,r)}function vD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cS,r)}function _D(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||fS,r)}function yD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||uS,r)}function xD(t){switch(t){case 5126:return tD;case 35664:return nD;case 35665:return iD;case 35666:return rD;case 35674:return sD;case 35675:return oD;case 35676:return aD;case 5124:case 35670:return lD;case 35667:case 35671:return uD;case 35668:case 35672:return cD;case 35669:case 35673:return fD;case 5125:return dD;case 36294:return hD;case 36295:return pD;case 36296:return mD;case 35678:case 36198:case 36298:case 36306:case 35682:return gD;case 35679:case 36299:case 36307:return vD;case 35680:case 36300:case 36308:case 36293:return _D;case 36289:case 36303:case 36311:case 36292:return yD}}function SD(t,e){t.uniform1fv(this.addr,e)}function MD(t,e){const n=To(e,this.size,2);t.uniform2fv(this.addr,n)}function ED(t,e){const n=To(e,this.size,3);t.uniform3fv(this.addr,n)}function TD(t,e){const n=To(e,this.size,4);t.uniform4fv(this.addr,n)}function wD(t,e){const n=To(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function AD(t,e){const n=To(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function CD(t,e){const n=To(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bD(t,e){t.uniform1iv(this.addr,e)}function RD(t,e){t.uniform2iv(this.addr,e)}function PD(t,e){t.uniform3iv(this.addr,e)}function LD(t,e){t.uniform4iv(this.addr,e)}function DD(t,e){t.uniform1uiv(this.addr,e)}function ID(t,e){t.uniform2uiv(this.addr,e)}function UD(t,e){t.uniform3uiv(this.addr,e)}function ND(t,e){t.uniform4uiv(this.addr,e)}function FD(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||aS,s[o])}function OD(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||cS,s[o])}function BD(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||fS,s[o])}function kD(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||uS,s[o])}function VD(t){switch(t){case 5126:return SD;case 35664:return MD;case 35665:return ED;case 35666:return TD;case 35674:return wD;case 35675:return AD;case 35676:return CD;case 5124:case 35670:return bD;case 35667:case 35671:return RD;case 35668:case 35672:return PD;case 35669:case 35673:return LD;case 5125:return DD;case 36294:return ID;case 36295:return UD;case 36296:return ND;case 35678:case 36198:case 36298:case 36306:case 35682:return FD;case 35679:case 36299:case 36307:return OD;case 35680:case 36300:case 36308:case 36293:return BD;case 36289:case 36303:case 36311:case 36292:return kD}}class zD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xD(n.type)}}class HD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VD(n.type)}}class GD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Df=/(\w+)(\])?(\[|\.)?/g;function Av(t,e){t.seq.push(e),t.map[e.id]=e}function WD(t,e,n){const i=t.name,r=i.length;for(Df.lastIndex=0;;){const s=Df.exec(i),o=Df.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Av(n,u===void 0?new zD(a,t,e):new HD(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new GD(a),Av(n,f)),n=f}}}class eu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);WD(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const jD=37297;let XD=0;function ZD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function YD(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===Bu&&n===Ou?i="LinearDisplayP3ToLinearSRGB":e===Ou&&n===Bu&&(i="LinearSRGBToLinearDisplayP3"),t){case Fi:case hc:return[i,"LinearTransferOETF"];case Ft:case Mp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function bv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ZD(t.getShaderSource(e),o)}else return r}function $D(t,e){const n=YD(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function qD(t,e){let n;switch(e){case $3:n="Linear";break;case q3:n="Reinhard";break;case K3:n="OptimizedCineon";break;case Ox:n="ACESFilmic";break;case J3:n="AgX";break;case Q3:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function KD(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zs).join(`
`)}function QD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zs).join(`
`)}function JD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function e4(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Zs(t){return t!==""}function Rv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t4=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(t){return t.replace(t4,i4)}const n4=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function i4(t,e){let n=He[e];if(n===void 0){const i=n4.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jd(n)}const r4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lv(t){return t.replace(r4,s4)}function s4(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o4(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ux?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function a4(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l4(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function u4(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fx:e="ENVMAP_BLENDING_MULTIPLY";break;case Z3:e="ENVMAP_BLENDING_MIX";break;case Y3:e="ENVMAP_BLENDING_ADD";break}return e}function c4(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function f4(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=o4(n),u=a4(n),c=l4(n),f=u4(n),d=c4(n),p=n.isWebGL2?"":KD(n),_=QD(n),y=JD(s),m=r.createProgram();let h,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Zs).join(`
`),h.length>0&&(h+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Zs).join(`
`),v.length>0&&(v+=`
`)):(h=[Dv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),v=[p,Dv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?He.tonemapping_pars_fragment:"",n.toneMapping!==cr?qD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,$D("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zs).join(`
`)),o=Jd(o),o=Rv(o,n),o=Pv(o,n),a=Jd(a),a=Rv(a,n),a=Pv(a,n),o=Lv(o),a=Lv(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=g+h+o,b=g+v+a,C=Cv(r,r.VERTEX_SHADER,x),E=Cv(r,r.FRAGMENT_SHADER,b);r.attachShader(m,C),r.attachShader(m,E),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D($){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(C).trim(),O=r.getShaderInfoLog(E).trim();let z=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,E);else{const I=bv(r,C,"vertex"),F=bv(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+I+`
`+F)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(L===""||O==="")&&(q=!1);q&&($.diagnostics={runnable:z,programLog:te,vertexShader:{log:L,prefix:h},fragmentShader:{log:O,prefix:v}})}r.deleteShader(C),r.deleteShader(E),S=new eu(r,m),T=e4(r,m)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(m,jD)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=XD++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=E,this}let d4=0;class h4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new p4(e),n.set(e,i)),i}}class p4{constructor(e){this.id=d4++,this.code=e,this.usedTimes=0}}function m4(t,e,n,i,r,s,o){const a=new wp,l=new h4,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,T,W,$,te){const L=$.fog,O=te.geometry,z=S.isMeshStandardMaterial?$.environment:null,q=(S.isMeshStandardMaterial?n:e).get(S.envMap||z),I=q&&q.mapping===dc?q.image.height:null,F=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const V=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Y=V!==void 0?V.length:0;let Q=0;O.morphAttributes.position!==void 0&&(Q=1),O.morphAttributes.normal!==void 0&&(Q=2),O.morphAttributes.color!==void 0&&(Q=3);let Z,K,he,me;if(F){const en=oi[F];Z=en.vertexShader,K=en.fragmentShader}else Z=S.vertexShader,K=S.fragmentShader,l.update(S),he=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const ye=t.getRenderTarget(),Ie=te.isInstancedMesh===!0,De=te.isBatchedMesh===!0,Ae=!!S.map,Oe=!!S.matcap,k=!!q,Lt=!!S.aoMap,Ce=!!S.lightMap,Ue=!!S.bumpMap,Se=!!S.normalMap,at=!!S.displacementMap,Be=!!S.emissiveMap,A=!!S.metalnessMap,M=!!S.roughnessMap,H=S.anisotropy>0,oe=S.clearcoat>0,ne=S.iridescence>0,re=S.sheen>0,Me=S.transmission>0,pe=H&&!!S.anisotropyMap,xe=oe&&!!S.clearcoatMap,Re=oe&&!!S.clearcoatNormalMap,Ve=oe&&!!S.clearcoatRoughnessMap,ee=ne&&!!S.iridescenceMap,qe=ne&&!!S.iridescenceThicknessMap,R=re&&!!S.sheenColorMap,J=re&&!!S.sheenRoughnessMap,fe=!!S.specularMap,ae=!!S.specularColorMap,Ee=!!S.specularIntensityMap,je=Me&&!!S.transmissionMap,Ke=Me&&!!S.thicknessMap,Ge=!!S.gradientMap,ce=!!S.alphaMap,P=S.alphaTest>0,le=!!S.alphaHash,ue=!!S.extensions,be=!!O.attributes.uv1,Te=!!O.attributes.uv2,et=!!O.attributes.uv3;let tt=cr;return S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:c,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:K,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Fi,map:Ae,matcap:Oe,envMap:k,envMapMode:k&&q.mapping,envMapCubeUVHeight:I,aoMap:Lt,lightMap:Ce,bumpMap:Ue,normalMap:Se,displacementMap:d&&at,emissiveMap:Be,normalMapObjectSpace:Se&&S.normalMapType===fb,normalMapTangentSpace:Se&&S.normalMapType===Zx,metalnessMap:A,roughnessMap:M,anisotropy:H,anisotropyMap:pe,clearcoat:oe,clearcoatMap:xe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ve,iridescence:ne,iridescenceMap:ee,iridescenceThicknessMap:qe,sheen:re,sheenColorMap:R,sheenRoughnessMap:J,specularMap:fe,specularColorMap:ae,specularIntensityMap:Ee,transmission:Me,transmissionMap:je,thicknessMap:Ke,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===to,alphaMap:ce,alphaTest:P,alphaHash:le,combine:S.combine,mapUv:Ae&&y(S.map.channel),aoMapUv:Lt&&y(S.aoMap.channel),lightMapUv:Ce&&y(S.lightMap.channel),bumpMapUv:Ue&&y(S.bumpMap.channel),normalMapUv:Se&&y(S.normalMap.channel),displacementMapUv:at&&y(S.displacementMap.channel),emissiveMapUv:Be&&y(S.emissiveMap.channel),metalnessMapUv:A&&y(S.metalnessMap.channel),roughnessMapUv:M&&y(S.roughnessMap.channel),anisotropyMapUv:pe&&y(S.anisotropyMap.channel),clearcoatMapUv:xe&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:R&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:J&&y(S.sheenRoughnessMap.channel),specularMapUv:fe&&y(S.specularMap.channel),specularColorMapUv:ae&&y(S.specularColorMap.channel),specularIntensityMapUv:Ee&&y(S.specularIntensityMap.channel),transmissionMapUv:je&&y(S.transmissionMap.channel),thicknessMapUv:Ke&&y(S.thicknessMap.channel),alphaMapUv:ce&&y(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Se||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Te,vertexUv3s:et,pointsUvs:te.isPoints===!0&&!!O.attributes.uv&&(Ae||ce),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&rt.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===li,flipSided:S.side===vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const W in S.defines)T.push(W),T.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(v(T,S),g(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function v(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function g(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const T=_[S.type];let W;if(T){const $=oi[T];W=Kb.clone($.uniforms)}else W=S.uniforms;return W}function b(S,T){let W;for(let $=0,te=u.length;$<te;$++){const L=u[$];if(L.cacheKey===T){W=L,++W.usedTimes;break}}return W===void 0&&(W=new f4(t,T,S,s),u.push(W)),W}function C(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:b,releaseProgram:C,releaseShaderCache:E,programs:u,dispose:D}}function g4(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function v4(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Iv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Uv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,y,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function a(f,d,p,_,y,m){const h=o(f,d,p,_,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,y,m){const h=o(f,d,p,_,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||v4),i.length>1&&i.sort(d||Iv),r.length>1&&r.sort(d||Iv)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function _4(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Uv,t.set(i,[o])):r>=s.length?(o=new Uv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function y4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Qe};break;case"SpotLight":n={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function x4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let S4=0;function M4(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function E4(t,e){const n=new y4,i=x4(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new N);const s=new N,o=new xt,a=new xt;function l(c,f){let d=0,p=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,m=0,h=0,v=0,g=0,x=0,b=0,C=0,E=0,D=0,S=0;c.sort(M4);const T=f===!0?Math.PI:1;for(let $=0,te=c.length;$<te;$++){const L=c[$],O=L.color,z=L.intensity,q=L.distance,I=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*z*T,p+=O.g*z*T,_+=O.b*z*T;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],z);S++}else if(L.isDirectionalLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const V=L.shadow,Y=i.get(L);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=I,r.directionalShadowMatrix[y]=L.shadow.matrix,x++}r.directional[y]=F,y++}else if(L.isSpotLight){const F=n.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(O).multiplyScalar(z*T),F.distance=q,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[h]=F;const V=L.shadow;if(L.map&&(r.spotLightMap[E]=L.map,E++,V.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[h]=V.matrix,L.castShadow){const Y=i.get(L);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,r.spotShadow[h]=Y,r.spotShadowMap[h]=I,C++}h++}else if(L.isRectAreaLight){const F=n.get(L);F.color.copy(O).multiplyScalar(z),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=F,v++}else if(L.isPointLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*T),F.distance=L.distance,F.decay=L.decay,L.castShadow){const V=L.shadow,Y=i.get(L);Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=L.shadow.matrix,b++}r.point[m]=F,m++}else if(L.isHemisphereLight){const F=n.get(L);F.skyColor.copy(L.color).multiplyScalar(z*T),F.groundColor.copy(L.groundColor).multiplyScalar(z*T),r.hemi[g]=F,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==y||W.pointLength!==m||W.spotLength!==h||W.rectAreaLength!==v||W.hemiLength!==g||W.numDirectionalShadows!==x||W.numPointShadows!==b||W.numSpotShadows!==C||W.numSpotMaps!==E||W.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+E-D,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=S,W.directionalLength=y,W.pointLength=m,W.spotLength=h,W.rectAreaLength=v,W.hemiLength=g,W.numDirectionalShadows=x,W.numPointShadows=b,W.numSpotShadows=C,W.numSpotMaps=E,W.numLightProbes=S,r.version=S4++)}function u(c,f){let d=0,p=0,_=0,y=0,m=0;const h=f.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const x=c[v];if(x.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(h),d++}else if(x.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(h),_++}else if(x.isRectAreaLight){const b=r.rectArea[y];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(h),a.identity(),o.copy(x.matrixWorld),o.premultiply(h),a.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function Nv(t,e){const n=new E4(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function T4(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Nv(t,e),n.set(s,[l])):o>=a.length?(l=new Nv(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class w4 extends Eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A4 extends Eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const C4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R4(t,e,n){let i=new Ap;const r=new Fe,s=new Fe,o=new Ot,a=new w4({depthPacking:cb}),l=new A4,u={},c=n.maxTextureSize,f={[gr]:vn,[vn]:gr,[li]:li},d=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:C4,fragmentShader:b4}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new di;_.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new hn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ux;let h=this.type;this.render=function(C,E,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=t.getRenderTarget(),T=t.getActiveCubeFace(),W=t.getActiveMipmapLevel(),$=t.state;$.setBlending(ur),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const te=h!==xi&&this.type===xi,L=h===xi&&this.type!==xi;for(let O=0,z=C.length;O<z;O++){const q=C[O],I=q.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const F=I.getFrameExtents();if(r.multiply(F),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,I.mapSize.y=s.y)),I.map===null||te===!0||L===!0){const Y=this.type!==xi?{minFilter:on,magFilter:on}:{};I.map!==null&&I.map.dispose(),I.map=new vr(r.x,r.y,Y),I.map.texture.name=q.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const V=I.getViewportCount();for(let Y=0;Y<V;Y++){const Q=I.getViewport(Y);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),$.viewport(o),I.updateMatrices(q,Y),i=I.getFrustum(),x(E,D,I.camera,q,this.type)}I.isPointLightShadow!==!0&&this.type===xi&&v(I,D),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(S,T,W)};function v(C,E){const D=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(E,null,D,d,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(E,null,D,p,y,null)}function g(C,E,D,S){let T=null;const W=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(W!==void 0)T=W;else if(T=D.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const $=T.uuid,te=E.uuid;let L=u[$];L===void 0&&(L={},u[$]=L);let O=L[te];O===void 0&&(O=T.clone(),L[te]=O,E.addEventListener("dispose",b)),T=O}if(T.visible=E.visible,T.wireframe=E.wireframe,S===xi?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:f[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const $=t.properties.get(T);$.light=D}return T}function x(C,E,D,S,T){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===xi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const te=e.update(C),L=C.material;if(Array.isArray(L)){const O=te.groups;for(let z=0,q=O.length;z<q;z++){const I=O[z],F=L[I.materialIndex];if(F&&F.visible){const V=g(C,F,S,T);C.onBeforeShadow(t,C,E,D,te,V,I),t.renderBufferDirect(D,null,te,V,C,I),C.onAfterShadow(t,C,E,D,te,V,I)}}}else if(L.visible){const O=g(C,L,S,T);C.onBeforeShadow(t,C,E,D,te,O,null),t.renderBufferDirect(D,null,te,O,C,null),C.onAfterShadow(t,C,E,D,te,O,null)}}const $=C.children;for(let te=0,L=$.length;te<L;te++)x($[te],E,D,S,T)}function b(C){C.target.removeEventListener("dispose",b);for(const D in u){const S=u[D],T=C.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function P4(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const le=new Ot;let ue=null;const be=new Ot(0,0,0,0);return{setMask:function(Te){ue!==Te&&!P&&(t.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){P=Te},setClear:function(Te,et,tt,Dt,en){en===!0&&(Te*=Dt,et*=Dt,tt*=Dt),le.set(Te,et,tt,Dt),be.equals(le)===!1&&(t.clearColor(Te,et,tt,Dt),be.copy(le))},reset:function(){P=!1,ue=null,be.set(-1,0,0,0)}}}function s(){let P=!1,le=null,ue=null,be=null;return{setTest:function(Te){Te?De(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Te){le!==Te&&!P&&(t.depthMask(Te),le=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case V3:t.depthFunc(t.NEVER);break;case z3:t.depthFunc(t.ALWAYS);break;case H3:t.depthFunc(t.LESS);break;case Nu:t.depthFunc(t.LEQUAL);break;case G3:t.depthFunc(t.EQUAL);break;case W3:t.depthFunc(t.GEQUAL);break;case j3:t.depthFunc(t.GREATER);break;case X3:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Te}},setLocked:function(Te){P=Te},setClear:function(Te){be!==Te&&(t.clearDepth(Te),be=Te)},reset:function(){P=!1,le=null,ue=null,be=null}}}function o(){let P=!1,le=null,ue=null,be=null,Te=null,et=null,tt=null,Dt=null,en=null;return{setTest:function(st){P||(st?De(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(st){le!==st&&!P&&(t.stencilMask(st),le=st)},setFunc:function(st,tn,ii){(ue!==st||be!==tn||Te!==ii)&&(t.stencilFunc(st,tn,ii),ue=st,be=tn,Te=ii)},setOp:function(st,tn,ii){(et!==st||tt!==tn||Dt!==ii)&&(t.stencilOp(st,tn,ii),et=st,tt=tn,Dt=ii)},setLocked:function(st){P=st},setClear:function(st){en!==st&&(t.clearStencil(st),en=st)},reset:function(){P=!1,le=null,ue=null,be=null,Te=null,et=null,tt=null,Dt=null,en=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,y=[],m=null,h=!1,v=null,g=null,x=null,b=null,C=null,E=null,D=null,S=new Qe(0,0,0),T=0,W=!1,$=null,te=null,L=null,O=null,z=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,F=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(V)[1]),I=F>=1):V.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),I=F>=2);let Y=null,Q={};const Z=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),he=new Ot().fromArray(Z),me=new Ot().fromArray(K);function ye(P,le,ue,be){const Te=new Uint8Array(4),et=t.createTexture();t.bindTexture(P,et),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<ue;tt++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(le+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return et}const Ie={};Ie[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),Ie[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ie[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),De(t.DEPTH_TEST),l.setFunc(Nu),Be(!1),A(vg),De(t.CULL_FACE),Se(ur);function De(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function Ae(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function Oe(P,le){return p[P]!==le?(t.bindFramebuffer(P,le),p[P]=le,i&&(P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=le),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function k(P,le){let ue=y,be=!1;if(P)if(ue=_.get(le),ue===void 0&&(ue=[],_.set(le,ue)),P.isWebGLMultipleRenderTargets){const Te=P.texture;if(ue.length!==Te.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let et=0,tt=Te.length;et<tt;et++)ue[et]=t.COLOR_ATTACHMENT0+et;ue.length=Te.length,be=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,be=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,be=!0);be&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Lt(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const Ce={[Or]:t.FUNC_ADD,[w3]:t.FUNC_SUBTRACT,[A3]:t.FUNC_REVERSE_SUBTRACT};if(i)Ce[xg]=t.MIN,Ce[Sg]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ce[xg]=P.MIN_EXT,Ce[Sg]=P.MAX_EXT)}const Ue={[C3]:t.ZERO,[b3]:t.ONE,[R3]:t.SRC_COLOR,[jd]:t.SRC_ALPHA,[N3]:t.SRC_ALPHA_SATURATE,[I3]:t.DST_COLOR,[L3]:t.DST_ALPHA,[P3]:t.ONE_MINUS_SRC_COLOR,[Xd]:t.ONE_MINUS_SRC_ALPHA,[U3]:t.ONE_MINUS_DST_COLOR,[D3]:t.ONE_MINUS_DST_ALPHA,[F3]:t.CONSTANT_COLOR,[O3]:t.ONE_MINUS_CONSTANT_COLOR,[B3]:t.CONSTANT_ALPHA,[k3]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(P,le,ue,be,Te,et,tt,Dt,en,st){if(P===ur){h===!0&&(Ae(t.BLEND),h=!1);return}if(h===!1&&(De(t.BLEND),h=!0),P!==T3){if(P!==v||st!==W){if((g!==Or||C!==Or)&&(t.blendEquation(t.FUNC_ADD),g=Or,C=Or),st)switch(P){case to:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wd:t.blendFunc(t.ONE,t.ONE);break;case _g:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case to:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _g:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,b=null,E=null,D=null,S.set(0,0,0),T=0,v=P,W=st}return}Te=Te||le,et=et||ue,tt=tt||be,(le!==g||Te!==C)&&(t.blendEquationSeparate(Ce[le],Ce[Te]),g=le,C=Te),(ue!==x||be!==b||et!==E||tt!==D)&&(t.blendFuncSeparate(Ue[ue],Ue[be],Ue[et],Ue[tt]),x=ue,b=be,E=et,D=tt),(Dt.equals(S)===!1||en!==T)&&(t.blendColor(Dt.r,Dt.g,Dt.b,en),S.copy(Dt),T=en),v=P,W=!1}function at(P,le){P.side===li?Ae(t.CULL_FACE):De(t.CULL_FACE);let ue=P.side===vn;le&&(ue=!ue),Be(ue),P.blending===to&&P.transparent===!1?Se(ur):Se(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const be=P.stencilWrite;u.setTest(be),be&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),H(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(P){$!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),$=P)}function A(P){P!==M3?(De(t.CULL_FACE),P!==te&&(P===vg?t.cullFace(t.BACK):P===E3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),te=P}function M(P){P!==L&&(I&&t.lineWidth(P),L=P)}function H(P,le,ue){P?(De(t.POLYGON_OFFSET_FILL),(O!==le||z!==ue)&&(t.polygonOffset(le,ue),O=le,z=ue)):Ae(t.POLYGON_OFFSET_FILL)}function oe(P){P?De(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function ne(P){P===void 0&&(P=t.TEXTURE0+q-1),Y!==P&&(t.activeTexture(P),Y=P)}function re(P,le,ue){ue===void 0&&(Y===null?ue=t.TEXTURE0+q-1:ue=Y);let be=Q[ue];be===void 0&&(be={type:void 0,texture:void 0},Q[ue]=be),(be.type!==P||be.texture!==le)&&(Y!==ue&&(t.activeTexture(ue),Y=ue),t.bindTexture(P,le||Ie[P]),be.type=P,be.texture=le)}function Me(){const P=Q[Y];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(P){he.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),he.copy(P))}function je(P){me.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),me.copy(P))}function Ke(P,le){let ue=f.get(le);ue===void 0&&(ue=new WeakMap,f.set(le,ue));let be=ue.get(P);be===void 0&&(be=t.getUniformBlockIndex(le,P.name),ue.set(P,be))}function Ge(P,le){const be=f.get(le).get(P);c.get(le)!==be&&(t.uniformBlockBinding(le,be,P.__bindingPointIndex),c.set(le,be))}function ce(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Y=null,Q={},p={},_=new WeakMap,y=[],m=null,h=!1,v=null,g=null,x=null,b=null,C=null,E=null,D=null,S=new Qe(0,0,0),T=0,W=!1,$=null,te=null,L=null,O=null,z=null,he.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:De,disable:Ae,bindFramebuffer:Oe,drawBuffers:k,useProgram:Lt,setBlending:Se,setMaterial:at,setFlipSided:Be,setCullFace:A,setLineWidth:M,setPolygonOffset:H,setScissorTest:oe,activeTexture:ne,bindTexture:re,unbindTexture:Me,compressedTexImage2D:pe,compressedTexImage3D:xe,texImage2D:fe,texImage3D:ae,updateUBOMapping:Ke,uniformBlockBinding:Ge,texStorage2D:R,texStorage3D:J,texSubImage2D:Re,texSubImage3D:Ve,compressedTexSubImage2D:ee,compressedTexSubImage3D:qe,scissor:Ee,viewport:je,reset:ce}}function L4(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return p?new OffscreenCanvas(A,M):zu("canvas")}function y(A,M,H,oe){let ne=1;if((A.width>oe||A.height>oe)&&(ne=oe/Math.max(A.width,A.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=M?Vu:Math.floor,Me=re(ne*A.width),pe=re(ne*A.height);f===void 0&&(f=_(Me,pe));const xe=H?_(Me,pe):f;return xe.width=Me,xe.height=pe,xe.getContext("2d").drawImage(A,0,0,Me,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+pe+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Kd(A.width)&&Kd(A.height)}function h(A){return a?!1:A.wrapS!==Qn||A.wrapT!==Qn||A.minFilter!==on&&A.minFilter!==fn}function v(A,M){return A.generateMipmaps&&M&&A.minFilter!==on&&A.minFilter!==fn}function g(A){t.generateMipmap(A)}function x(A,M,H,oe,ne=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=M;if(M===t.RED&&(H===t.FLOAT&&(re=t.R32F),H===t.HALF_FLOAT&&(re=t.R16F),H===t.UNSIGNED_BYTE&&(re=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(re=t.R8UI),H===t.UNSIGNED_SHORT&&(re=t.R16UI),H===t.UNSIGNED_INT&&(re=t.R32UI),H===t.BYTE&&(re=t.R8I),H===t.SHORT&&(re=t.R16I),H===t.INT&&(re=t.R32I)),M===t.RG&&(H===t.FLOAT&&(re=t.RG32F),H===t.HALF_FLOAT&&(re=t.RG16F),H===t.UNSIGNED_BYTE&&(re=t.RG8)),M===t.RGBA){const Me=ne?Fu:rt.getTransfer(oe);H===t.FLOAT&&(re=t.RGBA32F),H===t.HALF_FLOAT&&(re=t.RGBA16F),H===t.UNSIGNED_BYTE&&(re=Me===ut?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function b(A,M,H){return v(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){return A===on||A===Mg||A===sf?t.NEAREST:t.LINEAR}function E(A){const M=A.target;M.removeEventListener("dispose",E),S(M),M.isVideoTexture&&c.delete(M)}function D(A){const M=A.target;M.removeEventListener("dispose",D),W(M)}function S(A){const M=i.get(A);if(M.__webglInit===void 0)return;const H=A.source,oe=d.get(H);if(oe){const ne=oe[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(A),Object.keys(oe).length===0&&d.delete(H)}i.remove(A)}function T(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const H=A.source,oe=d.get(H);delete oe[M.__cacheKey],o.memory.textures--}function W(A){const M=A.texture,H=i.get(A),oe=i.get(M);if(oe.__webglTexture!==void 0&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(H.__webglFramebuffer[ne]))for(let re=0;re<H.__webglFramebuffer[ne].length;re++)t.deleteFramebuffer(H.__webglFramebuffer[ne][re]);else t.deleteFramebuffer(H.__webglFramebuffer[ne]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ne])}else{if(Array.isArray(H.__webglFramebuffer))for(let ne=0;ne<H.__webglFramebuffer.length;ne++)t.deleteFramebuffer(H.__webglFramebuffer[ne]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,re=M.length;ne<re;ne++){const Me=i.get(M[ne]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(A)}let $=0;function te(){$=0}function L(){const A=$;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),$+=1,A}function O(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function z(A,M){const H=i.get(A);if(A.isVideoTexture&&at(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const oe=A.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(H,A,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function q(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){he(H,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function I(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){he(H,A,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function F(A,M){const H=i.get(A);if(A.version>0&&H.__version!==A.version){me(H,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const V={[Ra]:t.REPEAT,[Qn]:t.CLAMP_TO_EDGE,[$d]:t.MIRRORED_REPEAT},Y={[on]:t.NEAREST,[Mg]:t.NEAREST_MIPMAP_NEAREST,[sf]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[eb]:t.LINEAR_MIPMAP_NEAREST,[Pa]:t.LINEAR_MIPMAP_LINEAR},Q={[db]:t.NEVER,[_b]:t.ALWAYS,[hb]:t.LESS,[Yx]:t.LEQUAL,[pb]:t.EQUAL,[vb]:t.GEQUAL,[mb]:t.GREATER,[gb]:t.NOTEQUAL};function Z(A,M,H){if(H?(t.texParameteri(A,t.TEXTURE_WRAP_S,V[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,V[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,V[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Y[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Qn||M.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==on&&M.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===on||M.minFilter!==sf&&M.minFilter!==Pa||M.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===La&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(A,M){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",E));const oe=M.source;let ne=d.get(oe);ne===void 0&&(ne={},d.set(oe,ne));const re=O(M);if(re!==A.__cacheKey){ne[re]===void 0&&(ne[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[re].usedTimes++;const Me=ne[A.__cacheKey];Me!==void 0&&(ne[A.__cacheKey].usedTimes--,Me.usedTimes===0&&T(M)),A.__cacheKey=re,A.__webglTexture=ne[re].texture}return H}function he(A,M,H){let oe=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=t.TEXTURE_3D);const ne=K(A,M),re=M.source;n.bindTexture(oe,A.__webglTexture,t.TEXTURE0+H);const Me=i.get(re);if(re.version!==Me.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const pe=rt.getPrimaries(rt.workingColorSpace),xe=M.colorSpace===Bn?null:rt.getPrimaries(M.colorSpace),Re=M.colorSpace===Bn||pe===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ve=h(M)&&m(M.image)===!1;let ee=y(M.image,Ve,!1,r.maxTextureSize);ee=Be(M,ee);const qe=m(ee)||a,R=s.convert(M.format,M.colorSpace);let J=s.convert(M.type),fe=x(M.internalFormat,R,J,M.colorSpace,M.isVideoTexture);Z(oe,M,qe);let ae;const Ee=M.mipmaps,je=a&&M.isVideoTexture!==!0&&fe!==jx,Ke=Me.__version===void 0||ne===!0,Ge=b(M,ee,qe);if(M.isDepthTexture)fe=t.DEPTH_COMPONENT,a?M.type===er?fe=t.DEPTH_COMPONENT32F:M.type===Ji?fe=t.DEPTH_COMPONENT24:M.type===Yr?fe=t.DEPTH24_STENCIL8:fe=t.DEPTH_COMPONENT16:M.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===$r&&fe===t.DEPTH_COMPONENT&&M.type!==Sp&&M.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ji,J=s.convert(M.type)),M.format===mo&&fe===t.DEPTH_COMPONENT&&(fe=t.DEPTH_STENCIL,M.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Yr,J=s.convert(M.type))),Ke&&(je?n.texStorage2D(t.TEXTURE_2D,1,fe,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,fe,ee.width,ee.height,0,R,J,null));else if(M.isDataTexture)if(Ee.length>0&&qe){je&&Ke&&n.texStorage2D(t.TEXTURE_2D,Ge,fe,Ee[0].width,Ee[0].height);for(let ce=0,P=Ee.length;ce<P;ce++)ae=Ee[ce],je?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ae.width,ae.height,R,J,ae.data):n.texImage2D(t.TEXTURE_2D,ce,fe,ae.width,ae.height,0,R,J,ae.data);M.generateMipmaps=!1}else je?(Ke&&n.texStorage2D(t.TEXTURE_2D,Ge,fe,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,R,J,ee.data)):n.texImage2D(t.TEXTURE_2D,0,fe,ee.width,ee.height,0,R,J,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,fe,Ee[0].width,Ee[0].height,ee.depth);for(let ce=0,P=Ee.length;ce<P;ce++)ae=Ee[ce],M.format!==On?R!==null?je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,ae.width,ae.height,ee.depth,R,ae.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,fe,ae.width,ae.height,ee.depth,0,ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,ae.width,ae.height,ee.depth,R,J,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,fe,ae.width,ae.height,ee.depth,0,R,J,ae.data)}else{je&&Ke&&n.texStorage2D(t.TEXTURE_2D,Ge,fe,Ee[0].width,Ee[0].height);for(let ce=0,P=Ee.length;ce<P;ce++)ae=Ee[ce],M.format!==On?R!==null?je?n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,ae.width,ae.height,R,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ae.width,ae.height,R,J,ae.data):n.texImage2D(t.TEXTURE_2D,ce,fe,ae.width,ae.height,0,R,J,ae.data)}else if(M.isDataArrayTexture)je?(Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,fe,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,R,J,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,R,J,ee.data);else if(M.isData3DTexture)je?(Ke&&n.texStorage3D(t.TEXTURE_3D,Ge,fe,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,R,J,ee.data)):n.texImage3D(t.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,R,J,ee.data);else if(M.isFramebufferTexture){if(Ke)if(je)n.texStorage2D(t.TEXTURE_2D,Ge,fe,ee.width,ee.height);else{let ce=ee.width,P=ee.height;for(let le=0;le<Ge;le++)n.texImage2D(t.TEXTURE_2D,le,fe,ce,P,0,R,J,null),ce>>=1,P>>=1}}else if(Ee.length>0&&qe){je&&Ke&&n.texStorage2D(t.TEXTURE_2D,Ge,fe,Ee[0].width,Ee[0].height);for(let ce=0,P=Ee.length;ce<P;ce++)ae=Ee[ce],je?n.texSubImage2D(t.TEXTURE_2D,ce,0,0,R,J,ae):n.texImage2D(t.TEXTURE_2D,ce,fe,R,J,ae);M.generateMipmaps=!1}else je?(Ke&&n.texStorage2D(t.TEXTURE_2D,Ge,fe,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,R,J,ee)):n.texImage2D(t.TEXTURE_2D,0,fe,R,J,ee);v(M,qe)&&g(oe),Me.__version=re.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function me(A,M,H){if(M.image.length!==6)return;const oe=K(A,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const re=i.get(ne);if(ne.version!==re.__version||oe===!0){n.activeTexture(t.TEXTURE0+H);const Me=rt.getPrimaries(rt.workingColorSpace),pe=M.colorSpace===Bn?null:rt.getPrimaries(M.colorSpace),xe=M.colorSpace===Bn||Me===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,Ve=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let ce=0;ce<6;ce++)!Re&&!Ve?ee[ce]=y(M.image[ce],!1,!0,r.maxCubemapSize):ee[ce]=Ve?M.image[ce].image:M.image[ce],ee[ce]=Be(M,ee[ce]);const qe=ee[0],R=m(qe)||a,J=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),ae=x(M.internalFormat,J,fe,M.colorSpace),Ee=a&&M.isVideoTexture!==!0,je=re.__version===void 0||oe===!0;let Ke=b(M,qe,R);Z(t.TEXTURE_CUBE_MAP,M,R);let Ge;if(Re){Ee&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ke,ae,qe.width,qe.height);for(let ce=0;ce<6;ce++){Ge=ee[ce].mipmaps;for(let P=0;P<Ge.length;P++){const le=Ge[P];M.format!==On?J!==null?Ee?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,0,0,le.width,le.height,J,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,ae,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,0,0,le.width,le.height,J,fe,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,ae,le.width,le.height,0,J,fe,le.data)}}}else{Ge=M.mipmaps,Ee&&je&&(Ge.length>0&&Ke++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ke,ae,ee[0].width,ee[0].height));for(let ce=0;ce<6;ce++)if(Ve){Ee?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ee[ce].width,ee[ce].height,J,fe,ee[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ae,ee[ce].width,ee[ce].height,0,J,fe,ee[ce].data);for(let P=0;P<Ge.length;P++){const ue=Ge[P].image[ce].image;Ee?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,0,0,ue.width,ue.height,J,fe,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,ae,ue.width,ue.height,0,J,fe,ue.data)}}else{Ee?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,J,fe,ee[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ae,J,fe,ee[ce]);for(let P=0;P<Ge.length;P++){const le=Ge[P];Ee?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,0,0,J,fe,le.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,ae,J,fe,le.image[ce])}}}v(M,R)&&g(t.TEXTURE_CUBE_MAP),re.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ye(A,M,H,oe,ne,re){const Me=s.convert(H.format,H.colorSpace),pe=s.convert(H.type),xe=x(H.internalFormat,Me,pe,H.colorSpace);if(!i.get(M).__hasExternalTextures){const Ve=Math.max(1,M.width>>re),ee=Math.max(1,M.height>>re);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,re,xe,Ve,ee,M.depth,0,Me,pe,null):n.texImage2D(ne,re,xe,Ve,ee,0,Me,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,ne,i.get(H).__webglTexture,0,Ue(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,oe,ne,i.get(H).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(A,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let oe=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||Se(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===er?oe=t.DEPTH_COMPONENT32F:ne.type===Ji&&(oe=t.DEPTH_COMPONENT24));const re=Ue(M);Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,oe,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,oe,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,oe,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const oe=Ue(M);H&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const oe=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<oe.length;ne++){const re=oe[ne],Me=s.convert(re.format,re.colorSpace),pe=s.convert(re.type),xe=x(re.internalFormat,Me,pe,re.colorSpace),Re=Ue(M);H&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,xe,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,xe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,xe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const oe=i.get(M.depthTexture).__webglTexture,ne=Ue(M);if(M.depthTexture.format===$r)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0);else if(M.depthTexture.format===mo)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ae(A){const M=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");De(M.__webglFramebuffer,A)}else if(H){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=t.createRenderbuffer(),Ie(M.__webglDepthbuffer[oe],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ie(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(A,M,H){const oe=i.get(A);M!==void 0&&ye(oe.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ae(A)}function k(A){const M=A.texture,H=i.get(A),oe=i.get(M);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture()),oe.__version=M.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,Me=m(A)||a;if(ne){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)H.__webglFramebuffer[pe][xe]=t.createFramebuffer()}else H.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)H.__webglFramebuffer[pe]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const pe=A.texture;for(let xe=0,Re=pe.length;xe<Re;xe++){const Ve=i.get(pe[xe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Se(A)===!1){const pe=re?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xe=0;xe<pe.length;xe++){const Re=pe[xe];H.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[xe]);const Ve=s.convert(Re.format,Re.colorSpace),ee=s.convert(Re.type),qe=x(Re.internalFormat,Ve,ee,Re.colorSpace,A.isXRRenderTarget===!0),R=Ue(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,R,qe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,H.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),Z(t.TEXTURE_CUBE_MAP,M,Me);for(let pe=0;pe<6;pe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ye(H.__webglFramebuffer[pe][xe],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else ye(H.__webglFramebuffer[pe],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(M,Me)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const pe=A.texture;for(let xe=0,Re=pe.length;xe<Re;xe++){const Ve=pe[xe],ee=i.get(Ve);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Z(t.TEXTURE_2D,Ve,Me),ye(H.__webglFramebuffer,A,Ve,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),v(Ve,Me)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?pe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,oe.__webglTexture),Z(pe,M,Me),a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ye(H.__webglFramebuffer[xe],A,M,t.COLOR_ATTACHMENT0,pe,xe);else ye(H.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,pe,0);v(M,Me)&&g(pe),n.unbindTexture()}A.depthBuffer&&Ae(A)}function Lt(A){const M=m(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let oe=0,ne=H.length;oe<ne;oe++){const re=H[oe];if(v(re,M)){const Me=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(re).__webglTexture;n.bindTexture(Me,pe),g(Me),n.unbindTexture()}}}function Ce(A){if(a&&A.samples>0&&Se(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,oe=A.height;let ne=t.COLOR_BUFFER_BIT;const re=[],Me=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(A),xe=A.isWebGLMultipleRenderTargets===!0;if(xe)for(let Re=0;Re<M.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){re.push(t.COLOR_ATTACHMENT0+Re),A.depthBuffer&&re.push(Me);const Ve=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Ve===!1&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]),Ve===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),xe){const ee=i.get(M[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,H,oe,0,0,H,oe,ne,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Re=0;Re<M.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]);const Ve=i.get(M[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ue(A){return Math.min(r.maxSamples,A.samples)}function Se(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(A){const M=o.render.frame;c.get(A)!==M&&(c.set(A,M),A.update())}function Be(A,M){const H=A.colorSpace,oe=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===qd||H!==Fi&&H!==Bn&&(rt.getTransfer(H)===ut?a===!1?e.has("EXT_sRGB")===!0&&oe===On?(A.format=qd,A.minFilter=fn,A.generateMipmaps=!1):M=qx.sRGBToLinear(M):(oe!==On||ne!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=L,this.resetTextureUnits=te,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=I,this.setTextureCube=F,this.rebindTextures=Oe,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Se}function D4(t,e,n){const i=n.isWebGL2;function r(s,o=Bn){let a;const l=rt.getTransfer(o);if(s===fr)return t.UNSIGNED_BYTE;if(s===Vx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===zx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===tb)return t.BYTE;if(s===nb)return t.SHORT;if(s===Sp)return t.UNSIGNED_SHORT;if(s===kx)return t.INT;if(s===Ji)return t.UNSIGNED_INT;if(s===er)return t.FLOAT;if(s===La)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ib)return t.ALPHA;if(s===On)return t.RGBA;if(s===rb)return t.LUMINANCE;if(s===sb)return t.LUMINANCE_ALPHA;if(s===$r)return t.DEPTH_COMPONENT;if(s===mo)return t.DEPTH_STENCIL;if(s===qd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ob)return t.RED;if(s===Hx)return t.RED_INTEGER;if(s===ab)return t.RG;if(s===Gx)return t.RG_INTEGER;if(s===Wx)return t.RGBA_INTEGER;if(s===of||s===af||s===lf||s===uf)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===of)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===af)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===of)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===af)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eg||s===Tg||s===wg||s===Ag)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Eg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ag)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Cg||s===bg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Cg)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rg||s===Pg||s===Lg||s===Dg||s===Ig||s===Ug||s===Ng||s===Fg||s===Og||s===Bg||s===kg||s===Vg||s===zg||s===Hg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Rg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ig)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ug)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ng)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Og)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hg)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cf||s===Gg||s===Wg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cf)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Wg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lb||s===jg||s===Xg||s===Zg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===cf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class I4 extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nl extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U4={type:"move"};class If{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(u,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U4)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Nl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class N4 extends os{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const y=n.getContextAttributes();let m=null,h=null;const v=[],g=[],x=new Fe;let b=null;const C=new Tn;C.layers.enable(1),C.viewport=new Ot;const E=new Tn;E.layers.enable(2),E.viewport=new Ot;const D=[C,E],S=new I4;S.layers.enable(1),S.layers.enable(2);let T=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=v[Z];return K===void 0&&(K=new If,v[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=v[Z];return K===void 0&&(K=new If,v[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=v[Z];return K===void 0&&(K=new If,v[Z]=K),K.getHandSpace()};function $(Z){const K=g.indexOf(Z.inputSource);if(K===-1)return;const he=v[K];he!==void 0&&(he.update(Z.inputSource,Z.frame,u||o),he.dispatchEvent({type:Z.type,data:Z.inputSource}))}function te(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",L);for(let Z=0;Z<v.length;Z++){const K=g[Z];K!==null&&(g[Z]=null,v[Z].disconnect(K))}T=null,W=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",te),r.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new vr(p.framebufferWidth,p.framebufferHeight,{format:On,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,he=null,me=null;y.depth&&(me=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=y.stencil?mo:$r,he=y.stencil?Yr:Ji);const ye={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new vr(d.textureWidth,d.textureHeight,{format:On,type:fr,depthTexture:new oS(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ie=e.properties.get(h);Ie.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(Z){for(let K=0;K<Z.removed.length;K++){const he=Z.removed[K],me=g.indexOf(he);me>=0&&(g[me]=null,v[me].disconnect(he))}for(let K=0;K<Z.added.length;K++){const he=Z.added[K];let me=g.indexOf(he);if(me===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=g.length){g.push(he),me=Ie;break}else if(g[Ie]===null){g[Ie]=he,me=Ie;break}if(me===-1)break}const ye=v[me];ye&&ye.connect(he)}}const O=new N,z=new N;function q(Z,K,he){O.setFromMatrixPosition(K.matrixWorld),z.setFromMatrixPosition(he.matrixWorld);const me=O.distanceTo(z),ye=K.projectionMatrix.elements,Ie=he.projectionMatrix.elements,De=ye[14]/(ye[10]-1),Ae=ye[14]/(ye[10]+1),Oe=(ye[9]+1)/ye[5],k=(ye[9]-1)/ye[5],Lt=(ye[8]-1)/ye[0],Ce=(Ie[8]+1)/Ie[0],Ue=De*Lt,Se=De*Ce,at=me/(-Lt+Ce),Be=at*-Lt;K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Be),Z.translateZ(at),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const A=De+at,M=Ae+at,H=Ue-Be,oe=Se+(me-Be),ne=Oe*Ae/M*A,re=k*Ae/M*A;Z.projectionMatrix.makePerspective(H,oe,ne,re,A,M),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function I(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;S.near=E.near=C.near=Z.near,S.far=E.far=C.far=Z.far,(T!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,W=S.far);const K=Z.parent,he=S.cameras;I(S,K);for(let me=0;me<he.length;me++)I(he[me],K);he.length===2?q(S,C,E):S.projectionMatrix.copy(C.projectionMatrix),F(Z,S,K)};function F(Z,K,he){he===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(he.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=go*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)};let V=null;function Y(Z,K){if(c=K.getViewerPose(u||o),_=K,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let me=!1;he.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let ye=0;ye<he.length;ye++){const Ie=he[ye];let De=null;if(p!==null)De=p.getViewport(Ie);else{const Oe=f.getViewSubImage(d,Ie);De=Oe.viewport,ye===0&&(e.setRenderTargetTextures(h,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(h))}let Ae=D[ye];Ae===void 0&&(Ae=new Tn,Ae.layers.enable(ye),Ae.viewport=new Ot,D[ye]=Ae),Ae.matrix.fromArray(Ie.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ie.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(De.x,De.y,De.width,De.height),ye===0&&(S.matrix.copy(Ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(Ae)}}for(let he=0;he<v.length;he++){const me=g[he],ye=v[he];me!==null&&ye!==void 0&&ye.update(me,K,u||o)}V&&V(Z,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Q=new sS;Q.setAnimationLoop(Y),this.setAnimationLoop=function(Z){V=Z},this.dispose=function(){}}}function F4(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,nS(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,g,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===vn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===vn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function O4(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const x=g.program;i.uniformBlockBinding(v,x)}function u(v,g){let x=r[v.id];x===void 0&&(_(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",m));const b=g.program;i.updateUBOMapping(v,b);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function c(v){const g=f();v.__bindingPointIndex=g;const x=t.createBuffer(),b=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],x=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,E=x.length;C<E;C++){const D=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,T=D.length;S<T;S++){const W=D[S];if(p(W,C,S,b)===!0){const $=W.__offset,te=Array.isArray(W.value)?W.value:[W.value];let L=0;for(let O=0;O<te.length;O++){const z=te[O],q=y(z);typeof z=="number"||typeof z=="boolean"?(W.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,$+L,W.__data)):z.isMatrix3?(W.__data[0]=z.elements[0],W.__data[1]=z.elements[1],W.__data[2]=z.elements[2],W.__data[3]=0,W.__data[4]=z.elements[3],W.__data[5]=z.elements[4],W.__data[6]=z.elements[5],W.__data[7]=0,W.__data[8]=z.elements[6],W.__data[9]=z.elements[7],W.__data[10]=z.elements[8],W.__data[11]=0):(z.toArray(W.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,W.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,x,b){const C=v.value,E=g+"_"+x;if(b[E]===void 0)return typeof C=="number"||typeof C=="boolean"?b[E]=C:b[E]=C.clone(),!0;{const D=b[E];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return b[E]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(v){const g=v.uniforms;let x=0;const b=16;for(let E=0,D=g.length;E<D;E++){const S=Array.isArray(g[E])?g[E]:[g[E]];for(let T=0,W=S.length;T<W;T++){const $=S[T],te=Array.isArray($.value)?$.value:[$.value];for(let L=0,O=te.length;L<O;L++){const z=te[L],q=y(z),I=x%b;I!==0&&b-I<q.boundary&&(x+=b-I),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=x,x+=q.storage}}}const C=x%b;return C>0&&(x+=b-C),v.__size=x,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class dS{constructor(e={}){const{canvas:n=Ib(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const g=this;let x=!1,b=0,C=0,E=null,D=-1,S=null;const T=new Ot,W=new Ot;let $=null;const te=new Qe(0);let L=0,O=n.width,z=n.height,q=1,I=null,F=null;const V=new Ot(0,0,O,z),Y=new Ot(0,0,O,z);let Q=!1;const Z=new Ap;let K=!1,he=!1,me=null;const ye=new xt,Ie=new Fe,De=new N,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return E===null?q:1}let k=i;function Lt(w,U){for(let j=0;j<w.length;j++){const X=w[j],G=n.getContext(X,U);if(G!==null)return G}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xp}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",le,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),k=Lt(U,w),k===null)throw Lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ce,Ue,Se,at,Be,A,M,H,oe,ne,re,Me,pe,xe,Re,Ve,ee,qe,R,J,fe,ae,Ee,je;function Ke(){Ce=new ZL(k),Ue=new zL(k,Ce,e),Ce.init(Ue),ae=new D4(k,Ce,Ue),Se=new P4(k,Ce,Ue),at=new qL(k),Be=new g4,A=new L4(k,Ce,Se,Be,Ue,ae,at),M=new GL(g),H=new XL(g),oe=new rR(k,Ue),Ee=new kL(k,Ce,oe,Ue),ne=new YL(k,oe,at,Ee),re=new eD(k,ne,oe,at),R=new JL(k,Ue,A),Ve=new HL(Be),Me=new m4(g,M,H,Ce,Ue,Ee,Ve),pe=new F4(g,Be),xe=new _4,Re=new T4(Ce,Ue),qe=new BL(g,M,H,Se,re,d,l),ee=new R4(g,re,Ue),je=new O4(k,at,Ue,Se),J=new VL(k,Ce,at,Ue),fe=new $L(k,Ce,at,Ue),at.programs=Me.programs,g.capabilities=Ue,g.extensions=Ce,g.properties=Be,g.renderLists=xe,g.shadowMap=ee,g.state=Se,g.info=at}Ke();const Ge=new N4(g,k);this.xr=Ge,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(O,z,!1))},this.getSize=function(w){return w.set(O,z)},this.setSize=function(w,U,j=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,z=U,n.width=Math.floor(w*q),n.height=Math.floor(U*q),j===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(O*q,z*q).floor()},this.setDrawingBufferSize=function(w,U,j){O=w,z=U,q=j,n.width=Math.floor(w*j),n.height=Math.floor(U*j),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(V)},this.setViewport=function(w,U,j,X){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,U,j,X),Se.viewport(T.copy(V).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,U,j,X){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,U,j,X),Se.scissor(W.copy(Y).multiplyScalar(q).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){Se.setScissorTest(Q=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(w=!0,U=!0,j=!0){let X=0;if(w){let G=!1;if(E!==null){const ge=E.texture.format;G=ge===Wx||ge===Gx||ge===Hx}if(G){const ge=E.texture.type,we=ge===fr||ge===Ji||ge===Sp||ge===Yr||ge===Vx||ge===zx,Le=qe.getClearColor(),Ne=qe.getClearAlpha(),We=Le.r,ke=Le.g,ze=Le.b;we?(p[0]=We,p[1]=ke,p[2]=ze,p[3]=Ne,k.clearBufferuiv(k.COLOR,0,p)):(_[0]=We,_[1]=ke,_[2]=ze,_[3]=Ne,k.clearBufferiv(k.COLOR,0,_))}else X|=k.COLOR_BUFFER_BIT}U&&(X|=k.DEPTH_BUFFER_BIT),j&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",le,!1),xe.dispose(),Re.dispose(),Be.dispose(),M.dispose(),H.dispose(),re.dispose(),Ee.dispose(),je.dispose(),Me.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",en),Ge.removeEventListener("sessionend",st),me&&(me.dispose(),me=null),tn.stop()};function ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=at.autoReset,U=ee.enabled,j=ee.autoUpdate,X=ee.needsUpdate,G=ee.type;Ke(),at.autoReset=w,ee.enabled=U,ee.autoUpdate=j,ee.needsUpdate=X,ee.type=G}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ue(w){const U=w.target;U.removeEventListener("dispose",ue),be(U)}function be(w){Te(w),Be.remove(w)}function Te(w){const U=Be.get(w).programs;U!==void 0&&(U.forEach(function(j){Me.releaseProgram(j)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,j,X,G,ge){U===null&&(U=Ae);const we=G.isMesh&&G.matrixWorld.determinant()<0,Le=gS(w,U,j,X,G);Se.setMaterial(X,we);let Ne=j.index,We=1;if(X.wireframe===!0){if(Ne=ne.getWireframeAttribute(j),Ne===void 0)return;We=2}const ke=j.drawRange,ze=j.attributes.position;let St=ke.start*We,xn=(ke.start+ke.count)*We;ge!==null&&(St=Math.max(St,ge.start*We),xn=Math.min(xn,(ge.start+ge.count)*We)),Ne!==null?(St=Math.max(St,0),xn=Math.min(xn,Ne.count)):ze!=null&&(St=Math.max(St,0),xn=Math.min(xn,ze.count));const It=xn-St;if(It<0||It===1/0)return;Ee.setup(G,X,Le,j,Ne);let hi,ht=J;if(Ne!==null&&(hi=oe.get(Ne),ht=fe,ht.setIndex(hi)),G.isMesh)X.wireframe===!0?(Se.setLineWidth(X.wireframeLinewidth*Oe()),ht.setMode(k.LINES)):ht.setMode(k.TRIANGLES);else if(G.isLine){let Xe=X.linewidth;Xe===void 0&&(Xe=1),Se.setLineWidth(Xe*Oe()),G.isLineSegments?ht.setMode(k.LINES):G.isLineLoop?ht.setMode(k.LINE_LOOP):ht.setMode(k.LINE_STRIP)}else G.isPoints?ht.setMode(k.POINTS):G.isSprite&&ht.setMode(k.TRIANGLES);if(G.isBatchedMesh)ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ht.renderInstances(St,It,G.count);else if(j.isInstancedBufferGeometry){const Xe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,gc=Math.min(j.instanceCount,Xe);ht.renderInstances(St,It,gc)}else ht.render(St,It)};function et(w,U,j){w.transparent===!0&&w.side===li&&w.forceSinglePass===!1?(w.side=vn,w.needsUpdate=!0,ja(w,U,j),w.side=gr,w.needsUpdate=!0,ja(w,U,j),w.side=li):ja(w,U,j)}this.compile=function(w,U,j=null){j===null&&(j=w),m=Re.get(j),m.init(),v.push(m),j.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),w!==j&&w.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(g._useLegacyLights);const X=new Set;return w.traverse(function(G){const ge=G.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Le=ge[we];et(Le,j,G),X.add(Le)}else et(ge,j,G),X.add(ge)}),v.pop(),m=null,X},this.compileAsync=function(w,U,j=null){const X=this.compile(w,U,j);return new Promise(G=>{function ge(){if(X.forEach(function(we){Be.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){G(w);return}setTimeout(ge,10)}Ce.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let tt=null;function Dt(w){tt&&tt(w)}function en(){tn.stop()}function st(){tn.start()}const tn=new sS;tn.setAnimationLoop(Dt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(w){tt=w,Ge.setAnimationLoop(w),w===null?tn.stop():tn.start()},Ge.addEventListener("sessionstart",en),Ge.addEventListener("sessionend",st),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(U),U=Ge.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,U,E),m=Re.get(w,v.length),m.init(),v.push(m),ye.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(ye),he=this.localClippingEnabled,K=Ve.init(this.clippingPlanes,he),y=xe.get(w,h.length),y.init(),h.push(y),ii(w,U,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(I,F),this.info.render.frame++,K===!0&&Ve.beginShadows();const j=m.state.shadowsArray;if(ee.render(j,w,U),K===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(y,w),m.setupLights(g._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let G=0,ge=X.length;G<ge;G++){const we=X[G];Dp(y,w,we,we.viewport)}}else Dp(y,w,U);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(g,w,U),Ee.resetDefaultState(),D=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function ii(w,U,j,X){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){X&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);const we=re.update(w),Le=w.material;Le.visible&&y.push(w,we,Le,j,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const we=re.update(w),Le=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),De.copy(we.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(Le)){const Ne=we.groups;for(let We=0,ke=Ne.length;We<ke;We++){const ze=Ne[We],St=Le[ze.materialIndex];St&&St.visible&&y.push(w,we,St,j,De.z,ze)}}else Le.visible&&y.push(w,we,Le,j,De.z,null)}}const ge=w.children;for(let we=0,Le=ge.length;we<Le;we++)ii(ge[we],U,j,X)}function Dp(w,U,j,X){const G=w.opaque,ge=w.transmissive,we=w.transparent;m.setupLightsView(j),K===!0&&Ve.setGlobalState(g.clippingPlanes,j),ge.length>0&&mS(G,ge,U,j),X&&Se.viewport(T.copy(X)),G.length>0&&Wa(G,U,j),ge.length>0&&Wa(ge,U,j),we.length>0&&Wa(we,U,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function mS(w,U,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const ge=Ue.isWebGL2;me===null&&(me=new vr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?La:fr,minFilter:Pa,samples:ge?4:0})),g.getDrawingBufferSize(Ie),ge?me.setSize(Ie.x,Ie.y):me.setSize(Vu(Ie.x),Vu(Ie.y));const we=g.getRenderTarget();g.setRenderTarget(me),g.getClearColor(te),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Le=g.toneMapping;g.toneMapping=cr,Wa(w,j,X),A.updateMultisampleRenderTarget(me),A.updateRenderTargetMipmap(me);let Ne=!1;for(let We=0,ke=U.length;We<ke;We++){const ze=U[We],St=ze.object,xn=ze.geometry,It=ze.material,hi=ze.group;if(It.side===li&&St.layers.test(X.layers)){const ht=It.side;It.side=vn,It.needsUpdate=!0,Ip(St,j,X,xn,It,hi),It.side=ht,It.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(me),A.updateRenderTargetMipmap(me)),g.setRenderTarget(we),g.setClearColor(te,L),g.toneMapping=Le}function Wa(w,U,j){const X=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ge=w.length;G<ge;G++){const we=w[G],Le=we.object,Ne=we.geometry,We=X===null?we.material:X,ke=we.group;Le.layers.test(j.layers)&&Ip(Le,U,j,Ne,We,ke)}}function Ip(w,U,j,X,G,ge){w.onBeforeRender(g,U,j,X,G,ge),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(g,U,j,X,w,ge),G.transparent===!0&&G.side===li&&G.forceSinglePass===!1?(G.side=vn,G.needsUpdate=!0,g.renderBufferDirect(j,U,X,G,w,ge),G.side=gr,G.needsUpdate=!0,g.renderBufferDirect(j,U,X,G,w,ge),G.side=li):g.renderBufferDirect(j,U,X,G,w,ge),w.onAfterRender(g,U,j,X,G,ge)}function ja(w,U,j){U.isScene!==!0&&(U=Ae);const X=Be.get(w),G=m.state.lights,ge=m.state.shadowsArray,we=G.state.version,Le=Me.getParameters(w,G.state,ge,U,j),Ne=Me.getProgramCacheKey(Le);let We=X.programs;X.environment=w.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||X.environment),We===void 0&&(w.addEventListener("dispose",ue),We=new Map,X.programs=We);let ke=We.get(Ne);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===we)return Np(w,Le),ke}else Le.uniforms=Me.getUniforms(w),w.onBuild(j,Le,g),w.onBeforeCompile(Le,g),ke=Me.acquireProgram(Le,Ne),We.set(Ne,ke),X.uniforms=Le.uniforms;const ze=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=Ve.uniform),Np(w,Le),X.needsLights=_S(w),X.lightsStateVersion=we,X.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function Up(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=eu.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Np(w,U){const j=Be.get(w);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function gS(w,U,j,X,G){U.isScene!==!0&&(U=Ae),A.resetTextureUnits();const ge=U.fog,we=X.isMeshStandardMaterial?U.environment:null,Le=E===null?g.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Fi,Ne=(X.isMeshStandardMaterial?H:M).get(X.envMap||we),We=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ze=!!j.morphAttributes.position,St=!!j.morphAttributes.normal,xn=!!j.morphAttributes.color;let It=cr;X.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(It=g.toneMapping);const hi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ht=hi!==void 0?hi.length:0,Xe=Be.get(X),gc=m.state.lights;if(K===!0&&(he===!0||w!==S)){const Ln=w===S&&X.id===D;Ve.setState(X,w,Ln)}let _t=!1;X.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==gc.state.version||Xe.outputColorSpace!==Le||G.isBatchedMesh&&Xe.batching===!1||!G.isBatchedMesh&&Xe.batching===!0||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||G.isInstancedMesh&&Xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xe.instancingColor===!1&&G.instanceColor!==null||Xe.envMap!==Ne||X.fog===!0&&Xe.fog!==ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ve.numPlanes||Xe.numIntersection!==Ve.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==ke||Xe.morphTargets!==ze||Xe.morphNormals!==St||Xe.morphColors!==xn||Xe.toneMapping!==It||Ue.isWebGL2===!0&&Xe.morphTargetsCount!==ht)&&(_t=!0):(_t=!0,Xe.__version=X.version);let Tr=Xe.currentProgram;_t===!0&&(Tr=ja(X,U,G));let Fp=!1,wo=!1,vc=!1;const Wt=Tr.getUniforms(),wr=Xe.uniforms;if(Se.useProgram(Tr.program)&&(Fp=!0,wo=!0,vc=!0),X.id!==D&&(D=X.id,wo=!0),Fp||S!==w){Wt.setValue(k,"projectionMatrix",w.projectionMatrix),Wt.setValue(k,"viewMatrix",w.matrixWorldInverse);const Ln=Wt.map.cameraPosition;Ln!==void 0&&Ln.setValue(k,De.setFromMatrixPosition(w.matrixWorld)),Ue.logarithmicDepthBuffer&&Wt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Wt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,wo=!0,vc=!0)}if(G.isSkinnedMesh){Wt.setOptional(k,G,"bindMatrix"),Wt.setOptional(k,G,"bindMatrixInverse");const Ln=G.skeleton;Ln&&(Ue.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),Wt.setValue(k,"boneTexture",Ln.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Wt.setOptional(k,G,"batchingTexture"),Wt.setValue(k,"batchingTexture",G._matricesTexture,A));const _c=j.morphAttributes;if((_c.position!==void 0||_c.normal!==void 0||_c.color!==void 0&&Ue.isWebGL2===!0)&&R.update(G,j,Tr),(wo||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,Wt.setValue(k,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(wr.envMap.value=Ne,wr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),wo&&(Wt.setValue(k,"toneMappingExposure",g.toneMappingExposure),Xe.needsLights&&vS(wr,vc),ge&&X.fog===!0&&pe.refreshFogUniforms(wr,ge),pe.refreshMaterialUniforms(wr,X,q,z,me),eu.upload(k,Up(Xe),wr,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(eu.upload(k,Up(Xe),wr,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Wt.setValue(k,"center",G.center),Wt.setValue(k,"modelViewMatrix",G.modelViewMatrix),Wt.setValue(k,"normalMatrix",G.normalMatrix),Wt.setValue(k,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ln=X.uniformsGroups;for(let yc=0,yS=Ln.length;yc<yS;yc++)if(Ue.isWebGL2){const Op=Ln[yc];je.update(Op,Tr),je.bind(Op,Tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tr}function vS(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function _S(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,U,j){Be.get(w.texture).__webglTexture=U,Be.get(w.depthTexture).__webglTexture=j;const X=Be.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const j=Be.get(w);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,j=0){E=w,b=U,C=j;let X=!0,G=null,ge=!1,we=!1;if(w){const Ne=Be.get(w);Ne.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):Ne.__webglFramebuffer===void 0?A.setupRenderTarget(w):Ne.__hasExternalTextures&&A.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const ke=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?G=ke[U][j]:G=ke[U],ge=!0):Ue.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?G=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?G=ke[j]:G=ke,T.copy(w.viewport),W.copy(w.scissor),$=w.scissorTest}else T.copy(V).multiplyScalar(q).floor(),W.copy(Y).multiplyScalar(q).floor(),$=Q;if(Se.bindFramebuffer(k.FRAMEBUFFER,G)&&Ue.drawBuffers&&X&&Se.drawBuffers(w,G),Se.viewport(T),Se.scissor(W),Se.setScissorTest($),ge){const Ne=Be.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ne.__webglTexture,j)}else if(we){const Ne=Be.get(w.texture),We=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.__webglTexture,j||0,We)}D=-1},this.readRenderTargetPixels=function(w,U,j,X,G,ge,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){Se.bindFramebuffer(k.FRAMEBUFFER,Le);try{const Ne=w.texture,We=Ne.format,ke=Ne.type;if(We!==On&&ae.convert(We)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=ke===La&&(Ce.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(ke!==fr&&ae.convert(ke)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===er&&(Ue.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-X&&j>=0&&j<=w.height-G&&k.readPixels(U,j,X,G,ae.convert(We),ae.convert(ke),ge)}finally{const Ne=E!==null?Be.get(E).__webglFramebuffer:null;Se.bindFramebuffer(k.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(w,U,j=0){const X=Math.pow(2,-j),G=Math.floor(U.image.width*X),ge=Math.floor(U.image.height*X);A.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,w.x,w.y,G,ge),Se.unbindTexture()},this.copyTextureToTexture=function(w,U,j,X=0){const G=U.image.width,ge=U.image.height,we=ae.convert(j.format),Le=ae.convert(j.type);A.setTexture2D(j,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,w.x,w.y,G,ge,we,Le,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,we,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,w.x,w.y,we,Le,U.image),X===0&&j.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(w,U,j,X,G=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Le=w.max.z-w.min.z+1,Ne=ae.convert(X.format),We=ae.convert(X.type);let ke;if(X.isData3DTexture)A.setTexture3D(X,0),ke=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),ke=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const ze=k.getParameter(k.UNPACK_ROW_LENGTH),St=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xn=k.getParameter(k.UNPACK_SKIP_PIXELS),It=k.getParameter(k.UNPACK_SKIP_ROWS),hi=k.getParameter(k.UNPACK_SKIP_IMAGES),ht=j.isCompressedTexture?j.mipmaps[G]:j.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ht.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?k.texSubImage3D(ke,G,U.x,U.y,U.z,ge,we,Le,Ne,We,ht.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ke,G,U.x,U.y,U.z,ge,we,Le,Ne,ht.data)):k.texSubImage3D(ke,G,U.x,U.y,U.z,ge,we,Le,Ne,We,ht),k.pixelStorei(k.UNPACK_ROW_LENGTH,ze),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,St),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xn),k.pixelStorei(k.UNPACK_SKIP_ROWS,It),k.pixelStorei(k.UNPACK_SKIP_IMAGES,hi),G===0&&X.generateMipmaps&&k.generateMipmap(ke),Se.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){b=0,C=0,E=null,Se.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Mp?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===hc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?qr:Xx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qr?Ft:Fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class B4 extends dS{}B4.prototype.isWebGL1Renderer=!0;class Rp{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=n,this.far=i}clone(){return new Rp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fv extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ys extends ti{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new xt,Ov=new xt,Fl=[],Bv=new as,k4=new xt,Vo=new hn,zo=new Ha;class V4 extends hn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,k4)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new as),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,bs),Bv.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(Bv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ha),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,bs),zo.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(zo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(i),e.ray.intersectsSphere(zo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,bs),Ov.multiplyMatrices(i,bs),Vo.matrixWorld=Ov,Vo.raycast(e,Fl);for(let o=0,a=Fl.length;o<a;o++){const l=Fl[o];l.instanceId=s,l.object=this,n.push(l)}Fl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Uf extends _n{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pp extends di{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],u=new N,c=new Fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=n;f++,d+=3){const p=i+f/n*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[d]/e+1)/2,c.y=(o[d+1]/e+1)/2,l.push(c.x,c.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new zn(o,3)),this.setAttribute("normal",new zn(a,3)),this.setAttribute("uv",new zn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class z4 extends Eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zx,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lp extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Nf=new xt,kv=new N,Vv=new N;class hS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ap,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;kv.setFromMatrixPosition(e.matrixWorld),n.position.copy(kv),Vv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vv),n.updateMatrixWorld(),Nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class H4 extends hS{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=go*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class G4 extends Lp{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new H4}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class W4 extends hS{constructor(){super(new Cp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j4 extends Lp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new W4}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class X4 extends Lp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Z4 extends di{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Y4{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=zv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function zv(){return(typeof performance>"u"?Date:performance).now()}class $4{constructor(e,n,i=0,r=1/0){this.ray=new Tp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return eh(e,this,i,n),i.sort(Hv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)eh(e[r],this,i,n);return i.sort(Hv),i}}function Hv(t,e){return t.distance-e.distance}function eh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)eh(r[s],e,n,!0)}}class Gv{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);const Wv={type:"change"},Ff={type:"start"},jv={type:"end"},Ol=new Tp,Xv=new Yi,q4=Math.cos(70*Qd.DEG2RAD);class K4 extends os{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",re),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",re),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wv),i.update(),s=r.NONE},this.update=function(){const R=new N,J=new ns().setFromUnitVectors(e.up,new N(0,1,0)),fe=J.clone().invert(),ae=new N,Ee=new ns,je=new N,Ke=2*Math.PI;return function(ce=null){const P=i.object.position;R.copy(P).sub(i.target),R.applyQuaternion(J),a.setFromVector3(R),i.autoRotate&&s===r.NONE&&W(S(ce)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let le=i.minAzimuthAngle,ue=i.maxAzimuthAngle;isFinite(le)&&isFinite(ue)&&(le<-Math.PI?le+=Ke:le>Math.PI&&(le-=Ke),ue<-Math.PI?ue+=Ke:ue>Math.PI&&(ue-=Ke),le<=ue?a.theta=Math.max(le,Math.min(ue,a.theta)):a.theta=a.theta>(le+ue)/2?Math.max(le,a.theta):Math.min(ue,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?a.radius=F(a.radius):a.radius=F(a.radius*u),R.setFromSpherical(a),R.applyQuaternion(fe),P.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let be=!1;if(i.zoomToCursor&&C){let Te=null;if(i.object.isPerspectiveCamera){const et=R.length();Te=F(et*u);const tt=et-Te;i.object.position.addScaledVector(x,tt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const et=new N(b.x,b.y,0);et.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),be=!0;const tt=new N(b.x,b.y,0);tt.unproject(i.object),i.object.position.sub(tt).add(et),i.object.updateMatrixWorld(),Te=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Te!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Te).add(i.object.position):(Ol.origin.copy(i.object.position),Ol.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ol.direction))<q4?e.lookAt(i.target):(Xv.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ol.intersectPlane(Xv,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),be=!0);return u=1,C=!1,be||ae.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o||je.distanceToSquared(i.target)>0?(i.dispatchEvent(Wv),ae.copy(i.object.position),Ee.copy(i.object.quaternion),je.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",xe),i.domElement.removeEventListener("pointerdown",Be),i.domElement.removeEventListener("pointercancel",M),i.domElement.removeEventListener("wheel",ne),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",M),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",re),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Gv,l=new Gv;let u=1;const c=new N,f=new Fe,d=new Fe,p=new Fe,_=new Fe,y=new Fe,m=new Fe,h=new Fe,v=new Fe,g=new Fe,x=new N,b=new Fe;let C=!1;const E=[],D={};function S(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function T(R){const J=Math.abs(R)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*J)}function W(R){l.theta-=R}function $(R){l.phi-=R}const te=function(){const R=new N;return function(fe,ae){R.setFromMatrixColumn(ae,0),R.multiplyScalar(-fe),c.add(R)}}(),L=function(){const R=new N;return function(fe,ae){i.screenSpacePanning===!0?R.setFromMatrixColumn(ae,1):(R.setFromMatrixColumn(ae,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(fe),c.add(R)}}(),O=function(){const R=new N;return function(fe,ae){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const je=i.object.position;R.copy(je).sub(i.target);let Ke=R.length();Ke*=Math.tan(i.object.fov/2*Math.PI/180),te(2*fe*Ke/Ee.clientHeight,i.object.matrix),L(2*ae*Ke/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(te(fe*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),L(ae*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(R,J){if(!i.zoomToCursor)return;C=!0;const fe=i.domElement.getBoundingClientRect(),ae=R-fe.left,Ee=J-fe.top,je=fe.width,Ke=fe.height;b.x=ae/je*2-1,b.y=-(Ee/Ke)*2+1,x.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function F(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function V(R){f.set(R.clientX,R.clientY)}function Y(R){I(R.clientX,R.clientX),h.set(R.clientX,R.clientY)}function Q(R){_.set(R.clientX,R.clientY)}function Z(R){d.set(R.clientX,R.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const J=i.domElement;W(2*Math.PI*p.x/J.clientHeight),$(2*Math.PI*p.y/J.clientHeight),f.copy(d),i.update()}function K(R){v.set(R.clientX,R.clientY),g.subVectors(v,h),g.y>0?z(T(g.y)):g.y<0&&q(T(g.y)),h.copy(v),i.update()}function he(R){y.set(R.clientX,R.clientY),m.subVectors(y,_).multiplyScalar(i.panSpeed),O(m.x,m.y),_.copy(y),i.update()}function me(R){I(R.clientX,R.clientY),R.deltaY<0?q(T(R.deltaY)):R.deltaY>0&&z(T(R.deltaY)),i.update()}function ye(R){let J=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),J=!0;break}J&&(R.preventDefault(),i.update())}function Ie(R){if(E.length===1)f.set(R.pageX,R.pageY);else{const J=qe(R),fe=.5*(R.pageX+J.x),ae=.5*(R.pageY+J.y);f.set(fe,ae)}}function De(R){if(E.length===1)_.set(R.pageX,R.pageY);else{const J=qe(R),fe=.5*(R.pageX+J.x),ae=.5*(R.pageY+J.y);_.set(fe,ae)}}function Ae(R){const J=qe(R),fe=R.pageX-J.x,ae=R.pageY-J.y,Ee=Math.sqrt(fe*fe+ae*ae);h.set(0,Ee)}function Oe(R){i.enableZoom&&Ae(R),i.enablePan&&De(R)}function k(R){i.enableZoom&&Ae(R),i.enableRotate&&Ie(R)}function Lt(R){if(E.length==1)d.set(R.pageX,R.pageY);else{const fe=qe(R),ae=.5*(R.pageX+fe.x),Ee=.5*(R.pageY+fe.y);d.set(ae,Ee)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const J=i.domElement;W(2*Math.PI*p.x/J.clientHeight),$(2*Math.PI*p.y/J.clientHeight),f.copy(d)}function Ce(R){if(E.length===1)y.set(R.pageX,R.pageY);else{const J=qe(R),fe=.5*(R.pageX+J.x),ae=.5*(R.pageY+J.y);y.set(fe,ae)}m.subVectors(y,_).multiplyScalar(i.panSpeed),O(m.x,m.y),_.copy(y)}function Ue(R){const J=qe(R),fe=R.pageX-J.x,ae=R.pageY-J.y,Ee=Math.sqrt(fe*fe+ae*ae);v.set(0,Ee),g.set(0,Math.pow(v.y/h.y,i.zoomSpeed)),z(g.y),h.copy(v);const je=(R.pageX+J.x)*.5,Ke=(R.pageY+J.y)*.5;I(je,Ke)}function Se(R){i.enableZoom&&Ue(R),i.enablePan&&Ce(R)}function at(R){i.enableZoom&&Ue(R),i.enableRotate&&Lt(R)}function Be(R){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",A),i.domElement.addEventListener("pointerup",M)),Re(R),R.pointerType==="touch"?Me(R):H(R))}function A(R){i.enabled!==!1&&(R.pointerType==="touch"?pe(R):oe(R))}function M(R){Ve(R),E.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",M)),i.dispatchEvent(jv),s=r.NONE}function H(R){let J;switch(R.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case cs.DOLLY:if(i.enableZoom===!1)return;Y(R),s=r.DOLLY;break;case cs.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;Q(R),s=r.PAN}else{if(i.enableRotate===!1)return;V(R),s=r.ROTATE}break;case cs.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;V(R),s=r.ROTATE}else{if(i.enablePan===!1)return;Q(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ff)}function oe(R){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Z(R);break;case r.DOLLY:if(i.enableZoom===!1)return;K(R);break;case r.PAN:if(i.enablePan===!1)return;he(R);break}}function ne(R){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(R.preventDefault(),i.dispatchEvent(Ff),me(R),i.dispatchEvent(jv))}function re(R){i.enabled===!1||i.enablePan===!1||ye(R)}function Me(R){switch(ee(R),E.length){case 1:switch(i.touches.ONE){case fs.ROTATE:if(i.enableRotate===!1)return;Ie(R),s=r.TOUCH_ROTATE;break;case fs.PAN:if(i.enablePan===!1)return;De(R),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case fs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Oe(R),s=r.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;k(R),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ff)}function pe(R){switch(ee(R),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Lt(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ce(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Se(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;at(R),i.update();break;default:s=r.NONE}}function xe(R){i.enabled!==!1&&R.preventDefault()}function Re(R){E.push(R.pointerId)}function Ve(R){delete D[R.pointerId];for(let J=0;J<E.length;J++)if(E[J]==R.pointerId){E.splice(J,1);return}}function ee(R){let J=D[R.pointerId];J===void 0&&(J=new Fe,D[R.pointerId]=J),J.set(R.pageX,R.pageY)}function qe(R){const J=R.pointerId===E[0]?E[1]:E[0];return D[J]}i.domElement.addEventListener("contextmenu",xe),i.domElement.addEventListener("pointerdown",Be),i.domElement.addEventListener("pointercancel",M),i.domElement.addEventListener("wheel",ne,{passive:!1}),this.update()}}const Q4=`
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
`,J4=`
  uniform float uTime;
  uniform float uWindSpeed;
  uniform float uWindStrength;
  uniform float uGrowth;
  uniform sampler2D uTrailTexture;

  attribute vec3 aOffset;
  attribute float aScale;
  attribute float aRotation;
  attribute float aSeed;
  
  varying vec2 vUv;
  varying float vHeight;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying float vSeed;
  varying float vDisplacement; // For debug/color

  ${Q4}

  void main() {
    vUv = uv;
    vHeight = aScale;
    vSeed = aSeed;
    
    // 1. Initial Geometry Transform
    vec3 transformed = position;
    transformed.y *= aScale * uGrowth; // Height scale * growth
    
    // 2. Rotation
    float c = cos(aRotation);
    float s = sin(aRotation);
    mat3 rotateY = mat3(c, 0, s, 0, 1, 0, -s, 0, c);
    transformed = rotateY * transformed;
    
    // Calculate world position for noise/trail *before* displacement
    vec3 worldPos = transformed + aOffset;

    // 3. Trail Interaction (Physical Displacement)
    // Map world XZ (-25 to 25) to UV (0 to 1)
    vec2 trailUV = (worldPos.xz / 50.0) + 0.5; 
    vec4 trailSample = texture2D(uTrailTexture, trailUV);
    float trailForce = trailSample.r; // Use Red channel for intensity
    
    vDisplacement = trailForce;

    // Apply trail squash: Push vertices down and out
    // Only affects top of blade more than bottom
    float pushDown = trailForce * 0.8 * uv.y; 
    transformed.y *= (1.0 - pushDown);
    // Slight horizontal push can be added if we had direction, 
    // for now we just flatten
    
    // 4. Wind Animation
    // Double octave noise for organic feel
    float noise1 = snoise(vec2(aOffset.x * 0.1 + uTime * uWindSpeed, aOffset.z * 0.1 + uTime * uWindSpeed * 0.8));
    float noise2 = snoise(vec2(aOffset.x * 0.5 + uTime * uWindSpeed * 2.0, aOffset.z * 0.5));
    float combinedWind = (noise1 * 0.7 + noise2 * 0.3) * uWindStrength;
    
    // Height mask: roots don't move, tips move a lot
    float windFactor = pow(uv.y, 2.0) * combinedWind;
    
    transformed.x += windFactor;
    transformed.z += windFactor * 0.5;

    // 5. Final Position
    vec3 finalPos = transformed + aOffset;
    vWorldPosition = finalPos;

    // Normal recalculation approximation for bent geometry
    // Rotate normal same as position
    vNormal = rotateY * normal;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
  }
`,eI=`
  uniform vec3 uBaseColor;
  uniform vec3 uTipColor;
  uniform sampler2D uMap;
  uniform vec3 uSunPosition;
  uniform vec3 uCameraPosition;
  uniform float uGrowth;

  varying vec2 vUv;
  varying float vHeight;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying float vSeed;
  varying float vDisplacement;

  void main() {
    if (uGrowth < 0.01) discard;
    vec4 texColor = texture2D(uMap, vUv);

    // Alpha Test
    if (texColor.a < 0.4) discard;

    // 1. Color Variation
    // Mix fresh green with a bit of "dry" yellow based on seed
    vec3 dryColor = vec3(0.7, 0.6, 0.3);
    vec3 localBase = uBaseColor;
    
    // 30% of blades are slightly dryer
    if (vSeed > 0.7) {
        localBase = mix(uBaseColor, dryColor, (vSeed - 0.7) * 1.5);
    }
    
    // Root decay (darker bottom)
    vec3 rootColor = vec3(0.05, 0.05, 0.02);
    vec3 baseMix = mix(rootColor, localBase, smoothstep(0.0, 0.3, vUv.y));
    
    vec3 gradientColor = mix(baseMix, uTipColor, vUv.y);
    vec3 albedo = gradientColor * texColor.rgb;

    // 2. Lighting Setup
    vec3 viewDir = normalize(uCameraPosition - vWorldPosition);
    vec3 normal = normalize(vNormal);
    // Double sided normal correction
    if (!gl_FrontFacing) normal = -normal;
    vec3 lightDir = normalize(uSunPosition);

    // 3. Wrapped Diffuse (Soft lighting)
    float NdotL = dot(normal, lightDir);
    float wrap = 0.5;
    float diffuse = max((NdotL + wrap) / (1.0 + wrap), 0.0);
    
    // 4. Subsurface Scattering (Translucency)
    // Light passing through the blade from behind
    float backLight = max(0.0, dot(viewDir, -lightDir));
    // Stronger at tips, thinner geometry
    float sss = pow(backLight, 3.0) * (0.2 + 0.8 * vUv.y);
    vec3 sssColor = uTipColor * sss * 1.5;

    // 5. Specular (Sheen & Glint)
    vec3 H = normalize(lightDir + viewDir);
    float NdotH = max(0.0, dot(normal, H));
    
    // Soft broad sheen
    float sheen = pow(NdotH, 4.0) * 0.2; 
    
    // Sharp glint (sun reflection on waxy surface)
    float glint = pow(NdotH, 32.0) * 0.5;

    // Trail wetness/flattening increases specular
    float specPower = mix(1.0, 2.0, vDisplacement);

    // 6. Final Composition
    vec3 lighting = albedo * (diffuse + 0.2) + sssColor + (sheen + glint) * specPower;
    
    // Shadows (Simple multiplier assumption as we don't have shadow coord passed yet in custom shader without includes)
    // For high performance custom shader, we often skip complex shadow map sampling or use Three's includes.
    // Let's approximate self-occlusion with height
    float ao = smoothstep(0.0, 0.4, vUv.y);
    lighting *= (0.3 + 0.7 * ao);

    gl_FragColor = vec4(lighting, 1.0);
    
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,wheatVertShader=`
  uniform float uTime;
  uniform float uWindSpeed;
  uniform float uWindStrength;
  uniform float uGrowth;
  uniform sampler2D uTrailTexture;

  attribute vec3 aOffset;
  attribute float aScale;
  attribute float aRotation;
  attribute float aSeed;

  varying vec2 vUv;
  varying float vHeight;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying float vSeed;
  varying float vDisplacement;

  ${Q4}

  void main() {
    vUv = uv;
    vHeight = aScale;
    vSeed = aSeed;

    vec3 transformed = position;
    transformed.y *= aScale * uGrowth;

    float c = cos(aRotation);
    float s = sin(aRotation);
    mat3 rotateY = mat3(c, 0, s, 0, 1, 0, -s, 0, c);
    transformed = rotateY * transformed;

    vec3 worldPos = transformed + aOffset;

    vec2 trailUV = (worldPos.xz / 50.0) + 0.5;
    vec4 trailSample = texture2D(uTrailTexture, trailUV);
    float trailForce = trailSample.r;
    vDisplacement = trailForce;

    float pushDown = trailForce * 0.8 * uv.y;
    transformed.y *= (1.0 - pushDown);

    // Slower, heavier sway for wheat
    float noise1 = snoise(vec2(aOffset.x * 0.08 + uTime * uWindSpeed * 0.7, aOffset.z * 0.08 + uTime * uWindSpeed * 0.5));
    float noise2 = snoise(vec2(aOffset.x * 0.3 + uTime * uWindSpeed * 1.2, aOffset.z * 0.3));
    float combinedWind = (noise1 * 0.7 + noise2 * 0.3) * uWindStrength;

    // Heavy top-weighted bend for wheat
    float windFactor = pow(uv.y, 2.5) * combinedWind * 1.3;
    transformed.x += windFactor;
    transformed.z += windFactor * 0.4;

    vec3 finalPos = transformed + aOffset;
    vWorldPosition = finalPos;
    vNormal = rotateY * normal;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPos, 1.0);
  }
`,wheatFragShader=`
  uniform vec3 uBaseColor;
  uniform vec3 uTipColor;
  uniform sampler2D uMap;
  uniform vec3 uSunPosition;
  uniform vec3 uCameraPosition;
  uniform float uGrowth;

  varying vec2 vUv;
  varying float vHeight;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying float vSeed;
  varying float vDisplacement;

  void main() {
    if (uGrowth < 0.01) discard;
    vec4 texColor = texture2D(uMap, vUv);
    if (texColor.a < 0.4) discard;

    // Wheat color palette — golden stalk to cream seed head
    vec3 stalkColor = uBaseColor;
    vec3 dryStalk = vec3(0.65, 0.55, 0.30);

    // Variation per blade
    if (vSeed > 0.6) {
        stalkColor = mix(uBaseColor, dryStalk, (vSeed - 0.6) * 1.0);
    }

    vec3 rootColor = vec3(0.25, 0.20, 0.08);
    vec3 baseMix = mix(rootColor, stalkColor, smoothstep(0.0, 0.25, vUv.y));

    // Seed head brightening at tips
    vec3 seedHead = vec3(0.95, 0.88, 0.65);
    float headFactor = smoothstep(0.75, 0.95, vUv.y);
    vec3 gradientColor = mix(baseMix, uTipColor, vUv.y);
    gradientColor = mix(gradientColor, seedHead, headFactor * 0.6);

    vec3 albedo = gradientColor * texColor.rgb;

    vec3 viewDir = normalize(uCameraPosition - vWorldPosition);
    vec3 normal = normalize(vNormal);
    if (!gl_FrontFacing) normal = -normal;
    vec3 lightDir = normalize(uSunPosition);

    float NdotL = dot(normal, lightDir);
    float wrap = 0.5;
    float diffuse = max((NdotL + wrap) / (1.0 + wrap), 0.0);

    // SSS
    float backLight = max(0.0, dot(viewDir, -lightDir));
    float sss = pow(backLight, 4.0) * (0.15 + 0.6 * vUv.y);
    vec3 sssColor = vec3(0.85, 0.7, 0.3) * sss * 1.2;

    // Sharper specular for glossy seed heads
    vec3 H = normalize(lightDir + viewDir);
    float NdotH = max(0.0, dot(normal, H));
    float sheen = pow(NdotH, 6.0) * 0.25;
    float glint = pow(NdotH, 48.0) * 0.6;

    float specPower = mix(1.0, 2.0, vDisplacement);

    vec3 lighting = albedo * (diffuse + 0.2) + sssColor + (sheen + glint) * specPower;

    float ao = smoothstep(0.0, 0.4, vUv.y);
    lighting *= (0.3 + 0.7 * ao);

    float alpha = smoothstep(0.0, 0.15, uGrowth);
    gl_FragColor = vec4(lighting, alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Bl=(t,e)=>Math.random()*(e-t)+t;class tI{constructor(e,n){nt(this,"container");nt(this,"scene");nt(this,"camera");nt(this,"renderer");nt(this,"controls");nt(this,"clock");nt(this,"sunLight");nt(this,"rimLight");nt(this,"grassMesh",null);nt(this,"grassMaterial",null);nt(this,"wheatMesh",null);nt(this,"wheatMaterial",null);nt(this,"wheatTexture");nt(this,"mountainGroup",null);nt(this,"earthMesh",null);nt(this,"grassGrowth",1);nt(this,"wheatGrowth",0);nt(this,"mountainGrowth",0);nt(this,"earthGrowth",0);nt(this,"targetMode","grass");nt(this,"bladeTexture");nt(this,"maxInstances",2.9e5);nt(this,"offsets");nt(this,"scales");nt(this,"rotations");nt(this,"seeds");nt(this,"trailScene");nt(this,"trailCamera");nt(this,"trailTarget");nt(this,"trailBrush");nt(this,"raycaster");nt(this,"pointer");nt(this,"groundPlane");nt(this,"frameId",null);nt(this,"resizeObserver");nt(this,"onPointerMove",e=>{this.pointer.x=e.clientX/window.innerWidth*2-1,this.pointer.y=-(e.clientY/window.innerHeight)*2+1});nt(this,"onResize",()=>{if(!this.container)return;const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)});nt(this,"animate",()=>{this.frameId=requestAnimationFrame(this.animate);const e=this.clock.getElapsedTime();this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObject(this.groundPlane);if(n.length>0){const i=n[0].point;this.trailBrush.position.set(i.x,.1,i.z),this.trailBrush.visible=!0}else this.trailBrush.visible=!1;this.renderer.setRenderTarget(this.trailTarget),this.renderer.render(this.trailScene,this.trailCamera),this.renderer.setRenderTarget(null);const dt=Math.min(e-(this._lastTime||0),0.05)||0.016;this._lastTime=e;const spd=0.55;const _allGone=(a,b)=>a<0.01&&b<0.01;if(this.targetMode==="earth"){this.grassGrowth=Math.max(0,this.grassGrowth-dt*spd);this.wheatGrowth=Math.max(0,this.wheatGrowth-dt*spd);this.mountainGrowth=Math.max(0,this.mountainGrowth-dt*spd);if(_allGone(this.grassGrowth,this.wheatGrowth)&&this.mountainGrowth<0.01){if(!this._delayStartTime)this._delayStartTime=e;if(e-this._delayStartTime>=1)this.earthGrowth=Math.min(1,this.earthGrowth+dt*spd*0.7)}}else if(this.targetMode==="wheat"){this.grassGrowth=Math.max(0,this.grassGrowth-dt*spd);this.mountainGrowth=Math.max(0,this.mountainGrowth-dt*spd);this.earthGrowth=Math.max(0,this.earthGrowth-dt*spd);if(_allGone(this.grassGrowth,this.mountainGrowth)&&this.earthGrowth<0.01){if(!this._delayStartTime)this._delayStartTime=e;if(e-this._delayStartTime>=1)this.wheatGrowth=Math.min(1,this.wheatGrowth+dt*spd)}}else if(this.targetMode==="mountain"){this.grassGrowth=Math.max(0,this.grassGrowth-dt*spd);this.wheatGrowth=Math.max(0,this.wheatGrowth-dt*spd);this.earthGrowth=Math.max(0,this.earthGrowth-dt*spd);if(_allGone(this.grassGrowth,this.wheatGrowth)&&this.earthGrowth<0.01){if(!this._delayStartTime)this._delayStartTime=e;if(e-this._delayStartTime>=1)this.mountainGrowth=Math.min(1,this.mountainGrowth+dt*spd)}}else{this.wheatGrowth=Math.max(0,this.wheatGrowth-dt*spd);this.mountainGrowth=Math.max(0,this.mountainGrowth-dt*spd);this.earthGrowth=Math.max(0,this.earthGrowth-dt*spd);if(_allGone(this.wheatGrowth,this.mountainGrowth)&&this.earthGrowth<0.01){if(!this._delayStartTime)this._delayStartTime=e;if(e-this._delayStartTime>=1)this.grassGrowth=Math.min(1,this.grassGrowth+dt*spd)}}if(this.grassMaterial){this.grassMaterial.uniforms.uTime.value=e;this.grassMaterial.uniforms.uGrowth.value=this.grassGrowth;this.grassMaterial.uniforms.uCameraPosition.value.copy(this.camera.position)}if(this.wheatMaterial){this.wheatMaterial.uniforms.uTime.value=e;this.wheatMaterial.uniforms.uGrowth.value=this.wheatGrowth;this.wheatMaterial.uniforms.uCameraPosition.value.copy(this.camera.position)}if(this.grassMesh)this.grassMesh.visible=this.grassGrowth>0.001;if(this.wheatMesh)this.wheatMesh.visible=this.wheatGrowth>0.001;if(this.mountainGroup){const mScale=this.mountainGrowth;this.mountainGroup.scale.set(mScale,mScale*mScale,mScale);this.mountainGroup.visible=this.mountainGrowth>0.001;this.mountainGroup.position.y=-0.05+(mScale*0.05)}if(this.earthMesh){const eScale=this.earthGrowth;this.earthMesh.scale.set(eScale,eScale,eScale);this.earthMesh.visible=this.earthGrowth>0.001;if(this.earthGrowth>0.001)this.earthMesh.rotation.y+=dt*0.3}if(this.groundPlane&&this.groundPlane.material){const gm=this.groundPlane.material;if(!this._defaultGroundColor)this._defaultGroundColor=gm.color.clone();const t2=this.mountainGrowth;gm.color.copy(this._defaultGroundColor).lerp(new Qe("#A0522D"),t2);if(this.earthGrowth>0.01){this.groundPlane.visible=!1}else{this.groundPlane.visible=!0}}this.controls.update(),this.renderer.clear(),this.renderer.render(this.scene,this.camera)});this.container=e,this.initAttributes(),this.scene=new Fv,this.scene.background=new Qe("#ffffff"),this.scene.fog=new Rp("#ffffff",32,120),this.camera=new Tn(45,e.clientWidth/e.clientHeight,.1,100),this.camera.position.set(1.46,3.14,26.60),this.renderer=new dS({antialias:!0,stencil:!1,depth:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nx,this.renderer.toneMapping=Ox,this.renderer.toneMappingExposure=1,this.renderer.autoClear=!1,this.renderer.domElement.addEventListener("webglcontextlost",l=>{l.preventDefault(),console.warn("WebGL Context Lost - Attempting to restore...")}),e.appendChild(this.renderer.domElement),this.initTrailSystem(),this.controls=new K4(this.camera,this.renderer.domElement),this.controls.enabled=!1,this.controls.target.set(0,6,0);const i=new X4(16777215,.15);this.scene.add(i),this.sunLight=new j4(16777215,2),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=50,this.sunLight.shadow.bias=-1e-4;const r=100;this.sunLight.shadow.camera.left=-r,this.sunLight.shadow.camera.right=r,this.sunLight.shadow.camera.top=r,this.sunLight.shadow.camera.bottom=-r,this.scene.add(this.sunLight),this.rimLight=new G4(16768426,5),this.rimLight.position.set(0,8,-15),this.rimLight.penumbra=.5,this.scene.add(this.rimLight);const s=this.generateGroundTexture(),o=new Pp(180,64),a=new z4({map:s,color:"#cccccc",roughness:.9,metalness:.1});this.groundPlane=new hn(o,a),this.groundPlane.rotation.x=-Math.PI/2,this.groundPlane.position.y=-.05,this.groundPlane.receiveShadow=!0,this.scene.add(this.groundPlane),this.clock=new Y4,this.bladeTexture=this.generateBladeTexture(),this.buildGrass(n),this.buildWheat(n),this.buildMountain(),this.buildEarth(),this.updateSun(n),this.raycaster=new $4,this.pointer=new Fe(999,999),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(e),window.addEventListener("pointermove",this.onPointerMove),this.animate()}initTrailSystem(){this.trailTarget=new vr(512,512,{minFilter:fn,magFilter:fn,format:On}),this.trailScene=new Fv,this.trailCamera=new Cp(-100,100,100,-100,.1,100),this.trailCamera.position.y=10,this.trailCamera.lookAt(0,0,0);const e=new Da(200,200),n=new Hu({color:0,transparent:!0,opacity:.04}),i=new hn(e,n);i.rotation.x=-Math.PI/2,i.position.y=-.1,this.trailScene.add(i);const r=new Da(4,4),s=document.createElement("canvas");s.width=64,s.height=64;const o=s.getContext("2d");if(o){const u=o.createRadialGradient(32,32,0,32,32,32);u.addColorStop(0,"white"),u.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=u,o.fillRect(0,0,64,64)}const a=new Uf(s),l=new Hu({map:a,transparent:!0,opacity:1,blending:Wd});this.trailBrush=new hn(r,l),this.trailBrush.rotation.x=-Math.PI/2,this.trailScene.add(this.trailBrush)}initAttributes(){this.offsets=new Float32Array(this.maxInstances*3),this.scales=new Float32Array(this.maxInstances),this.rotations=new Float32Array(this.maxInstances),this.seeds=new Float32Array(this.maxInstances);for(let n=0;n<this.maxInstances;n++)this.offsets[n*3]=Bl(-70,70),this.offsets[n*3+1]=0,this.offsets[n*3+2]=Bl(-70,32),this.scales[n]=Bl(.7,1.3),this.rotations[n]=Bl(0,Math.PI*2),this.seeds[n]=Math.random()}generateBladeTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");if(n){n.fillStyle="#000000",n.fillRect(0,0,512,512),n.beginPath(),n.moveTo(256,512),n.lineTo(0,512),n.bezierCurveTo(0,200,256,0,256,0),n.bezierCurveTo(256,0,512,200,512,512),n.lineTo(256,512);const r=n.createLinearGradient(0,512,0,0);r.addColorStop(0,"#ffffff"),r.addColorStop(1,"#cccccc"),n.fillStyle=r,n.fill(),n.globalCompositeOperation="multiply",n.strokeStyle="#aaaaaa",n.lineWidth=4;for(let s=0;s<12;s++){const o=50+Math.random()*412;n.beginPath(),n.moveTo(o,512),n.quadraticCurveTo(256,100,256,0),n.stroke()}}return new Uf(e)}generateGroundTexture(){const n=document.createElement("canvas");n.width=1024,n.height=1024;const i=n.getContext("2d");if(i){i.fillStyle="#e8e0d4",i.fillRect(0,0,1024,1024);for(let l=0;l<25;l++){const u=Math.random()*1024,c=Math.random()*1024,f=100+Math.random()*300,d=.05+Math.random()*.08,p=i.createRadialGradient(u,c,0,u,c,f);Math.random()>.5?p.addColorStop(0,`rgba(200, 180, 150, ${d})`):p.addColorStop(0,`rgba(10, 5, 0, ${d})`),p.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=p,i.globalCompositeOperation="overlay",i.beginPath(),i.arc(u,c,f,0,Math.PI*2),i.fill()}i.globalCompositeOperation="source-over";const o=i.getImageData(0,0,1024,1024),a=o.data;for(let l=0;l<a.length;l+=4)if(Math.random()<.2){const u=(Math.random()-.5)*20;a[l]=Math.max(0,Math.min(255,a[l]+u)),a[l+1]=Math.max(0,Math.min(255,a[l+1]+u)),a[l+2]=Math.max(0,Math.min(255,a[l+2]+u))}i.putImageData(o,0,0);for(let l=0;l<200;l++){const u=Math.random()*1024,c=Math.random()*1024,f=2+Math.random()*5;i.fillStyle="rgba(0,0,0,0.5)",i.beginPath(),i.arc(u+2,c+2,f,0,Math.PI*2),i.fill();const d=40+Math.random()*60;i.fillStyle=`rgb(${d},${d},${d})`,i.beginPath(),i.arc(u,c,f,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.15)",i.beginPath(),i.arc(u-f*.3,c-f*.3,f*.6,0,Math.PI*2),i.fill()}}const r=new Uf(n);r.wrapS=Ra,r.wrapT=Ra,r.repeat.set(32,32);const s=this.renderer.capabilities.getMaxAnisotropy();return r.anisotropy=s,r.colorSpace=Ft,r}createBladeGeometry(e,n){const r=[],s=[],o=[];for(let l=0;l<=5;l++){const u=l/5,f=e*(1-u*.7),d=f*.3;r.push(-f/2,n*u,0),s.push(0,u),r.push(0,n*u,d),s.push(.5,u),r.push(f/2,n*u,0),s.push(1,u)}for(let l=0;l<5;l++){const u=l*3,c=(l+1)*3;o.push(u,u+1,c),o.push(c,u+1,c+1),o.push(u+1,u+2,c+1),o.push(c+1,u+2,c+2)}const a=new di;return a.setAttribute("position",new zn(r,3)),a.setAttribute("uv",new zn(s,2)),a.setIndex(o),a.computeVertexNormals(),a}buildGrass(e){this.grassMesh&&(this.scene.remove(this.grassMesh),this.grassMesh.geometry.dispose());const n=this.createBladeGeometry(e.bladeWidth,e.bladeHeight),i=new Z4;i.index=n.index,i.attributes.position=n.attributes.position,i.attributes.uv=n.attributes.uv,i.attributes.normal=n.attributes.normal,i.setAttribute("aOffset",new Ys(this.offsets,3)),i.setAttribute("aScale",new Ys(this.scales,1)),i.setAttribute("aRotation",new Ys(this.rotations,1)),i.setAttribute("aSeed",new Ys(this.seeds,1)),this.grassMaterial?this.updateUniforms(e):this.grassMaterial=new _r({vertexShader:J4,fragmentShader:eI,uniforms:{uTime:{value:0},uWindSpeed:{value:e.windSpeed},uWindStrength:{value:e.windStrength},uGrowth:{value:1},uBaseColor:{value:new Qe(e.baseColor)},uTipColor:{value:new Qe(e.tipColor)},uMap:{value:this.bladeTexture},uTrailTexture:{value:this.trailTarget.texture},uSunPosition:{value:new N},uCameraPosition:{value:new N}},side:li,transparent:!0,alphaTest:.1}),this.grassMesh=new V4(i,this.grassMaterial,this.maxInstances),this.grassMesh.count=Math.min(e.bladeCount,this.maxInstances),this.grassMesh.castShadow=!0,this.grassMesh.receiveShadow=!0,this.grassMesh.frustumCulled=!1,this.scene.add(this.grassMesh)}buildWheat(e){this.wheatMesh&&(this.scene.remove(this.wheatMesh),this.wheatMesh.geometry.dispose());const n=this.createBladeGeometry(e.bladeWidth*0.7,e.bladeHeight*1.4),i=new Z4;i.index=n.index,i.attributes.position=n.attributes.position,i.attributes.uv=n.attributes.uv,i.attributes.normal=n.attributes.normal,i.setAttribute("aOffset",new Ys(this.offsets,3)),i.setAttribute("aScale",new Ys(this.scales,1)),i.setAttribute("aRotation",new Ys(this.rotations,1)),i.setAttribute("aSeed",new Ys(this.seeds,1));if(!this.wheatTexture)this.wheatTexture=this.generateBladeTexture();this.wheatMaterial=new _r({vertexShader:wheatVertShader,fragmentShader:wheatFragShader,uniforms:{uTime:{value:0},uWindSpeed:{value:e.windSpeed},uWindStrength:{value:e.windStrength},uGrowth:{value:0},uBaseColor:{value:new Qe("#8B7335")},uTipColor:{value:new Qe("#D4A843")},uMap:{value:this.wheatTexture},uTrailTexture:{value:this.trailTarget.texture},uSunPosition:{value:new N},uCameraPosition:{value:new N}},side:li,transparent:!0,alphaTest:.1}),this.wheatMesh=new V4(i,this.wheatMaterial,this.maxInstances),this.wheatMesh.count=Math.min(e.bladeCount*0.7,this.maxInstances),this.wheatMesh.castShadow=!0,this.wheatMesh.receiveShadow=!0,this.wheatMesh.frustumCulled=!1,this.wheatMesh.visible=!1,this.scene.add(this.wheatMesh)}buildMountain(){this.mountainGroup&&this.scene.remove(this.mountainGroup);this.mountainGroup=new Fv;const peaks=[{x:0,z:0,r:8,h:6,segs:32},{x:-5,z:3,r:6,h:4,segs:24},{x:4,z:-3.5,r:5,h:3,segs:24},{x:-2.5,z:-5,r:4,h:2.5,segs:20},{x:6,z:4,r:3.5,h:2,segs:16}];peaks.forEach(pk=>{const geo=new Pp(pk.r,pk.segs);geo.rotateX(-Math.PI/2);const pos=geo.attributes.position;for(let v=0;v<pos.count;v++){const vx=pos.getX(v),vz=pos.getZ(v);const dist=Math.sqrt(vx*vx+vz*vz)/pk.r;const baseH=Math.max(0,(1-dist))*pk.h;const ridge=Math.sin(Math.atan2(vz,vx)*3+dist*5)*pk.h*0.08*(1-dist);const detail=(Math.sin(vx*0.8)*Math.cos(vz*0.6))*pk.h*0.04*(1-dist);pos.setY(v,baseH+ridge+detail)}geo.computeVertexNormals();const canvas=document.createElement("canvas");canvas.width=256;canvas.height=256;const ctx=canvas.getContext("2d");if(ctx){const grad=ctx.createLinearGradient(0,256,0,0);grad.addColorStop(0,"#6B3420");grad.addColorStop(0.3,"#8B4513");grad.addColorStop(0.5,"#A0522D");grad.addColorStop(0.75,"#C46A3A");grad.addColorStop(1,"#E97451");ctx.fillStyle=grad;ctx.fillRect(0,0,256,256);for(let i=0;i<500;i++){const sx=Math.random()*256,sy=Math.random()*256;ctx.fillStyle=`rgba(${100+Math.random()*80},${40+Math.random()*50},${20+Math.random()*30},${0.1+Math.random()*0.15})`;ctx.fillRect(sx,sy,2+Math.random()*4,1+Math.random()*2)}}const tex=new Uf(canvas);tex.colorSpace=Ft;const mat=new z4({map:tex,roughness:0.9,metalness:0.05,flatShading:!0});const mesh=new hn(geo,mat);mesh.position.set(pk.x,-0.05,pk.z);mesh.castShadow=!0;mesh.receiveShadow=!0;this.mountainGroup.add(mesh)});this.mountainGroup.visible=!1;this.mountainGroup.scale.set(0,0,0);this.scene.add(this.mountainGroup)}buildEarth(){if(this.earthMesh){this.scene.remove(this.earthMesh);this.earthMesh.geometry.dispose();this.earthMesh.material.dispose()}const radius=5,wSegs=64,hSegs=48;const positions=[],normals=[],uvs=[],indices=[];for(let y=0;y<=hSegs;y++){const v=y/hSegs,theta=v*Math.PI;for(let x=0;x<=wSegs;x++){const u=x/wSegs,phi=u*Math.PI*2;const px=-radius*Math.sin(theta)*Math.cos(phi);const py=radius*Math.cos(theta);const pz=radius*Math.sin(theta)*Math.sin(phi);positions.push(px,py,pz);normals.push(px/radius,py/radius,pz/radius);uvs.push(u,1-v)}}for(let y=0;y<hSegs;y++){for(let x=0;x<wSegs;x++){const a=y*(wSegs+1)+x;const b=a+wSegs+1;indices.push(a,b,a+1);indices.push(a+1,b,b+1)}}const geo=new di;geo.setAttribute("position",new zn(positions,3));geo.setAttribute("normal",new zn(normals,3));geo.setAttribute("uv",new zn(uvs,2));geo.setIndex(indices);const canvas=document.createElement("canvas");canvas.width=1024;canvas.height=512;const ctx=canvas.getContext("2d");if(ctx){const grad=ctx.createLinearGradient(0,0,0,512);grad.addColorStop(0,"#1a5276");grad.addColorStop(0.15,"#2e86c1");grad.addColorStop(0.35,"#2e86c1");grad.addColorStop(0.5,"#1a8a5c");grad.addColorStop(0.65,"#229954");grad.addColorStop(0.85,"#1a5276");grad.addColorStop(1,"#1a5276");ctx.fillStyle=grad;ctx.fillRect(0,0,1024,512);const landMasses=[{x:200,y:120,rx:120,ry:80},{x:600,y:180,rx:80,ry:100},{x:750,y:280,rx:100,ry:70},{x:350,y:350,rx:60,ry:50},{x:150,y:300,rx:90,ry:60},{x:500,y:100,rx:70,ry:40},{x:850,y:150,rx:50,ry:60}];landMasses.forEach(lm=>{ctx.save();ctx.translate(lm.x,lm.y);ctx.scale(1,lm.ry/lm.rx);ctx.beginPath();ctx.arc(0,0,lm.rx,0,Math.PI*2);ctx.restore();const lgrd=ctx.createRadialGradient(lm.x,lm.y,0,lm.x,lm.y,lm.rx);lgrd.addColorStop(0,"#1e8449");lgrd.addColorStop(0.5,"#229954");lgrd.addColorStop(0.8,"#27ae60");lgrd.addColorStop(1,"#2e86c1");ctx.fillStyle=lgrd;ctx.fill()});for(let i=0;i<80;i++){const cx=Math.random()*1024,cy=Math.random()*512,cr=5+Math.random()*25;ctx.beginPath();ctx.arc(cx,cy,cr,0,Math.PI*2);ctx.fillStyle="rgba(255,255,255,0.08)";ctx.fill()}const polarGrad1=ctx.createLinearGradient(0,0,0,60);polarGrad1.addColorStop(0,"rgba(255,255,255,0.7)");polarGrad1.addColorStop(1,"rgba(255,255,255,0)");ctx.fillStyle=polarGrad1;ctx.fillRect(0,0,1024,60);const polarGrad2=ctx.createLinearGradient(0,452,0,512);polarGrad2.addColorStop(0,"rgba(255,255,255,0)");polarGrad2.addColorStop(1,"rgba(255,255,255,0.7)");ctx.fillStyle=polarGrad2;ctx.fillRect(0,452,1024,60)}const tex=new Uf(canvas);tex.colorSpace=Ft;const mat=new z4({map:tex,roughness:0.7,metalness:0.1});this.earthMesh=new hn(geo,mat);this.earthMesh.position.set(0,8,0);this.earthMesh.visible=!1;this.earthMesh.castShadow=!0;this.scene.add(this.earthMesh)}setMode(e){this.targetMode=e;this._delayStartTime=null}updateUniforms(e){this.grassMaterial&&(this.grassMaterial.uniforms.uWindSpeed.value=e.windSpeed,this.grassMaterial.uniforms.uWindStrength.value=e.windStrength,this.grassMaterial.uniforms.uBaseColor.value.set(e.baseColor),this.grassMaterial.uniforms.uTipColor.value.set(e.tipColor))}updateConfig(e,n){!this.grassMaterial||!this.grassMesh||(this.updateUniforms(e),this.updateSun(e),n&&(n.bladeWidth!==e.bladeWidth||n.bladeHeight!==e.bladeHeight?this.buildGrass(e):n.bladeCount!==e.bladeCount&&(this.grassMesh.count=Math.min(e.bladeCount,this.maxInstances))))}updateSun(e){const i=Qd.degToRad(e.sunElevation),r=Qd.degToRad(e.sunAzimuth),s=50*Math.sin(i),o=50*Math.cos(i),a=o*Math.sin(r),l=o*Math.cos(r);this.sunLight.position.set(a,s,l),this.grassMaterial&&this.grassMaterial.uniforms.uSunPosition.value.copy(this.sunLight.position),this.wheatMaterial&&this.wheatMaterial.uniforms.uSunPosition.value.copy(this.sunLight.position),this.rimLight.position.set(-a*.6,10,-l*.6)}dispose(){window.removeEventListener("pointermove",this.onPointerMove),this.resizeObserver.disconnect(),this.frameId&&cancelAnimationFrame(this.frameId),this.scene.traverse(e=>{e instanceof hn&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material instanceof Eo&&e.material.dispose())}),this.bladeTexture.dispose(),this.wheatTexture&&this.wheatTexture.dispose(),this.earthMesh&&(this.earthMesh.geometry.dispose(),this.earthMesh.material.dispose(),this.earthMesh.material.map&&this.earthMesh.material.map.dispose()),this.trailTarget.dispose(),this.trailBrush.geometry.dispose(),this.trailBrush.material.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),this.controls.dispose(),this.scene.clear(),this.trailScene.clear()}}function nI(t){const e=ie.useRef(void 0);return ie.useEffect(()=>{e.current=t}),e.current}const yi={container:{width:"100%",height:"100vh",position:"relative",backgroundColor:"#ffffff",overflow:"hidden",fontFamily:'"Google Sans", sans-serif',color:"#ffffff"},sceneContainer:{position:"absolute",inset:0,zIndex:0,outline:"none"},watermark:{position:"absolute",bottom:"32px",right:"32px",textAlign:"right",pointerEvents:"none",zIndex:10,opacity:.5},watermarkTitle:{fontFamily:'"Google Sans", sans-serif',fontSize:"24px",margin:0,letterSpacing:"0.1em",color:"#ffffff"},watermarkSub:{fontFamily:'"Google Sans", sans-serif',fontSize:"10px",color:"#71717a"},loadingContainer:{position:"absolute",inset:0,backgroundColor:"#ffffff",zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},loadingText:{fontFamily:'"Google Sans", sans-serif',fontSize:"4rem",letterSpacing:"0.2em",color:"#ffffff",margin:0,background:"linear-gradient(to right, #000, #666)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},loadingBar:{width:"200px",height:"2px",background:"#333",marginTop:"20px",overflow:"hidden",borderRadius:"1px"},loadingProgress:{width:"100%",height:"100%",background:"#d9f99d",transformOrigin:"left"}},Zv={bladeCount:2.9e5,bladeWidth:.09,bladeHeight:1,windSpeed:.2,windStrength:.9,baseColor:"#0a420a",tipColor:"#84cc16",sunAzimuth:173,sunElevation:3.5},iI=()=>{const t=ie.useRef(null),e=ie.useRef(null),[n,i]=ie.useState(!1),[r,s]=ie.useState(Zv),o=nI(r),a=(u,c)=>{s(f=>({...f,[u]:c}))},l=()=>{s(Zv)},[h,m]=ie.useState(!1),[sceneMode,setSceneMode]=ie.useState("grass");return ie.useEffect(()=>{const u=setTimeout(()=>i(!1),2e3);return t.current&&!e.current&&(e.current=new tI(t.current,r)),()=>{clearTimeout(u),e.current&&(e.current.dispose(),e.current=null),t.current&&(t.current.innerHTML="")}},[]),ie.useEffect(()=>{e.current&&e.current.updateConfig(r,o)},[r,o]),ve.jsxs("div",{style:yi.container,children:[ve.jsx("div",{ref:t,style:yi.sceneContainer}),ve.jsx(Gd,{children:!n&&ve.jsxs(Gr.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:[null]})}),ve.jsxs("div",{style:{position:"absolute",top:"22%",left:"50%",transform:"translateX(-50%)",zIndex:15,display:"flex",flexDirection:"column",alignItems:"center"},children:[ve.jsx("button",{onClick:()=>m(!h),style:{background:"none",border:"none",outline:"none",cursor:"pointer",fontSize:"15px",color:"#555",padding:"8px 22px",fontFamily:'"Google Sans", sans-serif',letterSpacing:"0.05em",transition:"color 0.2s"},onMouseEnter:x=>{x.target.style.color="#000"},onMouseLeave:x=>{x.target.style.color="#555"},children:"Menu"}),ve.jsx(Gd,{children:h&&ve.jsx(Gr.div,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},transition:{duration:.18,ease:"easeOut"},style:{marginTop:"4px",display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"},children:["Earth is a Garden","Projects","Smolgardn agri","Smolgardn sierra"].map(x=>ve.jsx("div",{onClick:()=>{if(x==="Earth is a Garden"){const newMode=sceneMode==="earth"?"grass":"earth";setSceneMode(newMode);e.current&&e.current.setMode(newMode)}else if(x==="Smolgardn agri"){const newMode=sceneMode==="wheat"?"grass":"wheat";setSceneMode(newMode);e.current&&e.current.setMode(newMode)}else if(x==="Smolgardn sierra"){const newMode=sceneMode==="mountain"?"grass":"mountain";setSceneMode(newMode);e.current&&e.current.setMode(newMode)}m(!1)},style:{padding:"6px 0",cursor:"pointer",fontSize:"13px",color:"#999",fontFamily:'"Google Sans", sans-serif',transition:"color 0.15s",whiteSpace:"nowrap"},onMouseEnter:w=>{w.target.style.color="#333"},onMouseLeave:w=>{w.target.style.color="#999"},children:x},x))})})]}),ve.jsx(Gd,{children:n&&ve.jsxs(Gr.div,{style:yi.loadingContainer,exit:{opacity:0,filter:"blur(20px)"},transition:{duration:.8,ease:"easeInOut"},children:[ve.jsx(Gr.h1,{style:yi.loadingText,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:"ZENITH"}),ve.jsx("div",{style:yi.loadingBar,children:ve.jsx(Gr.div,{style:yi.loadingProgress,initial:{scaleX:0},animate:{scaleX:1},transition:{duration:1.8,ease:"easeInOut"}})})]})})]})},pS=document.getElementById("root");if(!pS)throw new Error("Could not find root element to mount to");const rI=Of.createRoot(pS);rI.render(ve.jsx(B.StrictMode,{children:ve.jsx(iI,{})}));
