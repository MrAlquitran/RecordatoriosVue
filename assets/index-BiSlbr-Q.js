(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var cp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=function(n,e){if(!n)throw oi(e)},oi=function(n){return new Error("Firebase Database ("+_m.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},tw=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let g=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),s.push(t[h],t[f],t[g],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new nw;const g=i<<2|a>>4;if(s.push(g),u!==64){const _=a<<4&240|u>>2;if(s.push(_),f!==64){const v=u<<6&192|f;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ym=function(n){const e=mm(n);return Ml.encodeByteArray(e,!0)},Ga=function(n){return ym(n).replace(/\./g,"")},Qa=function(n){try{return Ml.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(n){return Em(void 0,n)}function Em(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!rw(t)||(n[t]=Em(n[t],e[t]));return n}function rw(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=()=>iw().__FIREBASE_DEFAULTS__,aw=()=>{if(typeof process>"u"||typeof cp>"u")return;const n=cp.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qa(n[1]);return e&&JSON.parse(e)},Ll=()=>{try{return ow()||aw()||lw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vm=n=>{var e,t;return(t=(e=Ll())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cw=n=>{const e=vm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Tm=()=>{var n;return(n=Ll())===null||n===void 0?void 0:n.config},Im=n=>{var e;return(e=Ll())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ga(JSON.stringify(t)),Ga(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ph(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function hw(){var n;const e=(n=Ll())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pw(){const n=Ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gw(){return _m.NODE_ADMIN===!0}function _w(){return!hw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rm(){try{return typeof indexedDB=="object"}catch{return!1}}function mw(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="FirebaseError";class Bn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=yw,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Ew(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Bn(r,a,s)}}function Ew(n,e){return n.replace(vw,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const vw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n){return JSON.parse(n)}function ct(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=_o(Qa(i[0])||""),t=_o(Qa(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},Tw=function(n){const e=Am(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Iw=function(n){const e=Am(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Kr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function wu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ya(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function Xa(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(up(i)&&up(o)){if(!Xa(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function up(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Fi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ui(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const g=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(g<<1|g>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const g=(r<<5|r>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=g}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function Rw(n,e){const t=new Aw(n,e);return t.subscribe.bind(t)}class Aw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Cw(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=$c),r.error===void 0&&(r.error=$c),r.complete===void 0&&(r.complete=$c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cw(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $c(){}function bw(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,G(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Vl=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n){return n&&n._delegate?n._delegate:n}class En{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new go;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nw(e))try{this.getOrInitializeService({instanceIdentifier:Js})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Js){return this.instances.has(e)}getOptions(e=Js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Js){return this.component?this.component.multipleInstances?e:Js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kw(n){return n===Js?void 0:n}function Nw(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(_e||(_e={}));const Dw={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},xw=_e.INFO,Mw={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},Lw=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Mw[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mo{constructor(e){this.name=e,this._logLevel=xw,this._logHandler=Lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const Vw=(n,e)=>e.some(t=>n instanceof t);let hp,dp;function Fw(){return hp||(hp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uw(){return dp||(dp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cm=new WeakMap,Ru=new WeakMap,bm=new WeakMap,jc=new WeakMap,kh=new WeakMap;function Bw(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(ws(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Cm.set(t,n)}).catch(()=>{}),kh.set(e,n),e}function $w(n){if(Ru.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ru.set(n,e)}let Au={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ru.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ws(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jw(n){Au=n(Au)}function qw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(qc(this),e,...t);return bm.set(s,e.sort?e.sort():[e]),ws(s)}:Uw().includes(n)?function(...e){return n.apply(qc(this),e),ws(Cm.get(this))}:function(...e){return ws(n.apply(qc(this),e))}}function Ww(n){return typeof n=="function"?qw(n):(n instanceof IDBTransaction&&$w(n),Vw(n,Fw())?new Proxy(n,Au):n)}function ws(n){if(n instanceof IDBRequest)return Bw(n);if(jc.has(n))return jc.get(n);const e=Ww(n);return e!==n&&(jc.set(n,e),kh.set(e,n)),e}const qc=n=>kh.get(n);function Hw(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=ws(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ws(o.result),c.oldVersion,c.newVersion,ws(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const zw=["get","getKey","getAll","getAllKeys","count"],Kw=["put","add","delete","clear"],Wc=new Map;function fp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wc.get(e))return Wc.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Kw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||zw.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return Wc.set(e,i),i}jw(n=>({...n,get:(e,t,s)=>fp(e,t)||n.get(e,t,s),has:(e,t)=>!!fp(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Qw(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cu="@firebase/app",pp="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new Mo("@firebase/app"),Yw="@firebase/app-compat",Xw="@firebase/analytics-compat",Jw="@firebase/analytics",Zw="@firebase/app-check-compat",eR="@firebase/app-check",tR="@firebase/auth",nR="@firebase/auth-compat",sR="@firebase/database",rR="@firebase/data-connect",iR="@firebase/database-compat",oR="@firebase/functions",aR="@firebase/functions-compat",lR="@firebase/installations",cR="@firebase/installations-compat",uR="@firebase/messaging",hR="@firebase/messaging-compat",dR="@firebase/performance",fR="@firebase/performance-compat",pR="@firebase/remote-config",gR="@firebase/remote-config-compat",_R="@firebase/storage",mR="@firebase/storage-compat",yR="@firebase/firestore",ER="@firebase/vertexai",vR="@firebase/firestore-compat",TR="firebase",IR="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="[DEFAULT]",wR={[Cu]:"fire-core",[Yw]:"fire-core-compat",[Jw]:"fire-analytics",[Xw]:"fire-analytics-compat",[eR]:"fire-app-check",[Zw]:"fire-app-check-compat",[tR]:"fire-auth",[nR]:"fire-auth-compat",[sR]:"fire-rtdb",[rR]:"fire-data-connect",[iR]:"fire-rtdb-compat",[oR]:"fire-fn",[aR]:"fire-fn-compat",[lR]:"fire-iid",[cR]:"fire-iid-compat",[uR]:"fire-fcm",[hR]:"fire-fcm-compat",[dR]:"fire-perf",[fR]:"fire-perf-compat",[pR]:"fire-rc",[gR]:"fire-rc-compat",[_R]:"fire-gcs",[mR]:"fire-gcs-compat",[yR]:"fire-fst",[vR]:"fire-fst-compat",[ER]:"fire-vertex","fire-js":"fire-js",[TR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map,RR=new Map,Su=new Map;function gp(n,e){try{n.container.addComponent(e)}catch(t){rs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ln(n){const e=n.name;if(Su.has(e))return rs.debug(`There were multiple attempts to register component ${e}.`),!1;Su.set(e,n);for(const t of Ja.values())gp(t,n);for(const t of RR.values())gp(t,n);return!0}function Nh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function dn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rs=new ai("app","Firebase",AR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=IR;function Sm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bu,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Rs.create("bad-app-name",{appName:String(r)});if(t||(t=Tm()),!t)throw Rs.create("no-options");const i=Ja.get(r);if(i){if(Xa(t,i.options)&&Xa(s,i.config))return i;throw Rs.create("duplicate-app",{appName:r})}const o=new Ow(r);for(const c of Su.values())o.addComponent(c);const a=new CR(t,s,o);return Ja.set(r,a),a}function Oh(n=bu){const e=Ja.get(n);if(!e&&n===bu&&Tm())return Sm();if(!e)throw Rs.create("no-app",{appName:n});return e}function Qt(n,e,t){var s;let r=(s=wR[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rs.warn(a.join(" "));return}Ln(new En(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="firebase-heartbeat-database",SR=1,mo="firebase-heartbeat-store";let Hc=null;function Pm(){return Hc||(Hc=Hw(bR,SR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(mo)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rs.create("idb-open",{originalErrorMessage:n.message})})),Hc}async function PR(n){try{const t=(await Pm()).transaction(mo),s=await t.objectStore(mo).get(km(n));return await t.done,s}catch(e){if(e instanceof Bn)rs.warn(e.message);else{const t=Rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rs.warn(t.message)}}}async function _p(n,e){try{const s=(await Pm()).transaction(mo,"readwrite");await s.objectStore(mo).put(e,km(n)),await s.done}catch(t){if(t instanceof Bn)rs.warn(t.message);else{const s=Rs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rs.warn(s.message)}}}function km(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=1024,NR=30*24*60*60*1e3;class OR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xR(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=NR}),this._storage.overwrite(this._heartbeatsCache))}catch(s){rs.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mp(),{heartbeatsToSend:s,unsentEntries:r}=DR(this._heartbeatsCache.heartbeats),i=Ga(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return rs.warn(t),""}}}function mp(){return new Date().toISOString().substring(0,10)}function DR(n,e=kR){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),yp(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),yp(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class xR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rm()?mw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await PR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return _p(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return _p(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yp(n){return Ga(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(n){Ln(new En("platform-logger",e=>new Gw(e),"PRIVATE")),Ln(new En("heartbeat",e=>new OR(e),"PRIVATE")),Qt(Cu,pp,n),Qt(Cu,pp,"esm2017"),Qt("fire-js","")}MR("");function Dh(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function Nm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LR=Nm,Om=new ai("auth","Firebase",Nm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new Mo("@firebase/auth");function VR(n,...e){Za.logLevel<=_e.WARN&&Za.warn(`Auth (${Ms}): ${n}`,...e)}function Oa(n,...e){Za.logLevel<=_e.ERROR&&Za.error(`Auth (${Ms}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(n,...e){throw Mh(n,...e)}function gn(n,...e){return Mh(n,...e)}function xh(n,e,t){const s=Object.assign(Object.assign({},LR()),{[e]:t});return new ai("auth","Firebase",s).create(e,{appName:n.name})}function ts(n){return xh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function FR(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&an(n,"argument-error"),xh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mh(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Om.create(n,...e)}function le(n,e,...t){if(!n)throw Mh(e,...t)}function Xn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Oa(e),new Error(e)}function is(n,e){n||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function UR(){return Ep()==="http:"||Ep()==="https:"}function Ep(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UR()||fw()||"connection"in navigator)?navigator.onLine:!0}function $R(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.shortDelay=e,this.longDelay=t,is(t>e,"Short delay should be less than long delay!"),this.isMobile=Ph()||wm()}get(){return BR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n,e){is(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=new Lo(3e4,6e4);function Ls(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Vs(n,e,t,s,r={}){return xm(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=li(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return dw()||(u.referrerPolicy="no-referrer"),Dm.fetch()(Mm(n,n.config.apiHost,t,a),u)})}async function xm(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},jR),e);try{const r=new HR(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _a(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _a(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw _a(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xh(n,h,u);an(n,h)}}catch(r){if(r instanceof Bn)throw r;an(n,"network-request-failed",{message:String(r)})}}async function Vo(n,e,t,s,r={}){const i=await Vs(n,e,t,s,r);return"mfaPendingCredential"in i&&an(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Mm(n,e,t,s){const r=`${e}${t}?${s}`;return n.config.emulator?Lh(n.config,r):`${n.config.apiScheme}://${r}`}function WR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class HR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(gn(this.auth,"network-request-failed")),qR.get())})}}function _a(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=gn(n,e,s);return r.customData._tokenResponse=t,r}function vp(n){return n!==void 0&&n.enterprise!==void 0}class zR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return WR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KR(n,e){return Vs(n,"GET","/v2/recaptchaConfig",Ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(n,e){return Vs(n,"POST","/v1/accounts:delete",e)}async function Lm(n,e){return Vs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QR(n,e=!1){const t=tt(n),s=await t.getIdToken(e),r=Vh(s);le(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Qi(zc(r.auth_time)),issuedAtTime:Qi(zc(r.iat)),expirationTime:Qi(zc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zc(n){return Number(n)*1e3}function Vh(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{const r=Qa(t);return r?JSON.parse(r):(Oa("Failed to decode base64 JWT payload"),null)}catch(r){return Oa("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Tp(n){const e=Vh(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Bn&&YR(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function YR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(n){var e;const t=n.auth,s=await n.getIdToken(),r=await yo(n,Lm(t,{idToken:s}));le(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vm(i.providerUserInfo):[],a=ZR(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ku(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function JR(n){const e=tt(n);await el(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZR(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Vm(n){return n.map(e=>{var{providerId:t}=e,s=Dh(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(n,e){const t=await xm(n,{},async()=>{const s=li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=Mm(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tA(n,e){return Vs(n,"POST","/v2/accounts:revokeToken",Ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=Tp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await eA(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Lr;return s&&(le(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(le(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=Dh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ku(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await yo(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return QR(this,e)}reload(){return JR(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await el(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(ts(this.auth));const e=await this.getIdToken();return await yo(this,GR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,u,h;const f=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(r=t.email)!==null&&r!==void 0?r:void 0,_=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(a=t.tenantId)!==null&&a!==void 0?a:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,U=(u=t.createdAt)!==null&&u!==void 0?u:void 0,j=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:L,isAnonymous:ne,providerData:re,stsTokenManager:R}=t;le(D&&R,e,"internal-error");const y=Lr.fromJSON(this.name,R);le(typeof D=="string",e,"internal-error"),gs(f,e.name),gs(g,e.name),le(typeof L=="boolean",e,"internal-error"),le(typeof ne=="boolean",e,"internal-error"),gs(_,e.name),gs(v,e.name),gs(C,e.name),gs(P,e.name),gs(U,e.name),gs(j,e.name);const w=new Jn({uid:D,auth:e,email:g,emailVerified:L,displayName:f,isAnonymous:ne,photoURL:v,phoneNumber:_,tenantId:C,stsTokenManager:y,createdAt:U,lastLoginAt:j});return re&&Array.isArray(re)&&(w.providerData=re.map(A=>Object.assign({},A))),P&&(w._redirectEventId=P),w}static async _fromIdTokenResponse(e,t,s=!1){const r=new Lr;r.updateFromServerResponse(t);const i=new Jn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await el(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];le(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Vm(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Lr;a.updateFromIdToken(s);const c=new Jn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ku(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new Map;function Zn(n){is(n instanceof Function,"Expected a class definition");let e=Ip.get(n);return e?(is(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ip.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fm.type="NONE";const wp=Fm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n,e,t){return`firebase:${n}:${e}:${t}`}class Vr{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Da(this.userKey,r.apiKey,i),this.fullPersistenceKey=Da("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Vr(Zn(wp),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Zn(wp);const o=Da(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const f=Jn._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Vr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Vr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Um(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wm(e))return"Blackberry";if(Hm(e))return"Webos";if(Bm(e))return"Safari";if((e.includes("chrome/")||$m(e))&&!e.includes("edge/"))return"Chrome";if(qm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Um(n=Ct()){return/firefox\//i.test(n)}function Bm(n=Ct()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $m(n=Ct()){return/crios\//i.test(n)}function jm(n=Ct()){return/iemobile/i.test(n)}function qm(n=Ct()){return/android/i.test(n)}function Wm(n=Ct()){return/blackberry/i.test(n)}function Hm(n=Ct()){return/webos/i.test(n)}function Fh(n=Ct()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function nA(n=Ct()){var e;return Fh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sA(){return pw()&&document.documentMode===10}function zm(n=Ct()){return Fh(n)||qm(n)||Hm(n)||Wm(n)||/windows phone/i.test(n)||jm(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(n,e=[]){let t;switch(n){case"Browser":t=Rp(Ct());break;case"Worker":t=`${Rp(Ct())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ms}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(n,e={}){return Vs(n,"GET","/v2/passwordPolicy",Ls(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=6;class aA{constructor(e){var t,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:oA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ap(this),this.idTokenSubscription=new Ap(this),this.beforeStateQueue=new rA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Om,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zn(t)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lm(this,{idToken:e}),s=await Jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await el(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(ts(this));const t=e?tt(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(ts(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(ts(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iA(this),t=new aA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ai("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await tA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[Zn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&VR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Fs(n){return tt(n)}class Ap{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rw(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cA(n){Fl=n}function Gm(n){return Fl.loadJS(n)}function uA(){return Fl.recaptchaEnterpriseScript}function hA(){return Fl.gapiScript}function dA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class fA{constructor(){this.enterprise=new pA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class pA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const gA="recaptcha-enterprise",Qm="NO_RECAPTCHA";class _A{constructor(e){this.type=gA,this.auth=Fs(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{KR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new zR(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;vp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Qm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!t&&vp(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=uA();c.length!==0&&(c+=a),Gm(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Cp(n,e,t,s=!1,r=!1){const i=new _A(n);let o;if(r)o=Qm;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Nu(n,e,t,s,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Cp(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Cp(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(n,e){const t=Nh(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Xa(i,e??{}))return r;an(r,"already-initialized")}return t.initialize({options:e})}function mA(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Zn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function yA(n,e,t){const s=Fs(n);le(s._canInitEmulator,s,"emulator-config-failed"),le(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Xm(e),{host:o,port:a}=EA(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),vA()}function Xm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function EA(n){const e=Xm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:bp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:bp(o)}}}function bp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,t){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}async function TA(n,e){return Vs(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(n,e){return Vo(n,"POST","/v1/accounts:signInWithPassword",Ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(n,e){return Vo(n,"POST","/v1/accounts:signInWithEmailLink",Ls(n,e))}async function RA(n,e){return Vo(n,"POST","/v1/accounts:signInWithEmailLink",Ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Uh{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Eo(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Eo(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nu(e,t,"signInWithPassword",IA);case"emailLink":return wA(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nu(e,s,"signUpPassword",TA);case"emailLink":return RA(e,{idToken:t,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n,e){return Vo(n,"POST","/v1/accounts:signInWithIdp",Ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="http://localhost";class ar extends Uh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):an("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=Dh(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ar(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Fr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}buildRequest(){const e={requestUri:AA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=li(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bA(n){const e=Fi(Ui(n)).link,t=e?Fi(Ui(e)).deep_link_id:null,s=Fi(Ui(n)).deep_link_id;return(s?Fi(Ui(s)).link:null)||s||t||e||n}class Bh{constructor(e){var t,s,r,i,o,a;const c=Fi(Ui(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,f=CA((r=c.mode)!==null&&r!==void 0?r:null);le(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=bA(e);try{return new Bh(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,t){return Eo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Bh.parseLink(t);return le(s,"argument-error"),Eo._fromEmailAndCode(e,s.code,s.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends $h{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Fo{constructor(){super("facebook.com")}static credential(e){return ar._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vs.credential(e.oauthAccessToken)}catch{return null}}}vs.FACEBOOK_SIGN_IN_METHOD="facebook.com";vs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ar._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Gn.credential(t,s)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Fo{constructor(){super("github.com")}static credential(e){return ar._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Fo{constructor(){super("twitter.com")}static credential(e,t){return ar._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ts.credential(t,s)}catch{return null}}}Ts.TWITTER_SIGN_IN_METHOD="twitter.com";Ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(n,e){return Vo(n,"POST","/v1/accounts:signUp",Ls(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Jn._fromIdTokenResponse(e,s,r),o=Sp(s);return new lr({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Sp(s);return new lr({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Sp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Bn{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,tl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new tl(e,t,s,r)}}function Jm(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tl._fromErrorAndOperation(n,i,e,s):i})}async function PA(n,e,t=!1){const s=await yo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return lr._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(n,e,t=!1){const{auth:s}=n;if(dn(s.app))return Promise.reject(ts(s));const r="reauthenticate";try{const i=await yo(n,Jm(s,r,e,n),t);le(i.idToken,s,"internal-error");const o=Vh(i.idToken);le(o,s,"internal-error");const{sub:a}=o;return le(n.uid===a,s,"user-mismatch"),lr._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(n,e,t=!1){if(dn(n.app))return Promise.reject(ts(n));const s="signIn",r=await Jm(n,s,e),i=await lr._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function NA(n,e){return Zm(Fs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(n){const e=Fs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OA(n,e,t){if(dn(n.app))return Promise.reject(ts(n));const s=Fs(n),o=await Nu(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ey(n),c}),a=await lr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function DA(n,e,t){return dn(n.app)?Promise.reject(ts(n)):NA(tt(n),ci.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ey(n),s})}function ty(n,e,t,s){return tt(n).onIdTokenChanged(e,t,s)}function xA(n,e,t){return tt(n).beforeAuthStateChanged(e,t)}function MA(n){return tt(n).signOut()}const nl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nl,"1"),this.storage.removeItem(nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=1e3,VA=10;class sy extends ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);sA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,VA):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},LA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sy.type="LOCAL";const ry=sy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends ny{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}iy.type="SESSION";const jh=iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ul(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await FA(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=qh("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return window}function BA(n){On().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function $A(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qA(){return oy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="firebaseLocalStorageDb",WA=1,sl="firebaseLocalStorage",ly="fbase_key";class Uo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bl(n,e){return n.transaction([sl],e?"readwrite":"readonly").objectStore(sl)}function HA(){const n=indexedDB.deleteDatabase(ay);return new Uo(n).toPromise()}function Ou(){const n=indexedDB.open(ay,WA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(sl,{keyPath:ly})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(sl)?e(s):(s.close(),await HA(),e(await Ou()))})})}async function Pp(n,e,t){const s=Bl(n,!0).put({[ly]:e,value:t});return new Uo(s).toPromise()}async function zA(n,e){const t=Bl(n,!1).get(e),s=await new Uo(t).toPromise();return s===void 0?null:s.value}function kp(n,e){const t=Bl(n,!0).delete(e);return new Uo(t).toPromise()}const KA=800,GA=3;class cy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ou(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>GA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(qA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $A(),!this.activeServiceWorker)return;this.sender=new UA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ou();return await Pp(e,nl,"1"),await kp(e,nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pp(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>zA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Bl(r,!1).getAll();return new Uo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cy.type="LOCAL";const uy=cy;new Lo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n,e){return e?Zn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends Uh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function QA(n){return Zm(n.auth,new Wh(n),n.bypassAuthState)}function YA(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),kA(t,new Wh(n),n.bypassAuthState)}async function XA(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),PA(t,new Wh(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QA;case"linkViaPopup":case"linkViaRedirect":return XA;case"reauthViaPopup":case"reauthViaRedirect":return YA;default:an(this.auth,"internal-error")}}resolve(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){is(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new Lo(2e3,1e4);async function Np(n,e,t){if(dn(n.app))return Promise.reject(gn(n,"operation-not-supported-in-this-environment"));const s=Fs(n);FR(n,e,$h);const r=hy(s,t);return new tr(s,"signInViaPopup",e,r).executeNotNull()}class tr extends dy{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,tr.currentPopupAction&&tr.currentPopupAction.cancel(),tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){is(this.filter.length===1,"Popup operations only handle one event");const e=qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JA.get())};e()}}tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="pendingRedirect",xa=new Map;class eC extends dy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=xa.get(this.auth._key());if(!e){try{const s=await tC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}xa.set(this.auth._key(),e)}return this.bypassAuthState||xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tC(n,e){const t=rC(e),s=sC(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function nC(n,e){xa.set(n._key(),e)}function sC(n){return Zn(n._redirectPersistence)}function rC(n){return Da(ZA,n.config.apiKey,n.name)}async function iC(n,e,t=!1){if(dn(n.app))return Promise.reject(ts(n));const s=Fs(n),r=hy(s,e),o=await new eC(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=10*60*1e3;class aC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!fy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(gn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Op(e))}saveEventToCache(e){this.cachedEventUids.add(Op(e)),this.lastProcessedEventTime=Date.now()}}function Op(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fy({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fy(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(n,e={}){return Vs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hC=/^https?/;async function dC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cC(n);for(const t of e)try{if(fC(t))return}catch{}an(n,"unauthorized-domain")}function fC(n){const e=Pu(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!hC.test(t))return!1;if(uC.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new Lo(3e4,6e4);function Dp(){const n=On().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function gC(n){return new Promise((e,t)=>{var s,r,i;function o(){Dp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dp(),t(gn(n,"network-request-failed"))},timeout:pC.get()})}if(!((r=(s=On().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=On().gapi)===null||i===void 0)&&i.load)o();else{const a=dA("iframefcb");return On()[a]=()=>{gapi.load?o():t(gn(n,"network-request-failed"))},Gm(`${hA()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Ma=null,e})}let Ma=null;function _C(n){return Ma=Ma||gC(n),Ma}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new Lo(5e3,15e3),yC="__/auth/iframe",EC="emulator/auth/iframe",vC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IC(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Lh(e,EC):`https://${n.config.authDomain}/${yC}`,s={apiKey:e.apiKey,appName:n.name,v:Ms},r=TC.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${li(s).slice(1)}`}async function wC(n){const e=await _C(n),t=On().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:IC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=gn(n,"network-request-failed"),a=On().setTimeout(()=>{i(o)},mC.get());function c(){On().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AC=500,CC=600,bC="_blank",SC="http://localhost";class xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PC(n,e,t,s=AC,r=CC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},RC),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ct().toLowerCase();t&&(a=$m(u)?bC:t),Um(u)&&(e=e||SC,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[_,v])=>`${g}${_}=${v},`,"");if(nA(u)&&a!=="_self")return kC(e||"",a),new xp(null);const f=window.open(e||"",a,h);le(f,n,"popup-blocked");try{f.focus()}catch{}return new xp(f)}function kC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="__/auth/handler",OC="emulator/auth/handler",DC=encodeURIComponent("fac");async function Mp(n,e,t,s,r,i){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ms,eventId:r};if(e instanceof $h){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",wu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Fo){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${DC}=${encodeURIComponent(c)}`:"";return`${xC(n)}?${li(a).slice(1)}${u}`}function xC({config:n}){return n.emulator?Lh(n,OC):`https://${n.authDomain}/${NC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="webStorageSupport";class MC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jh,this._completeRedirectFn=iC,this._overrideRedirectResult=nC}async _openPopup(e,t,s,r){var i;is((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Mp(e,t,s,Pu(),r);return PC(e,o,qh())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Mp(e,t,s,Pu(),r);return BA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(is(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await wC(e),s=new aC(e);return t.register("authEvent",r=>(le(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kc,{type:Kc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Kc];o!==void 0&&t(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zm()||Bm()||Fh()}}const py=MC;var Lp="@firebase/auth",Vp="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FC(n){Ln(new En("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Km(n)},u=new lA(s,r,i,c);return mA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ln(new En("auth-internal",e=>{const t=Fs(e.getProvider("auth").getImmediate());return(s=>new LC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(Lp,Vp,VC(n)),Qt(Lp,Vp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=5*60,BC=Im("authIdTokenMaxAge")||UC;let Fp=null;const $C=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>BC)return;const r=t==null?void 0:t.token;Fp!==r&&(Fp=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function jC(n=Oh()){const e=Nh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ym(n,{popupRedirectResolver:py,persistence:[uy,ry,jh]}),s=Im("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=$C(i.toString());xA(t,o,()=>o(t.currentUser)),ty(t,a=>o(a))}}const r=vm("auth");return r&&yA(t,`http://${r}`),t}function qC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cA({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=gn("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",qC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FC("Browser");/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Me={},Ur=[],Dn=()=>{},WC=()=>!1,$l=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),zh=n=>n.startsWith("onUpdate:"),bt=Object.assign,Kh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},HC=Object.prototype.hasOwnProperty,ke=(n,e)=>HC.call(n,e),he=Array.isArray,Br=n=>jl(n)==="[object Map]",gy=n=>jl(n)==="[object Set]",de=n=>typeof n=="function",Ze=n=>typeof n=="string",Us=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",_y=n=>(je(n)||de(n))&&de(n.then)&&de(n.catch),my=Object.prototype.toString,jl=n=>my.call(n),zC=n=>jl(n).slice(8,-1),yy=n=>jl(n)==="[object Object]",Gh=n=>Ze(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Yi=Hh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ql=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},KC=/-(\w)/g,ln=ql(n=>n.replace(KC,(e,t)=>t?t.toUpperCase():"")),GC=/\B([A-Z])/g,Bs=ql(n=>n.replace(GC,"-$1").toLowerCase()),Wl=ql(n=>n.charAt(0).toUpperCase()+n.slice(1)),Gc=ql(n=>n?`on${Wl(n)}`:""),As=(n,e)=>!Object.is(n,e),La=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ey=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Du=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Up;const Hl=()=>Up||(Up=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qh(n){if(he(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=Ze(s)?JC(s):Qh(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ze(n)||je(n))return n}const QC=/;(?![^(]*\))/g,YC=/:([^]+)/,XC=/\/\*[^]*?\*\//g;function JC(n){const e={};return n.replace(XC,"").split(QC).forEach(t=>{if(t){const s=t.split(YC);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function zl(n){let e="";if(Ze(n))e=n;else if(he(n))for(let t=0;t<n.length;t++){const s=zl(n[t]);s&&(e+=s+" ")}else if(je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ZC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eb=Hh(ZC);function vy(n){return!!n||n===""}const Ty=n=>!!(n&&n.__v_isRef===!0),rl=n=>Ze(n)?n:n==null?"":he(n)||je(n)&&(n.toString===my||!de(n.toString))?Ty(n)?rl(n.value):JSON.stringify(n,Iy,2):String(n),Iy=(n,e)=>Ty(e)?Iy(n,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],i)=>(t[Qc(s,i)+" =>"]=r,t),{})}:gy(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Qc(t))}:Us(e)?Qc(e):je(e)&&!he(e)&&!yy(e)?String(e):e,Qc=(n,e="")=>{var t;return Us(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class wy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Nt;try{return Nt=this,e()}finally{Nt=t}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function tb(n){return new wy(n)}function Ry(){return Nt}function nb(n,e=!1){Nt&&Nt.cleanups.push(n)}let Le;const Yc=new WeakSet;class Ay{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yc.has(this)&&(Yc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||by(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bp(this),Sy(this);const e=Le,t=_n;Le=this,_n=!0;try{return this.fn()}finally{Py(this),Le=e,_n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jh(e);this.deps=this.depsTail=void 0,Bp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xu(this)&&this.run()}get dirty(){return xu(this)}}let Cy=0,Xi,Ji;function by(n,e=!1){if(n.flags|=8,e){n.next=Ji,Ji=n;return}n.next=Xi,Xi=n}function Yh(){Cy++}function Xh(){if(--Cy>0)return;if(Ji){let e=Ji;for(Ji=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Xi;){let e=Xi;for(Xi=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function Sy(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Py(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),Jh(s),sb(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function xu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ky(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ky(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===vo))return;n.globalVersion=vo;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!xu(n)){n.flags&=-3;return}const t=Le,s=_n;Le=n,_n=!0;try{Sy(n);const r=n.fn(n._value);(e.version===0||As(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Le=t,_n=s,Py(n),n.flags&=-3}}function Jh(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Jh(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function sb(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let _n=!0;const Ny=[];function $s(){Ny.push(_n),_n=!1}function js(){const n=Ny.pop();_n=n===void 0?!0:n}function Bp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Le;Le=void 0;try{e()}finally{Le=t}}}let vo=0;class rb{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Le||!_n||Le===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Le)t=this.activeLink=new rb(Le,this),Le.deps?(t.prevDep=Le.depsTail,Le.depsTail.nextDep=t,Le.depsTail=t):Le.deps=Le.depsTail=t,Oy(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=Le.depsTail,t.nextDep=void 0,Le.depsTail.nextDep=t,Le.depsTail=t,Le.deps===t&&(Le.deps=s)}return t}trigger(e){this.version++,vo++,this.notify(e)}notify(e){Yh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Xh()}}}function Oy(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Oy(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Mu=new WeakMap,ir=Symbol(""),Lu=Symbol(""),To=Symbol("");function vt(n,e,t){if(_n&&Le){let s=Mu.get(n);s||Mu.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new Zh),r.map=s,r.key=t),r.track()}}function Qn(n,e,t,s,r,i){const o=Mu.get(n);if(!o){vo++;return}const a=c=>{c&&c.trigger()};if(Yh(),e==="clear")o.forEach(a);else{const c=he(n),u=c&&Gh(t);if(c&&t==="length"){const h=Number(s);o.forEach((f,g)=>{(g==="length"||g===To||!Us(g)&&g>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(To)),e){case"add":c?u&&a(o.get("length")):(a(o.get(ir)),Br(n)&&a(o.get(Lu)));break;case"delete":c||(a(o.get(ir)),Br(n)&&a(o.get(Lu)));break;case"set":Br(n)&&a(o.get(ir));break}}Xh()}function Cr(n){const e=Pe(n);return e===n?e:(vt(e,"iterate",To),rn(n)?e:e.map(Tt))}function Kl(n){return vt(n=Pe(n),"iterate",To),n}const ib={__proto__:null,[Symbol.iterator](){return Xc(this,Symbol.iterator,Tt)},concat(...n){return Cr(this).concat(...n.map(e=>he(e)?Cr(e):e))},entries(){return Xc(this,"entries",n=>(n[1]=Tt(n[1]),n))},every(n,e){return Wn(this,"every",n,e,void 0,arguments)},filter(n,e){return Wn(this,"filter",n,e,t=>t.map(Tt),arguments)},find(n,e){return Wn(this,"find",n,e,Tt,arguments)},findIndex(n,e){return Wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Wn(this,"findLast",n,e,Tt,arguments)},findLastIndex(n,e){return Wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jc(this,"includes",n)},indexOf(...n){return Jc(this,"indexOf",n)},join(n){return Cr(this).join(n)},lastIndexOf(...n){return Jc(this,"lastIndexOf",n)},map(n,e){return Wn(this,"map",n,e,void 0,arguments)},pop(){return ki(this,"pop")},push(...n){return ki(this,"push",n)},reduce(n,...e){return $p(this,"reduce",n,e)},reduceRight(n,...e){return $p(this,"reduceRight",n,e)},shift(){return ki(this,"shift")},some(n,e){return Wn(this,"some",n,e,void 0,arguments)},splice(...n){return ki(this,"splice",n)},toReversed(){return Cr(this).toReversed()},toSorted(n){return Cr(this).toSorted(n)},toSpliced(...n){return Cr(this).toSpliced(...n)},unshift(...n){return ki(this,"unshift",n)},values(){return Xc(this,"values",Tt)}};function Xc(n,e,t){const s=Kl(n),r=s[e]();return s!==n&&!rn(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=t(i.value)),i}),r}const ob=Array.prototype;function Wn(n,e,t,s,r,i){const o=Kl(n),a=o!==n&&!rn(n),c=o[e];if(c!==ob[e]){const f=c.apply(n,i);return a?Tt(f):f}let u=t;o!==n&&(a?u=function(f,g){return t.call(this,Tt(f),g,n)}:t.length>2&&(u=function(f,g){return t.call(this,f,g,n)}));const h=c.call(o,u,s);return a&&r?r(h):h}function $p(n,e,t,s){const r=Kl(n);let i=t;return r!==n&&(rn(n)?t.length>3&&(i=function(o,a,c){return t.call(this,o,a,c,n)}):i=function(o,a,c){return t.call(this,o,Tt(a),c,n)}),r[e](i,...s)}function Jc(n,e,t){const s=Pe(n);vt(s,"iterate",To);const r=s[e](...t);return(r===-1||r===!1)&&nd(t[0])?(t[0]=Pe(t[0]),s[e](...t)):r}function ki(n,e,t=[]){$s(),Yh();const s=Pe(n)[e].apply(n,t);return Xh(),js(),s}const ab=Hh("__proto__,__v_isRef,__isVue"),Dy=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Us));function lb(n){Us(n)||(n=String(n));const e=Pe(this);return vt(e,"has",n),e.hasOwnProperty(n)}class xy{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return s===(r?i?yb:Fy:i?Vy:Ly).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=he(e);if(!r){let c;if(o&&(c=ib[t]))return c;if(t==="hasOwnProperty")return lb}const a=Reflect.get(e,t,dt(e)?e:s);return(Us(t)?Dy.has(t):ab(t))||(r||vt(e,"get",t),i)?a:dt(a)?o&&Gh(t)?a:a.value:je(a)?r?By(a):Gl(a):a}}class My extends xy{constructor(e=!1){super(!1,e)}set(e,t,s,r){let i=e[t];if(!this._isShallow){const c=cr(i);if(!rn(s)&&!cr(s)&&(i=Pe(i),s=Pe(s)),!he(e)&&dt(i)&&!dt(s))return c?!1:(i.value=s,!0)}const o=he(e)&&Gh(t)?Number(t)<e.length:ke(e,t),a=Reflect.set(e,t,s,dt(e)?e:r);return e===Pe(r)&&(o?As(s,i)&&Qn(e,"set",t,s):Qn(e,"add",t,s)),a}deleteProperty(e,t){const s=ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&Qn(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!Us(t)||!Dy.has(t))&&vt(e,"has",t),s}ownKeys(e){return vt(e,"iterate",he(e)?"length":ir),Reflect.ownKeys(e)}}class cb extends xy{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ub=new My,hb=new cb,db=new My(!0);const Vu=n=>n,ma=n=>Reflect.getPrototypeOf(n);function fb(n,e,t){return function(...s){const r=this.__v_raw,i=Pe(r),o=Br(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=r[n](...s),h=t?Vu:e?Fu:Tt;return!e&&vt(i,"iterate",c?Lu:ir),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:a?[h(f[0]),h(f[1])]:h(f),done:g}},[Symbol.iterator](){return this}}}}function ya(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function pb(n,e){const t={get(r){const i=this.__v_raw,o=Pe(i),a=Pe(r);n||(As(r,a)&&vt(o,"get",r),vt(o,"get",a));const{has:c}=ma(o),u=e?Vu:n?Fu:Tt;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!n&&vt(Pe(r),"iterate",ir),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Pe(i),a=Pe(r);return n||(As(r,a)&&vt(o,"has",r),vt(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Pe(a),u=e?Vu:n?Fu:Tt;return!n&&vt(c,"iterate",ir),a.forEach((h,f)=>r.call(i,u(h),u(f),o))}};return bt(t,n?{add:ya("add"),set:ya("set"),delete:ya("delete"),clear:ya("clear")}:{add(r){!e&&!rn(r)&&!cr(r)&&(r=Pe(r));const i=Pe(this);return ma(i).has.call(i,r)||(i.add(r),Qn(i,"add",r,r)),this},set(r,i){!e&&!rn(i)&&!cr(i)&&(i=Pe(i));const o=Pe(this),{has:a,get:c}=ma(o);let u=a.call(o,r);u||(r=Pe(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?As(i,h)&&Qn(o,"set",r,i):Qn(o,"add",r,i),this},delete(r){const i=Pe(this),{has:o,get:a}=ma(i);let c=o.call(i,r);c||(r=Pe(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&Qn(i,"delete",r,void 0),u},clear(){const r=Pe(this),i=r.size!==0,o=r.clear();return i&&Qn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=fb(r,n,e)}),t}function ed(n,e){const t=pb(n,e);return(s,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(ke(t,r)&&r in s?t:s,r,i)}const gb={get:ed(!1,!1)},_b={get:ed(!1,!0)},mb={get:ed(!0,!1)};const Ly=new WeakMap,Vy=new WeakMap,Fy=new WeakMap,yb=new WeakMap;function Eb(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vb(n){return n.__v_skip||!Object.isExtensible(n)?0:Eb(zC(n))}function Gl(n){return cr(n)?n:td(n,!1,ub,gb,Ly)}function Uy(n){return td(n,!1,db,_b,Vy)}function By(n){return td(n,!0,hb,mb,Fy)}function td(n,e,t,s,r){if(!je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=r.get(n);if(i)return i;const o=vb(n);if(o===0)return n;const a=new Proxy(n,o===2?s:t);return r.set(n,a),a}function $r(n){return cr(n)?$r(n.__v_raw):!!(n&&n.__v_isReactive)}function cr(n){return!!(n&&n.__v_isReadonly)}function rn(n){return!!(n&&n.__v_isShallow)}function nd(n){return n?!!n.__v_raw:!1}function Pe(n){const e=n&&n.__v_raw;return e?Pe(e):n}function Tb(n){return!ke(n,"__v_skip")&&Object.isExtensible(n)&&Ey(n,"__v_skip",!0),n}const Tt=n=>je(n)?Gl(n):n,Fu=n=>je(n)?By(n):n;function dt(n){return n?n.__v_isRef===!0:!1}function nn(n){return jy(n,!1)}function $y(n){return jy(n,!0)}function jy(n,e){return dt(n)?n:new Ib(n,e)}class Ib{constructor(e,t){this.dep=new Zh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Pe(e),this._value=t?e:Tt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||rn(e)||cr(e);e=s?e:Pe(e),As(e,t)&&(this._rawValue=e,this._value=s?e:Tt(e),this.dep.trigger())}}function zt(n){return dt(n)?n.value:n}function zn(n){return de(n)?n():zt(n)}const wb={get:(n,e,t)=>e==="__v_raw"?n:zt(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return dt(r)&&!dt(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function qy(n){return $r(n)?n:new Proxy(n,wb)}class Rb{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return by(this,!0),!0}get value(){const e=this.dep.track();return ky(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ab(n,e,t=!1){let s,r;return de(n)?s=n:(s=n.get,r=n.set),new Rb(s,r,t)}const Ea={},il=new WeakMap;let Zs;function Cb(n,e=!1,t=Zs){if(t){let s=il.get(t);s||il.set(t,s=[]),s.push(n)}}function bb(n,e,t=Me){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=t,u=L=>r?L:rn(L)||r===!1||r===0?Yn(L,1):Yn(L);let h,f,g,_,v=!1,C=!1;if(dt(n)?(f=()=>n.value,v=rn(n)):$r(n)?(f=()=>u(n),v=!0):he(n)?(C=!0,v=n.some(L=>$r(L)||rn(L)),f=()=>n.map(L=>{if(dt(L))return L.value;if($r(L))return u(L);if(de(L))return c?c(L,2):L()})):de(n)?e?f=c?()=>c(n,2):n:f=()=>{if(g){$s();try{g()}finally{js()}}const L=Zs;Zs=h;try{return c?c(n,3,[_]):n(_)}finally{Zs=L}}:f=Dn,e&&r){const L=f,ne=r===!0?1/0:r;f=()=>Yn(L(),ne)}const P=Ry(),U=()=>{h.stop(),P&&P.active&&Kh(P.effects,h)};if(i&&e){const L=e;e=(...ne)=>{L(...ne),U()}}let j=C?new Array(n.length).fill(Ea):Ea;const D=L=>{if(!(!(h.flags&1)||!h.dirty&&!L))if(e){const ne=h.run();if(r||v||(C?ne.some((re,R)=>As(re,j[R])):As(ne,j))){g&&g();const re=Zs;Zs=h;try{const R=[ne,j===Ea?void 0:C&&j[0]===Ea?[]:j,_];c?c(e,3,R):e(...R),j=ne}finally{Zs=re}}}else h.run()};return a&&a(D),h=new Ay(f),h.scheduler=o?()=>o(D,!1):D,_=L=>Cb(L,!1,h),g=h.onStop=()=>{const L=il.get(h);if(L){if(c)c(L,4);else for(const ne of L)ne();il.delete(h)}},e?s?D(!0):j=h.run():o?o(D.bind(null,!0),!0):h.run(),U.pause=h.pause.bind(h),U.resume=h.resume.bind(h),U.stop=U,U}function Yn(n,e=1/0,t){if(e<=0||!je(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,dt(n))Yn(n.value,e,t);else if(he(n))for(let s=0;s<n.length;s++)Yn(n[s],e,t);else if(gy(n)||Br(n))n.forEach(s=>{Yn(s,e,t)});else if(yy(n)){for(const s in n)Yn(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Yn(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bo(n,e,t,s){try{return s?n(...s):n()}catch(r){Ql(r,e,t)}}function Vn(n,e,t,s){if(de(n)){const r=Bo(n,e,t,s);return r&&_y(r)&&r.catch(i=>{Ql(i,e,t)}),r}if(he(n)){const r=[];for(let i=0;i<n.length;i++)r.push(Vn(n[i],e,t,s));return r}}function Ql(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,c,u)===!1)return}a=a.parent}if(i){$s(),Bo(i,null,10,[n,c,u]),js();return}}Sb(n,t,r,s,o)}function Sb(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const Ot=[];let An=-1;const jr=[];let ms=null,br=0;const Wy=Promise.resolve();let ol=null;function Hy(n){const e=ol||Wy;return n?e.then(this?n.bind(this):n):e}function Pb(n){let e=An+1,t=Ot.length;for(;e<t;){const s=e+t>>>1,r=Ot[s],i=Io(r);i<n||i===n&&r.flags&2?e=s+1:t=s}return e}function sd(n){if(!(n.flags&1)){const e=Io(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=Io(t)?Ot.push(n):Ot.splice(Pb(e),0,n),n.flags|=1,zy()}}function zy(){ol||(ol=Wy.then(Gy))}function kb(n){he(n)?jr.push(...n):ms&&n.id===-1?ms.splice(br+1,0,n):n.flags&1||(jr.push(n),n.flags|=1),zy()}function jp(n,e,t=An+1){for(;t<Ot.length;t++){const s=Ot[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;Ot.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ky(n){if(jr.length){const e=[...new Set(jr)].sort((t,s)=>Io(t)-Io(s));if(jr.length=0,ms){ms.push(...e);return}for(ms=e,br=0;br<ms.length;br++){const t=ms[br];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ms=null,br=0}}const Io=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Gy(n){try{for(An=0;An<Ot.length;An++){const e=Ot[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Bo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<Ot.length;An++){const e=Ot[An];e&&(e.flags&=-2)}An=-1,Ot.length=0,Ky(),ol=null,(Ot.length||jr.length)&&Gy()}}let Bt=null,Qy=null;function al(n){const e=Bt;return Bt=n,Qy=n&&n.type.__scopeId||null,e}function Uu(n,e=Bt,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&Zp(-1);const i=al(e);let o;try{o=n(...r)}finally{al(i),s._d&&Zp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Bi(n,e){if(Bt===null)return n;const t=Zl(Bt),s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Me]=e[r];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Yn(o),s.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function Ys(n,e,t,s){const r=n.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&($s(),Vn(c,t,8,[n.el,a,n,e]),js())}}const Nb=Symbol("_vte"),Ob=n=>n.__isTeleport;function rd(n,e){n.shapeFlag&6&&n.component?(n.transition=e,rd(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Yy(n,e){return de(n)?bt({name:n.name},e,{setup:n}):n}function Xy(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ll(n,e,t,s,r=!1){if(he(n)){n.forEach((v,C)=>ll(v,e&&(he(e)?e[C]:e),t,s,r));return}if(Zi(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ll(n,e,t,s.component.subTree);return}const i=s.shapeFlag&4?Zl(s.component):s.el,o=r?null:i,{i:a,r:c}=n,u=e&&e.r,h=a.refs===Me?a.refs={}:a.refs,f=a.setupState,g=Pe(f),_=f===Me?()=>!1:v=>ke(g,v);if(u!=null&&u!==c&&(Ze(u)?(h[u]=null,_(u)&&(f[u]=null)):dt(u)&&(u.value=null)),de(c))Bo(c,a,12,[o,h]);else{const v=Ze(c),C=dt(c);if(v||C){const P=()=>{if(n.f){const U=v?_(c)?f[c]:h[c]:c.value;r?he(U)&&Kh(U,i):he(U)?U.includes(i)||U.push(i):v?(h[c]=[i],_(c)&&(f[c]=h[c])):(c.value=[i],n.k&&(h[n.k]=c.value))}else v?(h[c]=o,_(c)&&(f[c]=o)):C&&(c.value=o,n.k&&(h[n.k]=o))};o?(P.id=-1,qt(P,t)):P()}}}Hl().requestIdleCallback;Hl().cancelIdleCallback;const Zi=n=>!!n.type.__asyncLoader,Jy=n=>n.type.__isKeepAlive;function Db(n,e){Zy(n,"a",e)}function xb(n,e){Zy(n,"da",e)}function Zy(n,e,t=ut){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Yl(e,s,t),t){let r=t.parent;for(;r&&r.parent;)Jy(r.parent.vnode)&&Mb(s,e,t,r),r=r.parent}}function Mb(n,e,t,s){const r=Yl(e,n,s,!0);eE(()=>{Kh(s[e],r)},t)}function Yl(n,e,t=ut,s=!1){if(t){const r=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{$s();const a=$o(t),c=Vn(e,t,n,o);return a(),js(),c});return s?r.unshift(i):r.push(i),i}}const cs=n=>(e,t=ut)=>{(!Ro||n==="sp")&&Yl(n,(...s)=>e(...s),t)},Lb=cs("bm"),Vb=cs("m"),Fb=cs("bu"),Ub=cs("u"),Bb=cs("bum"),eE=cs("um"),tE=cs("sp"),$b=cs("rtg"),jb=cs("rtc");function qb(n,e=ut){Yl("ec",n,e)}const Wb="components";function qp(n,e){return zb(Wb,n,!0,e)||n}const Hb=Symbol.for("v-ndc");function zb(n,e,t=!0,s=!1){const r=Bt||ut;if(r){const i=r.type;{const a=xS(i,!1);if(a&&(a===e||a===ln(e)||a===Wl(ln(e))))return i}const o=Wp(r[n]||i[n],e)||Wp(r.appContext[n],e);return!o&&s?i:o}}function Wp(n,e){return n&&(n[e]||n[ln(e)]||n[Wl(ln(e))])}function Kb(n,e,t,s){let r;const i=t,o=he(n);if(o||Ze(n)){const a=o&&$r(n);let c=!1;a&&(c=!rn(n),n=Kl(n)),r=new Array(n.length);for(let u=0,h=n.length;u<h;u++)r[u]=e(c?Tt(n[u]):n[u],u,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,i)}else if(je(n))if(n[Symbol.iterator])r=Array.from(n,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(n);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(n[h],h,c,i)}}else r=[];return r}const Bu=n=>n?wE(n)?Zl(n):Bu(n.parent):null,eo=bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Bu(n.parent),$root:n=>Bu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>sE(n),$forceUpdate:n=>n.f||(n.f=()=>{sd(n.update)}),$nextTick:n=>n.n||(n.n=Hy.bind(n.proxy)),$watch:n=>pS.bind(n)}),Zc=(n,e)=>n!==Me&&!n.__isScriptSetup&&ke(n,e),Gb={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return i[e]}else{if(Zc(s,e))return o[e]=1,s[e];if(r!==Me&&ke(r,e))return o[e]=2,r[e];if((u=n.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(t!==Me&&ke(t,e))return o[e]=4,t[e];$u&&(o[e]=0)}}const h=eo[e];let f,g;if(h)return e==="$attrs"&&vt(n.attrs,"get",""),h(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Me&&ke(t,e))return o[e]=4,t[e];if(g=c.config.globalProperties,ke(g,e))return g[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:i}=n;return Zc(r,e)?(r[e]=t,!0):s!==Me&&ke(s,e)?(s[e]=t,!0):ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!t[o]||n!==Me&&ke(n,o)||Zc(e,o)||(a=i[0])&&ke(a,o)||ke(s,o)||ke(eo,o)||ke(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hp(n){return he(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let $u=!0;function Qb(n){const e=sE(n),t=n.proxy,s=n.ctx;$u=!1,e.beforeCreate&&zp(e.beforeCreate,n,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:g,beforeUpdate:_,updated:v,activated:C,deactivated:P,beforeDestroy:U,beforeUnmount:j,destroyed:D,unmounted:L,render:ne,renderTracked:re,renderTriggered:R,errorCaptured:y,serverPrefetch:w,expose:A,inheritAttrs:b,components:k,directives:I,filters:St}=e;if(u&&Yb(u,s,null),o)for(const Te in o){const me=o[Te];de(me)&&(s[Te]=me.bind(t))}if(r){const Te=r.call(t,t);je(Te)&&(n.data=Gl(Te))}if($u=!0,i)for(const Te in i){const me=i[Te],$t=de(me)?me.bind(t,t):de(me.get)?me.get.bind(t,t):Dn,un=!de(me)&&de(me.set)?me.set.bind(t):Dn,Zt=Ht({get:$t,set:un});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:qe=>Zt.value=qe})}if(a)for(const Te in a)nE(a[Te],s,t,Te);if(c){const Te=de(c)?c.call(t):c;Reflect.ownKeys(Te).forEach(me=>{Va(me,Te[me])})}h&&zp(h,n,"c");function Qe(Te,me){he(me)?me.forEach($t=>Te($t.bind(t))):me&&Te(me.bind(t))}if(Qe(Lb,f),Qe(Vb,g),Qe(Fb,_),Qe(Ub,v),Qe(Db,C),Qe(xb,P),Qe(qb,y),Qe(jb,re),Qe($b,R),Qe(Bb,j),Qe(eE,L),Qe(tE,w),he(A))if(A.length){const Te=n.exposed||(n.exposed={});A.forEach(me=>{Object.defineProperty(Te,me,{get:()=>t[me],set:$t=>t[me]=$t})})}else n.exposed||(n.exposed={});ne&&n.render===Dn&&(n.render=ne),b!=null&&(n.inheritAttrs=b),k&&(n.components=k),I&&(n.directives=I),w&&Xy(n)}function Yb(n,e,t=Dn){he(n)&&(n=ju(n));for(const s in n){const r=n[s];let i;je(r)?"default"in r?i=Yt(r.from||s,r.default,!0):i=Yt(r.from||s):i=Yt(r),dt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function zp(n,e,t){Vn(he(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function nE(n,e,t,s){let r=s.includes(".")?mE(t,s):()=>t[s];if(Ze(n)){const i=e[n];de(i)&&to(r,i)}else if(de(n))to(r,n.bind(t));else if(je(n))if(he(n))n.forEach(i=>nE(i,e,t,s));else{const i=de(n.handler)?n.handler.bind(t):e[n.handler];de(i)&&to(r,i,n)}}function sE(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!t&&!s?c=e:(c={},r.length&&r.forEach(u=>cl(c,u,o,!0)),cl(c,e,o)),je(e)&&i.set(e,c),c}function cl(n,e,t,s=!1){const{mixins:r,extends:i}=e;i&&cl(n,i,t,!0),r&&r.forEach(o=>cl(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const a=Xb[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Xb={data:Kp,props:Gp,emits:Gp,methods:$i,computed:$i,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:$i,directives:$i,watch:Zb,provide:Kp,inject:Jb};function Kp(n,e){return e?n?function(){return bt(de(n)?n.call(this,this):n,de(e)?e.call(this,this):e)}:e:n}function Jb(n,e){return $i(ju(n),ju(e))}function ju(n){if(he(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kt(n,e){return n?[...new Set([].concat(n,e))]:e}function $i(n,e){return n?bt(Object.create(null),n,e):e}function Gp(n,e){return n?he(n)&&he(e)?[...new Set([...n,...e])]:bt(Object.create(null),Hp(n),Hp(e??{})):e}function Zb(n,e){if(!n)return e;if(!e)return n;const t=bt(Object.create(null),n);for(const s in e)t[s]=kt(n[s],e[s]);return t}function rE(){return{app:null,config:{isNativeTag:WC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eS=0;function tS(n,e){return function(s,r=null){de(s)||(s=bt({},s)),r!=null&&!je(r)&&(r=null);const i=rE(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:eS++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:LS,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(u,...f)):de(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,g){if(!c){const _=u._ceVNode||Ke(s,r);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),n(_,h,g),c=!0,u._container=h,h.__vue_app__=u,Zl(_.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Vn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=qr;qr=u;try{return h()}finally{qr=f}}};return u}}let qr=null;function Va(n,e){if(ut){let t=ut.provides;const s=ut.parent&&ut.parent.provides;s===t&&(t=ut.provides=Object.create(s)),t[n]=e}}function Yt(n,e,t=!1){const s=ut||Bt;if(s||qr){const r=qr?qr._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&de(e)?e.call(s&&s.proxy):e}}const iE={},oE=()=>Object.create(iE),aE=n=>Object.getPrototypeOf(n)===iE;function nS(n,e,t,s=!1){const r={},i=oE();n.propsDefaults=Object.create(null),lE(n,e,r,i);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=s?r:Uy(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function sS(n,e,t,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=n,a=Pe(r),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let g=h[f];if(Xl(n.emitsOptions,g))continue;const _=e[g];if(c)if(ke(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const v=ln(g);r[v]=qu(c,a,v,_,n,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{lE(n,e,r,i)&&(u=!0);let h;for(const f in a)(!e||!ke(e,f)&&((h=Bs(f))===f||!ke(e,h)))&&(c?t&&(t[f]!==void 0||t[h]!==void 0)&&(r[f]=qu(c,a,f,void 0,n,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!ke(e,f))&&(delete i[f],u=!0)}u&&Qn(n.attrs,"set","")}function lE(n,e,t,s){const[r,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Yi(c))continue;const u=e[c];let h;r&&ke(r,h=ln(c))?!i||!i.includes(h)?t[h]=u:(a||(a={}))[h]=u:Xl(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Pe(t),u=a||Me;for(let h=0;h<i.length;h++){const f=i[h];t[f]=qu(r,c,f,u[f],n,!ke(u,f))}}return o}function qu(n,e,t,s,r,i){const o=n[t];if(o!=null){const a=ke(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:u}=r;if(t in u)s=u[t];else{const h=$o(r);s=u[t]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(t,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Bs(t))&&(s=!0))}return s}const rS=new WeakMap;function cE(n,e,t=!1){const s=t?rS:e.propsCache,r=s.get(n);if(r)return r;const i=n.props,o={},a=[];let c=!1;if(!de(n)){const h=f=>{c=!0;const[g,_]=cE(f,e,!0);bt(o,g),_&&a.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!c)return je(n)&&s.set(n,Ur),Ur;if(he(i))for(let h=0;h<i.length;h++){const f=ln(i[h]);Qp(f)&&(o[f]=Me)}else if(i)for(const h in i){const f=ln(h);if(Qp(f)){const g=i[h],_=o[f]=he(g)||de(g)?{type:g}:bt({},g),v=_.type;let C=!1,P=!0;if(he(v))for(let U=0;U<v.length;++U){const j=v[U],D=de(j)&&j.name;if(D==="Boolean"){C=!0;break}else D==="String"&&(P=!1)}else C=de(v)&&v.name==="Boolean";_[0]=C,_[1]=P,(C||ke(_,"default"))&&a.push(f)}}const u=[o,a];return je(n)&&s.set(n,u),u}function Qp(n){return n[0]!=="$"&&!Yi(n)}const uE=n=>n[0]==="_"||n==="$stable",id=n=>he(n)?n.map(Cn):[Cn(n)],iS=(n,e,t)=>{if(e._n)return e;const s=Uu((...r)=>id(e(...r)),t);return s._c=!1,s},hE=(n,e,t)=>{const s=n._ctx;for(const r in n){if(uE(r))continue;const i=n[r];if(de(i))e[r]=iS(r,i,s);else if(i!=null){const o=id(i);e[r]=()=>o}}},dE=(n,e)=>{const t=id(e);n.slots.default=()=>t},fE=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},oS=(n,e,t)=>{const s=n.slots=oE();if(n.vnode.shapeFlag&32){const r=e._;r?(fE(s,e,t),t&&Ey(s,"_",r,!0)):hE(e,s)}else e&&dE(n,e)},aS=(n,e,t)=>{const{vnode:s,slots:r}=n;let i=!0,o=Me;if(s.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:fE(r,e,t):(i=!e.$stable,hE(e,r)),o=e}else e&&(dE(n,e),o={default:1});if(i)for(const a in r)!uE(a)&&o[a]==null&&delete r[a]},qt=TS;function lS(n){return cS(n)}function cS(n,e){const t=Hl();t.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:g,setScopeId:_=Dn,insertStaticContent:v}=n,C=(E,T,S,M=null,$=null,V=null,K=void 0,H=null,W=!!T.dynamicChildren)=>{if(E===T)return;E&&!Ni(E,T)&&(M=x(E),qe(E,$,V,!0),E=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:q,ref:ie,shapeFlag:Y}=T;switch(q){case Jl:P(E,T,S,M);break;case ur:U(E,T,S,M);break;case tu:E==null&&j(T,S,M,K);break;case Vt:k(E,T,S,M,$,V,K,H,W);break;default:Y&1?ne(E,T,S,M,$,V,K,H,W):Y&6?I(E,T,S,M,$,V,K,H,W):(Y&64||Y&128)&&q.process(E,T,S,M,$,V,K,H,W,ee)}ie!=null&&$&&ll(ie,E&&E.ref,V,T||E,!T)},P=(E,T,S,M)=>{if(E==null)s(T.el=a(T.children),S,M);else{const $=T.el=E.el;T.children!==E.children&&u($,T.children)}},U=(E,T,S,M)=>{E==null?s(T.el=c(T.children||""),S,M):T.el=E.el},j=(E,T,S,M)=>{[E.el,E.anchor]=v(E.children,T,S,M,E.el,E.anchor)},D=({el:E,anchor:T},S,M)=>{let $;for(;E&&E!==T;)$=g(E),s(E,S,M),E=$;s(T,S,M)},L=({el:E,anchor:T})=>{let S;for(;E&&E!==T;)S=g(E),r(E),E=S;r(T)},ne=(E,T,S,M,$,V,K,H,W)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),E==null?re(T,S,M,$,V,K,H,W):w(E,T,$,V,K,H,W)},re=(E,T,S,M,$,V,K,H)=>{let W,q;const{props:ie,shapeFlag:Y,transition:te,dirs:ae}=E;if(W=E.el=o(E.type,V,ie&&ie.is,ie),Y&8?h(W,E.children):Y&16&&y(E.children,W,null,M,$,eu(E,V),K,H),ae&&Ys(E,null,M,"created"),R(W,E,E.scopeId,K,M),ie){for(const pe in ie)pe!=="value"&&!Yi(pe)&&i(W,pe,null,ie[pe],V,M);"value"in ie&&i(W,"value",null,ie.value,V),(q=ie.onVnodeBeforeMount)&&Rn(q,M,E)}ae&&Ys(E,null,M,"beforeMount");const oe=uS($,te);oe&&te.beforeEnter(W),s(W,T,S),((q=ie&&ie.onVnodeMounted)||oe||ae)&&qt(()=>{q&&Rn(q,M,E),oe&&te.enter(W),ae&&Ys(E,null,M,"mounted")},$)},R=(E,T,S,M,$)=>{if(S&&_(E,S),M)for(let V=0;V<M.length;V++)_(E,M[V]);if($){let V=$.subTree;if(T===V||EE(V.type)&&(V.ssContent===T||V.ssFallback===T)){const K=$.vnode;R(E,K,K.scopeId,K.slotScopeIds,$.parent)}}},y=(E,T,S,M,$,V,K,H,W=0)=>{for(let q=W;q<E.length;q++){const ie=E[q]=H?ys(E[q]):Cn(E[q]);C(null,ie,T,S,M,$,V,K,H)}},w=(E,T,S,M,$,V,K)=>{const H=T.el=E.el;let{patchFlag:W,dynamicChildren:q,dirs:ie}=T;W|=E.patchFlag&16;const Y=E.props||Me,te=T.props||Me;let ae;if(S&&Xs(S,!1),(ae=te.onVnodeBeforeUpdate)&&Rn(ae,S,T,E),ie&&Ys(T,E,S,"beforeUpdate"),S&&Xs(S,!0),(Y.innerHTML&&te.innerHTML==null||Y.textContent&&te.textContent==null)&&h(H,""),q?A(E.dynamicChildren,q,H,S,M,eu(T,$),V):K||me(E,T,H,null,S,M,eu(T,$),V,!1),W>0){if(W&16)b(H,Y,te,S,$);else if(W&2&&Y.class!==te.class&&i(H,"class",null,te.class,$),W&4&&i(H,"style",Y.style,te.style,$),W&8){const oe=T.dynamicProps;for(let pe=0;pe<oe.length;pe++){const Ie=oe[pe],pt=Y[Ie],it=te[Ie];(it!==pt||Ie==="value")&&i(H,Ie,pt,it,$,S)}}W&1&&E.children!==T.children&&h(H,T.children)}else!K&&q==null&&b(H,Y,te,S,$);((ae=te.onVnodeUpdated)||ie)&&qt(()=>{ae&&Rn(ae,S,T,E),ie&&Ys(T,E,S,"updated")},M)},A=(E,T,S,M,$,V,K)=>{for(let H=0;H<T.length;H++){const W=E[H],q=T[H],ie=W.el&&(W.type===Vt||!Ni(W,q)||W.shapeFlag&70)?f(W.el):S;C(W,q,ie,null,M,$,V,K,!0)}},b=(E,T,S,M,$)=>{if(T!==S){if(T!==Me)for(const V in T)!Yi(V)&&!(V in S)&&i(E,V,T[V],null,$,M);for(const V in S){if(Yi(V))continue;const K=S[V],H=T[V];K!==H&&V!=="value"&&i(E,V,H,K,$,M)}"value"in S&&i(E,"value",T.value,S.value,$)}},k=(E,T,S,M,$,V,K,H,W)=>{const q=T.el=E?E.el:a(""),ie=T.anchor=E?E.anchor:a("");let{patchFlag:Y,dynamicChildren:te,slotScopeIds:ae}=T;ae&&(H=H?H.concat(ae):ae),E==null?(s(q,S,M),s(ie,S,M),y(T.children||[],S,ie,$,V,K,H,W)):Y>0&&Y&64&&te&&E.dynamicChildren?(A(E.dynamicChildren,te,S,$,V,K,H),(T.key!=null||$&&T===$.subTree)&&pE(E,T,!0)):me(E,T,S,ie,$,V,K,H,W)},I=(E,T,S,M,$,V,K,H,W)=>{T.slotScopeIds=H,E==null?T.shapeFlag&512?$.ctx.activate(T,S,M,K,W):St(T,S,M,$,V,K,W):Jt(E,T,W)},St=(E,T,S,M,$,V,K)=>{const H=E.component=PS(E,M,$);if(Jy(E)&&(H.ctx.renderer=ee),kS(H,!1,K),H.asyncDep){if($&&$.registerDep(H,Qe,K),!E.el){const W=H.subTree=Ke(ur);U(null,W,T,S)}}else Qe(H,E,T,S,$,V,K)},Jt=(E,T,S)=>{const M=T.component=E.component;if(ES(E,T,S))if(M.asyncDep&&!M.asyncResolved){Te(M,T,S);return}else M.next=T,M.update();else T.el=E.el,M.vnode=T},Qe=(E,T,S,M,$,V,K)=>{const H=()=>{if(E.isMounted){let{next:Y,bu:te,u:ae,parent:oe,vnode:pe}=E;{const gt=gE(E);if(gt){Y&&(Y.el=pe.el,Te(E,Y,K)),gt.asyncDep.then(()=>{E.isUnmounted||H()});return}}let Ie=Y,pt;Xs(E,!1),Y?(Y.el=pe.el,Te(E,Y,K)):Y=pe,te&&La(te),(pt=Y.props&&Y.props.onVnodeBeforeUpdate)&&Rn(pt,oe,Y,pe),Xs(E,!0);const it=Xp(E),en=E.subTree;E.subTree=it,C(en,it,f(en.el),x(en),E,$,V),Y.el=it.el,Ie===null&&vS(E,it.el),ae&&qt(ae,$),(pt=Y.props&&Y.props.onVnodeUpdated)&&qt(()=>Rn(pt,oe,Y,pe),$)}else{let Y;const{el:te,props:ae}=T,{bm:oe,m:pe,parent:Ie,root:pt,type:it}=E,en=Zi(T);Xs(E,!1),oe&&La(oe),!en&&(Y=ae&&ae.onVnodeBeforeMount)&&Rn(Y,Ie,T),Xs(E,!0);{pt.ce&&pt.ce._injectChildStyle(it);const gt=E.subTree=Xp(E);C(null,gt,S,M,E,$,V),T.el=gt.el}if(pe&&qt(pe,$),!en&&(Y=ae&&ae.onVnodeMounted)){const gt=T;qt(()=>Rn(Y,Ie,gt),$)}(T.shapeFlag&256||Ie&&Zi(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&E.a&&qt(E.a,$),E.isMounted=!0,T=S=M=null}};E.scope.on();const W=E.effect=new Ay(H);E.scope.off();const q=E.update=W.run.bind(W),ie=E.job=W.runIfDirty.bind(W);ie.i=E,ie.id=E.uid,W.scheduler=()=>sd(ie),Xs(E,!0),q()},Te=(E,T,S)=>{T.component=E;const M=E.vnode.props;E.vnode=T,E.next=null,sS(E,T.props,M,S),aS(E,T.children,S),$s(),jp(E),js()},me=(E,T,S,M,$,V,K,H,W=!1)=>{const q=E&&E.children,ie=E?E.shapeFlag:0,Y=T.children,{patchFlag:te,shapeFlag:ae}=T;if(te>0){if(te&128){un(q,Y,S,M,$,V,K,H,W);return}else if(te&256){$t(q,Y,S,M,$,V,K,H,W);return}}ae&8?(ie&16&&Mt(q,$,V),Y!==q&&h(S,Y)):ie&16?ae&16?un(q,Y,S,M,$,V,K,H,W):Mt(q,$,V,!0):(ie&8&&h(S,""),ae&16&&y(Y,S,M,$,V,K,H,W))},$t=(E,T,S,M,$,V,K,H,W)=>{E=E||Ur,T=T||Ur;const q=E.length,ie=T.length,Y=Math.min(q,ie);let te;for(te=0;te<Y;te++){const ae=T[te]=W?ys(T[te]):Cn(T[te]);C(E[te],ae,S,null,$,V,K,H,W)}q>ie?Mt(E,$,V,!0,!1,Y):y(T,S,M,$,V,K,H,W,Y)},un=(E,T,S,M,$,V,K,H,W)=>{let q=0;const ie=T.length;let Y=E.length-1,te=ie-1;for(;q<=Y&&q<=te;){const ae=E[q],oe=T[q]=W?ys(T[q]):Cn(T[q]);if(Ni(ae,oe))C(ae,oe,S,null,$,V,K,H,W);else break;q++}for(;q<=Y&&q<=te;){const ae=E[Y],oe=T[te]=W?ys(T[te]):Cn(T[te]);if(Ni(ae,oe))C(ae,oe,S,null,$,V,K,H,W);else break;Y--,te--}if(q>Y){if(q<=te){const ae=te+1,oe=ae<ie?T[ae].el:M;for(;q<=te;)C(null,T[q]=W?ys(T[q]):Cn(T[q]),S,oe,$,V,K,H,W),q++}}else if(q>te)for(;q<=Y;)qe(E[q],$,V,!0),q++;else{const ae=q,oe=q,pe=new Map;for(q=oe;q<=te;q++){const ot=T[q]=W?ys(T[q]):Cn(T[q]);ot.key!=null&&pe.set(ot.key,q)}let Ie,pt=0;const it=te-oe+1;let en=!1,gt=0;const hs=new Array(it);for(q=0;q<it;q++)hs[q]=0;for(q=ae;q<=Y;q++){const ot=E[q];if(pt>=it){qe(ot,$,V,!0);continue}let tn;if(ot.key!=null)tn=pe.get(ot.key);else for(Ie=oe;Ie<=te;Ie++)if(hs[Ie-oe]===0&&Ni(ot,T[Ie])){tn=Ie;break}tn===void 0?qe(ot,$,V,!0):(hs[tn-oe]=q+1,tn>=gt?gt=tn:en=!0,C(ot,T[tn],S,null,$,V,K,H,W),pt++)}const mi=en?hS(hs):Ur;for(Ie=mi.length-1,q=it-1;q>=0;q--){const ot=oe+q,tn=T[ot],ea=ot+1<ie?T[ot+1].el:M;hs[q]===0?C(null,tn,S,ea,$,V,K,H,W):en&&(Ie<0||q!==mi[Ie]?Zt(tn,S,ea,2):Ie--)}}},Zt=(E,T,S,M,$=null)=>{const{el:V,type:K,transition:H,children:W,shapeFlag:q}=E;if(q&6){Zt(E.component.subTree,T,S,M);return}if(q&128){E.suspense.move(T,S,M);return}if(q&64){K.move(E,T,S,ee);return}if(K===Vt){s(V,T,S);for(let Y=0;Y<W.length;Y++)Zt(W[Y],T,S,M);s(E.anchor,T,S);return}if(K===tu){D(E,T,S);return}if(M!==2&&q&1&&H)if(M===0)H.beforeEnter(V),s(V,T,S),qt(()=>H.enter(V),$);else{const{leave:Y,delayLeave:te,afterLeave:ae}=H,oe=()=>s(V,T,S),pe=()=>{Y(V,()=>{oe(),ae&&ae()})};te?te(V,oe,pe):pe()}else s(V,T,S)},qe=(E,T,S,M=!1,$=!1)=>{const{type:V,props:K,ref:H,children:W,dynamicChildren:q,shapeFlag:ie,patchFlag:Y,dirs:te,cacheIndex:ae}=E;if(Y===-2&&($=!1),H!=null&&ll(H,null,S,E,!0),ae!=null&&(T.renderCache[ae]=void 0),ie&256){T.ctx.deactivate(E);return}const oe=ie&1&&te,pe=!Zi(E);let Ie;if(pe&&(Ie=K&&K.onVnodeBeforeUnmount)&&Rn(Ie,T,E),ie&6)wn(E.component,S,M);else{if(ie&128){E.suspense.unmount(S,M);return}oe&&Ys(E,null,T,"beforeUnmount"),ie&64?E.type.remove(E,T,S,ee,M):q&&!q.hasOnce&&(V!==Vt||Y>0&&Y&64)?Mt(q,T,S,!1,!0):(V===Vt&&Y&384||!$&&ie&16)&&Mt(W,T,S),M&&We(E)}(pe&&(Ie=K&&K.onVnodeUnmounted)||oe)&&qt(()=>{Ie&&Rn(Ie,T,E),oe&&Ys(E,null,T,"unmounted")},S)},We=E=>{const{type:T,el:S,anchor:M,transition:$}=E;if(T===Vt){us(S,M);return}if(T===tu){L(E);return}const V=()=>{r(S),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:K,delayLeave:H}=$,W=()=>K(S,V);H?H(E.el,V,W):W()}else V()},us=(E,T)=>{let S;for(;E!==T;)S=g(E),r(E),E=S;r(T)},wn=(E,T,S)=>{const{bum:M,scope:$,job:V,subTree:K,um:H,m:W,a:q}=E;Yp(W),Yp(q),M&&La(M),$.stop(),V&&(V.flags|=8,qe(K,E,T,S)),H&&qt(H,T),qt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Mt=(E,T,S,M=!1,$=!1,V=0)=>{for(let K=V;K<E.length;K++)qe(E[K],T,S,M,$)},x=E=>{if(E.shapeFlag&6)return x(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=g(E.anchor||E.el),S=T&&T[Nb];return S?g(S):T};let X=!1;const Q=(E,T,S)=>{E==null?T._vnode&&qe(T._vnode,null,null,!0):C(T._vnode||null,E,T,null,null,null,S),T._vnode=E,X||(X=!0,jp(),Ky(),X=!1)},ee={p:C,um:qe,m:Zt,r:We,mt:St,mc:y,pc:me,pbc:A,n:x,o:n};return{render:Q,hydrate:void 0,createApp:tS(Q)}}function eu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function uS(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function pE(n,e,t=!1){const s=n.children,r=e.children;if(he(s)&&he(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ys(r[i]),a.el=o.el),!t&&a.patchFlag!==-2&&pE(o,a)),a.type===Jl&&(a.el=o.el)}}function hS(n){const e=n.slice(),t=[0];let s,r,i,o,a;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(r=t[t.length-1],n[r]<u){e[s]=r,t.push(s);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[s]=t[i-1]),t[i]=s)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function gE(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gE(e)}function Yp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const dS=Symbol.for("v-scx"),fS=()=>Yt(dS);function to(n,e,t){return _E(n,e,t)}function _E(n,e,t=Me){const{immediate:s,deep:r,flush:i,once:o}=t,a=bt({},t),c=e&&s||!e&&i!=="post";let u;if(Ro){if(i==="sync"){const _=fS();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Dn,_.resume=Dn,_.pause=Dn,_}}const h=ut;a.call=(_,v,C)=>Vn(_,h,v,C);let f=!1;i==="post"?a.scheduler=_=>{qt(_,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(_,v)=>{v?_():sd(_)}),a.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const g=bb(n,e,a);return Ro&&(u?u.push(g):c&&g()),g}function pS(n,e,t){const s=this.proxy,r=Ze(n)?n.includes(".")?mE(s,n):()=>s[n]:n.bind(s,s);let i;de(e)?i=e:(i=e.handler,t=e);const o=$o(this),a=_E(r,i.bind(s),t);return o(),a}function mE(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const gS=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ln(e)}Modifiers`]||n[`${Bs(e)}Modifiers`];function _S(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||Me;let r=t;const i=e.startsWith("update:"),o=i&&gS(s,e.slice(7));o&&(o.trim&&(r=t.map(h=>Ze(h)?h.trim():h)),o.number&&(r=t.map(Du)));let a,c=s[a=Gc(e)]||s[a=Gc(ln(e))];!c&&i&&(c=s[a=Gc(Bs(e))]),c&&Vn(c,n,6,r);const u=s[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Vn(u,n,6,r)}}function yE(n,e,t=!1){const s=e.emitsCache,r=s.get(n);if(r!==void 0)return r;const i=n.emits;let o={},a=!1;if(!de(n)){const c=u=>{const h=yE(u,e,!0);h&&(a=!0,bt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(je(n)&&s.set(n,null),null):(he(i)?i.forEach(c=>o[c]=null):bt(o,i),je(n)&&s.set(n,o),o)}function Xl(n,e){return!n||!$l(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(n,e[0].toLowerCase()+e.slice(1))||ke(n,Bs(e))||ke(n,e))}function Xp(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:g,setupState:_,ctx:v,inheritAttrs:C}=n,P=al(n);let U,j;try{if(t.shapeFlag&4){const L=r||s,ne=L;U=Cn(u.call(ne,L,h,f,_,g,v)),j=a}else{const L=e;U=Cn(L.length>1?L(f,{attrs:a,slots:o,emit:c}):L(f,null)),j=e.props?a:mS(a)}}catch(L){no.length=0,Ql(L,n,1),U=Ke(ur)}let D=U;if(j&&C!==!1){const L=Object.keys(j),{shapeFlag:ne}=D;L.length&&ne&7&&(i&&L.some(zh)&&(j=yS(j,i)),D=Gr(D,j,!1,!0))}return t.dirs&&(D=Gr(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&rd(D,t.transition),U=D,al(P),U}const mS=n=>{let e;for(const t in n)(t==="class"||t==="style"||$l(t))&&((e||(e={}))[t]=n[t]);return e},yS=(n,e)=>{const t={};for(const s in n)(!zh(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function ES(n,e,t){const{props:s,children:r,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?Jp(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const g=h[f];if(o[g]!==s[g]&&!Xl(u,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Jp(s,o,u):!0:!!o;return!1}function Jp(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==n[i]&&!Xl(t,i))return!0}return!1}function vS({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const EE=n=>n.__isSuspense;function TS(n,e){e&&e.pendingBranch?he(n)?e.effects.push(...n):e.effects.push(n):kb(n)}const Vt=Symbol.for("v-fgt"),Jl=Symbol.for("v-txt"),ur=Symbol.for("v-cmt"),tu=Symbol.for("v-stc"),no=[];let Kt=null;function Dt(n=!1){no.push(Kt=n?null:[])}function IS(){no.pop(),Kt=no[no.length-1]||null}let wo=1;function Zp(n,e=!1){wo+=n,n<0&&Kt&&e&&(Kt.hasOnce=!0)}function vE(n){return n.dynamicChildren=wo>0?Kt||Ur:null,IS(),wo>0&&Kt&&Kt.push(n),n}function Ft(n,e,t,s,r,i){return vE(ge(n,e,t,s,r,i,!0))}function wS(n,e,t,s,r){return vE(Ke(n,e,t,s,r,!0))}function ul(n){return n?n.__v_isVNode===!0:!1}function Ni(n,e){return n.type===e.type&&n.key===e.key}const TE=({key:n})=>n??null,Fa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ze(n)||dt(n)||de(n)?{i:Bt,r:n,k:e,f:!!t}:n:null);function ge(n,e=null,t=null,s=0,r=null,i=n===Vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&TE(e),ref:e&&Fa(e),scopeId:Qy,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Bt};return a?(od(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ze(t)?8:16),wo>0&&!o&&Kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Kt.push(c),c}const Ke=RS;function RS(n,e=null,t=null,s=0,r=null,i=!1){if((!n||n===Hb)&&(n=ur),ul(n)){const a=Gr(n,e,!0);return t&&od(a,t),wo>0&&!i&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(n)]=a:Kt.push(a)),a.patchFlag=-2,a}if(MS(n)&&(n=n.__vccOpts),e){e=AS(e);let{class:a,style:c}=e;a&&!Ze(a)&&(e.class=zl(a)),je(c)&&(nd(c)&&!he(c)&&(c=bt({},c)),e.style=Qh(c))}const o=Ze(n)?1:EE(n)?128:Ob(n)?64:je(n)?4:de(n)?2:0;return ge(n,e,t,s,r,o,i,!0)}function AS(n){return n?nd(n)||aE(n)?bt({},n):n:null}function Gr(n,e,t=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=n,u=e?CS(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&TE(u),ref:e&&e.ref?t&&i?he(i)?i.concat(Fa(e)):[i,Fa(e)]:Fa(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Vt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Gr(n.ssContent),ssFallback:n.ssFallback&&Gr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&rd(h,c.clone(h)),h}function nr(n=" ",e=0){return Ke(Jl,null,n,e)}function va(n="",e=!1){return e?(Dt(),wS(ur,null,n)):Ke(ur,null,n)}function Cn(n){return n==null||typeof n=="boolean"?Ke(ur):he(n)?Ke(Vt,null,n.slice()):ul(n)?ys(n):Ke(Jl,null,String(n))}function ys(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Gr(n)}function od(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(he(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),od(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!aE(e)?e._ctx=Bt:r===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Bt},t=32):(e=String(e),s&64?(t=16,e=[nr(e)]):t=8);n.children=e,n.shapeFlag|=t}function CS(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=zl([e.class,s.class]));else if(r==="style")e.style=Qh([e.style,s.style]);else if($l(r)){const i=e[r],o=s[r];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Rn(n,e,t,s=null){Vn(n,e,7,[t,s])}const bS=rE();let SS=0;function PS(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||bS,i={uid:SS++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cE(s,r),emitsOptions:yE(s,r),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_S.bind(null,i),n.ce&&n.ce(i),i}let ut=null;const IE=()=>ut||Bt;let hl,Wu;{const n=Hl(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};hl=e("__VUE_INSTANCE_SETTERS__",t=>ut=t),Wu=e("__VUE_SSR_SETTERS__",t=>Ro=t)}const $o=n=>{const e=ut;return hl(n),n.scope.on(),()=>{n.scope.off(),hl(e)}},eg=()=>{ut&&ut.scope.off(),hl(null)};function wE(n){return n.vnode.shapeFlag&4}let Ro=!1;function kS(n,e=!1,t=!1){e&&Wu(e);const{props:s,children:r}=n.vnode,i=wE(n);nS(n,s,i,e),oS(n,r,t);const o=i?NS(n,e):void 0;return e&&Wu(!1),o}function NS(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Gb);const{setup:s}=t;if(s){$s();const r=n.setupContext=s.length>1?DS(n):null,i=$o(n),o=Bo(s,n,0,[n.props,r]),a=_y(o);if(js(),i(),(a||n.sp)&&!Zi(n)&&Xy(n),a){if(o.then(eg,eg),e)return o.then(c=>{tg(n,c)}).catch(c=>{Ql(c,n,0)});n.asyncDep=o}else tg(n,o)}else RE(n)}function tg(n,e,t){de(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:je(e)&&(n.setupState=qy(e)),RE(n)}function RE(n,e,t){const s=n.type;n.render||(n.render=s.render||Dn);{const r=$o(n);$s();try{Qb(n)}finally{js(),r()}}}const OS={get(n,e){return vt(n,"get",""),n[e]}};function DS(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,OS),slots:n.slots,emit:n.emit,expose:e}}function Zl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(qy(Tb(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in eo)return eo[t](n)},has(e,t){return t in e||t in eo}})):n.proxy}function xS(n,e=!0){return de(n)?n.displayName||n.name:n.name||e&&n.__name}function MS(n){return de(n)&&"__vccOpts"in n}const Ht=(n,e)=>Ab(n,e,Ro);function AE(n,e,t){const s=arguments.length;return s===2?je(e)&&!he(e)?ul(e)?Ke(n,null,[e]):Ke(n,e):Ke(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&ul(t)&&(t=[t]),Ke(n,e,t))}const LS="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hu;const ng=typeof window<"u"&&window.trustedTypes;if(ng)try{Hu=ng.createPolicy("vue",{createHTML:n=>n})}catch{}const CE=Hu?n=>Hu.createHTML(n):n=>n,VS="http://www.w3.org/2000/svg",FS="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,sg=Kn&&Kn.createElement("template"),US={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?Kn.createElementNS(VS,n):e==="mathml"?Kn.createElementNS(FS,n):t?Kn.createElement(n,{is:t}):Kn.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>Kn.createTextNode(n),createComment:n=>Kn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,i){const o=t?t.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{sg.innerHTML=CE(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=sg.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},BS=Symbol("_vtc");function $S(n,e,t){const s=n[BS];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const rg=Symbol("_vod"),jS=Symbol("_vsh"),qS=Symbol(""),WS=/(^|;)\s*display\s*:/;function HS(n,e,t){const s=n.style,r=Ze(t);let i=!1;if(t&&!r){if(e)if(Ze(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ua(s,a,"")}else for(const o in e)t[o]==null&&Ua(s,o,"");for(const o in t)o==="display"&&(i=!0),Ua(s,o,t[o])}else if(r){if(e!==t){const o=s[qS];o&&(t+=";"+o),s.cssText=t,i=WS.test(t)}}else e&&n.removeAttribute("style");rg in n&&(n[rg]=i?s.display:"",n[jS]&&(s.display="none"))}const ig=/\s*!important$/;function Ua(n,e,t){if(he(t))t.forEach(s=>Ua(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=zS(n,e);ig.test(t)?n.setProperty(Bs(s),t.replace(ig,""),"important"):n[s]=t}}const og=["Webkit","Moz","ms"],nu={};function zS(n,e){const t=nu[e];if(t)return t;let s=ln(e);if(s!=="filter"&&s in n)return nu[e]=s;s=Wl(s);for(let r=0;r<og.length;r++){const i=og[r]+s;if(i in n)return nu[e]=i}return e}const ag="http://www.w3.org/1999/xlink";function lg(n,e,t,s,r,i=eb(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ag,e.slice(6,e.length)):n.setAttributeNS(ag,e,t):t==null||i&&!vy(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Us(t)?String(t):t)}function cg(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?CE(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=vy(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Sr(n,e,t,s){n.addEventListener(e,t,s)}function KS(n,e,t,s){n.removeEventListener(e,t,s)}const ug=Symbol("_vei");function GS(n,e,t,s,r=null){const i=n[ug]||(n[ug]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=QS(e);if(s){const u=i[e]=JS(s,r);Sr(n,a,u,c)}else o&&(KS(n,a,o,c),i[e]=void 0)}}const hg=/(?:Once|Passive|Capture)$/;function QS(n){let e;if(hg.test(n)){e={};let s;for(;s=n.match(hg);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Bs(n.slice(2)),e]}let su=0;const YS=Promise.resolve(),XS=()=>su||(YS.then(()=>su=0),su=Date.now());function JS(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Vn(ZS(s,t.value),e,5,[s])};return t.value=n,t.attached=XS(),t}function ZS(n,e){if(he(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const dg=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,eP=(n,e,t,s,r,i)=>{const o=r==="svg";e==="class"?$S(n,s,o):e==="style"?HS(n,t,s):$l(e)?zh(e)||GS(n,e,t,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tP(n,e,s,o))?(cg(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lg(n,e,s,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ze(s))?cg(n,ln(e),s,i,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),lg(n,e,s,o))};function tP(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&dg(e)&&de(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return dg(e)&&Ze(t)?!1:e in n}const fg=n=>{const e=n.props["onUpdate:modelValue"]||!1;return he(e)?t=>La(e,t):e};function nP(n){n.target.composing=!0}function pg(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ru=Symbol("_assign"),ji={created(n,{modifiers:{lazy:e,trim:t,number:s}},r){n[ru]=fg(r);const i=s||r.props&&r.props.type==="number";Sr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=Du(a)),n[ru](a)}),t&&Sr(n,"change",()=>{n.value=n.value.trim()}),e||(Sr(n,"compositionstart",nP),Sr(n,"compositionend",pg),Sr(n,"change",pg))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:r,number:i}},o){if(n[ru]=fg(o),n.composing)return;const a=(i||n.type==="number")&&!/^0\d/.test(n.value)?Du(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||r&&n.value.trim()===c)||(n.value=c))}},sP=["ctrl","shift","alt","meta"],rP={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>sP.some(t=>n[`${t}Key`]&&!e.includes(t))},gg=(n,e)=>{const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=rP[e[o]];if(a&&a(r,e))return}return n(r,...i)})},iP={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},oP=(n,e)=>{const t=n._withKeys||(n._withKeys={}),s=e.join(".");return t[s]||(t[s]=r=>{if(!("key"in r))return;const i=Bs(r.key);if(e.some(o=>o===i||iP[o]===i))return n(r)})},aP=bt({patchProp:eP},US);let _g;function lP(){return _g||(_g=lS(aP))}const cP=(...n)=>{const e=lP().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=hP(s);if(!r)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,uP(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function uP(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function hP(n){return Ze(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new Map,fP={activated:!1,tokenObservers:[]};function vn(n){return dP.get(n)||Object.assign({},fP)}const mg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,t,s,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new go,this.pending.promise.catch(t=>{}),await gP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new go,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function gP(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},dl=new ai("appCheck","AppCheck",_P);function bE(n){if(!vn(n).activated)throw dl.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="firebase-app-check-database",yP=1,zu="firebase-app-check-store";let Ta=null;function EP(){return Ta||(Ta=new Promise((n,e)=>{try{const t=indexedDB.open(mP,yP);t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var r;e(dl.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},t.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(zu,{keyPath:"compositeKey"})}}}catch(t){e(dl.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Ta)}function vP(n,e){return TP(IP(n),e)}async function TP(n,e){const s=(await EP()).transaction(zu,"readwrite"),i=s.objectStore(zu).put({compositeKey:n,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var u;a(dl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function IP(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new Mo("@firebase/app-check");function yg(n,e){return Rm()?vP(n,e).catch(t=>{Ku.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP={error:"UNKNOWN_ERROR"};function RP(n){return Ml.encodeString(JSON.stringify(n),!1)}async function Gu(n,e=!1){const t=n.app;bE(t);const s=vn(t);let r=s.token,i;if(r&&!qi(r)&&(s.token=void 0,r=void 0),!r){const c=await s.cachedTokenPromise;c&&(qi(c)?r=c:await yg(t,void 0))}if(!e&&r&&qi(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await vn(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Ku.warn(c.message):Ku.error(c),i=c}let a;return r?i?qi(r)?a={token:r.token,internalError:i}:a=vg(i):(a={token:r.token},s.token=r,await yg(t,r)):a=vg(i),o&&SP(t,a),a}async function AP(n){const e=n.app;bE(e);const{provider:t}=vn(e);{const{token:s}=await t.getToken();return{token:s}}}function CP(n,e,t,s){const{app:r}=n,i=vn(r),o={next:t,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&qi(i.token)){const a=i.token;Promise.resolve().then(()=>{t({token:a.token}),Eg(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Eg(n))}function SE(n,e){const t=vn(n),s=t.tokenObservers.filter(r=>r.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function Eg(n){const{app:e}=n,t=vn(e);let s=t.tokenRefresher;s||(s=bP(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function bP(n){const{app:e}=n;return new pP(async()=>{const t=vn(e);let s;if(t.token?s=await Gu(n,!0):s=await Gu(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=vn(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const r=t.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},mg.RETRIAL_MIN_WAIT,mg.RETRIAL_MAX_WAIT)}function SP(n,e){const t=vn(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function qi(n){return n.expireTimeMillis-Date.now()>0}function vg(n){return{token:RP(wP),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=vn(this.app);for(const t of e)SE(this.app,t.next);return Promise.resolve()}}function kP(n,e){return new PP(n,e)}function NP(n){return{getToken:e=>Gu(n,e),getLimitedUseToken:()=>AP(n),addTokenListener:e=>CP(n,"INTERNAL",e),removeTokenListener:e=>SE(n.app,e)}}const OP="@firebase/app-check",DP="0.8.10",xP="app-check",Tg="app-check-internal";function MP(){Ln(new En(xP,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return kP(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Tg).initialize()})),Ln(new En(Tg,n=>{const e=n.getProvider("app-check").getImmediate();return NP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Qt(OP,DP)}MP();var LP="firebase",VP="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(LP,VP,"app");const PE=Symbol("firebaseApp");function jo(n){return IE()&&Yt(PE,null)||Oh(n)}const Sn=()=>{},FP=typeof window<"u";function ad(n,e){return e.split(".").reduce((t,s)=>t&&t[s],n)}function UP(n,e,t){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],n);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,t):i[r]=t}function _r(n){return!!n&&typeof n=="object"}const BP=Object.prototype;function $P(n){return _r(n)&&Object.getPrototypeOf(n)===BP}function ld(n){return _r(n)&&n.type==="document"}function jP(n){return _r(n)&&n.type==="collection"}function qP(n){return ld(n)||jP(n)}function WP(n){return _r(n)&&n.type==="query"}function HP(n){return _r(n)&&"ref"in n}function zP(n){return _r(n)&&typeof n.bucket=="string"}function KP(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}const GP=Symbol.for("v-scx");function QP(){return!!Yt(GP,0)}const Ia=new WeakMap;function YP(n,e){if(!Ia.has(n)){const t=tb(!0);Ia.set(n,t);const{unmount:s}=e;e.unmount=()=>{s.call(e),t.stop(),Ia.delete(n)}}return Ia.get(n)}const kE=new WeakMap;function NE(n){return kE.get(jo(n))}const wa=new WeakMap;function OE(n){const e=jo(n);if(!wa.has(e)){let t;const r=[new Promise(i=>{t=i}),i=>{wa.set(e,i),t(i.value)}];wa.set(e,r)}return wa.get(e)}function XP(n){const e=OE(n);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function JP(n,e){ty(e,t=>{const s=OE();n.value=t,Array.isArray(s)&&s[1](n)})}var Ig={};const wg="@firebase/database",Rg="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DE="";function ZP(n){DE=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:_o(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ls(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ek(e)}}catch{}return new tk},sr=xE("localStorage"),nk=xE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Mo("@firebase/database"),sk=function(){let n=1;return function(){return n++}}(),ME=function(n){const e=Sw(n),t=new ww;t.update(e);const s=t.digest();return Ml.encodeByteArray(s)},qo=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=qo.apply(null,s):typeof s=="object"?e+=ct(s):e+=s,e+=" "}return e};let so=null,Ag=!0;const rk=function(n,e){G(!0,"Can't turn on custom loggers persistently."),Wr.logLevel=_e.VERBOSE,so=Wr.log.bind(Wr)},It=function(...n){if(Ag===!0&&(Ag=!1,so===null&&nk.get("logging_enabled")===!0&&rk()),so){const e=qo.apply(null,n);so(e)}},Wo=function(n){return function(...e){It(n,...e)}},Qu=function(...n){const e="FIREBASE INTERNAL ERROR: "+qo(...n);Wr.error(e)},hr=function(...n){const e=`FIREBASE FATAL ERROR: ${qo(...n)}`;throw Wr.error(e),new Error(e)},Xt=function(...n){const e="FIREBASE WARNING: "+qo(...n);Wr.warn(e)},ik=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},LE=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ok=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Qr="[MIN_NAME]",dr="[MAX_NAME]",ui=function(n,e){if(n===e)return 0;if(n===Qr||e===dr)return-1;if(e===Qr||n===dr)return 1;{const t=Cg(n),s=Cg(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},ak=function(n,e){return n===e?0:n<e?-1:1},Oi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ct(e))},cd=function(n){if(typeof n!="object"||n===null)return ct(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ct(e[s]),t+=":",t+=cd(n[e[s]]);return t+="}",t},VE=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function cn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const FE=function(n){G(!LE(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,o,a,c;n===0?(i=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},lk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ck=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},uk=new RegExp("^-?(0*)\\d{1,10}$"),hk=-2147483648,dk=2147483647,Cg=function(n){if(uk.test(n)){const e=Number(n);if(e>=hk&&e<=dk)return e}return null},Ho=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Xt("Exception was thrown by user callback.",t),e},Math.floor(0))}},fk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ro=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(It("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="5",UE="v",BE="s",$E="r",jE="f",qE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,WE="ls",HE="p",Yu="ac",zE="websocket",KE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,t,s,r,i=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function mk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function GE(n,e,t){G(typeof e=="string","typeof type must == string"),G(typeof t=="object","typeof params must == object");let s;if(e===zE)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===KE)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mk(n)&&(t.ns=n.namespace);const r=[];return cn(t,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.counters_={}}incrementCounter(e,t=1){ls(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return sw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu={},ou={};function hd(n){const e=n.toString();return iu[e]||(iu[e]=new yk),iu[e]}function Ek(n,e){const t=n.toString();return ou[t]||(ou[t]=e()),ou[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Ho(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="start",Tk="close",Ik="pLPCommand",wk="pRTLPCB",QE="id",YE="pw",XE="ser",Rk="cb",Ak="seg",Ck="ts",bk="d",Sk="dframe",JE=1870,ZE=30,Pk=JE-ZE,kk=25e3,Nk=3e4;class xr{constructor(e,t,s,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wo(e),this.stats_=hd(t),this.urlFn=c=>(this.appCheckToken&&(c[Yu]=this.appCheckToken),GE(t,KE,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new vk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Nk)),ok(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dd((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bg)this.id=a,this.password=c;else if(o===Tk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[bg]="t",s[XE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Rk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[UE]=ud,this.transportSessionId&&(s[BE]=this.transportSessionId),this.lastSessionId&&(s[WE]=this.lastSessionId),this.applicationId&&(s[HE]=this.applicationId),this.appCheckToken&&(s[Yu]=this.appCheckToken),typeof location<"u"&&location.hostname&&qE.test(location.hostname)&&(s[$E]=jE);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xr.forceAllow_=!0}static forceDisallow(){xr.forceDisallow_=!0}static isAvailable(){return xr.forceAllow_?!0:!xr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lk()&&!ck()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ym(t),r=VE(s,Pk);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Sk]="t",s[QE]=e,s[YE]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ct(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class dd{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sk(),window[Ik+this.uniqueCallbackIdentifier]=e,window[wk+this.uniqueCallbackIdentifier]=t,this.myIFrame=dd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){It("frame writing exception"),a.stack&&It(a.stack),It(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||It("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[QE]=this.myID,e[YE]=this.myPW,e[XE]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ZE+s.length<=JE;){const o=this.pendingSegs.shift();s=s+"&"+Ak+r+"="+o.seg+"&"+Ck+r+"="+o.ts+"&"+bk+r+"="+o.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor(kk)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{It("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=16384,Dk=45e3;let fl=null;typeof MozWebSocket<"u"?fl=MozWebSocket:typeof WebSocket<"u"&&(fl=WebSocket);class Pn{constructor(e,t,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wo(this.connId),this.stats_=hd(t),this.connURL=Pn.connectionURL_(t,o,a,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const o={};return o[UE]=ud,typeof location<"u"&&location.hostname&&qE.test(location.hostname)&&(o[$E]=jE),t&&(o[BE]=t),s&&(o[WE]=s),r&&(o[Yu]=r),i&&(o[HE]=i),GE(e,zE,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sr.set("previous_websocket_failure",!0);try{let s;gw(),this.mySock=new fl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&fl!==null&&!Pn.forceDisallow_}static previouslyFailed(){return sr.isInMemoryStorage||sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=_o(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(G(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=VE(t,Ok);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Dk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pn.responsesRequiredToBeHealthy=2;Pn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static get ALL_TRANSPORTS(){return[xr,Pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Pn.isAvailable();let s=t&&!Pn.previouslyFailed();if(e.webSocketOnly&&(t||Xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Pn];else{const r=this.transports_=[];for(const i of Ao.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Ao.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ao.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=6e4,Mk=5e3,Lk=10*1024,Vk=100*1024,au="t",Sg="d",Fk="s",Pg="r",Uk="e",kg="o",Ng="a",Og="n",Dg="p",Bk="h";class $k{constructor(e,t,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wo("c:"+this.id+":"),this.transportManager_=new Ao(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ro(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Vk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Lk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(au in e){const t=e[au];t===Ng?this.upgradeIfSecondaryHealthy_():t===Pg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===kg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Oi("t",e),s=Oi("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ng,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Og,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Oi("t",e),s=Oi("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Oi(au,e);if(Sg in e){const s=e[Sg];if(t===Bk){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Og){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Fk?this.onConnectionShutdown_(s):t===Pg?this.onReset_(s):t===Uk?Qu("Server Error: "+s):t===kg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ud!==s&&Xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),ro(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ro(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Mk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.allowedEvents_=e,this.listeners_={},G(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){G(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends tv{static getInstance(){return new pl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ph()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return G(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=32,Mg=768;class $e{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function De(){return new $e("")}function Re(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ss(n){return n.pieces_.length-n.pieceNum_}function Ue(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new $e(n.pieces_,e)}function nv(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function jk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function sv(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function rv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new $e(e,0)}function rt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof $e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new $e(t,0)}function ve(n){return n.pieceNum_>=n.pieces_.length}function sn(n,e){const t=Re(n),s=Re(e);if(t===null)return e;if(t===s)return sn(Ue(n),Ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function iv(n,e){if(Ss(n)!==Ss(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function fn(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ss(n)>Ss(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class qk{constructor(e,t){this.errorPrefix_=t,this.parts_=sv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Vl(this.parts_[s]);ov(this)}}function Wk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Vl(e),ov(n)}function Hk(n){const e=n.parts_.pop();n.byteLength_-=Vl(e),n.parts_.length>0&&(n.byteLength_-=1)}function ov(n){if(n.byteLength_>Mg)throw new Error(n.errorPrefix_+"has a key path longer than "+Mg+" bytes ("+n.byteLength_+").");if(n.parts_.length>xg)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xg+") or object contains a cycle "+er(n))}function er(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends tv{static getInstance(){return new fd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return G(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=1e3,zk=60*5*1e3,Lg=30*1e3,Kk=1.3,Gk=3e4,Qk="server_kill",Vg=3;class ns extends ev{constructor(e,t,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ns.nextPersistentConnectionId_++,this.log_=Wo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Di,this.maxReconnectDelay_=zk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(ct(i)),G(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new go,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),G(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),G(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;ns.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ls(e,"w")){const s=Kr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Iw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Tw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),G(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const o={p:t,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Qu("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){G(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gk&&(this.reconnectDelay_=Di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ns.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){G(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?It("getToken() completed but was canceled"):(It("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new $k(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{Xt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Qk)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Xt(f),c())}}}interrupt(e){It("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){It("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wu(this.interruptReasons_)&&(this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>cd(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new $e(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){It("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vg&&(this.reconnectDelay_=Lg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){It("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+DE.replace(/\./g,"-")]=1,Ph()?e["framework.cordova"]=1:wm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pl.getInstance().currentlyOnline();return wu(this.interruptReasons_)&&e}}ns.nextPersistentConnectionId_=0;ns.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ae(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ae(Qr,e),r=new Ae(Qr,t);return this.compare(s,r)!==0}minPost(){return Ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra;class av extends ec{static get __EMPTY_NODE(){return Ra}static set __EMPTY_NODE(e){Ra=e}compare(e,t){return ui(e.name,t.name)}isDefinedOn(e){throw oi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(dr,Ra)}makePost(e,t){return G(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,Ra)}toString(){return".key"}}const Hr=new av;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa=class{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Wt=class Wi{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Wi.RED,this.left=r??kn.EMPTY_NODE,this.right=i??kn.EMPTY_NODE}copy(e,t,s,r,i){return new Wi(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return kn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return kn.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Wt.RED=!0;Wt.BLACK=!1;class Yk{copy(e,t,s,r,i){return this}insert(e,t,s){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let kn=class Ba{constructor(e,t=Ba.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ba(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Ba(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Aa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Aa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Aa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Aa(this.root_,null,this.comparator_,!0,e)}};kn.EMPTY_NODE=new Yk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(n,e){return ui(n.name,e.name)}function pd(n,e){return ui(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;function Jk(n){Xu=n}const lv=function(n){return typeof n=="number"?"number:"+FE(n):"string:"+n},cv=function(n){if(n.isLeafNode()){const e=n.val();G(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ls(e,".sv"),"Priority must be a string or number.")}else G(n===Xu||n.isEmpty(),"priority of unexpected type.");G(n===Xu||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fg;class nt{static set __childrenNodeConstructor(e){Fg=e}static get __childrenNodeConstructor(){return Fg}constructor(e,t=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,G(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ve(e)?this:Re(e)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Re(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(G(s!==".priority"||Ss(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ue(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=FE(this.value_):e+=this.value_,this.lazyHash_=ME(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nt.__childrenNodeConstructor?-1:(G(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=nt.VALUE_TYPE_ORDER.indexOf(t),i=nt.VALUE_TYPE_ORDER.indexOf(s);return G(r>=0,"Unknown leaf type: "+t),G(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uv,hv;function Zk(n){uv=n}function e0(n){hv=n}class t0 extends ec{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?ui(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(dr,new nt("[PRIORITY-POST]",hv))}makePost(e,t){const s=uv(e);return new Ae(t,new nt("[PRIORITY-POST]",s))}toString(){return".priority"}}const At=new t0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=Math.log(2);class s0{constructor(e){const t=i=>parseInt(Math.log(i)/n0,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gl=function(n,e,t,s){n.sort(e);const r=function(c,u){const h=u-c;let f,g;if(h===0)return null;if(h===1)return f=n[c],g=t?t(f):f,new Wt(g,f.node,Wt.BLACK,null,null);{const _=parseInt(h/2,10)+c,v=r(c,_),C=r(_+1,u);return f=n[_],g=t?t(f):f,new Wt(g,f.node,Wt.BLACK,v,C)}},i=function(c){let u=null,h=null,f=n.length;const g=function(v,C){const P=f-v,U=f;f-=v;const j=r(P+1,U),D=n[P],L=t?t(D):D;_(new Wt(L,D.node,C,null,j))},_=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<c.count;++v){const C=c.nextBitIsOne(),P=Math.pow(2,c.count-(v+1));C?g(P,Wt.BLACK):(g(P,Wt.BLACK),g(P,Wt.RED))}return h},o=new s0(n.length),a=i(o);return new kn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lu;const xi={};class es{static get Default(){return G(At,"ChildrenNode.ts has not been loaded"),lu=lu||new es({".priority":xi},{".priority":At}),lu}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Kr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof kn?t:null}hasIndex(e){return ls(this.indexSet_,e.toString())}addIndex(e,t){G(e!==Hr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(Ae.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=gl(s,e.getCompare()):a=xi;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new es(h,u)}addToIndexes(e,t){const s=Ya(this.indexes_,(r,i)=>{const o=Kr(this.indexSet_,i);if(G(o,"Missing index implementation for "+i),r===xi)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Ae.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),gl(a,o.getCompare())}else return xi;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new Ae(e.name,a))),c.insert(e,e.node)}});return new es(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ya(this.indexes_,r=>{if(r===xi)return r;{const i=t.get(e.name);return i?r.remove(new Ae(e.name,i)):r}});return new es(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;class Ne{static get EMPTY_NODE(){return Mi||(Mi=new Ne(new kn(pd),null,es.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&cv(this.priorityNode_),this.children_.isEmpty()&&G(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mi}updatePriority(e){return this.children_.isEmpty()?this:new Ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Mi:t}}getChild(e){const t=Re(e);return t===null?this:this.getImmediateChild(t).getChild(Ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(G(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ae(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Mi:this.priorityNode_;return new Ne(r,o,i)}}updateChild(e,t){const s=Re(e);if(s===null)return t;{G(Re(e)!==".priority"||Ss(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Ue(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(At,(o,a)=>{t[o]=a.val(e),s++,i&&Ne.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lv(this.getPriority().val())+":"),this.forEachChild(At,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":ME(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Ae(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ae(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ae(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zo?-1:0}withIndex(e){if(e===Hr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ne(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Hr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(At),r=t.getIterator(At);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hr?null:this.indexMap_.get(e.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class r0 extends Ne{constructor(){super(new kn(pd),Ne.EMPTY_NODE,es.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ne.EMPTY_NODE}isEmpty(){return!1}}const zo=new r0;Object.defineProperties(Ae,{MIN:{value:new Ae(Qr,Ne.EMPTY_NODE)},MAX:{value:new Ae(dr,zo)}});av.__EMPTY_NODE=Ne.EMPTY_NODE;nt.__childrenNodeConstructor=Ne;Jk(zo);e0(zo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=!0;function wt(n,e=null){if(n===null)return Ne.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),G(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new nt(t,wt(e))}if(!(n instanceof Array)&&i0){const t=[];let s=!1;if(cn(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=wt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new Ae(o,c)))}}),t.length===0)return Ne.EMPTY_NODE;const i=gl(t,Xk,o=>o.name,pd);if(s){const o=gl(t,At.getCompare());return new Ne(i,wt(e),new es({".priority":o},{".priority":At}))}else return new Ne(i,wt(e),es.Default)}else{let t=Ne.EMPTY_NODE;return cn(n,(s,r)=>{if(ls(n,s)&&s.substring(0,1)!=="."){const i=wt(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(wt(e))}}Zk(wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0 extends ec{constructor(e){super(),this.indexPath_=e,G(!ve(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?ui(e.name,t.name):i}makePost(e,t){const s=wt(e),r=Ne.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ae(t,r)}maxPost(){const e=Ne.EMPTY_NODE.updateChild(this.indexPath_,zo);return new Ae(dr,e)}toString(){return sv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0 extends ec{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ui(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,t){const s=wt(e);return new Ae(t,s)}toString(){return".value"}}const l0=new a0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(n){return{type:"value",snapshotNode:n}}function u0(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function h0(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ug(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function d0(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return G(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return G(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qr}hasEnd(){return this.endSet_}getIndexEndValue(){return G(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return G(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return G(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new gd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Bg(n){const e={};if(n.isDefault())return e;let t;if(n.index_===At?t="$priority":n.index_===l0?t="$value":n.index_===Hr?t="$key":(G(n.index_ instanceof o0,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ct(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ct(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ct(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ct(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ct(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function $g(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==At&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends ev{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(G(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Wo("p:rest:"),this.listens_={}}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=_l.getListenId_(e,s),a={};this.listens_[o]=a;const c=Bg(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,s),Kr(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",r(g,null)}})}unlisten(e,t){const s=_l.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Bg(e._queryParams),s=e._path.toString(),r=new go;return this.restRequest_(s+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+li(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=_o(a.responseText)}catch{Xt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Xt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){return{value:null,children:new Map}}function dv(n,e,t){if(ve(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Re(e);n.children.has(s)||n.children.set(s,ml());const r=n.children.get(s);e=Ue(e),dv(r,e,t)}}function Ju(n,e,t){n.value!==null?t(e,n.value):p0(n,(s,r)=>{const i=new $e(e.toString()+"/"+s);Ju(r,i,t)})}function p0(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&cn(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=10*1e3,_0=30*1e3,m0=5*60*1e3;class y0{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new g0(e);const s=jg+(_0-jg)*Math.random();ro(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;cn(e,(r,i)=>{i>0&&ls(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),ro(this.reportStats_.bind(this),Math.floor(Math.random()*2*m0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nn||(Nn={}));function fv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Nn.ACK_USER_WRITE,this.source=fv()}operationForChild(e){if(ve(this.path)){if(this.affectedTree.value!=null)return G(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new $e(e));return new yl(De(),t,this.revert)}}else return G(Re(this.path)===e,"operationForChild called for unrelated child."),new yl(Ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Nn.OVERWRITE}operationForChild(e){return ve(this.path)?new fr(this.source,De(),this.snap.getImmediateChild(e)):new fr(this.source,Ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Nn.MERGE}operationForChild(e){if(ve(this.path)){const t=this.children.subtree(new $e(e));return t.isEmpty()?null:t.value?new fr(this.source,De(),t.value):new Co(this.source,De(),t)}else return G(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Co(this.source,Ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ve(e))return this.isFullyInitialized()&&!this.filtered_;const t=Re(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function E0(n,e,t,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(d0(o.childName,o.snapshotNode))}),Li(n,r,"child_removed",e,s,t),Li(n,r,"child_added",e,s,t),Li(n,r,"child_moved",i,s,t),Li(n,r,"child_changed",e,s,t),Li(n,r,"value",e,s,t),r}function Li(n,e,t,s,r,i){const o=s.filter(a=>a.type===t);o.sort((a,c)=>T0(n,a,c)),o.forEach(a=>{const c=v0(n,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function v0(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function T0(n,e,t){if(e.childName==null||t.childName==null)throw oi("Should only compare child_ events.");const s=new Ae(e.childName,e.snapshotNode),r=new Ae(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(n,e){return{eventCache:n,serverCache:e}}function io(n,e,t,s){return _v(new _d(e,t,s),n.serverCache)}function mv(n,e,t,s){return _v(n.eventCache,new _d(e,t,s))}function Zu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function pr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu;const I0=()=>(cu||(cu=new kn(ak)),cu);class Fe{static fromObject(e){let t=new Fe(null);return cn(e,(s,r)=>{t=t.set(new $e(s),r)}),t}constructor(e,t=I0()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:De(),value:this.value};if(ve(e))return null;{const s=Re(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Ue(e),t);return i!=null?{path:rt(new $e(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ve(e))return this;{const t=Re(e),s=this.children.get(t);return s!==null?s.subtree(Ue(e)):new Fe(null)}}set(e,t){if(ve(e))return new Fe(t,this.children);{const s=Re(e),i=(this.children.get(s)||new Fe(null)).set(Ue(e),t),o=this.children.insert(s,i);return new Fe(this.value,o)}}remove(e){if(ve(e))return this.children.isEmpty()?new Fe(null):new Fe(null,this.children);{const t=Re(e),s=this.children.get(t);if(s){const r=s.remove(Ue(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new Fe(null):new Fe(this.value,i)}else return this}}get(e){if(ve(e))return this.value;{const t=Re(e),s=this.children.get(t);return s?s.get(Ue(e)):null}}setTree(e,t){if(ve(e))return t;{const s=Re(e),i=(this.children.get(s)||new Fe(null)).setTree(Ue(e),t);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Fe(this.value,o)}}fold(e){return this.fold_(De(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(rt(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,De(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(ve(e))return null;{const i=Re(e),o=this.children.get(i);return o?o.findOnPath_(Ue(e),rt(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,De(),t)}foreachOnPath_(e,t,s){if(ve(e))return this;{this.value&&s(t,this.value);const r=Re(e),i=this.children.get(r);return i?i.foreachOnPath_(Ue(e),rt(t,r),s):new Fe(null)}}foreach(e){this.foreach_(De(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(rt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.writeTree_=e}static empty(){return new mn(new Fe(null))}}function oo(n,e,t){if(ve(e))return new mn(new Fe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=sn(r,e);return i=i.updateChild(o,t),new mn(n.writeTree_.set(r,i))}else{const r=new Fe(t),i=n.writeTree_.setTree(e,r);return new mn(i)}}}function qg(n,e,t){let s=n;return cn(t,(r,i)=>{s=oo(s,rt(e,r),i)}),s}function Wg(n,e){if(ve(e))return mn.empty();{const t=n.writeTree_.setTree(e,new Fe(null));return new mn(t)}}function eh(n,e){return mr(n,e)!=null}function mr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(sn(t.path,e)):null}function Hg(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(At,(s,r)=>{e.push(new Ae(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Ae(s,r.value))}),e}function Cs(n,e){if(ve(e))return n;{const t=mr(n,e);return t!=null?new mn(new Fe(t)):new mn(n.writeTree_.subtree(e))}}function th(n){return n.writeTree_.isEmpty()}function Yr(n,e){return yv(De(),n.writeTree_,e)}function yv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(G(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=yv(rt(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(rt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(n,e){return Rv(e,n)}function w0(n,e,t,s,r){G(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=oo(n.visibleWrites,e,t)),n.lastWriteId=s}function R0(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function A0(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);G(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&C0(a,s.path)?r=!1:fn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return b0(n),!0;if(s.snap)n.visibleWrites=Wg(n.visibleWrites,s.path);else{const a=s.children;cn(a,c=>{n.visibleWrites=Wg(n.visibleWrites,rt(s.path,c))})}return!0}else return!1}function C0(n,e){if(n.snap)return fn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&fn(rt(n.path,t),e))return!0;return!1}function b0(n){n.visibleWrites=vv(n.allWrites,S0,De()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function S0(n){return n.visible}function vv(n,e,t){let s=mn.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const o=i.path;let a;if(i.snap)fn(t,o)?(a=sn(t,o),s=oo(s,a,i.snap)):fn(o,t)&&(a=sn(o,t),s=oo(s,De(),i.snap.getChild(a)));else if(i.children){if(fn(t,o))a=sn(t,o),s=qg(s,a,i.children);else if(fn(o,t))if(a=sn(o,t),ve(a))s=qg(s,De(),i.children);else{const c=Kr(i.children,Re(a));if(c){const u=c.getChild(Ue(a));s=oo(s,De(),u)}}}else throw oi("WriteRecord should have .snap or .children")}}return s}function Tv(n,e,t,s,r){if(!s&&!r){const i=mr(n.visibleWrites,e);if(i!=null)return i;{const o=Cs(n.visibleWrites,e);if(th(o))return t;if(t==null&&!eh(o,De()))return null;{const a=t||Ne.EMPTY_NODE;return Yr(o,a)}}}else{const i=Cs(n.visibleWrites,e);if(!r&&th(i))return t;if(!r&&t==null&&!eh(i,De()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(fn(u.path,e)||fn(e,u.path))},a=vv(n.allWrites,o,e),c=t||Ne.EMPTY_NODE;return Yr(a,c)}}}function P0(n,e,t){let s=Ne.EMPTY_NODE;const r=mr(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(At,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(t){const i=Cs(n.visibleWrites,e);return t.forEachChild(At,(o,a)=>{const c=Yr(Cs(i,new $e(o)),a);s=s.updateImmediateChild(o,c)}),Hg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Cs(n.visibleWrites,e);return Hg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function k0(n,e,t,s,r){G(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=rt(e,t);if(eh(n.visibleWrites,i))return null;{const o=Cs(n.visibleWrites,i);return th(o)?r.getChild(t):Yr(o,r.getChild(t))}}function N0(n,e,t,s){const r=rt(e,t),i=mr(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const o=Cs(n.visibleWrites,r);return Yr(o,s.getNode().getImmediateChild(t))}else return null}function O0(n,e){return mr(n.visibleWrites,e)}function D0(n,e,t,s,r,i,o){let a;const c=Cs(n.visibleWrites,e),u=mr(c,De());if(u!=null)a=u;else if(t!=null)a=Yr(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),g=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=g.getNext();for(;_&&h.length<r;)f(_,s)!==0&&h.push(_),_=g.getNext();return h}else return[]}function x0(){return{visibleWrites:mn.empty(),allWrites:[],lastWriteId:-1}}function nh(n,e,t,s){return Tv(n.writeTree,n.treePath,e,t,s)}function Iv(n,e){return P0(n.writeTree,n.treePath,e)}function zg(n,e,t,s){return k0(n.writeTree,n.treePath,e,t,s)}function El(n,e){return O0(n.writeTree,rt(n.treePath,e))}function M0(n,e,t,s,r,i){return D0(n.writeTree,n.treePath,e,t,s,r,i)}function md(n,e,t){return N0(n.writeTree,n.treePath,e,t)}function wv(n,e){return Rv(rt(n.treePath,e),n.writeTree)}function Rv(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;G(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),G(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,Ug(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,h0(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,u0(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,Ug(s,e.snapshotNode,r.oldSnap));else throw oi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Av=new V0;class yd{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new _d(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return md(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pr(this.viewCache_),i=M0(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}function F0(n,e){G(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),G(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function U0(n,e,t,s,r){const i=new L0;let o,a;if(t.type===Nn.OVERWRITE){const u=t;u.source.fromUser?o=sh(n,e,u.path,u.snap,s,r,i):(G(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ve(u.path),o=vl(n,e,u.path,u.snap,s,r,a,i))}else if(t.type===Nn.MERGE){const u=t;u.source.fromUser?o=$0(n,e,u.path,u.children,s,r,i):(G(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=rh(n,e,u.path,u.children,s,r,a,i))}else if(t.type===Nn.ACK_USER_WRITE){const u=t;u.revert?o=W0(n,e,u.path,s,r,i):o=j0(n,e,u.path,u.affectedTree,s,r,i)}else if(t.type===Nn.LISTEN_COMPLETE)o=q0(n,e,t.path,s,i);else throw oi("Unknown operation type: "+t.type);const c=i.getChanges();return B0(e,o,c),{viewCache:o,changes:c}}function B0(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Zu(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push(c0(Zu(e)))}}function Cv(n,e,t,s,r,i){const o=e.eventCache;if(El(s,t)!=null)return e;{let a,c;if(ve(t))if(G(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=pr(e),h=u instanceof Ne?u:Ne.EMPTY_NODE,f=Iv(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=nh(s,pr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Re(t);if(u===".priority"){G(Ss(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=zg(s,t,h,c);f!=null?a=n.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ue(t);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=zg(s,t,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(u).updateChild(h,g):f=o.getNode().getImmediateChild(u)}else f=md(s,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,h,r,i):a=o.getNode()}}return io(e,a,o.isFullyInitialized()||ve(t),n.filter.filtersNodes())}}function vl(n,e,t,s,r,i,o,a){const c=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(ve(t))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(t,s);u=h.updateFullNode(c.getNode(),_,null)}else{const _=Re(t);if(!c.isCompleteForPath(t)&&Ss(t)>1)return e;const v=Ue(t),P=c.getNode().getImmediateChild(_).updateChild(v,s);_===".priority"?u=h.updatePriority(c.getNode(),P):u=h.updateChild(c.getNode(),_,P,v,Av,null)}const f=mv(e,u,c.isFullyInitialized()||ve(t),h.filtersNodes()),g=new yd(r,f,i);return Cv(n,f,t,r,g,a)}function sh(n,e,t,s,r,i,o){const a=e.eventCache;let c,u;const h=new yd(r,e,i);if(ve(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=io(e,u,!0,n.filter.filtersNodes());else{const f=Re(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=io(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=Ue(t),_=a.getNode().getImmediateChild(f);let v;if(ve(g))v=s;else{const C=h.getCompleteChild(f);C!=null?nv(g)===".priority"&&C.getChild(rv(g)).isEmpty()?v=C:v=C.updateChild(g,s):v=Ne.EMPTY_NODE}if(_.equals(v))c=e;else{const C=n.filter.updateChild(a.getNode(),f,v,g,h,o);c=io(e,C,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Kg(n,e){return n.eventCache.isCompleteForChild(e)}function $0(n,e,t,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=rt(t,c);Kg(e,Re(h))&&(a=sh(n,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=rt(t,c);Kg(e,Re(h))||(a=sh(n,a,h,u,r,i,o))}),a}function Gg(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function rh(n,e,t,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;ve(t)?u=s:u=new Fe(null).setTree(t,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),v=Gg(n,_,g);c=vl(n,c,new $e(f),v,r,i,o,a)}}),u.children.inorderTraversal((f,g)=>{const _=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!h.hasChild(f)&&!_){const v=e.serverCache.getNode().getImmediateChild(f),C=Gg(n,v,g);c=vl(n,c,new $e(f),C,r,i,o,a)}}),c}function j0(n,e,t,s,r,i,o){if(El(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ve(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return vl(n,e,t,c.getNode().getChild(t),r,i,a,o);if(ve(t)){let u=new Fe(null);return c.getNode().forEachChild(Hr,(h,f)=>{u=u.set(new $e(h),f)}),rh(n,e,t,u,r,i,a,o)}else return e}else{let u=new Fe(null);return s.foreach((h,f)=>{const g=rt(t,h);c.isCompleteForPath(g)&&(u=u.set(h,c.getNode().getChild(g)))}),rh(n,e,t,u,r,i,a,o)}}function q0(n,e,t,s,r){const i=e.serverCache,o=mv(e,i.getNode(),i.isFullyInitialized()||ve(t),i.isFiltered());return Cv(n,o,t,s,Av,r)}function W0(n,e,t,s,r,i){let o;if(El(s,t)!=null)return e;{const a=new yd(s,e,r),c=e.eventCache.getNode();let u;if(ve(t)||Re(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=nh(s,pr(e));else{const f=e.serverCache.getNode();G(f instanceof Ne,"serverChildren would be complete if leaf node"),h=Iv(s,f)}h=h,u=n.filter.updateFullNode(c,h,i)}else{const h=Re(t);let f=md(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=n.filter.updateChild(c,h,f,Ue(t),a,i):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(c,h,Ne.EMPTY_NODE,Ue(t),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nh(s,pr(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||El(s,De())!=null,io(e,u,o,n.filter.filtersNodes())}}function H0(n,e){const t=pr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ve(e)&&!t.getImmediateChild(Re(e)).isEmpty())?t.getChild(e):null}function Qg(n,e,t,s){e.type===Nn.MERGE&&e.source.queryId!==null&&(G(pr(n.viewCache_),"We should always have a full cache before handling merges"),G(Zu(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=U0(n.processor_,r,e,t,s);return F0(n.processor_,i.viewCache),G(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,z0(n,i.changes,i.viewCache.eventCache.getNode())}function z0(n,e,t,s){const r=n.eventRegistrations_;return E0(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yg;function K0(n){G(!Yg,"__referenceConstructor has already been defined"),Yg=n}function Ed(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return G(i!=null,"SyncTree gave us an op for an invalid query."),Qg(i,e,t,s)}else{let i=[];for(const o of n.views.values())i=i.concat(Qg(o,e,t,s));return i}}function vd(n,e){let t=null;for(const s of n.views.values())t=t||H0(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xg;function G0(n){G(!Xg,"__referenceConstructor has already been defined"),Xg=n}class Jg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Fe(null),this.pendingWriteTree_=x0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Q0(n,e,t,s,r){return w0(n.pendingWriteTree_,e,t,s,r),r?nc(n,new fr(fv(),e,t)):[]}function Mr(n,e,t=!1){const s=R0(n.pendingWriteTree_,e);if(A0(n.pendingWriteTree_,e)){let i=new Fe(null);return s.snap!=null?i=i.set(De(),!0):cn(s.children,o=>{i=i.set(new $e(o),!0)}),nc(n,new yl(s.path,i,t))}else return[]}function tc(n,e,t){return nc(n,new fr(pv(),e,t))}function Y0(n,e,t){const s=Fe.fromObject(t);return nc(n,new Co(pv(),e,s))}function X0(n,e,t,s){const r=kv(n,s);if(r!=null){const i=Nv(r),o=i.path,a=i.queryId,c=sn(o,e),u=new fr(gv(a),c,t);return Ov(n,o,u)}else return[]}function J0(n,e,t,s){const r=kv(n,s);if(r){const i=Nv(r),o=i.path,a=i.queryId,c=sn(o,e),u=Fe.fromObject(t),h=new Co(gv(a),c,u);return Ov(n,o,h)}else return[]}function bv(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=sn(o,e),u=vd(a,c);if(u)return u});return Tv(r,e,i,t,!0)}function nc(n,e){return Sv(e,n.syncPointTree_,null,Ev(n.pendingWriteTree_,De()))}function Sv(n,e,t,s){if(ve(n.path))return Pv(n,e,t,s);{const r=e.get(De());t==null&&r!=null&&(t=vd(r,De()));let i=[];const o=Re(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,h=wv(s,o);i=i.concat(Sv(a,c,u,h))}return r&&(i=i.concat(Ed(r,n,s,t))),i}}function Pv(n,e,t,s){const r=e.get(De());t==null&&r!=null&&(t=vd(r,De()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=wv(s,o),h=n.operationForChild(o);h&&(i=i.concat(Pv(h,a,c,u)))}),r&&(i=i.concat(Ed(r,n,s,t))),i}function kv(n,e){return n.tagToQueryMap.get(e)}function Nv(n){const e=n.indexOf("$");return G(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new $e(n.substr(0,e))}}function Ov(n,e,t){const s=n.syncPointTree_.get(e);G(s,"Missing sync point for query tag that we're tracking");const r=Ev(n.pendingWriteTree_,e);return Ed(s,t,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Td(t)}node(){return this.node_}}class Id{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=rt(this.path_,e);return new Id(this.syncTree_,t)}node(){return bv(this.syncTree_,this.path_)}}const Z0=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Zg=function(n,e,t){if(!n||typeof n!="object")return n;if(G(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return eN(n[".sv"],e,t);if(typeof n[".sv"]=="object")return tN(n[".sv"],e);G(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},eN=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:G(!1,"Unexpected server value: "+n)}},tN=function(n,e,t){n.hasOwnProperty("increment")||G(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&G(!1,"Unexpected increment value: "+s);const r=e.node();if(G(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},nN=function(n,e,t,s){return wd(e,new Id(t,n),s)},sN=function(n,e,t){return wd(n,new Td(e),t)};function wd(n,e,t){const s=n.getPriority().val(),r=Zg(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=Zg(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new nt(a,wt(r)):n}else{const o=n;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new nt(r))),o.forEachChild(At,(a,c)=>{const u=wd(c,e.getImmediateChild(a),t);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Ad(n,e){let t=e instanceof $e?e:new $e(e),s=n,r=Re(t);for(;r!==null;){const i=Kr(s.node.children,r)||{children:{},childCount:0};s=new Rd(r,s,i),t=Ue(t),r=Re(t)}return s}function hi(n){return n.node.value}function Dv(n,e){n.node.value=e,ih(n)}function xv(n){return n.node.childCount>0}function rN(n){return hi(n)===void 0&&!xv(n)}function sc(n,e){cn(n.node.children,(t,s)=>{e(new Rd(t,n,s))})}function Mv(n,e,t,s){t&&e(n),sc(n,r=>{Mv(r,e,!0)})}function iN(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ko(n){return new $e(n.parent===null?n.name:Ko(n.parent)+"/"+n.name)}function ih(n){n.parent!==null&&oN(n.parent,n.name,n)}function oN(n,e,t){const s=rN(t),r=ls(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,ih(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,ih(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=/[\[\].#$\/\u0000-\u001F\u007F]/,lN=/[\[\].#$\u0000-\u001F\u007F]/,uu=10*1024*1024,Lv=function(n){return typeof n=="string"&&n.length!==0&&!aN.test(n)},cN=function(n){return typeof n=="string"&&n.length!==0&&!lN.test(n)},uN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cN(n)},Vv=function(n,e,t){const s=t instanceof $e?new qk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+er(s));if(typeof e=="function")throw new Error(n+"contains a function "+er(s)+" with contents = "+e.toString());if(LE(e))throw new Error(n+"contains "+e.toString()+" "+er(s));if(typeof e=="string"&&e.length>uu/3&&Vl(e)>uu)throw new Error(n+"contains a string greater than "+uu+" utf8 bytes "+er(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(cn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Lv(o)))throw new Error(n+" contains an invalid key ("+o+") "+er(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Wk(s,o),Vv(n,a,s),Hk(s)}),r&&i)throw new Error(n+' contains ".value" child '+er(s)+" in addition to actual children.")}},hN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!uN(t))throw new Error(bw(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fN(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!iv(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function yr(n,e,t){fN(n,t),pN(n,s=>fn(s,e)||fn(e,s))}function pN(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(gN(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function gN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();so&&It("event: "+t.toString()),Ho(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N="repo_interrupt",mN=25;class yN{constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new Rd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function EN(n,e,t){if(n.stats_=hd(n.repoInfo_),n.forceRestClient_||fk())n.server_=new _l(n.repoInfo_,(s,r,i,o)=>{e_(n,s,r,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>t_(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ns(n.repoInfo_,e,(s,r,i,o)=>{e_(n,s,r,i,o)},s=>{t_(n,s)},s=>{TN(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ek(n.repoInfo_,()=>new y0(n.stats_,n.server_)),n.infoData_=new f0,n.infoSyncTree_=new Jg({startListening:(s,r,i,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=tc(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cd(n,"connected",!1),n.serverSyncTree_=new Jg({startListening:(s,r,i,o)=>(n.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);yr(n.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function vN(n){const t=n.infoData_.getNode(new $e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Fv(n){return Z0({timestamp:vN(n)})}function e_(n,e,t,s,r){n.dataUpdateCount++;const i=new $e(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(s){const c=Ya(t,u=>wt(u));o=J0(n.serverSyncTree_,i,c,r)}else{const c=wt(t);o=X0(n.serverSyncTree_,i,c,r)}else if(s){const c=Ya(t,u=>wt(u));o=Y0(n.serverSyncTree_,i,c)}else{const c=wt(t);o=tc(n.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Sd(n,i)),yr(n.eventQueue_,a,o)}function t_(n,e){Cd(n,"connected",e),e===!1&&wN(n)}function TN(n,e){cn(e,(t,s)=>{Cd(n,t,s)})}function Cd(n,e,t){const s=new $e("/.info/"+e),r=wt(t);n.infoData_.updateSnapshot(s,r);const i=tc(n.infoSyncTree_,s,r);yr(n.eventQueue_,s,i)}function IN(n){return n.nextWriteId_++}function wN(n){Uv(n,"onDisconnectEvents");const e=Fv(n),t=ml();Ju(n.onDisconnect_,De(),(r,i)=>{const o=nN(r,i,n.serverSyncTree_,e);dv(t,r,o)});let s=[];Ju(t,De(),(r,i)=>{s=s.concat(tc(n.serverSyncTree_,r,i));const o=bN(n,r);Sd(n,o)}),n.onDisconnect_=ml(),yr(n.eventQueue_,De(),s)}function RN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(_N)}function Uv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),It(t,...e)}function Bv(n,e,t){return bv(n.serverSyncTree_,e,t)||Ne.EMPTY_NODE}function bd(n,e=n.transactionQueueTree_){if(e||rc(n,e),hi(e)){const t=jv(n,e);G(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&AN(n,Ko(e),t)}else xv(e)&&sc(e,t=>{bd(n,t)})}function AN(n,e,t){const s=t.map(u=>u.currentWriteId),r=Bv(n,e,s);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const h=t[u];G(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=sn(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;n.server_.put(c.toString(),a,u=>{Uv(n,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let g=0;g<t.length;g++)t[g].status=2,h=h.concat(Mr(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&f.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();rc(n,Ad(n.transactionQueueTree_,e)),bd(n,n.transactionQueueTree_),yr(n.eventQueue_,e,h);for(let g=0;g<f.length;g++)Ho(f[g])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Xt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}Sd(n,e)}},o)}function Sd(n,e){const t=$v(n,e),s=Ko(t),r=jv(n,t);return CN(n,r,s),s}function CN(n,e,t){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=sn(t,c.path);let h=!1,f;if(G(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(Mr(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=mN)h=!0,f="maxretry",r=r.concat(Mr(n.serverSyncTree_,c.currentWriteId,!0));else{const g=Bv(n,c.path,o);c.currentInputSnapshot=g;const _=e[a].update(g.val());if(_!==void 0){Vv("transaction failed: Data returned ",_,c.path);let v=wt(_);typeof _=="object"&&_!=null&&ls(_,".priority")||(v=v.updatePriority(g.getPriority()));const P=c.currentWriteId,U=Fv(n),j=sN(v,g,U);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=j,c.currentWriteId=IN(n),o.splice(o.indexOf(P),1),r=r.concat(Q0(n.serverSyncTree_,c.path,j,c.currentWriteId,c.applyLocally)),r=r.concat(Mr(n.serverSyncTree_,P,!0))}else h=!0,f="nodata",r=r.concat(Mr(n.serverSyncTree_,c.currentWriteId,!0))}yr(n.eventQueue_,t,r),r=[],h&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}rc(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Ho(s[a]);bd(n,n.transactionQueueTree_)}function $v(n,e){let t,s=n.transactionQueueTree_;for(t=Re(e);t!==null&&hi(s)===void 0;)s=Ad(s,t),e=Ue(e),t=Re(e);return s}function jv(n,e){const t=[];return qv(n,e,t),t.sort((s,r)=>s.order-r.order),t}function qv(n,e,t){const s=hi(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);sc(e,r=>{qv(n,r,t)})}function rc(n,e){const t=hi(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,Dv(e,t.length>0?t:void 0)}sc(e,s=>{rc(n,s)})}function bN(n,e){const t=Ko($v(n,e)),s=Ad(n.transactionQueueTree_,e);return iN(s,r=>{hu(n,r)}),hu(n,s),Mv(s,r=>{hu(n,r)}),t}function hu(n,e){const t=hi(e);if(t){const s=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(G(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(G(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Mr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Dv(e,void 0):t.length=i+1,yr(n.eventQueue_,Ko(e),r);for(let o=0;o<s.length;o++)Ho(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function PN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Xt(`Invalid query segment '${t}' in query '${n}'`)}return e}const n_=function(n,e){const t=kN(n),s=t.namespace;t.domain==="firebase.com"&&hr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ik();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new _k(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new $e(t.pathString)}},kN=function(n){let e="",t="",s="",r="",i="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(h,f)),h<f&&(r=SN(n.substring(h,f)));const g=PN(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),t=e.substring(v+1),i=s}"ns"in g&&(i=g.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return ve(this._path)?null:nv(this._path)}get ref(){return new di(this._repo,this._path)}get _queryIdentifier(){const e=$g(this._queryParams),t=cd(e);return t==="{}"?"default":t}get _queryObject(){return $g(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof Pd))return!1;const t=this._repo===e._repo,s=iv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+jk(this._path)}}class di extends Pd{constructor(e,t){super(e,t,new gd,!1)}get parent(){const e=rv(this._path);return e===null?null:new di(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}K0(di);G0(di);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN="FIREBASE_DATABASE_EMULATOR_HOST",oh={};let ON=!1;function DN(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),It("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=n_(i,r),a=o.repoInfo,c;typeof process<"u"&&Ig&&(c=Ig[NN]),c?(i=`http://${c}?ns=${a.namespace}`,o=n_(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new gk(n.name,n.options,e);hN("Invalid Firebase Database URL",o),ve(o.path)||hr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=MN(a,n,u,new pk(n.name,t));return new LN(h,n)}function xN(n,e){const t=oh[e];(!t||t[n.key]!==n)&&hr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),RN(n),delete t[n.key]}function MN(n,e,t,s){let r=oh[e.name];r||(r={},oh[e.name]=r);let i=r[n.toURLString()];return i&&hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new yN(n,ON,t,s),r[n.toURLString()]=i,i}class LN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(EN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new di(this._repo,De())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hr("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(n){ZP(Ms),Ln(new En("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return DN(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Qt(wg,Rg,n),Qt(wg,Rg,"esm2017")}ns.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ns.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};VN();var s_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,Wv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,y){function w(){}w.prototype=y.prototype,R.D=y.prototype,R.prototype=new w,R.prototype.constructor=R,R.C=function(A,b,k){for(var I=Array(arguments.length-2),St=2;St<arguments.length;St++)I[St-2]=arguments[St];return y.prototype[b].apply(A,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(R,y,w){w||(w=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=R.g[0],w=R.g[1],b=R.g[2];var k=R.g[3],I=y+(k^w&(b^k))+A[0]+3614090360&4294967295;y=w+(I<<7&4294967295|I>>>25),I=k+(b^y&(w^b))+A[1]+3905402710&4294967295,k=y+(I<<12&4294967295|I>>>20),I=b+(w^k&(y^w))+A[2]+606105819&4294967295,b=k+(I<<17&4294967295|I>>>15),I=w+(y^b&(k^y))+A[3]+3250441966&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(k^w&(b^k))+A[4]+4118548399&4294967295,y=w+(I<<7&4294967295|I>>>25),I=k+(b^y&(w^b))+A[5]+1200080426&4294967295,k=y+(I<<12&4294967295|I>>>20),I=b+(w^k&(y^w))+A[6]+2821735955&4294967295,b=k+(I<<17&4294967295|I>>>15),I=w+(y^b&(k^y))+A[7]+4249261313&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(k^w&(b^k))+A[8]+1770035416&4294967295,y=w+(I<<7&4294967295|I>>>25),I=k+(b^y&(w^b))+A[9]+2336552879&4294967295,k=y+(I<<12&4294967295|I>>>20),I=b+(w^k&(y^w))+A[10]+4294925233&4294967295,b=k+(I<<17&4294967295|I>>>15),I=w+(y^b&(k^y))+A[11]+2304563134&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(k^w&(b^k))+A[12]+1804603682&4294967295,y=w+(I<<7&4294967295|I>>>25),I=k+(b^y&(w^b))+A[13]+4254626195&4294967295,k=y+(I<<12&4294967295|I>>>20),I=b+(w^k&(y^w))+A[14]+2792965006&4294967295,b=k+(I<<17&4294967295|I>>>15),I=w+(y^b&(k^y))+A[15]+1236535329&4294967295,w=b+(I<<22&4294967295|I>>>10),I=y+(b^k&(w^b))+A[1]+4129170786&4294967295,y=w+(I<<5&4294967295|I>>>27),I=k+(w^b&(y^w))+A[6]+3225465664&4294967295,k=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(k^y))+A[11]+643717713&4294967295,b=k+(I<<14&4294967295|I>>>18),I=w+(k^y&(b^k))+A[0]+3921069994&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(b^k&(w^b))+A[5]+3593408605&4294967295,y=w+(I<<5&4294967295|I>>>27),I=k+(w^b&(y^w))+A[10]+38016083&4294967295,k=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(k^y))+A[15]+3634488961&4294967295,b=k+(I<<14&4294967295|I>>>18),I=w+(k^y&(b^k))+A[4]+3889429448&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(b^k&(w^b))+A[9]+568446438&4294967295,y=w+(I<<5&4294967295|I>>>27),I=k+(w^b&(y^w))+A[14]+3275163606&4294967295,k=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(k^y))+A[3]+4107603335&4294967295,b=k+(I<<14&4294967295|I>>>18),I=w+(k^y&(b^k))+A[8]+1163531501&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(b^k&(w^b))+A[13]+2850285829&4294967295,y=w+(I<<5&4294967295|I>>>27),I=k+(w^b&(y^w))+A[2]+4243563512&4294967295,k=y+(I<<9&4294967295|I>>>23),I=b+(y^w&(k^y))+A[7]+1735328473&4294967295,b=k+(I<<14&4294967295|I>>>18),I=w+(k^y&(b^k))+A[12]+2368359562&4294967295,w=b+(I<<20&4294967295|I>>>12),I=y+(w^b^k)+A[5]+4294588738&4294967295,y=w+(I<<4&4294967295|I>>>28),I=k+(y^w^b)+A[8]+2272392833&4294967295,k=y+(I<<11&4294967295|I>>>21),I=b+(k^y^w)+A[11]+1839030562&4294967295,b=k+(I<<16&4294967295|I>>>16),I=w+(b^k^y)+A[14]+4259657740&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(w^b^k)+A[1]+2763975236&4294967295,y=w+(I<<4&4294967295|I>>>28),I=k+(y^w^b)+A[4]+1272893353&4294967295,k=y+(I<<11&4294967295|I>>>21),I=b+(k^y^w)+A[7]+4139469664&4294967295,b=k+(I<<16&4294967295|I>>>16),I=w+(b^k^y)+A[10]+3200236656&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(w^b^k)+A[13]+681279174&4294967295,y=w+(I<<4&4294967295|I>>>28),I=k+(y^w^b)+A[0]+3936430074&4294967295,k=y+(I<<11&4294967295|I>>>21),I=b+(k^y^w)+A[3]+3572445317&4294967295,b=k+(I<<16&4294967295|I>>>16),I=w+(b^k^y)+A[6]+76029189&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(w^b^k)+A[9]+3654602809&4294967295,y=w+(I<<4&4294967295|I>>>28),I=k+(y^w^b)+A[12]+3873151461&4294967295,k=y+(I<<11&4294967295|I>>>21),I=b+(k^y^w)+A[15]+530742520&4294967295,b=k+(I<<16&4294967295|I>>>16),I=w+(b^k^y)+A[2]+3299628645&4294967295,w=b+(I<<23&4294967295|I>>>9),I=y+(b^(w|~k))+A[0]+4096336452&4294967295,y=w+(I<<6&4294967295|I>>>26),I=k+(w^(y|~b))+A[7]+1126891415&4294967295,k=y+(I<<10&4294967295|I>>>22),I=b+(y^(k|~w))+A[14]+2878612391&4294967295,b=k+(I<<15&4294967295|I>>>17),I=w+(k^(b|~y))+A[5]+4237533241&4294967295,w=b+(I<<21&4294967295|I>>>11),I=y+(b^(w|~k))+A[12]+1700485571&4294967295,y=w+(I<<6&4294967295|I>>>26),I=k+(w^(y|~b))+A[3]+2399980690&4294967295,k=y+(I<<10&4294967295|I>>>22),I=b+(y^(k|~w))+A[10]+4293915773&4294967295,b=k+(I<<15&4294967295|I>>>17),I=w+(k^(b|~y))+A[1]+2240044497&4294967295,w=b+(I<<21&4294967295|I>>>11),I=y+(b^(w|~k))+A[8]+1873313359&4294967295,y=w+(I<<6&4294967295|I>>>26),I=k+(w^(y|~b))+A[15]+4264355552&4294967295,k=y+(I<<10&4294967295|I>>>22),I=b+(y^(k|~w))+A[6]+2734768916&4294967295,b=k+(I<<15&4294967295|I>>>17),I=w+(k^(b|~y))+A[13]+1309151649&4294967295,w=b+(I<<21&4294967295|I>>>11),I=y+(b^(w|~k))+A[4]+4149444226&4294967295,y=w+(I<<6&4294967295|I>>>26),I=k+(w^(y|~b))+A[11]+3174756917&4294967295,k=y+(I<<10&4294967295|I>>>22),I=b+(y^(k|~w))+A[2]+718787259&4294967295,b=k+(I<<15&4294967295|I>>>17),I=w+(k^(b|~y))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+y&4294967295,R.g[1]=R.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+k&4294967295}s.prototype.u=function(R,y){y===void 0&&(y=R.length);for(var w=y-this.blockSize,A=this.B,b=this.h,k=0;k<y;){if(b==0)for(;k<=w;)r(this,R,k),k+=this.blockSize;if(typeof R=="string"){for(;k<y;)if(A[b++]=R.charCodeAt(k++),b==this.blockSize){r(this,A),b=0;break}}else for(;k<y;)if(A[b++]=R[k++],b==this.blockSize){r(this,A),b=0;break}}this.h=b,this.o+=y},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var y=1;y<R.length-8;++y)R[y]=0;var w=8*this.o;for(y=R.length-8;y<R.length;++y)R[y]=w&255,w/=256;for(this.u(R),R=Array(16),y=w=0;4>y;++y)for(var A=0;32>A;A+=8)R[w++]=this.g[y]>>>A&255;return R};function i(R,y){var w=a;return Object.prototype.hasOwnProperty.call(w,R)?w[R]:w[R]=y(R)}function o(R,y){this.h=y;for(var w=[],A=!0,b=R.length-1;0<=b;b--){var k=R[b]|0;A&&k==y||(w[b]=k,A=!1)}this.g=w}var a={};function c(R){return-128<=R&&128>R?i(R,function(y){return new o([y|0],0>y?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return f;if(0>R)return P(u(-R));for(var y=[],w=1,A=0;R>=w;A++)y[A]=R/w|0,w*=4294967296;return new o(y,0)}function h(R,y){if(R.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R.charAt(0)=="-")return P(h(R.substring(1),y));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),A=f,b=0;b<R.length;b+=8){var k=Math.min(8,R.length-b),I=parseInt(R.substring(b,b+k),y);8>k?(k=u(Math.pow(y,k)),A=A.j(k).add(u(I))):(A=A.j(w),A=A.add(u(I)))}return A}var f=c(0),g=c(1),_=c(16777216);n=o.prototype,n.m=function(){if(C(this))return-P(this).m();for(var R=0,y=1,w=0;w<this.g.length;w++){var A=this.i(w);R+=(0<=A?A:4294967296+A)*y,y*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(v(this))return"0";if(C(this))return"-"+P(this).toString(R);for(var y=u(Math.pow(R,6)),w=this,A="";;){var b=L(w,y).g;w=U(w,b.j(y));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(R);if(w=b,v(w))return k+A;for(;6>k.length;)k="0"+k;A=k+A}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function v(R){if(R.h!=0)return!1;for(var y=0;y<R.g.length;y++)if(R.g[y]!=0)return!1;return!0}function C(R){return R.h==-1}n.l=function(R){return R=U(this,R),C(R)?-1:v(R)?0:1};function P(R){for(var y=R.g.length,w=[],A=0;A<y;A++)w[A]=~R.g[A];return new o(w,~R.h).add(g)}n.abs=function(){return C(this)?P(this):this},n.add=function(R){for(var y=Math.max(this.g.length,R.g.length),w=[],A=0,b=0;b<=y;b++){var k=A+(this.i(b)&65535)+(R.i(b)&65535),I=(k>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);A=I>>>16,k&=65535,I&=65535,w[b]=I<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function U(R,y){return R.add(P(y))}n.j=function(R){if(v(this)||v(R))return f;if(C(this))return C(R)?P(this).j(P(R)):P(P(this).j(R));if(C(R))return P(this.j(P(R)));if(0>this.l(_)&&0>R.l(_))return u(this.m()*R.m());for(var y=this.g.length+R.g.length,w=[],A=0;A<2*y;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<R.g.length;b++){var k=this.i(A)>>>16,I=this.i(A)&65535,St=R.i(b)>>>16,Jt=R.i(b)&65535;w[2*A+2*b]+=I*Jt,j(w,2*A+2*b),w[2*A+2*b+1]+=k*Jt,j(w,2*A+2*b+1),w[2*A+2*b+1]+=I*St,j(w,2*A+2*b+1),w[2*A+2*b+2]+=k*St,j(w,2*A+2*b+2)}for(A=0;A<y;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=y;A<2*y;A++)w[A]=0;return new o(w,0)};function j(R,y){for(;(R[y]&65535)!=R[y];)R[y+1]+=R[y]>>>16,R[y]&=65535,y++}function D(R,y){this.g=R,this.h=y}function L(R,y){if(v(y))throw Error("division by zero");if(v(R))return new D(f,f);if(C(R))return y=L(P(R),y),new D(P(y.g),P(y.h));if(C(y))return y=L(R,P(y)),new D(P(y.g),y.h);if(30<R.g.length){if(C(R)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,A=y;0>=A.l(R);)w=ne(w),A=ne(A);var b=re(w,1),k=re(A,1);for(A=re(A,2),w=re(w,2);!v(A);){var I=k.add(A);0>=I.l(R)&&(b=b.add(w),k=I),A=re(A,1),w=re(w,1)}return y=U(R,b.j(y)),new D(b,y)}for(b=f;0<=R.l(y);){for(w=Math.max(1,Math.floor(R.m()/y.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),k=u(w),I=k.j(y);C(I)||0<I.l(R);)w-=A,k=u(w),I=k.j(y);v(k)&&(k=g),b=b.add(k),R=U(R,I)}return new D(b,R)}n.A=function(R){return L(this,R).h},n.and=function(R){for(var y=Math.max(this.g.length,R.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)&R.i(A);return new o(w,this.h&R.h)},n.or=function(R){for(var y=Math.max(this.g.length,R.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)|R.i(A);return new o(w,this.h|R.h)},n.xor=function(R){for(var y=Math.max(this.g.length,R.g.length),w=[],A=0;A<y;A++)w[A]=this.i(A)^R.i(A);return new o(w,this.h^R.h)};function ne(R){for(var y=R.g.length+1,w=[],A=0;A<y;A++)w[A]=R.i(A)<<1|R.i(A-1)>>>31;return new o(w,R.h)}function re(R,y){var w=y>>5;y%=32;for(var A=R.g.length-w,b=[],k=0;k<A;k++)b[k]=0<y?R.i(k+w)>>>y|R.i(k+w+1)<<32-y:R.i(k+w);return new o(b,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Wv=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,or=o}).apply(typeof s_<"u"?s_:typeof self<"u"?self:typeof window<"u"?window:{});var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hv,Hi,zv,$a,ah,Kv,Gv,Qv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ca=="object"&&Ca];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function r(l,d){if(d)e:{var p=s;l=l.split(".");for(var m=0;m<l.length-1;m++){var N=l[m];if(!(N in p))break e;p=p[N]}l=l[l.length-1],m=p[l],d=d(m),d!=m&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var p=0,m=!1,N={next:function(){if(!m&&p<l.length){var O=p++;return{value:d(O,l[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}r("Array.prototype.values",function(l){return l||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,m),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function _(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),l.apply(this,m)}}function v(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(m,N,O){for(var z=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)z[xe-2]=arguments[xe];return d.prototype[N].apply(m,z)}}function C(l){const d=l.length;if(0<d){const p=Array(d);for(let m=0;m<d;m++)p[m]=l[m];return p}return[]}function P(l,d){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(c(m)){const N=l.length||0,O=m.length||0;l.length=N+O;for(let z=0;z<O;z++)l[N+z]=m[z]}else l.push(m)}}class U{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function j(l){return/^[\s\xa0]*$/.test(l)}function D(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function L(l){return L[" "](l),l}L[" "]=function(){};var ne=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function re(l,d,p){for(const m in l)d.call(p,l[m],m,l)}function R(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let p,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(p in m)l[p]=m[p];for(let O=0;O<w.length;O++)p=w[O],Object.prototype.hasOwnProperty.call(m,p)&&(l[p]=m[p])}}function b(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function k(l){a.setTimeout(()=>{throw l},0)}function I(){var l=$t;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class St{constructor(){this.h=this.g=null}add(d,p){const m=Jt.get();m.set(d,p),this.h?this.h.next=m:this.g=m,this.h=m}}var Jt=new U(()=>new Qe,l=>l.reset());class Qe{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,me=!1,$t=new St,un=()=>{const l=a.Promise.resolve(void 0);Te=()=>{l.then(Zt)}};var Zt=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(p){k(p)}var d=Jt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}me=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var us=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function wn(l,d){if(We.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,m=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(ne){e:{try{L(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Mt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&wn.aa.h.call(this)}}v(wn,We);var Mt={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(l,d,p,m,N){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!m,this.ha=N,this.key=++X,this.da=this.fa=!1}function ee(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ce(l){this.src=l,this.g={},this.h=0}Ce.prototype.add=function(l,d,p,m,N){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var z=T(l,d,m,N);return-1<z?(d=l[z],p||(d.fa=!1)):(d=new Q(d,this.src,O,!!m,N),d.fa=p,l.push(d)),d};function E(l,d){var p=d.type;if(p in l.g){var m=l.g[p],N=Array.prototype.indexOf.call(m,d,void 0),O;(O=0<=N)&&Array.prototype.splice.call(m,N,1),O&&(ee(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function T(l,d,p,m){for(var N=0;N<l.length;++N){var O=l[N];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==m)return N}return-1}var S="closure_lm_"+(1e6*Math.random()|0),M={};function $(l,d,p,m,N){if(Array.isArray(d)){for(var O=0;O<d.length;O++)$(l,d[O],p,m,N);return null}return p=ae(p),l&&l[x]?l.K(d,p,u(m)?!!m.capture:!1,N):V(l,d,p,!1,m,N)}function V(l,d,p,m,N,O){if(!d)throw Error("Invalid event type");var z=u(N)?!!N.capture:!!N,xe=Y(l);if(xe||(l[S]=xe=new Ce(l)),p=xe.add(d,p,m,z,O),p.proxy)return p;if(m=K(),p.proxy=m,m.src=l,m.listener=p,l.addEventListener)us||(N=z),N===void 0&&(N=!1),l.addEventListener(d.toString(),m,N);else if(l.attachEvent)l.attachEvent(q(d.toString()),m);else if(l.addListener&&l.removeListener)l.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function K(){function l(p){return d.call(l.src,l.listener,p)}const d=ie;return l}function H(l,d,p,m,N){if(Array.isArray(d))for(var O=0;O<d.length;O++)H(l,d[O],p,m,N);else m=u(m)?!!m.capture:!!m,p=ae(p),l&&l[x]?(l=l.i,d=String(d).toString(),d in l.g&&(O=l.g[d],p=T(O,p,m,N),-1<p&&(ee(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[d],l.h--)))):l&&(l=Y(l))&&(d=l.g[d.toString()],l=-1,d&&(l=T(d,p,m,N)),(p=-1<l?d[l]:null)&&W(p))}function W(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[x])E(d.i,l);else{var p=l.type,m=l.proxy;d.removeEventListener?d.removeEventListener(p,m,l.capture):d.detachEvent?d.detachEvent(q(p),m):d.addListener&&d.removeListener&&d.removeListener(m),(p=Y(d))?(E(p,l),p.h==0&&(p.src=null,d[S]=null)):ee(l)}}}function q(l){return l in M?M[l]:M[l]="on"+l}function ie(l,d){if(l.da)l=!0;else{d=new wn(d,this);var p=l.listener,m=l.ha||l.src;l.fa&&W(l),l=p.call(m,d)}return l}function Y(l){return l=l[S],l instanceof Ce?l:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(l){return typeof l=="function"?l:(l[te]||(l[te]=function(d){return l.handleEvent(d)}),l[te])}function oe(){qe.call(this),this.i=new Ce(this),this.M=this,this.F=null}v(oe,qe),oe.prototype[x]=!0,oe.prototype.removeEventListener=function(l,d,p,m){H(this,l,d,p,m)};function pe(l,d){var p,m=l.F;if(m)for(p=[];m;m=m.F)p.push(m);if(l=l.M,m=d.type||d,typeof d=="string")d=new We(d,l);else if(d instanceof We)d.target=d.target||l;else{var N=d;d=new We(m,l),A(d,N)}if(N=!0,p)for(var O=p.length-1;0<=O;O--){var z=d.g=p[O];N=Ie(z,m,!0,d)&&N}if(z=d.g=l,N=Ie(z,m,!0,d)&&N,N=Ie(z,m,!1,d)&&N,p)for(O=0;O<p.length;O++)z=d.g=p[O],N=Ie(z,m,!1,d)&&N}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],m=0;m<p.length;m++)ee(p[m]);delete l.g[d],l.h--}}this.F=null},oe.prototype.K=function(l,d,p,m){return this.i.add(String(l),d,!1,p,m)},oe.prototype.L=function(l,d,p,m){return this.i.add(String(l),d,!0,p,m)};function Ie(l,d,p,m){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,O=0;O<d.length;++O){var z=d[O];if(z&&!z.da&&z.capture==p){var xe=z.listener,at=z.ha||z.src;z.fa&&E(l.i,z),N=xe.call(at,m)!==!1&&N}}return N&&!m.defaultPrevented}function pt(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function it(l){l.g=pt(()=>{l.g=null,l.i&&(l.i=!1,it(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class en extends qe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:it(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(l){qe.call(this),this.h=l,this.g={}}v(gt,qe);var hs=[];function mi(l){re(l.g,function(d,p){this.g.hasOwnProperty(p)&&W(d)},l),l.g={}}gt.prototype.N=function(){gt.aa.N.call(this),mi(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ot=a.JSON.stringify,tn=a.JSON.parse,ea=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Cc(){}Cc.prototype.h=null;function yf(l){return l.h||(l.h=l.i())}function Ef(){}var yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bc(){We.call(this,"d")}v(bc,We);function Sc(){We.call(this,"c")}v(Sc,We);var zs={},vf=null;function ta(){return vf=vf||new oe}zs.La="serverreachability";function Tf(l){We.call(this,zs.La,l)}v(Tf,We);function Ei(l){const d=ta();pe(d,new Tf(d))}zs.STAT_EVENT="statevent";function If(l,d){We.call(this,zs.STAT_EVENT,l),this.stat=d}v(If,We);function Pt(l){const d=ta();pe(d,new If(d,l))}zs.Ma="timingevent";function wf(l,d){We.call(this,zs.Ma,l),this.size=d}v(wf,We);function vi(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ti(){this.g=!0}Ti.prototype.xa=function(){this.g=!1};function OI(l,d,p,m,N,O){l.info(function(){if(l.g)if(O)for(var z="",xe=O.split("&"),at=0;at<xe.length;at++){var be=xe[at].split("=");if(1<be.length){var _t=be[0];be=be[1];var mt=_t.split("_");z=2<=mt.length&&mt[1]=="type"?z+(_t+"="+be+"&"):z+(_t+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+d+`
`+p+`
`+z})}function DI(l,d,p,m,N,O,z){l.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+d+`
`+p+`
`+O+" "+z})}function Ir(l,d,p,m){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+MI(l,p)+(m?" "+m:"")})}function xI(l,d){l.info(function(){return"TIMEOUT: "+d})}Ti.prototype.info=function(){};function MI(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var m=p[l];if(!(2>m.length)){var N=m[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return ot(p)}catch{return d}}var na={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pc;function sa(){}v(sa,Cc),sa.prototype.g=function(){return new XMLHttpRequest},sa.prototype.i=function(){return{}},Pc=new sa;function ds(l,d,p,m){this.j=l,this.i=d,this.l=p,this.R=m||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Af}function Af(){this.i=null,this.g="",this.h=!1}var Cf={},kc={};function Nc(l,d,p){l.L=1,l.v=aa(jn(d)),l.m=p,l.P=!0,bf(l,null)}function bf(l,d){l.F=Date.now(),ra(l),l.A=jn(l.v);var p=l.A,m=l.R;Array.isArray(m)||(m=[String(m)]),$f(p.i,"t",m),l.C=0,p=l.j.J,l.h=new Af,l.g=ip(l.j,p?d:null,!l.m),0<l.O&&(l.M=new en(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,m=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(hs[0]=N.toString()),N=hs);for(var O=0;O<N.length;O++){var z=$(p,N[O],m||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Ei(),OI(l.i,l.u,l.A,l.l,l.R,l.m)}ds.prototype.ca=function(l){l=l.target;const d=this.M;d&&qn(l)==3?d.j():this.Y(l)},ds.prototype.Y=function(l){try{if(l==this.g)e:{const mt=qn(this.g);var d=this.g.Ba();const Ar=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Gf(this.g)))){this.J||mt!=4||d==7||(d==8||0>=Ar?Ei(3):Ei(2)),Oc(this);var p=this.g.Z();this.X=p;t:if(Sf(this)){var m=Gf(this.g);l="";var N=m.length,O=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ks(this),Ii(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(m[d],{stream:!(O&&d==N-1)});m.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,DI(this.i,this.u,this.A,this.l,this.R,mt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,at=this.g;if((xe=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(xe)){var be=xe;break t}}be=null}if(p=be)Ir(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dc(this,p);else{this.o=!1,this.s=3,Pt(12),Ks(this),Ii(this);break e}}if(this.P){p=!0;let hn;for(;!this.J&&this.C<z.length;)if(hn=LI(this,z),hn==kc){mt==4&&(this.s=4,Pt(14),p=!1),Ir(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==Cf){this.s=4,Pt(15),Ir(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Ir(this.i,this.l,hn,null),Dc(this,hn);if(Sf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||z.length!=0||this.h.h||(this.s=1,Pt(16),p=!1),this.o=this.o&&p,!p)Ir(this.i,this.l,z,"[Invalid Chunked Response]"),Ks(this),Ii(this);else if(0<z.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Uc(_t),_t.M=!0,Pt(11))}}else Ir(this.i,this.l,z,null),Dc(this,z);mt==4&&Ks(this),this.o&&!this.J&&(mt==4?tp(this.j,this):(this.o=!1,ra(this)))}else ZI(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Ks(this),Ii(this)}}}catch{}finally{}};function Sf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function LI(l,d){var p=l.C,m=d.indexOf(`
`,p);return m==-1?kc:(p=Number(d.substring(p,m)),isNaN(p)?Cf:(m+=1,m+p>d.length?kc:(d=d.slice(m,m+p),l.C=m+p,d)))}ds.prototype.cancel=function(){this.J=!0,Ks(this)};function ra(l){l.S=Date.now()+l.I,Pf(l,l.I)}function Pf(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=vi(g(l.ba,l),d)}function Oc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}ds.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(xI(this.i,this.A),this.L!=2&&(Ei(),Pt(17)),Ks(this),this.s=2,Ii(this)):Pf(this,this.S-l)};function Ii(l){l.j.G==0||l.J||tp(l.j,l)}function Ks(l){Oc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,mi(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Dc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||xc(p.h,l))){if(!l.K&&xc(p.h,l)&&p.G==3){try{var m=p.Da.g.parse(d)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)fa(p),ha(p);else break e;Fc(p),Pt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=vi(g(p.Za,p),6e3));if(1>=Of(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Qs(p,11)}else if((l.K||p.g==l)&&fa(p),!j(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let be=N[d];if(p.T=be[0],be=be[1],p.G==2)if(be[0]=="c"){p.K=be[1],p.ia=be[2];const _t=be[3];_t!=null&&(p.la=_t,p.j.info("VER="+p.la));const mt=be[4];mt!=null&&(p.Aa=mt,p.j.info("SVER="+p.Aa));const Ar=be[5];Ar!=null&&typeof Ar=="number"&&0<Ar&&(m=1.5*Ar,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const hn=l.g;if(hn){const ga=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var O=m.h;O.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Mc(O,O.h),O.h=null))}if(m.D){const Bc=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bc&&(m.ya=Bc,Ve(m.I,m.D,Bc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var z=l;if(m.qa=rp(m,m.J?m.ia:null,m.W),z.K){Df(m.h,z);var xe=z,at=m.L;at&&(xe.I=at),xe.B&&(Oc(xe),ra(xe)),m.g=z}else Zf(m);0<p.i.length&&da(p)}else be[0]!="stop"&&be[0]!="close"||Qs(p,7);else p.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Qs(p,7):Vc(p):be[0]!="noop"&&p.l&&p.l.ta(be),p.v=0)}}Ei(4)}catch{}}var VI=class{constructor(l,d){this.g=l,this.map=d}};function kf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Of(l){return l.h?1:l.g?l.g.size:0}function xc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Mc(l,d){l.g?l.g.add(d):l.h=d}function Df(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}kf.prototype.cancel=function(){if(this.i=xf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function xf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return C(l.i)}function FI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,m=0;m<p;m++)d.push(l[m]);return d}d=[],p=0;for(m in l)d[p++]=l[m];return d}function UI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const m in l)d[p++]=m;return d}}}function Mf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=UI(l),m=FI(l),N=m.length,O=0;O<N;O++)d.call(void 0,m[O],p&&p[O],l)}var Lf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BI(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var m=l[p].indexOf("="),N=null;if(0<=m){var O=l[p].substring(0,m);N=l[p].substring(m+1)}else O=l[p];d(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Gs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Gs){this.h=l.h,ia(this,l.j),this.o=l.o,this.g=l.g,oa(this,l.s),this.l=l.l;var d=l.i,p=new Ai;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Vf(this,p),this.m=l.m}else l&&(d=String(l).match(Lf))?(this.h=!1,ia(this,d[1]||"",!0),this.o=wi(d[2]||""),this.g=wi(d[3]||"",!0),oa(this,d[4]),this.l=wi(d[5]||"",!0),Vf(this,d[6]||"",!0),this.m=wi(d[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}Gs.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ri(d,Ff,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ri(d,Ff,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Ri(p,p.charAt(0)=="/"?qI:jI,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Ri(p,HI)),l.join("")};function jn(l){return new Gs(l)}function ia(l,d,p){l.j=p?wi(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function oa(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Vf(l,d,p){d instanceof Ai?(l.i=d,zI(l.i,l.h)):(p||(d=Ri(d,WI)),l.i=new Ai(d,l.h))}function Ve(l,d,p){l.i.set(d,p)}function aa(l){return Ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function wi(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ri(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,$I),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function $I(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ff=/[#\/\?@]/g,jI=/[#\?:]/g,qI=/[#\?]/g,WI=/[#\?@]/g,HI=/#/g;function Ai(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function fs(l){l.g||(l.g=new Map,l.h=0,l.i&&BI(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Ai.prototype,n.add=function(l,d){fs(this),this.i=null,l=wr(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Uf(l,d){fs(l),d=wr(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Bf(l,d){return fs(l),d=wr(l,d),l.g.has(d)}n.forEach=function(l,d){fs(this),this.g.forEach(function(p,m){p.forEach(function(N){l.call(d,N,m,this)},this)},this)},n.na=function(){fs(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let m=0;m<d.length;m++){const N=l[m];for(let O=0;O<N.length;O++)p.push(d[m])}return p},n.V=function(l){fs(this);let d=[];if(typeof l=="string")Bf(this,l)&&(d=d.concat(this.g.get(wr(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},n.set=function(l,d){return fs(this),this.i=null,l=wr(this,l),Bf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function $f(l,d,p){Uf(l,d),0<p.length&&(l.i=null,l.g.set(wr(l,d),C(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var m=d[p];const O=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var N=O;z[m]!==""&&(N+="="+encodeURIComponent(String(z[m]))),l.push(N)}}return this.i=l.join("&")};function wr(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function zI(l,d){d&&!l.j&&(fs(l),l.i=null,l.g.forEach(function(p,m){var N=m.toLowerCase();m!=N&&(Uf(this,m),$f(this,N,p))},l)),l.j=d}function KI(l,d){const p=new Ti;if(a.Image){const m=new Image;m.onload=_(ps,p,"TestLoadImage: loaded",!0,d,m),m.onerror=_(ps,p,"TestLoadImage: error",!1,d,m),m.onabort=_(ps,p,"TestLoadImage: abort",!1,d,m),m.ontimeout=_(ps,p,"TestLoadImage: timeout",!1,d,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=l}else d(!1)}function GI(l,d){const p=new Ti,m=new AbortController,N=setTimeout(()=>{m.abort(),ps(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:m.signal}).then(O=>{clearTimeout(N),O.ok?ps(p,"TestPingServer: ok",!0,d):ps(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),ps(p,"TestPingServer: error",!1,d)})}function ps(l,d,p,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(p)}catch{}}function QI(){this.g=new ea}function YI(l,d,p){const m=p||"";try{Mf(l,function(N,O){let z=N;u(N)&&(z=ot(N)),d.push(m+O+"="+encodeURIComponent(z))})}catch(N){throw d.push(m+"type="+encodeURIComponent("_badmap")),N}}function la(l){this.l=l.Ub||null,this.j=l.eb||!1}v(la,Cc),la.prototype.g=function(){return new ca(this.l,this.j)},la.prototype.i=function(l){return function(){return l}}({});function ca(l,d){oe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(ca,oe),n=ca.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,bi(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function jf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ci(this):bi(this),this.readyState==3&&jf(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Ci(this))},n.Qa=function(l){this.g&&(this.response=l,Ci(this))},n.ga=function(){this.g&&Ci(this)};function Ci(l){l.readyState=4,l.l=null,l.j=null,l.v=null,bi(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function bi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function qf(l){let d="";return re(l,function(p,m){d+=m,d+=":",d+=p,d+=`\r
`}),d}function Lc(l,d,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=qf(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ve(l,d,p))}function ze(l){oe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(ze,oe);var XI=/^https?$/i,JI=["POST","PUT"];n=ze.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pc.g(),this.v=this.o?yf(this.o):yf(Pc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){Wf(this,O);return}if(l=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)p.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())p.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(JI,d,void 0))||m||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of p)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kf(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){Wf(this,O)}};function Wf(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Hf(l),ua(l)}function Hf(l){l.A||(l.A=!0,pe(l,"complete"),pe(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pe(this,"complete"),pe(this,"abort"),ua(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ua(this,!0)),ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zf(this):this.bb())},n.bb=function(){zf(this)};function zf(l){if(l.h&&typeof o<"u"&&(!l.v[1]||qn(l)!=4||l.Z()!=2)){if(l.u&&qn(l)==4)pt(l.Ea,0,l);else if(pe(l,"readystatechange"),qn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var m;if(m=z===0){var N=String(l.D).match(Lf)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),m=!XI.test(N?N.toLowerCase():"")}p=m}if(p)pe(l,"complete"),pe(l,"success");else{l.m=6;try{var O=2<qn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",Hf(l)}}finally{ua(l)}}}}function ua(l,d){if(l.g){Kf(l);const p=l.g,m=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||pe(l,"ready");try{p.onreadystatechange=m}catch{}}}function Kf(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function qn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),tn(d)}};function Gf(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ZI(l){const d={};l=(l.g&&2<=qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<l.length;m++){if(j(l[m]))continue;var p=b(l[m]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[N]||[];d[N]=O,O.push(p)}R(d,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Si(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function Qf(l){this.Aa=0,this.i=[],this.j=new Ti,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Si("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Si("baseRetryDelayMs",5e3,l),this.cb=Si("retryDelaySeedMs",1e4,l),this.Wa=Si("forwardChannelMaxRetries",2,l),this.wa=Si("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new kf(l&&l.concurrentRequestLimit),this.Da=new QI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qf.prototype,n.la=8,n.G=1,n.connect=function(l,d,p,m){Pt(0),this.W=l,this.H=d||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=rp(this,null,this.W),da(this)};function Vc(l){if(Yf(l),l.G==3){var d=l.U++,p=jn(l.I);if(Ve(p,"SID",l.K),Ve(p,"RID",d),Ve(p,"TYPE","terminate"),Pi(l,p),d=new ds(l,l.j,d),d.L=2,d.v=aa(jn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=ip(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ra(d)}sp(l)}function ha(l){l.g&&(Uc(l),l.g.cancel(),l.g=null)}function Yf(l){ha(l),l.u&&(a.clearTimeout(l.u),l.u=null),fa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function da(l){if(!Nf(l.h)&&!l.s){l.s=!0;var d=l.Ga;Te||un(),me||(Te(),me=!0),$t.add(d,l),l.B=0}}function ew(l,d){return Of(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=vi(g(l.Ga,l,d),np(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new ds(this,this.j,l);let O=this.o;if(this.S&&(O?(O=y(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(d+=m,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Jf(this,N,d),p=jn(this.I),Ve(p,"RID",l),Ve(p,"CVER",22),this.D&&Ve(p,"X-HTTP-Session-Id",this.D),Pi(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(qf(O)))+"&"+d:this.m&&Lc(p,this.m,O)),Mc(this.h,N),this.Ua&&Ve(p,"TYPE","init"),this.P?(Ve(p,"$req",d),Ve(p,"SID","null"),N.T=!0,Nc(N,p,null)):Nc(N,p,d),this.G=2}}else this.G==3&&(l?Xf(this,l):this.i.length==0||Nf(this.h)||Xf(this))};function Xf(l,d){var p;d?p=d.l:p=l.U++;const m=jn(l.I);Ve(m,"SID",l.K),Ve(m,"RID",p),Ve(m,"AID",l.T),Pi(l,m),l.m&&l.o&&Lc(m,l.m,l.o),p=new ds(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Jf(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Mc(l.h,p),Nc(p,m,d)}function Pi(l,d){l.H&&re(l.H,function(p,m){Ve(d,m,p)}),l.l&&Mf({},function(p,m){Ve(d,m,p)})}function Jf(l,d,p){p=Math.min(l.i.length,p);var m=l.l?g(l.l.Na,l.l,l):null;e:{var N=l.i;let O=-1;for(;;){const z=["count="+p];O==-1?0<p?(O=N[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let xe=!0;for(let at=0;at<p;at++){let be=N[at].g;const _t=N[at].map;if(be-=O,0>be)O=Math.max(0,N[at].g-100),xe=!1;else try{YI(_t,z,"req"+be+"_")}catch{m&&m(_t)}}if(xe){m=z.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,m}function Zf(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Te||un(),me||(Te(),me=!0),$t.add(d,l),l.v=0}}function Fc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=vi(g(l.Fa,l),np(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,ep(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=vi(g(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),ha(this),ep(this))};function Uc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function ep(l){l.g=new ds(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=jn(l.qa);Ve(d,"RID","rpc"),Ve(d,"SID",l.K),Ve(d,"AID",l.T),Ve(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ve(d,"TO",l.ja),Ve(d,"TYPE","xmlhttp"),Pi(l,d),l.m&&l.o&&Lc(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=aa(jn(d)),p.m=null,p.P=!0,bf(p,l)}n.Za=function(){this.C!=null&&(this.C=null,ha(this),Fc(this),Pt(19))};function fa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function tp(l,d){var p=null;if(l.g==d){fa(l),Uc(l),l.g=null;var m=2}else if(xc(l.h,d))p=d.D,Df(l.h,d),m=1;else return;if(l.G!=0){if(d.o)if(m==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;m=ta(),pe(m,new wf(m,p)),da(l)}else Zf(l);else if(N=d.s,N==3||N==0&&0<d.X||!(m==1&&ew(l,d)||m==2&&Fc(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),N){case 1:Qs(l,5);break;case 4:Qs(l,10);break;case 3:Qs(l,6);break;default:Qs(l,2)}}}function np(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function Qs(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),m=l.Xa;const N=!m;m=new Gs(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ia(m,"https"),aa(m),N?KI(m.toString(),p):GI(m.toString(),p)}else Pt(2);l.G=0,l.l&&l.l.sa(d),sp(l),Yf(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function sp(l){if(l.G=0,l.ka=[],l.l){const d=xf(l.h);(d.length!=0||l.i.length!=0)&&(P(l.ka,d),P(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function rp(l,d,p){var m=p instanceof Gs?jn(p):new Gs(p);if(m.g!="")d&&(m.g=d+"."+m.g),oa(m,m.s);else{var N=a.location;m=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var O=new Gs(null);m&&ia(O,m),d&&(O.g=d),N&&oa(O,N),p&&(O.l=p),m=O}return p=l.D,d=l.ya,p&&d&&Ve(m,p,d),Ve(m,"VER",l.la),Pi(l,m),m}function ip(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new ze(new la({eb:p})):new ze(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function op(){}n=op.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function pa(){}pa.prototype.g=function(l,d){return new jt(l,d)};function jt(l,d){oe.call(this),this.g=new Qf(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!j(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!j(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Rr(this)}v(jt,oe),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Vc(this.g)},jt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=ot(l),l=p);d.i.push(new VI(d.Ya++,l)),d.G==3&&da(d)},jt.prototype.N=function(){this.g.l=null,delete this.j,Vc(this.g),delete this.g,jt.aa.N.call(this)};function ap(l){bc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}v(ap,bc);function lp(){Sc.call(this),this.status=1}v(lp,Sc);function Rr(l){this.g=l}v(Rr,op),Rr.prototype.ua=function(){pe(this.g,"a")},Rr.prototype.ta=function(l){pe(this.g,new ap(l))},Rr.prototype.sa=function(l){pe(this.g,new lp)},Rr.prototype.ra=function(){pe(this.g,"b")},pa.prototype.createWebChannel=pa.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,Qv=function(){return new pa},Gv=function(){return ta()},Kv=zs,ah={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},na.NO_ERROR=0,na.TIMEOUT=8,na.HTTP_ERROR=6,$a=na,Rf.COMPLETE="complete",zv=Rf,Ef.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Hi=Ef,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,Hv=ze}).apply(typeof Ca<"u"?Ca:typeof self<"u"?self:typeof window<"u"?window:{});const r_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Mo("@firebase/firestore");function Pr(){return gr.logLevel}function J(n,...e){if(gr.logLevel<=_e.DEBUG){const t=e.map(kd);gr.debug(`Firestore (${fi}): ${n}`,...t)}}function os(n,...e){if(gr.logLevel<=_e.ERROR){const t=e.map(kd);gr.error(`Firestore (${fi}): ${n}`,...t)}}function Xr(n,...e){if(gr.logLevel<=_e.WARN){const t=e.map(kd);gr.warn(`Firestore (${fi}): ${n}`,...t)}}function kd(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n="Unexpected state"){const e=`FIRESTORE (${fi}) INTERNAL ASSERTION FAILED: `+n;throw os(e),new Error(e)}function Oe(n,e){n||ce()}function fe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Et.UNAUTHENTICATED))}shutdown(){}}class UN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class BN{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Oe(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new ss;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ss,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ss)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Oe(typeof s.accessToken=="string"),new Yv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new Et(e)}}class $N{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class jN{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new $N(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Oe(this.o===void 0);const s=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Oe(typeof t.token=="string"),this.R=t.token,new qN(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=HN(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function Ee(n,e){return n<e?-1:n>e?1:0}function Jr(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Je(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Je(0,0))}static max(){return new ue(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,s){t===void 0?t=0:t>e.length&&ce(),s===void 0?s=e.length-t:s>e.length-t&&ce(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Be extends bo{construct(e,t,s){return new Be(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new Be(t)}static emptyPath(){return new Be([])}}const zN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends bo{construct(e,t,s){return new ht(e,t,s)}static isValidIdentifier(e){return zN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(t)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Be.fromString(e))}static fromName(e){return new se(Be.fromString(e).popFirst(5))}static empty(){return new se(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Be(e.slice()))}}function KN(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=ue.fromTimestamp(s===1e9?new Je(t+1,0):new Je(t,s));return new Ps(r,se.empty(),e)}function GN(n){return new Ps(n.readTime,n.key,-1)}class Ps{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ps(ue.min(),se.empty(),-1)}static max(){return new Ps(ue.max(),se.empty(),-1)}}function QN(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=se.comparator(n.documentKey,e.documentKey),t!==0?t:Ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==YN)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,s)=>{t(e)})}static reject(e){return new F((t,s)=>{s(e)})}static waitFor(e){return new F((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=F.resolve(!1);for(const s of e)t=t.next(r=>r?F.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new F((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,t){return new F((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function JN(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ic.oe=-1;function oc(n){return n==null}function Tl(n){return n===0&&1/n==-1/0}function ZN(n){return typeof n=="number"&&Number.isInteger(n)&&!Tl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=i_(e)),e=tO(n.get(t),e);return i_(e)}function tO(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function i_(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.comparator=e,this.root=t||lt.EMPTY}insert(e,t){return new He(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ba(this.root,e,this.comparator,!0)}}class ba{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??lt.RED,this.left=r??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new lt(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return lt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,t,s,r,i){return this}insert(e,t,s){return new lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new a_(this.data.getIterator())}getIteratorFrom(e){return new a_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class a_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Gt([])}unionWith(e){let t=new et(ht.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Gt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jr(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zv("Invalid base64 string: "+i):i}}(e);return new ft(t)}static fromUint8Array(e){const t=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const nO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(n){if(Oe(!!n),typeof n=="string"){let e=0;const t=nO.exec(n);if(Oe(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ge(n.seconds),nanos:Ge(n.nanos)}}function Ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ns(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ac(n){const e=n.mapValue.fields.__previous_value__;return Nd(e)?ac(e):e}function So(n){const e=ks(n.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,t,s,r,i,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Po{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Po&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Os(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Nd(n)?4:iO(n)?9007199254740991:rO(n)?10:11:ce()}function Fn(n,e){if(n===e)return!0;const t=Os(n);if(t!==Os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return So(n).isEqual(So(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=ks(r.timestampValue),a=ks(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Ns(r.bytesValue).isEqual(Ns(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Ge(r.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(r.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ge(r.integerValue)===Ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ge(r.doubleValue),a=Ge(i.doubleValue);return o===a?Tl(o)===Tl(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Jr(n.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(o_(o)!==o_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fn(o[c],a[c])))return!1;return!0}(n,e);default:return ce()}}function ko(n,e){return(n.values||[]).find(t=>Fn(t,e))!==void 0}function Zr(n,e){if(n===e)return 0;const t=Os(n),s=Os(e);if(t!==s)return Ee(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ee(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return l_(n.timestampValue,e.timestampValue);case 4:return l_(So(n),So(e));case 5:return Ee(n.stringValue,e.stringValue);case 6:return function(i,o){const a=Ns(i),c=Ns(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Ee(a[u],c[u]);if(h!==0)return h}return Ee(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ee(Ge(i.latitude),Ge(o.latitude));return a!==0?a:Ee(Ge(i.longitude),Ge(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return c_(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},g=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,v=(c=g.value)===null||c===void 0?void 0:c.arrayValue,C=Ee(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:c_(_,v)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Sa.mapValue&&o===Sa.mapValue)return 0;if(i===Sa.mapValue)return 1;if(o===Sa.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const g=Ee(c[f],h[f]);if(g!==0)return g;const _=Zr(a[c[f]],u[h[f]]);if(_!==0)return _}return Ee(c.length,h.length)}(n.mapValue,e.mapValue);default:throw ce()}}function l_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ee(n,e);const t=ks(n),s=ks(e),r=Ee(t.seconds,s.seconds);return r!==0?r:Ee(t.nanos,s.nanos)}function c_(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Zr(t[r],s[r]);if(i)return i}return Ee(t.length,s.length)}function ei(n){return lh(n)}function lh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=ks(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ns(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return se.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=lh(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${lh(t.fields[o])}`;return r+"}"}(n.mapValue):ce()}function ja(n){switch(Os(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(n);return e?16+ja(e):16;case 5:return 2*n.stringValue.length;case 6:return Ns(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+ja(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return qs(s.fields,(i,o)=>{r+=i.length+ja(o)}),r}(n.mapValue);default:throw ce()}}function u_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ch(n){return!!n&&"integerValue"in n}function Od(n){return!!n&&"arrayValue"in n}function h_(n){return!!n&&"nullValue"in n}function d_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function qa(n){return!!n&&"mapValue"in n}function rO(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ao(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return qs(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ao(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ao(n.arrayValue.values[t]);return e}return Object.assign({},n)}function iO(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!qa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ao(t)}setAll(e){let t=ht.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=ao(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());qa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];qa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){qs(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ut(ao(this.value))}}function eT(n){const e=[];return qs(n.fields,(t,s)=>{const r=new ht([t]);if(qa(s)){const i=eT(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,ue.min(),ue.min(),ue.min(),Ut.empty(),0)}static newFoundDocument(e,t,s,r){return new Rt(e,1,t,ue.min(),s,r,0)}static newNoDocument(e,t){return new Rt(e,2,t,ue.min(),ue.min(),Ut.empty(),0)}static newUnknownDocument(e,t){return new Rt(e,3,t,ue.min(),ue.min(),Ut.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t){this.position=e,this.inclusive=t}}function f_(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=se.comparator(se.fromName(o.referenceValue),t.key):s=Zr(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function p_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t="asc"){this.field=e,this.dir=t}}function oO(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{}class Xe extends tT{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new lO(e,t,s):t==="array-contains"?new hO(e,s):t==="in"?new dO(e,s):t==="not-in"?new fO(e,s):t==="array-contains-any"?new pO(e,s):new Xe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new cO(e,s):new uO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Zr(t,this.value)):t!==null&&Os(this.value)===Os(t)&&this.matchesComparison(Zr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends tT{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Tn(e,t)}matches(e){return nT(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nT(n){return n.op==="and"}function sT(n){return aO(n)&&nT(n)}function aO(n){for(const e of n.filters)if(e instanceof Tn)return!1;return!0}function uh(n){if(n instanceof Xe)return n.field.canonicalString()+n.op.toString()+ei(n.value);if(sT(n))return n.filters.map(e=>uh(e)).join(",");{const e=n.filters.map(t=>uh(t)).join(",");return`${n.op}(${e})`}}function rT(n,e){return n instanceof Xe?function(s,r){return r instanceof Xe&&s.op===r.op&&s.field.isEqual(r.field)&&Fn(s.value,r.value)}(n,e):n instanceof Tn?function(s,r){return r instanceof Tn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&rT(o,r.filters[a]),!0):!1}(n,e):void ce()}function iT(n){return n instanceof Xe?function(t){return`${t.field.canonicalString()} ${t.op} ${ei(t.value)}`}(n):n instanceof Tn?function(t){return t.op.toString()+" {"+t.getFilters().map(iT).join(" ,")+"}"}(n):"Filter"}class lO extends Xe{constructor(e,t,s){super(e,t,s),this.key=se.fromName(s.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.matchesComparison(t)}}class cO extends Xe{constructor(e,t){super(e,"in",t),this.keys=oT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uO extends Xe{constructor(e,t){super(e,"not-in",t),this.keys=oT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>se.fromName(s.referenceValue))}class hO extends Xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Od(t)&&ko(t.arrayValue,this.value)}}class dO extends Xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ko(this.value.arrayValue,t)}}class fO extends Xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ko(this.value.arrayValue,t)}}class pO extends Xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Od(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ko(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function g_(n,e=null,t=[],s=[],r=null,i=null,o=null){return new gO(n,e,t,s,r,i,o)}function Dd(n){const e=fe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>uh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),oc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ei(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ei(s)).join(",")),e.ue=t}return e.ue}function xd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!oO(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!rT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!p_(n.startAt,e.startAt)&&p_(n.endAt,e.endAt)}function hh(n){return se.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _O(n,e,t,s,r,i,o,a){return new Go(n,e,t,s,r,i,o,a)}function lc(n){return new Go(n)}function __(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function aT(n){return n.collectionGroup!==null}function lo(n){const e=fe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new et(ht.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new wl(i,s))}),t.has(ht.keyField().canonicalString())||e.ce.push(new wl(ht.keyField(),s))}return e.ce}function xn(n){const e=fe(n);return e.le||(e.le=mO(e,lo(n))),e.le}function mO(n,e){if(n.limitType==="F")return g_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new wl(r.field,i)});const t=n.endAt?new Il(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Il(n.startAt.position,n.startAt.inclusive):null;return g_(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function dh(n,e){const t=n.filters.concat([e]);return new Go(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function fh(n,e,t){return new Go(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function cc(n,e){return xd(xn(n),xn(e))&&n.limitType===e.limitType}function lT(n){return`${Dd(xn(n))}|lt:${n.limitType}`}function kr(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>iT(r)).join(", ")}]`),oc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>ei(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>ei(r)).join(",")),`Target(${s})`}(xn(n))}; limitType=${n.limitType})`}function uc(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):se.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of lo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const u=f_(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,lo(s),r)||s.endAt&&!function(o,a,c){const u=f_(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,lo(s),r))}(n,e)}function yO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function cT(n){return(e,t)=>{let s=!1;for(const r of lo(n)){const i=EO(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function EO(n,e,t){const s=n.field.isKeyField()?se.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Zr(c,u):ce()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Jv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=new He(se.comparator);function as(){return vO}const uT=new He(se.comparator);function zi(...n){let e=uT;for(const t of n)e=e.insert(t.key,t);return e}function hT(n){let e=uT;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function rr(){return co()}function dT(){return co()}function co(){return new Er(n=>n.toString(),(n,e)=>n.isEqual(e))}const TO=new He(se.comparator),IO=new et(se.comparator);function ye(...n){let e=IO;for(const t of n)e=e.add(t);return e}const wO=new et(Ee);function RO(){return wO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tl(e)?"-0":e}}function fT(n){return{integerValue:""+n}}function AO(n,e){return ZN(e)?fT(e):Md(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this._=void 0}}function CO(n,e,t){return n instanceof Rl?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Nd(i)&&(i=ac(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof No?gT(n,e):n instanceof Oo?_T(n,e):function(r,i){const o=pT(r,i),a=m_(o)+m_(r.Pe);return ch(o)&&ch(r.Pe)?fT(a):Md(r.serializer,a)}(n,e)}function bO(n,e,t){return n instanceof No?gT(n,e):n instanceof Oo?_T(n,e):t}function pT(n,e){return n instanceof Al?function(s){return ch(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Rl extends hc{}class No extends hc{constructor(e){super(),this.elements=e}}function gT(n,e){const t=mT(e);for(const s of n.elements)t.some(r=>Fn(r,s))||t.push(s);return{arrayValue:{values:t}}}class Oo extends hc{constructor(e){super(),this.elements=e}}function _T(n,e){let t=mT(e);for(const s of n.elements)t=t.filter(r=>!Fn(r,s));return{arrayValue:{values:t}}}class Al extends hc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function m_(n){return Ge(n.integerValue||n.doubleValue)}function mT(n){return Od(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function SO(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof No&&r instanceof No||s instanceof Oo&&r instanceof Oo?Jr(s.elements,r.elements,Fn):s instanceof Al&&r instanceof Al?Fn(s.Pe,r.Pe):s instanceof Rl&&r instanceof Rl}(n.transform,e.transform)}class PO{constructor(e,t){this.version=e,this.transformResults=t}}class yn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class dc{}function yT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ld(n.key,yn.none()):new Qo(n.key,n.data,yn.none());{const t=n.data,s=Ut.empty();let r=new et(ht.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ws(n.key,s,new Gt(r.toArray()),yn.none())}}function kO(n,e,t){n instanceof Qo?function(r,i,o){const a=r.value.clone(),c=E_(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Ws?function(r,i,o){if(!Wa(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=E_(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ET(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function uo(n,e,t,s){return n instanceof Qo?function(i,o,a,c){if(!Wa(i.precondition,o))return a;const u=i.value.clone(),h=v_(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Ws?function(i,o,a,c){if(!Wa(i.precondition,o))return a;const u=v_(i.fieldTransforms,c,o),h=o.data;return h.setAll(ET(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,s):function(i,o,a){return Wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function NO(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=pT(s.transform,r||null);i!=null&&(t===null&&(t=Ut.empty()),t.set(s.field,i))}return t||null}function y_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Jr(s,r,(i,o)=>SO(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qo extends dc{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ws extends dc{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ET(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function E_(n,e,t){const s=new Map;Oe(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,bO(o,a,t[r]))}return s}function v_(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,CO(i,o,e))}return s}class Ld extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OO extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&kO(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=uo(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=uo(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=dT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=yT(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ue.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ye())}isEqual(e){return this.batchId===e.batchId&&Jr(this.mutations,e.mutations,(t,s)=>y_(t,s))&&Jr(this.baseMutations,e.baseMutations,(t,s)=>y_(t,s))}}class Vd{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){Oe(e.mutations.length===s.length);let r=function(){return TO}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Vd(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,we;function LO(n){switch(n){default:return ce();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function vT(n){if(n===void 0)return os("GRPC error has no .code"),B.UNKNOWN;switch(n){case Ye.OK:return B.OK;case Ye.CANCELLED:return B.CANCELLED;case Ye.UNKNOWN:return B.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return B.INTERNAL;case Ye.UNAVAILABLE:return B.UNAVAILABLE;case Ye.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ye.NOT_FOUND:return B.NOT_FOUND;case Ye.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ye.ABORTED:return B.ABORTED;case Ye.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ye.DATA_LOSS:return B.DATA_LOSS;default:return ce()}}(we=Ye||(Ye={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=new or([4294967295,4294967295],0);function T_(n){const e=VO().encode(n),t=new Wv;return t.update(e),new Uint8Array(t.digest())}function I_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new or([t,s],0),new or([r,i],0)]}class Fd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ki(`Invalid padding: ${t}`);if(s<0)throw new Ki(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ki(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ki(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=or.fromNumber(this.Te)}Ee(e,t,s){let r=e.add(t.multiply(or.fromNumber(s)));return r.compare(FO)===1&&(r=new or([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=T_(e),[s,r]=I_(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fd(i,r,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=T_(e),[s,r]=I_(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Yo.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new fc(ue.min(),r,new He(Ee),as(),ye())}}class Yo{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Yo(s,t,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,s,r){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=r}}class TT{constructor(e,t){this.targetId=e,this.me=t}}class IT{constructor(e,t,s=ft.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class w_{constructor(){this.fe=0,this.ge=R_(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),t=ye(),s=ye();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:ce()}}),new Yo(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=R_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class UO{constructor(e){this.Le=e,this.Be=new Map,this.ke=as(),this.qe=Pa(),this.Qe=Pa(),this.Ke=new He(Ee)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,r)=>{this.je(r)&&t(r)})}Je(e){const t=e.targetId,s=e.me.count,r=this.Ye(t);if(r){const i=r.target;if(hh(i))if(s===0){const o=new se(i.path);this.We(t,o,Rt.newNoDocument(o,ue.min()))}else Oe(s===1);else{const o=this.Ze(t);if(o!==s){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=Ns(s).toUint8Array()}catch(c){if(c instanceof Zv)return Xr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Fd(o,r,i)}catch(c){return Xr(c instanceof Ki?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(t,i,null),r++)}),r}it(e){const t=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&hh(a.target)){const c=new se(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Rt.newNoDocument(c,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let s=ye();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new fc(e,t,this.Ke,this.ke,s);return this.ke=as(),this.qe=Pa(),this.Qe=Pa(),this.Ke=new He(Ee),r}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const r=this.ze(e);this.ot(e,t)?r.Fe(t,1):r.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new w_,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new et(Ee),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new et(Ee),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new w_),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Pa(){return new He(se.comparator)}function R_(){return new He(se.comparator)}const BO={asc:"ASCENDING",desc:"DESCENDING"},$O={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jO={and:"AND",or:"OR"};class qO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ph(n,e){return n.useProto3Json||oc(e)?e:{value:e}}function Cl(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function WO(n,e){return Cl(n,e.toTimestamp())}function Mn(n){return Oe(!!n),ue.fromTimestamp(function(t){const s=ks(t);return new Je(s.seconds,s.nanos)}(n))}function Ud(n,e){return gh(n,e).canonicalString()}function gh(n,e){const t=function(r){return new Be(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function RT(n){const e=Be.fromString(n);return Oe(PT(e)),e}function _h(n,e){return Ud(n.databaseId,e.path)}function du(n,e){const t=RT(e);if(t.get(1)!==n.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new se(CT(t))}function AT(n,e){return Ud(n.databaseId,e)}function HO(n){const e=RT(n);return e.length===4?Be.emptyPath():CT(e)}function mh(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function CT(n){return Oe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function A_(n,e,t){return{name:_h(n,e),fields:t.value.mapValue.fields}}function zO(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Oe(h===void 0||typeof h=="string"),ft.fromBase64String(h||"")):(Oe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ft.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?B.UNKNOWN:vT(u.code);return new Z(h,u.message||"")}(o);t=new IT(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=du(n,s.document.name),i=Mn(s.document.updateTime),o=s.document.createTime?Mn(s.document.createTime):ue.min(),a=new Ut({mapValue:{fields:s.document.fields}}),c=Rt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new Ha(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=du(n,s.document),i=s.readTime?Mn(s.readTime):ue.min(),o=Rt.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=du(n,s.document),i=s.removedTargetIds||[];t=new Ha([],i,r,null)}else{if(!("filter"in e))return ce();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new MO(r,i),a=s.targetId;t=new TT(a,o)}}return t}function KO(n,e){let t;if(e instanceof Qo)t={update:A_(n,e.key,e.value)};else if(e instanceof Ld)t={delete:_h(n,e.key)};else if(e instanceof Ws)t={update:A_(n,e.key,e.data),updateMask:nD(e.fieldMask)};else{if(!(e instanceof OO))return ce();t={verify:_h(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Rl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof No)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Al)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ce()}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:WO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(n,e.precondition)),t}function GO(n,e){return n&&n.length>0?(Oe(e!==void 0),n.map(t=>function(r,i){let o=r.updateTime?Mn(r.updateTime):Mn(i);return o.isEqual(ue.min())&&(o=Mn(i)),new PO(o,r.transformResults||[])}(t,e))):[]}function QO(n,e){return{documents:[AT(n,e.path)]}}function YO(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=AT(n,r);const i=function(u){if(u.length!==0)return ST(Tn.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Nr(g.field),direction:ZO(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=ph(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:t,parent:r}}function XO(n){let e=HO(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){Oe(s===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const g=bT(f);return g instanceof Tn&&sT(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(v){return new wl(Or(v.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,oc(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(f){const g=!!f.before,_=f.values||[];return new Il(_,g)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const g=!f.before,_=f.values||[];return new Il(_,g)}(t.endAt)),_O(e,r,o,i,a,"F",c,u)}function JO(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bT(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Or(t.unaryFilter.field);return Xe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Or(t.unaryFilter.field);return Xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(t.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Or(t.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(n):n.fieldFilter!==void 0?function(t){return Xe.create(Or(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Tn.create(t.compositeFilter.filters.map(s=>bT(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ce()}}(t.compositeFilter.op))}(n):ce()}function ZO(n){return BO[n]}function eD(n){return $O[n]}function tD(n){return jO[n]}function Nr(n){return{fieldPath:n.canonicalString()}}function Or(n){return ht.fromServerFormat(n.fieldPath)}function ST(n){return n instanceof Xe?function(t){if(t.op==="=="){if(d_(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NAN"}};if(h_(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(d_(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NAN"}};if(h_(t.value))return{unaryFilter:{field:Nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(t.field),op:eD(t.op),value:t.value}}}(n):n instanceof Tn?function(t){const s=t.getFilters().map(r=>ST(r));return s.length===1?s[0]:{compositeFilter:{op:tD(t.op),filters:s}}}(n):ce()}function nD(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function PT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t,s,r,i=ue.min(),o=ue.min(),a=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Is(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.ht=e}}function rD(n){const e=XO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.ln=new oD}addToCollectionParentIndex(e,t){return this.ln.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(Ps.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(Ps.min())}updateCollectionGroup(e,t,s){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class oD{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new et(Be.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new et(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lt{static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(41943040,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ti(0)}static Qn(){return new ti(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_([n,e],[t,s]){const r=Ee(n,t);return r===0?Ee(e,s):r}class aD{constructor(e){this.Gn=e,this.buffer=new et(b_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();b_(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lD{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){J("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gi(t)?J("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await pi(t)}await this.Yn(3e5)})}}class cD{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return F.resolve(ic.oe);const s=new aD(t);return this.Zn.forEachTarget(e,r=>s.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>s.Hn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(C_)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),C_):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,t))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Pr()<=_e.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f})))}}function uD(n,e){return new cD(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(){this.changes=new Er(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?F.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&uo(s.mutation,r,Gt.empty(),Je.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ye()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ye()){const r=rr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=zi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=rr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ye()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=as();const o=co(),a=function(){return co()}();return t.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Ws)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),uo(h.mutation,u,h.mutation.getFieldMask(),Je.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var f;return a.set(u,new dD(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const s=co();let r=new He((o,a)=>o-a),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=s.get(c)||Gt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(r.get(a.batchId)||ye()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=dT();h.forEach(g=>{if(!i.has(g)){const _=yT(t.get(g),s.get(g));_!==null&&f.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return F.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):aT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):F.resolve(rr());let a=-1,c=i;return o.next(u=>F.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ye())).next(h=>({batchId:a,changes:hT(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new se(t)).next(s=>{let r=zi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=zi();return this.indexManager.getCollectionParents(e,i).next(a=>F.forEach(a,c=>{const u=function(f,g){return new Go(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Rt.newInvalidDocument(h)))});let a=zi();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&uo(h.mutation,u,Gt.empty(),Je.now()),uc(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return F.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Mn(r.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(r){return{name:r.name,query:rD(r.bundledQuery),readTime:Mn(r.readTime)}}(t)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.overlays=new He(se.comparator),this.Er=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const s=rr();return F.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.Tt(e,t,i)}),F.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Er.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(s)),F.resolve()}getOverlaysForCollection(e,t,s){const r=rr(),i=t.length+1,o=new se(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return F.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new He((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=rr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=rr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return F.resolve(a)}Tt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Er.get(r.largestBatchId).delete(s.key);this.Er.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new xO(t,s));let i=this.Er.get(t);i===void 0&&(i=ye(),this.Er.set(t,i)),this.Er.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.dr=new et(st.Ar),this.Rr=new et(st.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new st(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new st(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new se(new Be([])),s=new st(t,e),r=new st(t,e+1),i=[];return this.Rr.forEachInRange([s,r],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new se(new Be([])),s=new st(t,e),r=new st(t,e+1);let i=ye();return this.Rr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new st(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class st{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return se.comparator(e.key,t.key)||Ee(e.br,t.br)}static Vr(e,t){return Ee(e.br,t.br)||se.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new et(st.Ar)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DO(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.vr=this.vr.add(new st(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,t){return F.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Fr(s),i=r<0?0:r;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new st(t,0),r=new st(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([s,r],o=>{const a=this.Cr(o.br);i.push(a)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new et(Ee);return t.forEach(r=>{const i=new st(r,0),o=new st(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{s=s.add(a.br)})}),F.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;se.isDocumentKey(i)||(i=i.child(""));const o=new st(new se(i),0);let a=new et(Ee);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.br)),!0)},o),F.resolve(this.Mr(a))}Mr(e){const t=[];return e.forEach(s=>{const r=this.Cr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){Oe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return F.forEach(t.mutations,r=>{const i=new st(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new st(t,0),r=this.vr.firstAfterOrEqual(s);return F.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.Nr=e,this.docs=function(){return new He(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return F.resolve(s?s.document.mutableCopy():Rt.newInvalidDocument(t))}getEntries(e,t){let s=as();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Rt.newInvalidDocument(r))}),F.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=as();const o=t.path,a=new se(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||QN(GN(h),s)<=0||(r.has(h.key)||uc(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,t,s,r){ce()}Lr(e,t){return F.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new ED(this)}getSize(e){return F.resolve(this.size)}}class ED extends hD{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.hr.addEntry(e,r)):this.hr.removeEntry(s)}),F.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.persistence=e,this.Br=new Er(t=>Dd(t),xd),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.kr=0,this.qr=new Bd,this.targetCount=0,this.Qr=ti.qn()}forEachTarget(e,t){return this.Br.forEach((s,r)=>t(r)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),F.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ti(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.Un(t),F.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),F.waitFor(i).next(()=>r)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return F.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),F.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return F.resolve(s)}containsKey(e,t){return F.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t){this.Kr={},this.overlays={},this.$r=new ic(0),this.Ur=!1,this.Ur=!0,this.Wr=new _D,this.referenceDelegate=e(this),this.Gr=new vD(this),this.indexManager=new iD,this.remoteDocumentCache=function(r){return new yD(r)}(s=>this.referenceDelegate.zr(s)),this.serializer=new sD(t),this.jr=new pD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new mD(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){J("MemoryPersistence","Starting transaction:",e);const r=new TD(this.$r.next());return this.referenceDelegate.Hr(),s(r).next(i=>this.referenceDelegate.Jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Yr(e,t){return F.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class TD extends XN{constructor(e){super(),this.currentSequenceNumber=e}}class $d{constructor(e){this.persistence=e,this.Zr=new Bd,this.Xr=null}static ei(e){return new $d(e)}get ti(){if(this.Xr)return this.Xr;throw ce()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),F.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),F.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(r=>this.ti.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.ti.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ti,s=>{const r=se.fromPath(s);return this.ni(e,r).next(i=>{i||t.removeEntry(r,ue.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return F.or([()=>F.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class bl{constructor(e,t){this.persistence=e,this.ri=new Er(s=>eO(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=uD(this,t)}static ei(e,t){return new bl(e,t)}Hr(){}Jr(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return F.forEach(this.ri,(s,r)=>this.ir(e,s,r).next(i=>i?F.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Lr(e,o=>this.ir(e,o,t).next(a=>{a||(s++,i.removeEntry(o,ue.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),F.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),F.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ja(e.data.value)),t}ir(e,t,s){return F.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.ri.get(t);return F.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=r}static zi(e,t){let s=ye(),r=ye();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new jd(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return _w()?8:JN(Ct())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.Xi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,t,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ID;return this.ts(e,t,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,t,o,a.size)})}).next(()=>i.result)}ns(e,t,s,r){return s.documentReadCount<this.Ji?(Pr()<=_e.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",kr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),F.resolve()):(Pr()<=_e.DEBUG&&J("QueryEngine","Query:",kr(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Yi*r?(Pr()<=_e.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",kr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(t))):F.resolve())}Xi(e,t){if(__(t))return F.resolve(null);let s=xn(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=fh(t,null,"F"),s=xn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ye(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(t,a);return this.ss(t,u,o,c.readTime)?this.Xi(e,fh(t,null,"F")):this.os(e,u,t,c)}))})))}es(e,t,s,r){return __(t)||r.isEqual(ue.min())?F.resolve(null):this.Zi.getDocuments(e,s).next(i=>{const o=this.rs(t,i);return this.ss(t,o,s,r)?F.resolve(null):(Pr()<=_e.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),kr(t)),this.os(e,o,t,KN(r,-1)).next(a=>a))})}rs(e,t){let s=new et(cT(e));return t.forEach((r,i)=>{uc(e,i)&&(s=s.add(i))}),s}ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,t,s){return Pr()<=_e.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",kr(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ps.min(),s)}os(e,t,s,r){return this.Zi.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,t,s,r){this.persistence=e,this._s=t,this.serializer=r,this.us=new He(Ee),this.cs=new Er(i=>Dd(i),xd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fD(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function AD(n,e,t,s){return new RD(n,e,t,s)}async function NT(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ye();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function CD(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,g=f.keys();let _=F.resolve();return g.forEach(v=>{_=_.next(()=>h.getEntry(c,v)).next(C=>{const P=u.docVersions.get(v);Oe(P!==null),C.version.compareTo(P)<0&&(f.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ye();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function OT(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function bD(n,e){const t=fe(n),s=e.snapshotVersion;let r=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.hs.newChangeBuffer({trackRemovals:!0});r=t.us;const a=[];e.targetChanges.forEach((h,f)=>{const g=r.get(f);if(!g)return;a.push(t.Gr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.Gr.addMatchingKeys(i,h.addedDocuments,f)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(ft.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,s)),r=r.insert(f,_),function(C,P,U){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(g,_,h)&&a.push(t.Gr.updateTargetData(i,_))});let c=as(),u=ye();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(SD(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!s.isEqual(ue.min())){const h=t.Gr.getLastRemoteSnapshotVersion(i).next(f=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return F.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.us=r,i))}function SD(n,e,t){let s=ye(),r=ye();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=as();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:r}})}function PD(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function kD(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Gr.getTargetData(s,e).next(i=>i?(r=i,F.resolve(r)):t.Gr.allocateTargetId(s).next(o=>(r=new Is(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.us.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function yh(n,e,t){const s=fe(n),r=s.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!gi(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(r.target)}function S_(n,e,t){const s=fe(n);let r=ue.min(),i=ye();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=fe(c),g=f.cs.get(h);return g!==void 0?F.resolve(f.us.get(g)):f.Gr.getTargetData(u,h)}(s,o,xn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,t?r:ue.min(),t?i:ye())).next(a=>(ND(s,yO(e),a),{documents:a,ds:i})))}function ND(n,e,t){let s=n.ls.get(e)||ue.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.ls.set(e,s)}class P_{constructor(){this.activeTargetIds=RO()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OD{constructor(){this._o=new P_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new P_,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka=null;function fu(){return ka===null?ka=function(){return 268435456+Math.round(2147483648*Math.random())}():ka++,"0x"+ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class LD extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${r}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Oo(t,s,r,i,o){const a=fu(),c=this.No(t,s.toUriEncodedString());J("RestConnection",`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(t,c,u,r).then(h=>(J("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw Xr("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}ko(t,s,r,i,o,a){return this.Oo(t,s,r,i,o)}Lo(t,s,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}No(t,s){const r=xD[t];return`${this.Fo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,r){const i=fu();return new Promise((o,a)=>{const c=new Hv;c.setWithCredentials(!0),c.listenOnce(zv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $a.NO_ERROR:const h=c.getResponseJson();J(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case $a.TIMEOUT:J(yt,`RPC '${e}' ${i} timed out`),a(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const f=c.getStatus();if(J(yt,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const v=function(P){const U=P.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(U)>=0?U:B.UNKNOWN}(_.status);a(new Z(v,_.message))}else a(new Z(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new Z(B.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{J(yt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);J(yt,`RPC '${e}' ${i} sending request:`,r),c.send(t,"POST",u,s,15)})}qo(e,t,s){const r=fu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qv(),a=Gv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=i.join("");J(yt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let g=!1,_=!1;const v=new MD({Eo:P=>{_?J(yt,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(g||(J(yt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),g=!0),J(yt,`RPC '${e}' stream ${r} sending:`,P),f.send(P))},Ao:()=>f.close()}),C=(P,U,j)=>{P.listen(U,D=>{try{j(D)}catch(L){setTimeout(()=>{throw L},0)}})};return C(f,Hi.EventType.OPEN,()=>{_||(J(yt,`RPC '${e}' stream ${r} transport opened.`),v.So())}),C(f,Hi.EventType.CLOSE,()=>{_||(_=!0,J(yt,`RPC '${e}' stream ${r} transport closed`),v.Do())}),C(f,Hi.EventType.ERROR,P=>{_||(_=!0,Xr(yt,`RPC '${e}' stream ${r} transport errored:`,P),v.Do(new Z(B.UNAVAILABLE,"The operation could not be completed")))}),C(f,Hi.EventType.MESSAGE,P=>{var U;if(!_){const j=P.data[0];Oe(!!j);const D=j,L=(D==null?void 0:D.error)||((U=D[0])===null||U===void 0?void 0:U.error);if(L){J(yt,`RPC '${e}' stream ${r} received error:`,L);const ne=L.status;let re=function(w){const A=Ye[w];if(A!==void 0)return vT(A)}(ne),R=L.message;re===void 0&&(re=B.INTERNAL,R="Unknown error status: "+ne+" with message "+L.message),_=!0,v.Do(new Z(re,R)),f.close()}else J(yt,`RPC '${e}' stream ${r} received:`,j),v.vo(j)}}),C(a,Kv.STAT_EVENT,P=>{P.stat===ah.PROXY?J(yt,`RPC '${e}' stream ${r} detected buffering proxy`):P.stat===ah.NOPROXY&&J(yt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{v.bo()},0),v}}function pu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n){return new qO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t,s=1e3,r=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),r=Math.max(0,t-s);r>0&&J("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,t,s,r,i,o,a,c){this.li=e,this.Yo=s,this.Zo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new DT(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(os(t.toString()),os("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Xo===t&&this.I_(s,r)},s=>{e(()=>{const r=new Z(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(r)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{s(()=>this.E_(r))}),this.stream.onMessage(r=>{s(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VD extends xT{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=zO(this.serializer,e),s=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?Mn(o.readTime):ue.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=mh(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=hh(c)?{documents:QO(i,c)}:{query:YO(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wT(i,o.resumeToken);const u=ph(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){a.readTime=Cl(i,o.snapshotVersion.toTimestamp());const u=ph(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=JO(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=mh(this.serializer),t.removeTarget=e,this.c_(t)}}class FD extends xT{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=GO(e.writeResults,e.commitTime),s=Mn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=mh(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>KO(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,gh(t,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(B.UNKNOWN,i.toString())})}ko(e,t,s,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,gh(t,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(B.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class BD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(os(t),this.C_=!1):J("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{vr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=fe(c);u.k_.add(4),await Xo(u),u.K_.set("Unknown"),u.k_.delete(4),await gc(u)}(this))})}),this.K_=new BD(s,r)}}async function gc(n){if(vr(n))for(const e of n.q_)await e(!0)}async function Xo(n){for(const e of n.q_)await e(!1)}function MT(n,e){const t=fe(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),zd(t)?Hd(t):_i(t).s_()&&Wd(t,e))}function qd(n,e){const t=fe(n),s=_i(t);t.B_.delete(e),s.s_()&&LT(t,e),t.B_.size===0&&(s.s_()?s.a_():vr(t)&&t.K_.set("Unknown"))}function Wd(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}_i(n).V_(e)}function LT(n,e){n.U_.xe(e),_i(n).m_(e)}function Hd(n){n.U_=new UO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),_i(n).start(),n.K_.F_()}function zd(n){return vr(n)&&!_i(n).i_()&&n.B_.size>0}function vr(n){return fe(n).k_.size===0}function VT(n){n.U_=void 0}async function jD(n){n.K_.set("Online")}async function qD(n){n.B_.forEach((e,t)=>{Wd(n,e)})}async function WD(n,e){VT(n),zd(n)?(n.K_.O_(e),Hd(n)):n.K_.set("Unknown")}async function HD(n,e,t){if(n.K_.set("Online"),e instanceof IT&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.B_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.B_.delete(a),r.U_.removeTarget(a))}(n,e)}catch(s){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Sl(n,s)}else if(e instanceof Ha?n.U_.$e(e):e instanceof TT?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(ue.min()))try{const s=await OT(n.localStore);t.compareTo(s)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(ft.EMPTY_BYTE_STRING,h.snapshotVersion)),LT(i,c);const f=new Is(h.target,c,u,h.sequenceNumber);Wd(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){J("RemoteStore","Failed to raise snapshot:",s),await Sl(n,s)}}async function Sl(n,e,t){if(!gi(e))throw e;n.k_.add(1),await Xo(n),n.K_.set("Offline"),t||(t=()=>OT(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await gc(n)})}function FT(n,e){return e().catch(t=>Sl(n,t,e))}async function _c(n){const e=fe(n),t=Ds(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;zD(e);)try{const r=await PD(e.localStore,s);if(r===null){e.L_.length===0&&t.a_();break}s=r.batchId,KD(e,r)}catch(r){await Sl(e,r)}UT(e)&&BT(e)}function zD(n){return vr(n)&&n.L_.length<10}function KD(n,e){n.L_.push(e);const t=Ds(n);t.s_()&&t.f_&&t.g_(e.mutations)}function UT(n){return vr(n)&&!Ds(n).i_()&&n.L_.length>0}function BT(n){Ds(n).start()}async function GD(n){Ds(n).w_()}async function QD(n){const e=Ds(n);for(const t of n.L_)e.g_(t.mutations)}async function YD(n,e,t){const s=n.L_.shift(),r=Vd.from(s,e,t);await FT(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await _c(n)}async function XD(n,e){e&&Ds(n).f_&&await async function(s,r){if(function(o){return LO(o)&&o!==B.ABORTED}(r.code)){const i=s.L_.shift();Ds(s).__(),await FT(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await _c(s)}}(n,e),UT(n)&&BT(n)}async function N_(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const s=vr(t);t.k_.add(3),await Xo(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await gc(t)}async function JD(n,e){const t=fe(n);e?(t.k_.delete(2),await gc(t)):e||(t.k_.add(2),await Xo(t),t.K_.set("Unknown"))}function _i(n){return n.W_||(n.W_=function(t,s,r){const i=fe(t);return i.b_(),new VD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Ro:jD.bind(null,n),mo:qD.bind(null,n),po:WD.bind(null,n),R_:HD.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),zd(n)?Hd(n):n.K_.set("Unknown")):(await n.W_.stop(),VT(n))})),n.W_}function Ds(n){return n.G_||(n.G_=function(t,s,r){const i=fe(t);return i.b_(),new FD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:GD.bind(null,n),po:XD.bind(null,n),p_:QD.bind(null,n),y_:YD.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await _c(n)):(await n.G_.stop(),n.L_.length>0&&(J("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new Kd(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gd(n,e){if(os("AsyncQueue",`${e}: ${n}`),gi(n))return new Z(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{static emptySet(e){return new zr(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||se.comparator(t.key,s.key):(t,s)=>se.comparator(t.key,s.key),this.keyedMap=zi(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new zr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.z_=new He(se.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ce():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class ni{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ni(e,t,zr.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class ex{constructor(){this.queries=D_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const r=fe(t),i=r.queries;r.queries=D_(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(s)})})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function D_(){return new Er(n=>lT(n),cc)}async function Qd(n,e){const t=fe(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Y_()&&e.Z_()&&(s=2):(i=new ZD,s=e.Z_()?0:1);try{switch(s){case 0:i.H_=await t.onListen(r,!0);break;case 1:i.H_=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=Gd(o,`Initialization of query '${kr(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&Xd(t)}async function Yd(n,e){const t=fe(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?r=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function tx(n,e){const t=fe(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.J_)a.ta(r)&&(s=!0);o.H_=r}}s&&Xd(t)}function nx(n,e,t){const s=fe(n),r=s.queries.get(e);if(r)for(const i of r.J_)i.onError(t);s.queries.delete(e)}function Xd(n){n.X_.forEach(e=>{e.next()})}var Eh,x_;(x_=Eh||(Eh={})).na="default",x_.Cache="cache";class Jd{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ni(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Eh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.key=e}}class jT{constructor(e){this.key=e}}class sx{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ye(),this.mutatedKeys=ye(),this.Va=cT(e),this.ma=new zr(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new O_,r=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,f)=>{const g=r.get(h),_=uc(this.query,f)?f:null,v=!!g&&this.mutatedKeys.has(g.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;g&&_?g.data.isEqual(_.data)?v!==C&&(s.track({type:3,doc:_}),P=!0):this.ya(g,_)||(s.track({type:2,doc:_}),P=!0,(c&&this.Va(_,c)>0||u&&this.Va(_,u)<0)&&(a=!0)):!g&&_?(s.track({type:0,doc:_}),P=!0):g&&!_&&(s.track({type:1,doc:g}),P=!0,(c||u)&&(a=!0)),P&&(_?(o=o.add(_),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ma:o,pa:s,ss:a,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(_,v){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return C(_)-C(v)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(s),r=r!=null&&r;const a=t&&!r?this.Sa():[],c=this.Ra.size===0&&this.current&&!r?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new ni(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new O_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ye(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new jT(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new $T(s))}),t}va(e){this.da=e.ds,this.Ra=ye();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ni.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class rx{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ix{constructor(e){this.key=e,this.Fa=!1}}class ox{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Er(a=>lT(a),cc),this.Oa=new Map,this.Na=new Set,this.La=new He(se.comparator),this.Ba=new Map,this.ka=new Bd,this.qa={},this.Qa=new Map,this.Ka=ti.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function ax(n,e,t=!0){const s=GT(n);let r;const i=s.xa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Ca()):r=await qT(s,e,t,!0),r}async function lx(n,e){const t=GT(n);await qT(t,e,!0,!1)}async function qT(n,e,t,s){const r=await kD(n.localStore,xn(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return s&&(a=await cx(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&MT(n.remoteStore,r),a}async function cx(n,e,t,s,r){n.Ua=(f,g,_)=>async function(C,P,U,j){let D=P.view.ga(U);D.ss&&(D=await S_(C.localStore,P.query,!1).then(({documents:R})=>P.view.ga(R,D)));const L=j&&j.targetChanges.get(P.targetId),ne=j&&j.targetMismatches.get(P.targetId)!=null,re=P.view.applyChanges(D,C.isPrimaryClient,L,ne);return L_(C,P.targetId,re.ba),re.snapshot}(n,f,g,_);const i=await S_(n.localStore,e,!0),o=new sx(e,i.ds),a=o.ga(i.documents),c=Yo.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);L_(n,t,u.ba);const h=new rx(e,t,o);return n.xa.set(e,h),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),u.snapshot}async function ux(n,e,t){const s=fe(n),r=s.xa.get(e),i=s.Oa.get(r.targetId);if(i.length>1)return s.Oa.set(r.targetId,i.filter(o=>!cc(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await yh(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&qd(s.remoteStore,r.targetId),vh(s,r.targetId)}).catch(pi)):(vh(s,r.targetId),await yh(s.localStore,r.targetId,!0))}async function hx(n,e){const t=fe(n),s=t.xa.get(e),r=t.Oa.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),qd(t.remoteStore,s.targetId))}async function dx(n,e,t){const s=Ex(n);try{const r=await function(o,a){const c=fe(o),u=Je.now(),h=a.reduce((_,v)=>_.add(v.key),ye());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let v=as(),C=ye();return c.hs.getEntries(_,h).next(P=>{v=P,v.forEach((U,j)=>{j.isValidDocument()||(C=C.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,v)).next(P=>{f=P;const U=[];for(const j of a){const D=NO(j,f.get(j.key).overlayedDocument);D!=null&&U.push(new Ws(j.key,D,eT(D.value.mapValue),yn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,U,a)}).next(P=>{g=P;const U=P.applyToLocalDocumentSet(f,C);return c.documentOverlayCache.saveOverlays(_,P.batchId,U)})}).then(()=>({batchId:g.batchId,changes:hT(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new He(Ee)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(s,r.batchId,t),await Jo(s,r.changes),await _c(s.remoteStore)}catch(r){const i=Gd(r,"Failed to persist write");t.reject(i)}}async function WT(n,e){const t=fe(n);try{const s=await bD(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Ba.get(i);o&&(Oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?Oe(o.Fa):r.removedDocuments.size>0&&(Oe(o.Fa),o.Fa=!1))}),await Jo(t,s,e)}catch(s){await pi(s)}}function M_(n,e,t){const s=fe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=fe(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const g of f.J_)g.ea(a)&&(u=!0)}),u&&Xd(c)}(s.eventManager,e),r.length&&s.Ma.R_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function fx(n,e,t){const s=fe(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Ba.get(e),i=r&&r.key;if(i){let o=new He(se.comparator);o=o.insert(i,Rt.newNoDocument(i,ue.min()));const a=ye().add(i),c=new fc(ue.min(),new Map,new He(Ee),o,a);await WT(s,c),s.La=s.La.remove(i),s.Ba.delete(e),Zd(s)}else await yh(s.localStore,e,!1).then(()=>vh(s,e,t)).catch(pi)}async function px(n,e){const t=fe(n),s=e.batch.batchId;try{const r=await CD(t.localStore,e);zT(t,s,null),HT(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Jo(t,r)}catch(r){await pi(r)}}async function gx(n,e,t){const s=fe(n);try{const r=await function(o,a){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Oe(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);zT(s,e,t),HT(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Jo(s,r)}catch(r){await pi(r)}}function HT(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function zT(n,e,t){const s=fe(n);let r=s.qa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.qa[s.currentUser.toKey()]=r}}function vh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Oa.get(e))n.xa.delete(s),t&&n.Ma.Wa(s,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(s=>{n.ka.containsKey(s)||KT(n,s)})}function KT(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(qd(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Zd(n))}function L_(n,e,t){for(const s of t)s instanceof $T?(n.ka.addReference(s.key,e),_x(n,s)):s instanceof jT?(J("SyncEngine","Document no longer in limbo: "+s.key),n.ka.removeReference(s.key,e),n.ka.containsKey(s.key)||KT(n,s.key)):ce()}function _x(n,e){const t=e.key,s=t.path.canonicalString();n.La.get(t)||n.Na.has(s)||(J("SyncEngine","New document in limbo: "+t),n.Na.add(s),Zd(n))}function Zd(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new se(Be.fromString(e)),s=n.Ka.next();n.Ba.set(s,new ix(t)),n.La=n.La.insert(t,s),MT(n.remoteStore,new Is(xn(lc(t.path)),s,"TargetPurposeLimboResolution",ic.oe))}}async function Jo(n,e,t){const s=fe(n),r=[],i=[],o=[];s.xa.isEmpty()||(s.xa.forEach((a,c)=>{o.push(s.Ua(c,e,t).then(u=>{var h;if((u||t)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=jd.zi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),s.Ma.R_(r),await async function(c,u){const h=fe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(u,g=>F.forEach(g.Wi,_=>h.persistence.referenceDelegate.addReference(f,g.targetId,_)).next(()=>F.forEach(g.Gi,_=>h.persistence.referenceDelegate.removeReference(f,g.targetId,_)))))}catch(f){if(!gi(f))throw f;J("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const _=h.us.get(g),v=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(v);h.us=h.us.insert(g,C)}}}(s.localStore,i))}async function mx(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const s=await NT(t.localStore,e);t.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new Z(B.CANCELLED,o))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Jo(t,s.Ts)}}function yx(n,e){const t=fe(n),s=t.Ba.get(e);if(s&&s.Fa)return ye().add(s.key);{let r=ye();const i=t.Oa.get(e);if(!i)return r;for(const o of i){const a=t.xa.get(o);r=r.unionWith(a.view.fa)}return r}}function GT(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=WT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fx.bind(null,e),e.Ma.R_=tx.bind(null,e.eventManager),e.Ma.Wa=nx.bind(null,e.eventManager),e}function Ex(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=px.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gx.bind(null,e),e}class Pl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return AD(this.persistence,new wD,e.initialUser,this.serializer)}ja(e){return new kT($d.ei,this.serializer)}za(e){return new OD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pl.provider={build:()=>new Pl};class vx extends Pl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Oe(this.persistence.referenceDelegate instanceof bl);const s=this.persistence.referenceDelegate.garbageCollector;return new lD(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new kT(s=>bl.ei(s,t),this.serializer)}}class Th{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>M_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mx.bind(null,this.syncEngine),await JD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ex}()}createDatastore(e){const t=pc(e.databaseInfo.databaseId),s=function(i){return new LD(i)}(e.databaseInfo);return function(i,o,a,c){return new UD(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,o,a){return new $D(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>M_(this.syncEngine,t,0),function(){return k_.p()?new k_:new DD}())}createSyncEngine(e,t){return function(r,i,o,a,c,u,h){const f=new ox(r,i,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=fe(r);J("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Xo(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Th.provider={build:()=>new Th};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):os("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Et.UNAUTHENTICATED,this.clientId=Xv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Gd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function gu(n,e){n.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await NT(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function V_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ix(n);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>N_(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>N_(e.remoteStore,r)),n._onlineComponents=e}async function Ix(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await gu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Xr("Error using user provided cache. Falling back to memory cache: "+t),await gu(n,new Pl)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await gu(n,new vx(void 0));return n._offlineComponents}async function QT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await V_(n,n._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await V_(n,new Th))),n._onlineComponents}function wx(n){return QT(n).then(e=>e.syncEngine)}async function kl(n){const e=await QT(n),t=e.eventManager;return t.onListen=ax.bind(null,e.syncEngine),t.onUnlisten=ux.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=lx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=hx.bind(null,e.syncEngine),t}function Rx(n,e,t={}){const s=new ss;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new ef({next:g=>{h.eu(),o.enqueueAndForget(()=>Yd(i,f));const _=g.docs.has(a);!_&&g.fromCache?u.reject(new Z(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?u.reject(new Z(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Jd(lc(a.path),h,{includeMetadataChanges:!0,ua:!0});return Qd(i,f)}(await kl(n),n.asyncQueue,e,t,s)),s.promise}function Ax(n,e,t={}){const s=new ss;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new ef({next:g=>{h.eu(),o.enqueueAndForget(()=>Yd(i,f)),g.fromCache&&c.source==="server"?u.reject(new Z(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Jd(a,h,{includeMetadataChanges:!0,ua:!0});return Qd(i,f)}(await kl(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(n,e,t){if(!t)throw new Z(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Cx(n,e,t,s){if(e===!0&&s===!0)throw new Z(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function U_(n){if(!se.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function B_(n){if(se.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function mc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce()}function on(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mc(n);throw new Z(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Cx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YT((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $_(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new FN;switch(s.type){case"firstParty":return new jN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=F_.get(t);s&&(J("ComponentProvider","Removing Datastore"),F_.delete(t),s.terminate())}(this),Promise.resolve()}}function bx(n,e,t,s={}){var r;const i=(n=on(n,yc))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Xr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Et.MOCK_USER;else{a=uw(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Et(u)}n._authCredentials=new UN(new Yv(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Tr(this.firestore,e,this._query)}}class xt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class bs extends Tr{constructor(e,t,s){super(e,t,lc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new se(e))}withConverter(e){return new bs(this.firestore,e,this._path)}}function za(n,e,...t){if(n=tt(n),XT("collection","path",e),n instanceof yc){const s=Be.fromString(e,...t);return B_(s),new bs(n,null,s)}{if(!(n instanceof xt||n instanceof bs))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Be.fromString(e,...t));return B_(s),new bs(n.firestore,null,s)}}function ho(n,e,...t){if(n=tt(n),arguments.length===1&&(e=Xv.newId()),XT("doc","path",e),n instanceof yc){const s=Be.fromString(e,...t);return U_(s),new xt(n,null,new se(s))}{if(!(n instanceof xt||n instanceof bs))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Be.fromString(e,...t));return U_(s),new xt(n.firestore,n instanceof bs?n.converter:null,new se(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new DT(this,"async_queue_retry"),this.fu=()=>{const s=pu();s&&J("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=pu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=pu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new ss;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!gi(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw os("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const r=Kd.createAndSchedule(this,e,t,s,i=>this.Su(i));return this.du.push(r),r}pu(){this.Au&&ce()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function q_(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class xs extends yc{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new j_,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new j_(e),this._firestoreClient=void 0,await e}}}function JT(n,e){const t=typeof n=="object"?n:Oh(),s=typeof n=="string"?n:"(default)",r=Nh(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=cw("firestore");i&&bx(r,...i)}return r}function Ec(n){if(n._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Sx(n),n._firestoreClient}function Sx(n){var e,t,s;const r=n._freezeSettings(),i=function(a,c,u,h){return new sO(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,YT(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new Tx(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new si(ft.fromBase64String(e))}catch(t){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new si(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=/^__.*__$/;class kx{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ws(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qo(e,this.data,t,this.fieldTransforms)}}class ZT{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ws(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function eI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class sf{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new sf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:s,Nu:!1});return r.Lu(e),r}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:s,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Nl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(eI(this.Mu)&&Px.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Nx{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||pc(e)}$u(e,t,s,r=!1){return new sf({Mu:e,methodName:t,Ku:s,path:ht.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rf(n){const e=n._freezeSettings(),t=pc(n._databaseId);return new Nx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ox(n,e,t,s,r,i={}){const o=n.$u(i.merge||i.mergeFields?2:0,e,t,r);of("Data must be an object, but it was:",o,s);const a=tI(s,o);let c,u;if(i.merge)c=new Gt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const g=Ih(e,f,t);if(!o.contains(g))throw new Z(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);sI(h,g)||h.push(g)}c=new Gt(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new kx(new Ut(a),c,u)}class Ic extends tf{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ic}}function Dx(n,e,t,s){const r=n.$u(1,e,t);of("Data must be an object, but it was:",r,s);const i=[],o=Ut.empty();qs(s,(c,u)=>{const h=af(e,c,t);u=tt(u);const f=r.Bu(h);if(u instanceof Ic)i.push(h);else{const g=Zo(u,f);g!=null&&(i.push(h),o.set(h,g))}});const a=new Gt(i);return new ZT(o,a,r.fieldTransforms)}function xx(n,e,t,s,r,i){const o=n.$u(1,e,t),a=[Ih(e,s,t)],c=[r];if(i.length%2!=0)throw new Z(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)a.push(Ih(e,i[g])),c.push(i[g+1]);const u=[],h=Ut.empty();for(let g=a.length-1;g>=0;--g)if(!sI(u,a[g])){const _=a[g];let v=c[g];v=tt(v);const C=o.Bu(_);if(v instanceof Ic)u.push(_);else{const P=Zo(v,C);P!=null&&(u.push(_),h.set(_,P))}}const f=new Gt(u);return new ZT(h,f,o.fieldTransforms)}function Mx(n,e,t,s=!1){return Zo(t,n.$u(s?4:3,e))}function Zo(n,e){if(nI(n=tt(n)))return of("Unsupported field value:",e,n),tI(n,e);if(n instanceof tf)return function(s,r){if(!eI(r.Mu))throw r.qu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Zo(a,r.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=tt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return AO(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Je.fromDate(s);return{timestampValue:Cl(r.serializer,i)}}if(s instanceof Je){const i=new Je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Cl(r.serializer,i)}}if(s instanceof Tc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof si)return{bytesValue:wT(r.serializer,s._byteString)};if(s instanceof xt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ud(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof nf)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Md(a.serializer,c)})}}}}}}(s,r);throw r.qu(`Unsupported field value: ${mc(s)}`)}(n,e)}function tI(n,e){const t={};return Jv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(n,(s,r)=>{const i=Zo(r,e.Ou(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function nI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Je||n instanceof Tc||n instanceof si||n instanceof xt||n instanceof tf||n instanceof nf)}function of(n,e,t){if(!nI(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const s=mc(t);throw s==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+s)}}function Ih(n,e,t){if((e=tt(e))instanceof vc)return e._internalPath;if(typeof e=="string")return af(n,e);throw Nl("Field path arguments must be of type string or ",n,!1,void 0,t)}const Lx=new RegExp("[~\\*/\\[\\]]");function af(n,e,t){if(e.search(Lx)>=0)throw Nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new vc(...e.split("."))._internalPath}catch{throw Nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Nl(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new Z(B.INVALID_ARGUMENT,a+n+c)}function sI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(lf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Vx extends rI{data(){return super.data()}}function lf(n,e){return typeof e=="string"?af(n,e):e instanceof vc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Z(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cf{}class Fx extends cf{}function Ux(n,e,...t){let s=[];e instanceof cf&&s.push(e),s=s.concat(t),function(i){const o=i.filter(c=>c instanceof uf).length,a=i.filter(c=>c instanceof wc).length;if(o>1||o>0&&a>0)throw new Z(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class wc extends Fx{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new wc(e,t,s)}_apply(e){const t=this._parse(e);return oI(e._query,t),new Tr(e.firestore,e.converter,dh(e._query,t))}_parse(e){const t=rf(e.firestore);return function(i,o,a,c,u,h,f){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Z(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){H_(f,h);const _=[];for(const v of f)_.push(W_(c,i,v));g={arrayValue:{values:_}}}else g=W_(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||H_(f,h),g=Mx(a,o,f,h==="in"||h==="not-in");return Xe.create(u,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Bx(n,e,t){const s=e,r=lf("where",n);return wc._create(r,s,t)}class uf extends cf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Tn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)oI(o,c),o=dh(o,c)}(e._query,t),new Tr(e.firestore,e.converter,dh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function W_(n,e,t){if(typeof(t=tt(t))=="string"){if(t==="")throw new Z(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aT(e)&&t.indexOf("/")!==-1)throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Be.fromString(t));if(!se.isDocumentKey(s))throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return u_(n,new se(s))}if(t instanceof xt)return u_(n,t._key);throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(t)}.`)}function H_(n,e){if(!Array.isArray(n)||n.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oI(n,e){const t=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $x{convertValue(e,t="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return qs(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Ge(o.doubleValue));return new nf(i)}convertGeoPoint(e){return new Tc(Ge(e.latitude),Ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ac(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const t=ks(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Be.fromString(e);Oe(PT(s));const r=new Po(s.get(1),s.get(3)),i=new se(s.popFirst(5));return r.isEqual(t)||os(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aI extends rI{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(lf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Ka extends aI{data(e={}){return super.data(e)}}class lI{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Gi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Ka(this._firestore,this._userDataWriter,s.key,s,new Gi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new Ka(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Gi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ka(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Gi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:qx(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function qx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(n){n=on(n,xt);const e=on(n.firestore,xs);return Rx(Ec(e),n._key).then(t=>hI(e,n,t))}class hf extends $x{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,t)}}function Wx(n){n=on(n,Tr);const e=on(n.firestore,xs),t=Ec(e),s=new hf(e);return iI(n._query),Ax(t,n._query).then(r=>new lI(e,s,n,r))}function z_(n,e,t,...s){n=on(n,xt);const r=on(n.firestore,xs),i=rf(r);let o;return o=typeof(e=tt(e))=="string"||e instanceof vc?xx(i,"updateDoc",n._key,e,t,s):Dx(i,"updateDoc",n._key,e),ff(r,[o.toMutation(n._key,yn.exists(!0))])}function uI(n){return ff(on(n.firestore,xs),[new Ld(n._key,yn.none())])}function Hx(n,e){const t=on(n.firestore,xs),s=ho(n),r=jx(n.converter,e);return ff(t,[Ox(rf(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,yn.exists(!1))]).then(()=>s)}function df(n,...e){var t,s,r;n=tt(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||q_(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(q_(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,u,h;if(n instanceof xt)u=on(n.firestore,xs),h=lc(n._key.path),c={next:f=>{e[o]&&e[o](hI(u,n,f))},error:e[o+1],complete:e[o+2]};else{const f=on(n,Tr);u=on(f.firestore,xs),h=f._query;const g=new hf(u);c={next:_=>{e[o]&&e[o](new lI(u,g,f,_))},error:e[o+1],complete:e[o+2]},iI(n._query)}return function(g,_,v,C){const P=new ef(C),U=new Jd(_,P,v);return g.asyncQueue.enqueueAndForget(async()=>Qd(await kl(g),U)),()=>{P.eu(),g.asyncQueue.enqueueAndForget(async()=>Yd(await kl(g),U))}}(Ec(u),h,a,c)}function ff(n,e){return function(s,r){const i=new ss;return s.asyncQueue.enqueueAndForget(async()=>dx(await wx(s),r,i)),i.promise}(Ec(n),e)}function hI(n,e,t){const s=t.docs.get(e._key),r=new hf(n);return new aI(n,r,e._key,s,new Gi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){fi=r})(Ms),Ln(new En("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new xs(new BN(s.getProvider("auth-internal")),new WN(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Qt(r_,"4.7.5",e),Qt(r_,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="firebasestorage.googleapis.com",zx="storageBucket",Kx=2*60*1e3,Gx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Bn{constructor(e,t,s=0){super(_u(e),`Firebase Storage: ${t} (${_u(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$n.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _u(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Un;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Un||(Un={}));function _u(n){return"storage/"+n}function Qx(){const n="An unknown error occurred, please check the error payload for server response.";return new $n(Un.UNKNOWN,n)}function Yx(){return new $n(Un.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xx(){return new $n(Un.CANCELED,"User canceled the upload/download.")}function Jx(n){return new $n(Un.INVALID_URL,"Invalid URL '"+n+"'.")}function Zx(n){return new $n(Un.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function K_(n){return new $n(Un.INVALID_ARGUMENT,n)}function fI(){return new $n(Un.APP_DELETED,"The Firebase app was deleted.")}function eM(n){return new $n(Un.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=pn.makeFromUrl(e,t)}catch{return new pn(e,"")}if(s.path==="")return s;throw Zx(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${r}/o${g}`,"i"),v={bucket:1,path:3},C=t===dI?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",U=new RegExp(`^https?://${C}/${r}/${P}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:_,indices:v,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<D.length;L++){const ne=D[L],re=ne.regex.exec(e);if(re){const R=re[ne.indices.bucket];let y=re[ne.indices.path];y||(y=""),s=new pn(R,y),ne.postModify(s);break}}if(s==null)throw Jx(e);return s}}class tM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(n,e,t){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function f(P){r=setTimeout(()=>{r=null,n(_,c())},P)}function g(){i&&clearTimeout(i)}function _(P,...U){if(u){g();return}if(P){g(),h.call(null,P,...U);return}if(c()||o){g(),h.call(null,P,...U);return}s<64&&(s*=2);let D;a===1?(a=2,D=0):D=(s+Math.random())*1e3,f(D)}let v=!1;function C(P){v||(v=!0,g(),!u&&(r!==null?(P||(a=2),clearTimeout(r),f(0)):P||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,C(!0)},t),C}function sM(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(n){return n!==void 0}function G_(n,e,t,s){if(s<e)throw K_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw K_(`Invalid value for '${n}'. Expected ${t} or less.`)}function iM(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var Ol;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ol||(Ol={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,t,s,r,i,o,a,c,u,h,f,g=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Na(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ol.NO_ERROR,c=i.getStatus();if(!a||oM(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Ol.ABORT;s(!1,new Na(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Na(u,i))})},t=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());rM(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Qx();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?fI():Xx();o(c)}else{const c=Yx();o(c)}};this.canceled_?t(!1,new Na(!1,null,!0)):this.backoffId_=nM(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Na{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function lM(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function cM(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uM(n,e){e&&(n["X-Firebase-GMPID"]=e)}function hM(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function dM(n,e,t,s,r,i,o=!0){const a=iM(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return uM(u,e),lM(u,t),cM(u,i),hM(u,s),new aM(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function pM(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t){this._service=e,t instanceof pn?this._location=t:this._location=pn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Dl(e,t)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pM(this._location.path)}get storage(){return this._service}get parent(){const e=fM(this._location.path);if(e===null)return null;const t=new pn(this._location.bucket,e);return new Dl(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw eM(e)}}function Q_(n,e){const t=e==null?void 0:e[zx];return t==null?null:pn.makeFromBucketSpec(t,n)}class gM{constructor(e,t,s,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=dI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kx,this._maxUploadRetryTime=Gx,this._requests=new Set,r!=null?this._bucket=pn.makeFromBucketSpec(r,this._host):this._bucket=Q_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=Q_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dl(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new tM(fI());{const o=dM(e,this._appId,s,r,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const Y_="@firebase/storage",X_="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M="storage";function mM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new gM(t,s,r,e,Ms)}function yM(){Ln(new En(_M,mM,"PUBLIC").setMultipleInstances(!0)),Qt(Y_,X_,""),Qt(Y_,X_,"esm2017")}yM();const mu=new WeakMap;function pI(n,e){return mu.has(e)||mu.set(e,{f:{},r:{},s:{},u:{}}),mu.get(e)}function EM(n,e,t,s){if(!n)return t;const[r,i]=gI(n);if(!r)return t;const o=pI(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:t}function vM(n,e,t,s){if(!n)return;const[r,i]=gI(n);if(!r)return;const o=pI(void 0,s)[r],a=e||i;if(a)return t.then(c=>{o[a]=c}).catch(Sn),a}function gI(n){return qP(n)||WP(n)?["f",n.path]:HP(n)?["r",n.toString()]:zP(n)?["s",n.toString()]:[]}const yu=new WeakMap;function TM(n,e,t){const s=jo();yu.has(s)||yu.set(s,new Map);const r=yu.get(s),i=vM(e,t,n,s);return i&&r.set(i,n),i?()=>r.delete(i):Sn}const IM={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function wh(n,e,t,s){if(!$P(n))return[n,{}];const r=[{},{}],i=Object.keys(t).reduce((a,c)=>{const u=t[c];return a[u.path]=u.data(),a},{});function o(a,c,u,h){c=c||{};const[f,g]=h;Object.getOwnPropertyNames(a).forEach(_=>{const v=Object.getOwnPropertyDescriptor(a,_);v&&!v.enumerable&&Object.defineProperty(f,_,v)});for(const _ in a){const v=a[_];if(v==null||v instanceof Date||v instanceof Je||v instanceof Tc)f[_]=v;else if(ld(v)){const C=u+_;f[_]=C in t?c[_]:v.path,g[C]=v.converter?v:v.withConverter(s.converter)}else if(Array.isArray(v)){f[_]=Array(v.length);for(let C=0;C<v.length;C++){const P=v[C];P&&P.path in i&&(f[_][C]=i[P.path])}o(v,c[_]||f[_],u+_+".",[f[_],g])}else _r(v)?(f[_]={},o(v,c[_],u+_+".",[f[_],g])):f[_]=v}}return o(n,e,"",r),r}const pf={reset:!1,wait:!0,maxRefDepth:2,converter:IM,snapshotOptions:{serverTimestamps:"estimate"}};function xl(n){for(const e in n)n[e].unsub()}function Rh(n,e,t,s,r,i,o,a,c){const[u,h]=wh(s.data(n.snapshotOptions),ad(e,t),r,n);i.set(e,t,u),Ah(n,e,t,r,h,i,o,a,c)}function wM({ref:n,target:e,path:t,depth:s,resolve:r,reject:i,ops:o},a){const c=Object.create(null);let u=Sn;return a.once?cI(n).then(h=>{h.exists()?Rh(a,e,t,h,c,o,s,r,i):(o.set(e,t,null),r())}).catch(i):u=df(n,h=>{h.exists()?Rh(a,e,t,h,c,o,s,r,i):(o.set(e,t,null),r())},i),()=>{u(),xl(c)}}function Ah(n,e,t,s,r,i,o,a,c){const u=Object.keys(r);if(Object.keys(s).filter(C=>u.indexOf(C)<0).forEach(C=>{s[C].unsub(),delete s[C]}),!u.length||++o>n.maxRefDepth)return a(t);let f=0;const g=u.length,_=Object.create(null);function v(C){C in _&&++f>=g&&a(t)}u.forEach(C=>{const P=s[C],U=r[C],j=`${t}.${C}`;if(_[j]=!0,P)if(P.path!==U.path)P.unsub();else return;s[C]={data:()=>ad(e,j),unsub:wM({ref:U,target:e,path:j,depth:o,ops:i,resolve:v.bind(null,j),reject:c},n),path:U.path}})}function RM(n,e,t,s,r,i){const o=Object.assign({},pf,i),{snapshotListenOptions:a,snapshotOptions:c,wait:u,once:h}=o,f="value";let g=nn(u?[]:n.value);u||t.set(n,f,[]);const _=s;let v,C=Sn;const P=[],U={added:({newIndex:D,doc:L})=>{P.splice(D,0,Object.create(null));const ne=P[D],[re,R]=wh(L.data(c),void 0,ne,o);t.add(zn(g),D,re),Ah(o,g,`${f}.${D}`,ne,R,t,0,s.bind(null,L),r)},modified:({oldIndex:D,newIndex:L,doc:ne})=>{const re=zn(g),R=P[D],y=re[D],[w,A]=wh(ne.data(c),y,R,o);P.splice(L,0,R),t.remove(re,D),t.add(re,L,w),Ah(o,g,`${f}.${L}`,R,A,t,0,s,r)},removed:({oldIndex:D})=>{const L=zn(g);t.remove(L,D),xl(P.splice(D,1)[0])}};function j(D){const L=D.docChanges(a);if(!v&&L.length){v=!0;let ne=0;const re=L.length,R=Object.create(null);for(let y=0;y<re;y++)R[L[y].doc.id]=!0;s=y=>{y&&y.id in R&&++ne>=re&&(u&&(t.set(n,f,zn(g)),g=n),_(zn(g)),s=Sn)}}L.forEach(ne=>{U[ne.type](ne)}),L.length||(u&&(t.set(n,f,zn(g)),g=n),s(zn(g)))}return h?Wx(e).then(j).catch(r):C=df(e,j,r),D=>{if(C(),D){const L=typeof D=="function"?D():[];t.set(n,f,L)}P.forEach(xl)}}function AM(n,e,t,s,r,i){const o=Object.assign({},pf,i),a="value",c=Object.create(null);s=KP(s,()=>ad(n,a));let u=Sn;function h(f){f.exists()?Rh(o,n,a,f,c,t,0,s,r):(t.set(n,a,null),s(null))}return o.once?cI(e).then(h).catch(r):u=df(e,h,r),f=>{if(u(),f){const g=typeof f=="function"?f():null;t.set(n,a,g)}xl(c)}}const J_=Symbol();function CM(n,e){let t=Sn;const s=Object.assign({},pf,e),r=zn(n),i=s.target||nn();QP()&&(s.once=!0);const o=EM(r,s.ssrKey,J_,jo()),a=o!==J_;a&&(i.value=o);let c=!a;const u=nn(!1),h=nn(),f=$y(),g=Ry();let _=Sn;function v(){let U=zn(n);const j=new Promise((D,L)=>{if(t(s.reset),!U)return t=Sn,D(null);u.value=c,c=!0,U.converter||(U=U.withConverter(s.converter)),t=(ld(U)?AM:RM)(i,U,bM,D,L,s)}).catch(D=>(f.value===j&&(h.value=D),Promise.reject(D))).finally(()=>{f.value===j&&(u.value=!1)});f.value=j}let C=Sn;(dt(n)||typeof n=="function")&&(C=to(n,v)),v(),r&&(_=TM(f.value,r,s.ssrKey)),IE()&&tE(()=>f.value),g&&nb(P);function P(U=s.reset){C(),_(),t(U)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>P}})}const bM={set:(n,e,t)=>UP(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)};function SM(n,e){return CM(n,{target:nn([]),...e})}function _I(n){return JT(jo(n))}function PM(n){return kM({initialUser:n,dependencies:{popupRedirectResolver:py,persistence:[uy,ry,jh]}})}const mI=Symbol("VueFireAuth");function kM({dependencies:n,initialUser:e}){return(t,s)=>{const[r,i]=NM(t,s,e,n);JP(r,i)}}function NM(n,e,t,s,r=Ym(n,s)){const i=YP(n,e).run(()=>nn(t));return kE.set(n,i),e.provide(mI,r),[i,r]}function OM(n){return FP?Yt(mI):null}function DM(n,{firebaseApp:e,modules:t=[]}){n.provide(PE,e);for(const s of t)s(e,n)}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function yI(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function xM(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&yI(n.default)}const Se=Object.assign;function Eu(n,e){const t={};for(const s in e){const r=e[s];t[s]=In(r)?r.map(n):n(r)}return t}const fo=()=>{},In=Array.isArray,EI=/#/g,MM=/&/g,LM=/\//g,VM=/=/g,FM=/\?/g,vI=/\+/g,UM=/%5B/g,BM=/%5D/g,TI=/%5E/g,$M=/%60/g,II=/%7B/g,jM=/%7C/g,wI=/%7D/g,qM=/%20/g;function gf(n){return encodeURI(""+n).replace(jM,"|").replace(UM,"[").replace(BM,"]")}function WM(n){return gf(n).replace(II,"{").replace(wI,"}").replace(TI,"^")}function Ch(n){return gf(n).replace(vI,"%2B").replace(qM,"+").replace(EI,"%23").replace(MM,"%26").replace($M,"`").replace(II,"{").replace(wI,"}").replace(TI,"^")}function HM(n){return Ch(n).replace(VM,"%3D")}function zM(n){return gf(n).replace(EI,"%23").replace(FM,"%3F")}function KM(n){return n==null?"":zM(n).replace(LM,"%2F")}function Do(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const GM=/\/$/,QM=n=>n.replace(GM,"");function vu(n,e,t="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=n(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=ZM(s??e,t),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Do(o)}}function YM(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Z_(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function XM(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&ri(e.matched[s],t.matched[r])&&RI(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ri(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function RI(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!JM(n[t],e[t]))return!1;return!0}function JM(n,e){return In(n)?em(n,e):In(e)?em(e,n):n===e}function em(n,e){return In(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function ZM(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=t.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const _s={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var xo;(function(n){n.pop="pop",n.push="push"})(xo||(xo={}));var po;(function(n){n.back="back",n.forward="forward",n.unknown=""})(po||(po={}));function eL(n){if(!n)if(Dr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),QM(n)}const tL=/^[^#]+#/;function nL(n,e){return n.replace(tL,"#")+e}function sL(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const Rc=()=>({left:window.scrollX,top:window.scrollY});function rL(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=sL(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function tm(n,e){return(history.state?history.state.position-e:-1)+n}const bh=new Map;function iL(n,e){bh.set(n,e)}function oL(n){const e=bh.get(n);return bh.delete(n),e}let aL=()=>location.protocol+"//"+location.host;function AI(n,e){const{pathname:t,search:s,hash:r}=e,i=n.indexOf("#");if(i>-1){let a=r.includes(n.slice(i))?n.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Z_(c,"")}return Z_(t,n)+s+r}function lL(n,e,t,s){let r=[],i=[],o=null;const a=({state:g})=>{const _=AI(n,location),v=t.value,C=e.value;let P=0;if(g){if(t.value=_,e.value=g,o&&o===v){o=null;return}P=C?g.position-C.position:0}else s(_);r.forEach(U=>{U(t.value,v,{delta:P,type:xo.pop,direction:P?P>0?po.forward:po.back:po.unknown})})};function c(){o=t.value}function u(g){r.push(g);const _=()=>{const v=r.indexOf(g);v>-1&&r.splice(v,1)};return i.push(_),_}function h(){const{history:g}=window;g.state&&g.replaceState(Se({},g.state,{scroll:Rc()}),"")}function f(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function nm(n,e,t,s=!1,r=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:r?Rc():null}}function cL(n){const{history:e,location:t}=window,s={value:AI(n,t)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=n.indexOf("#"),g=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+c:aL()+n+c;try{e[h?"replaceState":"pushState"](u,"",g),r.value=u}catch(_){console.error(_),t[h?"replace":"assign"](g)}}function o(c,u){const h=Se({},e.state,nm(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=Se({},r.value,e.state,{forward:c,scroll:Rc()});i(h.current,h,!0);const f=Se({},nm(s.value,c,null),{position:h.position+1},u);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function uL(n){n=eL(n);const e=cL(n),t=lL(n,e.state,e.location,e.replace);function s(i,o=!0){o||t.pauseListeners(),history.go(i)}const r=Se({location:"",base:n,go:s,createHref:nL.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function hL(n){return typeof n=="string"||n&&typeof n=="object"}function CI(n){return typeof n=="string"||typeof n=="symbol"}const bI=Symbol("");var sm;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(sm||(sm={}));function ii(n,e){return Se(new Error,{type:n,[bI]:!0},e)}function Hn(n,e){return n instanceof Error&&bI in n&&(e==null||!!(n.type&e))}const rm="[^/]+?",dL={sensitive:!1,strict:!1,start:!0,end:!0},fL=/[.+*?^${}()[\]/\\]/g;function pL(n,e){const t=Se({},dL,e),s=[];let r=t.start?"^":"";const i=[];for(const u of n){const h=u.length?[]:[90];t.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const g=u[f];let _=40+(t.sensitive?.25:0);if(g.type===0)f||(r+="/"),r+=g.value.replace(fL,"\\$&"),_+=40;else if(g.type===1){const{value:v,repeatable:C,optional:P,regexp:U}=g;i.push({name:v,repeatable:C,optional:P});const j=U||rm;if(j!==rm){_+=10;try{new RegExp(`(${j})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${v}" (${j}): `+L.message)}}let D=C?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;f||(D=P&&u.length<2?`(?:/${D})`:"/"+D),P&&(D+="?"),r+=D,_+=20,P&&(_+=-8),C&&(_+=-20),j===".*"&&(_+=-50)}h.push(_)}s.push(h)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let g=1;g<h.length;g++){const _=h[g]||"",v=i[g-1];f[v.name]=_&&v.repeatable?_.split("/"):_}return f}function c(u){let h="",f=!1;for(const g of n){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const _ of g)if(_.type===0)h+=_.value;else if(_.type===1){const{value:v,repeatable:C,optional:P}=_,U=v in u?u[v]:"";if(In(U)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const j=In(U)?U.join("/"):U;if(!j)if(P)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);h+=j}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function gL(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function SI(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const i=gL(s[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-s.length)===1){if(im(s))return 1;if(im(r))return-1}return r.length-s.length}function im(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const _L={type:0,value:""},mL=/[a-zA-Z0-9_]/;function yL(n){if(!n)return[[]];if(n==="/")return[[_L]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(_){throw new Error(`ERR (${t})/"${u}": ${_}`)}let t=0,s=t;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),t=1):g();break;case 4:g(),t=s;break;case 1:c==="("?t=2:mL.test(c)?g():(f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function EL(n,e,t){const s=pL(yL(n.path),t),r=Se(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function vL(n,e){const t=[],s=new Map;e=cm({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,g,_){const v=!_,C=am(f);C.aliasOf=_&&_.record;const P=cm(e,f),U=[C];if("alias"in f){const L=typeof f.alias=="string"?[f.alias]:f.alias;for(const ne of L)U.push(am(Se({},C,{components:_?_.record.components:C.components,path:ne,aliasOf:_?_.record:C})))}let j,D;for(const L of U){const{path:ne}=L;if(g&&ne[0]!=="/"){const re=g.record.path,R=re[re.length-1]==="/"?"":"/";L.path=g.record.path+(ne&&R+ne)}if(j=EL(L,g,P),_?_.alias.push(j):(D=D||j,D!==j&&D.alias.push(j),v&&f.name&&!lm(j)&&o(f.name)),PI(j)&&c(j),C.children){const re=C.children;for(let R=0;R<re.length;R++)i(re[R],j,_&&_.children[R])}_=_||j}return D?()=>{o(D)}:fo}function o(f){if(CI(f)){const g=s.get(f);g&&(s.delete(f),t.splice(t.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=t.indexOf(f);g>-1&&(t.splice(g,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const g=wL(f,t);t.splice(g,0,f),f.record.name&&!lm(f)&&s.set(f.record.name,f)}function u(f,g){let _,v={},C,P;if("name"in f&&f.name){if(_=s.get(f.name),!_)throw ii(1,{location:f});P=_.record.name,v=Se(om(g.params,_.keys.filter(D=>!D.optional).concat(_.parent?_.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&om(f.params,_.keys.map(D=>D.name))),C=_.stringify(v)}else if(f.path!=null)C=f.path,_=t.find(D=>D.re.test(C)),_&&(v=_.parse(C),P=_.record.name);else{if(_=g.name?s.get(g.name):t.find(D=>D.re.test(g.path)),!_)throw ii(1,{location:f,currentLocation:g});P=_.record.name,v=Se({},g.params,f.params),C=_.stringify(v)}const U=[];let j=_;for(;j;)U.unshift(j.record),j=j.parent;return{name:P,path:C,params:v,matched:U,meta:IL(U)}}n.forEach(f=>i(f));function h(){t.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function om(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function am(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:TL(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function TL(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function lm(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function IL(n){return n.reduce((e,t)=>Se(e,t.meta),{})}function cm(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function wL(n,e){let t=0,s=e.length;for(;t!==s;){const i=t+s>>1;SI(n,e[i])<0?s=i:t=i+1}const r=RL(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function RL(n){let e=n;for(;e=e.parent;)if(PI(e)&&SI(n,e)===0)return e}function PI({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function AL(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(vI," "),o=i.indexOf("="),a=Do(o<0?i:i.slice(0,o)),c=o<0?null:Do(i.slice(o+1));if(a in e){let u=e[a];In(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function um(n){let e="";for(let t in n){const s=n[t];if(t=HM(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(In(s)?s.map(i=>i&&Ch(i)):[s&&Ch(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function CL(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=In(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const bL=Symbol(""),hm=Symbol(""),Ac=Symbol(""),kI=Symbol(""),Sh=Symbol("");function Vi(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Es(n,e,t,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=g=>{g===!1?c(ii(4,{from:t,to:e})):g instanceof Error?c(g):hL(g)?c(ii(2,{from:e,to:g})):(o&&s.enterCallbacks[r]===o&&typeof g=="function"&&o.push(g),a())},h=i(()=>n.call(s&&s.instances[r],e,t,u));let f=Promise.resolve(h);n.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function Tu(n,e,t,s,r=i=>i()){const i=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(yI(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Es(h,t,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=xM(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const _=(f.__vccOpts||f)[e];return _&&Es(_,t,s,o,a,r)()}))}}return i}function dm(n){const e=Yt(Ac),t=Yt(kI),s=Ht(()=>{const c=zt(n.to);return e.resolve(c)}),r=Ht(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=t.matched;if(!h||!f.length)return-1;const g=f.findIndex(ri.bind(null,h));if(g>-1)return g;const _=fm(c[u-2]);return u>1&&fm(h)===_&&f[f.length-1].path!==_?f.findIndex(ri.bind(null,c[u-2])):g}),i=Ht(()=>r.value>-1&&OL(t.params,s.value.params)),o=Ht(()=>r.value>-1&&r.value===t.matched.length-1&&RI(t.params,s.value.params));function a(c={}){if(NL(c)){const u=e[zt(n.replace)?"replace":"push"](zt(n.to)).catch(fo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Ht(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function SL(n){return n.length===1?n[0]:n}const PL=Yy({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dm,setup(n,{slots:e}){const t=Gl(dm(n)),{options:s}=Yt(Ac),r=Ht(()=>({[pm(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[pm(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&SL(e.default(t));return n.custom?i:AE("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),kL=PL;function NL(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function OL(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!In(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function fm(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const pm=(n,e,t)=>n??e??t,DL=Yy({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=Yt(Sh),r=Ht(()=>n.route||s.value),i=Yt(hm,0),o=Ht(()=>{let u=zt(i);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=Ht(()=>r.value.matched[o.value]);Va(hm,Ht(()=>o.value+1)),Va(bL,a),Va(Sh,r);const c=nn();return to(()=>[c.value,a.value,n.name],([u,h,f],[g,_,v])=>{h&&(h.instances[f]=u,_&&_!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!ri(h,_)||!g)&&(h.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=r.value,h=n.name,f=a.value,g=f&&f.components[h];if(!g)return gm(t.default,{Component:g,route:u});const _=f.props[h],v=_?_===!0?u.params:typeof _=="function"?_(u):_:null,P=AE(g,Se({},v,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return gm(t.default,{Component:P,route:u})||P}}});function gm(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const xL=DL;function ML(n){const e=vL(n.routes,n),t=n.parseQuery||AL,s=n.stringifyQuery||um,r=n.history,i=Vi(),o=Vi(),a=Vi(),c=$y(_s);let u=_s;Dr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Eu.bind(null,x=>""+x),f=Eu.bind(null,KM),g=Eu.bind(null,Do);function _(x,X){let Q,ee;return CI(x)?(Q=e.getRecordMatcher(x),ee=X):ee=x,e.addRoute(ee,Q)}function v(x){const X=e.getRecordMatcher(x);X&&e.removeRoute(X)}function C(){return e.getRoutes().map(x=>x.record)}function P(x){return!!e.getRecordMatcher(x)}function U(x,X){if(X=Se({},X||c.value),typeof x=="string"){const S=vu(t,x,X.path),M=e.resolve({path:S.path},X),$=r.createHref(S.fullPath);return Se(S,M,{params:g(M.params),hash:Do(S.hash),redirectedFrom:void 0,href:$})}let Q;if(x.path!=null)Q=Se({},x,{path:vu(t,x.path,X.path).path});else{const S=Se({},x.params);for(const M in S)S[M]==null&&delete S[M];Q=Se({},x,{params:f(S)}),X.params=f(X.params)}const ee=e.resolve(Q,X),Ce=x.hash||"";ee.params=h(g(ee.params));const E=YM(s,Se({},x,{hash:WM(Ce),path:ee.path})),T=r.createHref(E);return Se({fullPath:E,hash:Ce,query:s===um?CL(x.query):x.query||{}},ee,{redirectedFrom:void 0,href:T})}function j(x){return typeof x=="string"?vu(t,x,c.value.path):Se({},x)}function D(x,X){if(u!==x)return ii(8,{from:X,to:x})}function L(x){return R(x)}function ne(x){return L(Se(j(x),{replace:!0}))}function re(x){const X=x.matched[x.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let ee=typeof Q=="function"?Q(x):Q;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=j(ee):{path:ee},ee.params={}),Se({query:x.query,hash:x.hash,params:ee.path!=null?{}:x.params},ee)}}function R(x,X){const Q=u=U(x),ee=c.value,Ce=x.state,E=x.force,T=x.replace===!0,S=re(Q);if(S)return R(Se(j(S),{state:typeof S=="object"?Se({},Ce,S.state):Ce,force:E,replace:T}),X||Q);const M=Q;M.redirectedFrom=X;let $;return!E&&XM(s,ee,Q)&&($=ii(16,{to:M,from:ee}),Zt(ee,ee,!0,!1)),($?Promise.resolve($):A(M,ee)).catch(V=>Hn(V)?Hn(V,2)?V:un(V):me(V,M,ee)).then(V=>{if(V){if(Hn(V,2))return R(Se({replace:T},j(V.to),{state:typeof V.to=="object"?Se({},Ce,V.to.state):Ce,force:E}),X||M)}else V=k(M,ee,!0,T,Ce);return b(M,ee,V),V})}function y(x,X){const Q=D(x,X);return Q?Promise.reject(Q):Promise.resolve()}function w(x){const X=us.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(x):x()}function A(x,X){let Q;const[ee,Ce,E]=LL(x,X);Q=Tu(ee.reverse(),"beforeRouteLeave",x,X);for(const S of ee)S.leaveGuards.forEach(M=>{Q.push(Es(M,x,X))});const T=y.bind(null,x,X);return Q.push(T),Mt(Q).then(()=>{Q=[];for(const S of i.list())Q.push(Es(S,x,X));return Q.push(T),Mt(Q)}).then(()=>{Q=Tu(Ce,"beforeRouteUpdate",x,X);for(const S of Ce)S.updateGuards.forEach(M=>{Q.push(Es(M,x,X))});return Q.push(T),Mt(Q)}).then(()=>{Q=[];for(const S of E)if(S.beforeEnter)if(In(S.beforeEnter))for(const M of S.beforeEnter)Q.push(Es(M,x,X));else Q.push(Es(S.beforeEnter,x,X));return Q.push(T),Mt(Q)}).then(()=>(x.matched.forEach(S=>S.enterCallbacks={}),Q=Tu(E,"beforeRouteEnter",x,X,w),Q.push(T),Mt(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(Es(S,x,X));return Q.push(T),Mt(Q)}).catch(S=>Hn(S,8)?S:Promise.reject(S))}function b(x,X,Q){a.list().forEach(ee=>w(()=>ee(x,X,Q)))}function k(x,X,Q,ee,Ce){const E=D(x,X);if(E)return E;const T=X===_s,S=Dr?history.state:{};Q&&(ee||T?r.replace(x.fullPath,Se({scroll:T&&S&&S.scroll},Ce)):r.push(x.fullPath,Ce)),c.value=x,Zt(x,X,Q,T),un()}let I;function St(){I||(I=r.listen((x,X,Q)=>{if(!wn.listening)return;const ee=U(x),Ce=re(ee);if(Ce){R(Se(Ce,{replace:!0,force:!0}),ee).catch(fo);return}u=ee;const E=c.value;Dr&&iL(tm(E.fullPath,Q.delta),Rc()),A(ee,E).catch(T=>Hn(T,12)?T:Hn(T,2)?(R(Se(j(T.to),{force:!0}),ee).then(S=>{Hn(S,20)&&!Q.delta&&Q.type===xo.pop&&r.go(-1,!1)}).catch(fo),Promise.reject()):(Q.delta&&r.go(-Q.delta,!1),me(T,ee,E))).then(T=>{T=T||k(ee,E,!1),T&&(Q.delta&&!Hn(T,8)?r.go(-Q.delta,!1):Q.type===xo.pop&&Hn(T,20)&&r.go(-1,!1)),b(ee,E,T)}).catch(fo)}))}let Jt=Vi(),Qe=Vi(),Te;function me(x,X,Q){un(x);const ee=Qe.list();return ee.length?ee.forEach(Ce=>Ce(x,X,Q)):console.error(x),Promise.reject(x)}function $t(){return Te&&c.value!==_s?Promise.resolve():new Promise((x,X)=>{Jt.add([x,X])})}function un(x){return Te||(Te=!x,St(),Jt.list().forEach(([X,Q])=>x?Q(x):X()),Jt.reset()),x}function Zt(x,X,Q,ee){const{scrollBehavior:Ce}=n;if(!Dr||!Ce)return Promise.resolve();const E=!Q&&oL(tm(x.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return Hy().then(()=>Ce(x,X,E)).then(T=>T&&rL(T)).catch(T=>me(T,x,X))}const qe=x=>r.go(x);let We;const us=new Set,wn={currentRoute:c,listening:!0,addRoute:_,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:C,resolve:U,options:n,push:L,replace:ne,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Qe.add,isReady:$t,install(x){const X=this;x.component("RouterLink",kL),x.component("RouterView",xL),x.config.globalProperties.$router=X,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>zt(c)}),Dr&&!We&&c.value===_s&&(We=!0,L(r.location).catch(Ce=>{}));const Q={};for(const Ce in _s)Object.defineProperty(Q,Ce,{get:()=>c.value[Ce],enumerable:!0});x.provide(Ac,X),x.provide(kI,Uy(Q)),x.provide(Sh,c);const ee=x.unmount;us.add(x),x.unmount=function(){us.delete(x),us.size<1&&(u=_s,I&&I(),I=null,c.value=_s,We=!1,Te=!1),ee()}}};function Mt(x){return x.reduce((X,Q)=>X.then(()=>w(Q)),Promise.resolve())}return wn}function LL(n,e){const t=[],s=[],r=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>ri(u,a))?s.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>ri(u,c))||r.push(c))}return[t,s,r]}function VL(){return Yt(Ac)}const _f=Sm({apiKey:"AIzaSyAMCN2CM8lKY75F8rFPJEyM19fdl-N4o5s",authDomain:"recordatoriosvue-59a34.firebaseapp.com",projectId:"recordatoriosvue-59a34",storageBucket:"recordatoriosvue-59a34.firebasestorage.app",messagingSenderId:"720871472358",appId:"1:720871472358:web:f94feccd808513bd4c4f27"}),Iu=jC(_f),FL=new bn,UL=JT(_f);za(UL,"Recordatorios");const Hs=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},BL={class:"auth-container"},$L={key:0,class:"buttons"},jL={key:0,class:"texto"},qL={key:1,class:"texto"},WL={__name:"Login",setup(n){const e=new Gn,t=NE(),s=OM(),r=nn(""),i=nn(""),o=nn(null),a=nn(!0);function c(){Np(s,e).then(()=>console.log("validación correcta")).catch(_=>{console.error("Failed sign",_),o.value=_})}function u(){MA(s).then(()=>console.log("seión cerrada")).catch(_=>console.log("Se ha producido un error "+_))}async function h(){try{const _=await Np(Iu,FL),v=_.user,P=bn.credentialFromResult(_).accessToken;console.log("Usuario autenticado:",v),console.log("Token de GitHub:",P)}catch(_){console.error("Error al iniciar sesión con GitHub:",_)}}function f(){if(!r.value||!i.value){console.error("Email y contraseña son obligatorios");return}OA(Iu,r.value,i.value).then(_=>{console.log("Usuario registrado exitosamente:",_.user)}).catch(_=>{console.error("Error al registrar el usuario:",_.code,_.message)})}function g(){if(!r.value||!i.value){alert("Por favor, completa todos los campos.");return}DA(Iu,r.value,i.value).then(_=>{console.log("Sesión iniciada correctamente:",_.user)}).catch(_=>{console.error("Error al iniciar sesión:",_.code,_.message)})}return(_,v)=>(Dt(),Ft(Vt,null,[ge("div",BL,[zt(t)?va("",!0):(Dt(),Ft("div",$L,[ge("button",{onClick:c},"Iniciar Google"),ge("button",{onClick:h},"Iniciar Github")])),zt(t)?(Dt(),Ft("button",{key:1,onClick:u},"Cerrar Sesión")):va("",!0)]),!zt(t)&&a.value?(Dt(),Ft("div",jL,[v[6]||(v[6]=ge("h3",null,"Registro con Email",-1)),Bi(ge("input",{"onUpdate:modelValue":v[0]||(v[0]=C=>r.value=C),type:"email",placeholder:"Correo electrónico"},null,512),[[ji,r.value]]),Bi(ge("input",{"onUpdate:modelValue":v[1]||(v[1]=C=>i.value=C),type:"password",placeholder:"Contraseña"},null,512),[[ji,i.value]]),ge("button",{onClick:f},"Registrarse"),ge("a",{href:"#",onClick:v[2]||(v[2]=gg(C=>a.value=!1,["prevent"]))},"¿Ya tienes una cuenta? Inicia sesión")])):va("",!0),!zt(t)&&!a.value?(Dt(),Ft("div",qL,[v[7]||(v[7]=ge("h3",null,"Iniciar Sesión",-1)),Bi(ge("input",{"onUpdate:modelValue":v[3]||(v[3]=C=>r.value=C),type:"email",placeholder:"Correo electrónico"},null,512),[[ji,r.value]]),Bi(ge("input",{"onUpdate:modelValue":v[4]||(v[4]=C=>i.value=C),type:"password",placeholder:"Contraseña"},null,512),[[ji,i.value]]),ge("button",{onClick:g},"Iniciar Sesión"),ge("a",{href:"#",onClick:v[5]||(v[5]=gg(C=>a.value=!0,["prevent"]))},"¿No tienes una cuenta? Regístrate")])):va("",!0)],64))}},HL=Hs(WL,[["__scopeId","data-v-34d377e4"]]),zL={class:"left-links"},KL={class:"right-login"},GL={__name:"App",setup(n){return VL().beforeEach(async(t,s)=>(console.log("salta"),t.meta.requiresAuth?!!await XP():!0)),(t,s)=>{const r=qp("RouterLink"),i=qp("RouterView");return Dt(),Ft(Vt,null,[ge("nav",null,[ge("div",zL,[Ke(r,{to:"/"},{default:Uu(()=>s[0]||(s[0]=[nr("Inicio")])),_:1}),Ke(r,{to:"/recordatorios"},{default:Uu(()=>s[1]||(s[1]=[nr("Recordatorios")])),_:1})]),ge("div",KL,[Ke(HL)])]),ge("main",null,[Ke(i)])],64)}}},QL=Hs(GL,[["__scopeId","data-v-ccece10a"]]),YL={};function XL(n,e){return Dt(),Ft("footer",null,e[0]||(e[0]=[ge("p",null,"Pablo Peregrina Martín 2025 Recordatorios",-1)]))}const NI=Hs(YL,[["render",XL],["__scopeId","data-v-7f6f2cfa"]]),JL={__name:"Landing",setup(n){return(e,t)=>(Dt(),Ft(Vt,null,[t[0]||(t[0]=ge("h1",null," ¡Bienvenido a tus recuerdos!",-1)),Ke(NI)],64))}},ZL=Hs(JL,[["__scopeId","data-v-b5a963fe"]]),eV={class:"input-container"},tV={__name:"Cabecera",emits:["nota-creada"],setup(n,{emit:e}){const t=e,s=nn("");function r(){s.value.trim()!==""&&(t("nota-creada",s.value),s.value="")}return(i,o)=>(Dt(),Ft("div",eV,[Bi(ge("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a),placeholder:"Organiza tus ideas, crea una nota...",onKeydown:oP(r,["enter"])},null,544),[[ji,s.value]])]))}},nV=Hs(tV,[["__scopeId","data-v-9bdd7665"]]),sV={class:"nota"},rV={class:"creacion"},iV=["checked","onChange"],oV={class:"prioridad-checkboxes"},aV=["checked","onChange"],lV=["checked","onChange"],cV=["checked","onChange"],uV=["onClick"],hV={__name:"ListaTareas",props:{tareas:Array},emits:["borrar-tarea"],setup(n,{emit:e}){const t=n,s=_I(),r=Ht(()=>{const u={alta:1,normal:2,baja:3};return t.tareas.slice().sort((h,f)=>u[h.prioridad]-u[f.prioridad])});function i(u){uI(ho(s,"Recordatorios",u)).then(()=>{console.log("Tarea eliminada con ID:",u)}).catch(h=>{console.error("Error al eliminar tarea:",h)})}async function o(u,h){try{const f=ho(s,"Recordatorios",u);await z_(f,{prioridad:h}),console.log(`Prioridad actualizada a ${h} para la tarea ${u}`)}catch(f){console.error("Error al actualizar la prioridad:",f)}}async function a(u,h){try{const f=ho(s,"Recordatorios",u);await z_(f,{completado:h}),console.log(`Estado actualizado a ${h} para la tarea ${u}`)}catch(f){console.error("Error al actualizar el estado:",f)}}function c(u){const h=new Date,f=new Date(u),g=h-f,_=Math.floor(g/1e3),v=Math.floor(_/60),C=Math.floor(v/60),P=Math.floor(C/24);return P>0?`Hace ${P} días`:C>0?`Hace ${C} horas`:v>0?`Hace ${v} minutos`:`Hace ${_} segundos`}return(u,h)=>(Dt(),Ft("div",null,[ge("ol",null,[(Dt(!0),Ft(Vt,null,Kb(r.value,f=>(Dt(),Ft("li",{key:f.id,class:zl("prioridad-"+f.prioridad)},[ge("p",sV,rl(f.nombre),1),ge("p",rV,rl(c(f.fechacreacion)),1),ge("label",null,[ge("input",{type:"checkbox",checked:f.completado,onChange:g=>a(f.id,g.target.checked)},null,40,iV),h[0]||(h[0]=nr(" Completado "))]),ge("div",oV,[ge("label",null,[ge("input",{type:"checkbox",checked:f.prioridad==="alta",onChange:g=>o(f.id,"alta")},null,40,aV),h[1]||(h[1]=nr(" Alta "))]),ge("label",null,[ge("input",{type:"checkbox",checked:f.prioridad==="normal",onChange:g=>o(f.id,"normal")},null,40,lV),h[2]||(h[2]=nr(" Normal "))]),ge("label",null,[ge("input",{type:"checkbox",checked:f.prioridad==="baja",onChange:g=>o(f.id,"baja")},null,40,cV),h[3]||(h[3]=nr(" Baja "))])]),ge("button",{onClick:g=>i(f.id)},"X",8,uV)],2))),128))])]))}},dV=Hs(hV,[["__scopeId","data-v-0602cc99"]]),fV={__name:"resumenTareas",props:["tareas"],setup(n){const e=n,t=Ht(()=>e.tareas.filter(s=>!s.completado).length);return(s,r)=>(Dt(),Ft("p",null,rl(t.value)+" tareas sin acabar",1))}},pV=Hs(fV,[["__scopeId","data-v-2c9c12df"]]),gV={class:"container"},_V={__name:"Recordatorios",setup(n){const e=NE(),t=_I(),s=za(t,"Recordatorios"),r=SM(Ux(za(t,"Recordatorios"),Bx("idUsuario","==",e.value.uid)));function i(c){const u={nombre:c,prioridad:"normal",fechacreacion:new Date().toUTCString(),completado:!1,idUsuario:e.value.uid};Hx(za(t,"Recordatorios"),u).then(h=>{console.log("Documento escrito con ID",h.id)}).catch(h=>{console.log("ERROR= "+h)})}function o(c){uI(ho(s,c)).then(()=>console.log("Tarea eliminada exitosamente: "+c)).catch(u=>console.error("Error: ",u))}function a(){r.value.forEach(c=>{c.completado&&(console.log("Eliminando tarea completada: ",c.id),o(c.id))})}return(c,u)=>(Dt(),Ft(Vt,null,[Ke(nV,{onNotaCreada:i}),ge("div",gV,[Ke(pV,{tareas:zt(r)},null,8,["tareas"]),ge("a",{onClick:a},"Borrar completadas"),Ke(dV,{tareas:zt(r),onBorrarTarea:o},null,8,["tareas"]),Ke(NI)])],64))}},mV=Hs(_V,[["__scopeId","data-v-9b78a706"]]),yV=[{path:"/",component:ZL,meta:{requiresAuth:!1}},{path:"/recordatorios",component:mV,meta:{requiresAuth:!0}}],EV=ML({history:uL(),routes:yV}),mf=cP(QL);mf.use(DM,{firebaseApp:_f,modules:[PM()]});mf.use(EV);mf.mount("#app");
