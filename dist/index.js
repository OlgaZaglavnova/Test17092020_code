!function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],s=0,p=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=i;a.push([230,1]),n()}({230:function(e,t,n){n(231),e.exports=n(483)},426:function(e,t,n){},469:function(e,t,n){},482:function(e,t,n){},483:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(35),c=n.n(a),u=n(93),i=n(488),l=(n(426),Object(u.b)((function(e,t){return{countries:e.myReducer.data.countries}}))((function(e){var t=e.countries,n=e.onPlaceChanged;return o.a.createElement("div",{className:"place_container"},o.a.createElement(i.a,{treeData:t,onSelect:function(e,t){n({id:t.node.key,name:t.node.title})},className:"place_tree"}))}))),f=n(485);n(469);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=f.a.Option,b=Object(u.b)((function(e,t){return{languages:e.myReducer.data.languages}}))((function(e){var t=e.languages,n=e.onLanguageChanged,a=s(Object(r.useState)([]),2);a[0],a[1];return o.a.createElement("div",{className:"languages_container"},o.a.createElement(f.a,{onSelect:function(e){n(t.filter((function(t){return t.description===e})))},className:"languages_autoComplete",placeholder:"Bведите язык, которым Вы владеете"},t.map((function(e){return o.a.createElement(y,{key:e.code,value:e.description,className:"languages_options"},e.description)}))))})),d=n(486),g=Object(d.a)({LOAD_DATA:function(){return{}},SAVE_DATA:function(e){return{newData:e}}}),m=g.loadData,h=g.saveData;n(482);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E,D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(c,e);var t,n,r,a=S(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).onPlaceChanged=function(e){t.setState({place:e})},t.onLanguageChanged=function(e){e.length>0&&t.setState({language:e[0]})},t.onSubmitForm=function(e){e.preventDefault(),t.props.store.dispatch(h({place:t.state.place,language:t.state.language}));var n=t.props.store.getState();console.log("App store=",n.myReducer.localData)},t.state={place:{},language:{}},t.onPlaceChanged=t.onPlaceChanged.bind(P(t)),t.onLanguageChanged=t.onLanguageChanged.bind(P(t)),t.onSubmitForm=t.onSubmitForm.bind(P(t)),t}return t=c,(n=[{key:"render",value:function(){return o.a.createElement("div",{className:"app_container"},o.a.createElement("div",{className:"app_header"},"Тестовое задание",o.a.createElement("br",null),"Выполнено: Заглавновой Ольгой, сентябрь 2020 г."),o.a.createElement("form",{className:"app_form",onSubmit:this.onSubmitForm},o.a.createElement(l,{onPlaceChanged:this.onPlaceChanged}),o.a.createElement(b,{onLanguageChanged:this.onLanguageChanged}),o.a.createElement("div",{className:"app_submit"},o.a.createElement("input",{type:"submit",className:"app_submit_btn",value:"Сохранить"}))))}}])&&O(t.prototype,n),r&&O(t,r),c}(o.a.Component),C=n(100),k=n(487),A={countries:[{key:1e3,title:"Россия",children:[{key:1001,title:"Москва"},{key:1006,title:"Санкт-Петербург"}]},{key:1100,title:"Израиль",children:[{key:1101,title:"Тель-Авив"},{key:1102,title:"Хайфа"}]}],languages:[{code:"rus",description:"Русский"},{code:"eng",description:"Английский"},{code:"heb",description:"Иврит"}]};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=Object(k.a)((x(E={},m,(function(e){return R(R({},e),{},{data:A})})),x(E,h,(function(e,t){var n=t.payload.newData;return R(R({},e),{},{localData:n})})),E),{data:{}}),T=Object(C.b)({myReducer:L}),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(C.c)(T,e)}();M.dispatch(m()),c.a.render(o.a.createElement(u.a,{store:M},o.a.createElement(D,{store:M})),document.getElementById("root"))}});