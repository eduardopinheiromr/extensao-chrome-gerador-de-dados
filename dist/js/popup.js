(()=>{"use strict";var e,t={33753:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n(67294));t.default=function(e){var t=r(e,[]);return o.default.createElement("button",Object.assign({style:l},t))};const l={fontFamily:"Segoe UI",fontWeight:"bold",minWidth:"200px",backgroundColor:"#FF5148",border:"none",color:"white",padding:"12px 16px",fontSize:"18px",cursor:"pointer",borderRadius:"3px",margin:"5px",outline:"none",boxShadow:"0 3px 5px 2px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"#007bbb"},display:"flex",alignItems:"center",justifyContent:"space-between"}},79830:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(67294)),o=r(n(33753)),l=n(63750);t.default=function({generatorFn:e,name:t,data:n,setData:r}){return a.default.createElement(o.default,{onClick:()=>{const{withPontuation:a}=n,o=e({withPontuation:a});r(Object.assign(Object.assign({},n),{clicked:t,value:o})),navigator.clipboard.writeText(o)}},n.clicked===t?a.default.createElement(a.default.Fragment,null,a.default.createElement("span",null,t," copiado!"),a.default.createElement(l.BsClipboardCheck,{style:{marginLeft:10}})):a.default.createElement(a.default.Fragment,null,a.default.createElement("span",null,"Gerar ",t),a.default.createElement(l.BsClipboard,{style:{marginLeft:10}})))}},42672:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(67294)),u=l(n(79830)),c=n(13945);t.default=function(){const[e,t]=(0,i.useState)(c.cards[0]),[n,r]=(0,i.useState)({clicked:"",value:"",withPontuation:!0});return i.default.createElement("div",null,i.default.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"0 8px"}},c.cards.map((n=>{const{Icon:r,name:a}=n;return i.default.createElement(r,{onClick:()=>t(n),cursor:"pointer",color:e.name===a?"coral":"white",title:a,size:"40px"})}))),i.default.createElement(u.default,{generatorFn:()=>e.generatorFn(),name:"Cartão",data:n,setData:r}))}},80204:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(67294));t.default=function({label:e,value:t,setValue:n}){return a.default.createElement("div",{className:"switch-container"},a.default.createElement("span",null,e),a.default.createElement("div",{className:"switch"},a.default.createElement("input",{checked:t,onChange:e=>n(e.target.checked),type:"checkbox",id:"toggleAll"}),a.default.createElement("label",{htmlFor:"toggleAll"})))}},13945:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cards=void 0;const r=n(89583),a=n(79352),o=n(83355);t.cards=[{name:"Mastercard",Icon:a.RiMastercardFill,generatorFn:()=>o.GenCC("Mastercard")},{name:"Visa",Icon:a.RiVisaFill,generatorFn:()=>o.GenCC("VISA")},{name:"American Express",Icon:r.FaCcAmex,generatorFn:()=>o.GenCC("Amex")},{name:"Diners Club",Icon:r.FaCcDinersClub,generatorFn:()=>o.GenCC("Diners")}]},17613:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ddds=void 0,t.ddds=["68","82","92","97","96","71","73","74","75","77","85","88","61","27","28","62","64","98","99","31","32","33","34","35","37","38","67","65","66","91","93","94","83","81","87","86","89","41","42","43","44","45","46","21","22","24","84","69","95","51","53","54","55","47","48","49","79","11","12","13","14","15","16","17","18","19","63"]},7997:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generators=void 0;const r=n(82769),a=n(15556),o=n(50660),l=n(96392);t.generators=[{name:"CPF",generatorFn:a.generateCPF},{name:"CNPJ",generatorFn:r.generateCNPJ},{name:"Celular",generatorFn:l.generatePhone},{name:"Email",generatorFn:o.generateEmail}]},51548:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(n(67294)),u=l(n(73935)),c=l(n(79830)),d=l(n(80204)),s=n(7997),f=l(n(42672));u.default.render(i.default.createElement(i.default.StrictMode,null,i.default.createElement((()=>{const[e,t]=(0,i.useState)({clicked:"",value:"",withPontuation:!0});return i.default.createElement(i.default.Fragment,null,i.default.createElement(d.default,{label:"Gerar com pontuação:",value:e.withPontuation,setValue:n=>t(Object.assign(Object.assign({},e),{withPontuation:n}))}),i.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",width:"100%"}},s.generators.map((n=>i.default.createElement(c.default,Object.assign({key:n.name},n,{data:e,setData:t})))),i.default.createElement(f.default,null)))}),null)),document.getElementById("root"))},82769:(e,t)=>{function n(e){return Math.round(Math.random()*e)}function r(e,t){return Math.round(e-Math.floor(e/t)*t)}Object.defineProperty(t,"__esModule",{value:!0}),t.generateCNPJ=void 0,t.generateCNPJ=({withPontuation:e})=>{const t=n(9),a=n(9),o=n(9),l=n(9),i=n(9),u=n(9),c=n(9),d=n(9);let s=2+6*d+7*c+8*u+9*i+2*l+3*o+4*a+5*t;s=11-r(s,11),s>=10&&(s=0);let f=2*s+3+0+0+0+7*d+8*c+9*u+2*i+3*l+4*o+5*a+6*t;return f=11-r(f,11),f>=10&&(f=0),e?`${t}${a}.${o}${l}${i}.${u}${c}${d}/0001-${s}${f}`:`${t}${a}${o}${l}${i}${u}${c}${d}0001${s}${f}`}},15556:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateCPF=t.cpfMask=t.allDigitsAreEqual=t.hasCPFLength=t.generateNineDigits=t.calcSecondChecker=t.calcFirstChecker=void 0,t.calcFirstChecker=e=>{let t=0;for(let n=0;n<9;++n)t+=Number(e.charAt(n))*(10-n);const n=t%11;return n<2?0:11-n},t.calcSecondChecker=e=>{let t=0;for(let n=0;n<10;++n)t+=Number(e.charAt(n))*(11-n);const n=t%11;return n<2?0:11-n},t.generateNineDigits=()=>{let e="";for(let t=0;t<9;++t)e+=String(Math.floor(10*Math.random()));return e},t.hasCPFLength=e=>!(e.length>11||e.length<11),t.allDigitsAreEqual=e=>{for(let t=0;t<10;t++)if(e===new Array(e.length+1).join(String(t)))return!0;return!1},t.cpfMask=e=>e.split("").map(((e,t)=>2===t||5===t?`${e}.`:9===t?`-${e}`:e)).join(""),t.generateCPF=({withPontuation:e})=>{let n="";do{n=(0,t.generateNineDigits)()}while((0,t.allDigitsAreEqual)(n));const r=(0,t.calcFirstChecker)(n),a=`${n}${r}${(0,t.calcSecondChecker)(n+r)}`;return e?(0,t.cpfMask)(a):a}},50660:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.generateEmail=void 0;const a=r(n(21462));t.generateEmail=()=>a.default.internet.email().toLowerCase()},96392:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generatePhone=void 0;const r=n(17613),a=()=>Math.floor(10*Math.random()),o=()=>r.ddds[Math.floor(Math.random()*r.ddds.length)];t.generatePhone=({withPontuation:e})=>e?`(${o()}) 9${a()}${a()}${a()}${a()}-${a()}${a()}${a()}${a()}`:`${o()}${a()}9${a()}${a()}${a()}${a()}${a()}${a()}${a()}`}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,a,o]=e[d],i=!0,u=0;u<n.length;u++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(i=!1,o<l&&(l=o));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,a,o]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={42:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[l,i,u]=n,c=0;if(l.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var d=u(r)}for(t&&t(n);c<l.length;c++)o=l[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self.webpackChunkgerador_de_dados_fake=self.webpackChunkgerador_de_dados_fake||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[736],(()=>r(51548)));a=r.O(a)})();