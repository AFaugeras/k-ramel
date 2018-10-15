import*as reduxform from"redux-form";import{reducer,startSubmit,isSubmitting,stopSubmit}from"redux-form";function asyncGeneratorStep(r,e,t,n,o,a,i){try{var u=r[a](i),c=u.value}catch(r){return void t(r)}u.done?e(c):Promise.resolve(c).then(n,o)}function _asyncToGenerator(r){return function(){var e=this,t=arguments;return new Promise(function(n,o){var a=r.apply(e,t);function i(r){asyncGeneratorStep(a,n,o,i,u,"next",r)}function u(r){asyncGeneratorStep(a,n,o,i,u,"throw",r)}i(void 0)})}}function _defineProperty(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.forEach(function(e){_defineProperty(r,e,t[e])})}return r}var actionNames=["arrayInsert","arrayMove","arrayPop","arrayPush","arrayRemove","arrayRemoveAll","arrayShift","arraySplice","arraySwap","arrayUnshift","autofill","blur","change","clearAsyncError","clearSubmitErrors","clearFields","destroy","focus","initialize","registerField","reset","resetSection","setSubmitFailed","setSubmitSucceeded","startAsyncValidation","startSubmit","stopSubmit","stopAsyncValidation","submit","touch","unregisterField","untouch"],wrapAction=function(r,e,t){return function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return r(reduxform[t].apply(reduxform,[e].concat(o)))}},actions=function(r){var e=r.dispatch;return function(r){return actionNames.reduce(function(t,n){return _objectSpread(_defineProperty({},n,wrapAction(e,r,n)),t)},{})}},_asyncSubmit=function(r,e){var t=e.dispatch,n=e.getState;return function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(o){var a,i,u,c,s=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t(startSubmit(r)),a=s.length,i=new Array(a>1?a-1:0),u=1;u<a;u++)i[u-1]=s[u];return e.next=4,o.apply(void 0,i);case 4:return c=e.sent,isSubmitting(r)(n())&&t(stopSubmit(r)),e.abrupt("return",c);case 7:case"end":return e.stop()}},e,this)}));return function(r){return e.apply(this,arguments)}}()},customActions=function(r){return function(e){return{asyncSubmit:function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return _asyncSubmit(e,r).apply(void 0,[t].concat(o))}}}},selectorNames=["getFormValues","getFormInitialValues","getFormSyncErrors","getFormMeta","getFormAsyncErrors","getFormSyncWarnings","getFormSubmitErrors","getFormError","isDirty","isPristine","isValid","isInvalid","isSubmitting","hasSubmitSucceeded","hasSubmitFailed"],selectorNamesWithoutParameter=["getFormNames"],wrapSelector=function(r,e,t,n){return function(){return reduxform[n](t,e)(r())}},selectors=function(r){return function(e){var t=e.getState;return function(e){return _objectSpread({},selectorNames.reduce(function(n,o){return _objectSpread(_defineProperty({},o,wrapSelector(t,r,e,o)),n)},{}),selectorNamesWithoutParameter.reduce(function(e,n){return _objectSpread(_defineProperty({},n,function(){return reduxform[n](r)(t())}),e)},{}))}}},reduxForm=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r.path,t=void 0===e?"form":e,n=r.getState,o=void 0===n?function(r){return r.form}:n;return{getDriver:function(r){return function(e){return _objectSpread({},actions(r)(e),selectors(o)(r)(e),customActions(r)(e))}},getReducer:function(){return{path:t,reducer:reducer}}}};export default reduxForm;
