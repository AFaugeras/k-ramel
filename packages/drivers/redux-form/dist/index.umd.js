!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("redux-form"),require("lodash")):"function"==typeof define&&define.amd?define(["redux-form","lodash"],t):r["@k-ramel/driver-redux-form"]=t(null,r._)}(this,function(r,t){"use strict";var e=function(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r},n=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},u=function(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)},i=["arrayInsert","arrayMove","arrayPop","arrayPush","arrayRemove","arrayRemoveAll","arrayShift","arraySplice","arraySwap","arrayUnshift","autofill","blur","change","clearAsyncError","clearSubmitErrors","clearFields","destroy","focus","initialize","registerField","reset","resetSection","setSubmitFailed","setSubmitSucceeded","startAsyncValidation","startSubmit","stopSubmit","stopAsyncValidation","submit","touch","unregisterField","untouch"],o=function(t){var u=t.dispatch;return function(t){return i.reduce(function(i,o){return n(e({},o,function(t,e,n){return function(){for(var u=arguments.length,i=Array(u),o=0;o<u;o++)i[o]=arguments[o];return t(r[n].apply(r,[e].concat(i)))}}(u,t,o)),i)},{})}},a=function(t,e){var n,i,o=e.dispatch,a=e.getState;return n=regeneratorRuntime.mark(function e(n){for(var i=arguments.length,c=Array(i>1?i-1:0),s=1;s<i;s++)c[s-1]=arguments[s];var f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(r.startSubmit(t)),e.next=3,n.apply(void 0,u(c));case 3:return f=e.sent,r.isSubmitting(t)(a())&&o(r.stopSubmit(t)),e.abrupt("return",f);case 6:case"end":return e.stop()}},e,void 0)}),i=function(){var r=n.apply(this,arguments);return new Promise(function(t,e){return function n(u,i){try{var o=r[u](i),a=o.value}catch(r){return void e(r)}if(!o.done)return Promise.resolve(a).then(function(r){n("next",r)},function(r){n("throw",r)});t(a)}("next")})},function(r){return i.apply(this,arguments)}},c=["getFormValues","getFormInitialValues","getFormSyncErrors","getFormMeta","getFormAsyncErrors","getFormSyncWarnings","getFormSubmitErrors","getFormError","isDirty","isPristine","isValid","isInvalid","isSubmitting","hasSubmitSucceeded","hasSubmitFailed"],s=["getFormNames"],f=function(t){return function(u){var i=u.getState;return function(u){return n({},c.reduce(function(o,a){return n(e({},a,function(t,e,n,u){return function(){return r[u](n,e)(t())}}(i,t,u,a)),o)},{}),s.reduce(function(u,o){return n(e({},o,function(){return r[o](t)(i())}),u)},{}))}}};return function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).path,u=void 0===e?"form":e;return{getDriver:function(r){return function(e){return n({},o(r)(e),f(function(r){return t.get(r,u)})(r)(e),function(r){return function(t){return{asyncSubmit:function(e){for(var n=arguments.length,u=Array(n>1?n-1:0),i=1;i<n;i++)u[i-1]=arguments[i];return a(t,r).apply(void 0,[e].concat(u))}}}}(r)(e))}},getReducer:function(){return{path:u,reducer:r.reducer}}}}});
//# sourceMappingURL=index.umd.js.map
