module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "17ab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a047a988_lang_scss_rel_stylesheet_2Fscss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6d4c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a047a988_lang_scss_rel_stylesheet_2Fscss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a047a988_lang_scss_rel_stylesheet_2Fscss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a047a988_lang_scss_rel_stylesheet_2Fscss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "26d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_409b497e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6152");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_409b497e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_409b497e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_409b497e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "374b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6152":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6d4c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "affa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b3ae36f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("374b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b3ae36f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b3ae36f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b3ae36f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b8d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6365209d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f1b9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6365209d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6365209d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6365209d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f1b9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7119b568-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zty-marquee/index.vue?vue&type=template&id=a047a988&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"marquee_container"},[_c('div',{ref:"marquee",staticClass:"marquee_wrap",class:{'marquee_start': _vm.isStart}},[_c('div',{staticClass:"marquee_item"},[_vm._v(_vm._s(_vm.itemUp))]),_c('div',{staticClass:"marquee_item"},[_vm._v(_vm._s(_vm.itemDown))])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/zty-marquee/index.vue?vue&type=template&id=a047a988&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zty-marquee/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var zty_marqueevue_type_script_lang_js_ = ({
  name: 'ztyMarquee', // 跑马灯
  data () {
    return {
      list: [],
      itemUp: '',
      itemDown: '',
      index: 0,
      isStart: false,
      isInit: false,
      orderType: 'order'
    }
  },
  props: {
    // 跑马灯类型： 1.order 顺序； 2.random 随机
    type: {
      default: 'random',
      type: String
    },
    // 数据
    data: {
      default: null,
      type: Array
    },
    // 指定开始的索引，order类型时生效
    start: {
      default: 0,
      type: Number
    },
    // 跑马灯停留速度
    delay: {
      default: 1000,
      type: Number
    }
  },
  created () {
    if (this.data) {
      this.list = this.data
    }
    const list = this.list
    const len = list.length
    if (len < 2) {
      return
    }
    if (this.type === 'random') {
      this.itemUp = list[this.randomInt(0, len - 1)]
      this.getRandom()
    } else {
      const index = this.start
      this.itemUp = list[index]
      this.index++
      this.itemDown = list[this.index]
    }
  },
  mounted () {
    setTimeout(() => {
      const marquee = this.$refs.marquee
      if (this.orderType && this.orderType === 'random') {
        marquee.addEventListener('transitionend', () => {
          this.onTransitionEndRandom()
        })
        marquee.addEventListener('webkitTransitionEnd', () => {
          this.onTransitionEndRandom()
        })
      } else {
        marquee.addEventListener('transitionend', () => {
          this.onTransitionEndOrder()
        })
        marquee.addEventListener('webkitTransitionEnd', () => {
          this.onTransitionEndOrder()
        })
      }
      this.run()
    }, 50)
  },
  methods: {
    // 开始
    run () {
      this.$nextTick(() => {
        if (this.isInit) {
          this.isStart = true
        } else {
          setTimeout(() => {
            this.isStart = true
            this.isInit = true
          }, 1000)
        }
      })
    },
    // 获得随机整数
    randomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    // 随机
    onTransitionEndRandom () {
      this.itemUp = this.itemDown
      this.getRandom()
      this.isStart = false
      setTimeout(this.run, this.delay)
    },
    // 顺序
    onTransitionEndOrder () {
      this.itemUp = this.itemDown
      const index = this.index
      if (index >= this.list.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
      this.itemDown = this.list[this.index]
      this.isStart = false
      setTimeout(this.run, this.delay)
    },
    // 获取下一个随机值
    getRandom () {
      const list = this.list
      const len = this.list.length
      let index
      const itemUp = this.itemUp
      // 确保随机值和之前的不一致
      while (!index || list[index] === itemUp) {
        index = this.randomInt(0, len - 1)
      }
      this.itemDown = list[index]
    }
  }
});


// CONCATENATED MODULE: ./packages/zty-marquee/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_zty_marqueevue_type_script_lang_js_ = (zty_marqueevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/zty-marquee/index.vue?vue&type=style&index=0&id=a047a988&lang=scss&rel=stylesheet%2Fscss&scoped=true&
var zty_marqueevue_type_style_index_0_id_a047a988_lang_scss_rel_stylesheet_2Fscss_scoped_true_ = __webpack_require__("17ab");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/zty-marquee/index.vue






/* normalize component */

var component = normalizeComponent(
  packages_zty_marqueevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a047a988",
  null
  
)

/* harmony default export */ var zty_marquee = (component.exports);
// CONCATENATED MODULE: ./packages/zty-marquee/index.js

zty_marquee.install = function (Vue) {
  Vue.component(zty_marquee.name, zty_marquee)
}
/* harmony default export */ var packages_zty_marquee = (zty_marquee);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7119b568-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zty-picture/index.vue?vue&type=template&id=1b3ae36f&scoped=true&
var zty_picturevue_type_template_id_1b3ae36f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"image-container",style:({
    paddingTop: (_vm.pictureData.height / _vm.pictureData.width) * 100 + '%'
  })},_vm.$listeners),[_c('img',{staticClass:"image-content",attrs:{"src":_vm.pictureData.src}})])}
var zty_picturevue_type_template_id_1b3ae36f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/zty-picture/index.vue?vue&type=template&id=1b3ae36f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zty-picture/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var zty_picturevue_type_script_lang_js_ = ({
  name: 'ztyPicture',
  props: {
    data: {
      type: [Object, String],
      default: function () {
        return null
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    resolver: {
      type: Function,
      default: null
    }
  },
  computed: {
    pictureData () {
      return this.resolver ? this.resolver(this.data) : this.data
    }
  }
});

// CONCATENATED MODULE: ./packages/zty-picture/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_zty_picturevue_type_script_lang_js_ = (zty_picturevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/zty-picture/index.vue?vue&type=style&index=0&id=1b3ae36f&scoped=true&lang=scss&
var zty_picturevue_type_style_index_0_id_1b3ae36f_scoped_true_lang_scss_ = __webpack_require__("affa");

// CONCATENATED MODULE: ./packages/zty-picture/index.vue






/* normalize component */

var zty_picture_component = normalizeComponent(
  packages_zty_picturevue_type_script_lang_js_,
  zty_picturevue_type_template_id_1b3ae36f_scoped_true_render,
  zty_picturevue_type_template_id_1b3ae36f_scoped_true_staticRenderFns,
  false,
  null,
  "1b3ae36f",
  null
  
)

/* harmony default export */ var zty_picture = (zty_picture_component.exports);
// CONCATENATED MODULE: ./packages/zty-picture/index.js

zty_picture.install = function (Vue) {
  Vue.component(zty_picture.name, zty_picture)
}
/* harmony default export */ var packages_zty_picture = (zty_picture);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7119b568-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zty-toast/index.vue?vue&type=template&id=409b497e&scoped=true&
var zty_toastvue_type_template_id_409b497e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"toast-con"},[_c('div',{staticClass:"toast-content"},[_vm._v(_vm._s(_vm.content))])])])}
var zty_toastvue_type_template_id_409b497e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/zty-toast/index.vue?vue&type=template&id=409b497e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zty-toast/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var zty_toastvue_type_script_lang_js_ = ({
  data: function () {
    return {
      content: '',
      isShow: false
      // toastWidth: '47%'
    }
  },
  methods: {
    show ({ content }) {
      // this.toastWidth = width;
      this.content = content
      this.isShow = true
    },
    hide () {
      this.isShow = false
    }
  }
});

// CONCATENATED MODULE: ./packages/zty-toast/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_zty_toastvue_type_script_lang_js_ = (zty_toastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/zty-toast/index.vue?vue&type=style&index=0&id=409b497e&scoped=true&lang=css&
var zty_toastvue_type_style_index_0_id_409b497e_scoped_true_lang_css_ = __webpack_require__("26d6");

// CONCATENATED MODULE: ./packages/zty-toast/index.vue






/* normalize component */

var zty_toast_component = normalizeComponent(
  packages_zty_toastvue_type_script_lang_js_,
  zty_toastvue_type_template_id_409b497e_scoped_true_render,
  zty_toastvue_type_template_id_409b497e_scoped_true_staticRenderFns,
  false,
  null,
  "409b497e",
  null
  
)

/* harmony default export */ var zty_toast = (zty_toast_component.exports);
// CONCATENATED MODULE: ./packages/zty-toast/index.js

 // 引入组件
const ToastConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(zty_toast) // 返回一个“扩展实例构造器”
let toastDom
let zty_toast_timer
const init = () => {
  toastDom = new ToastConstructor({
    el: document.createElement('div') // 将toast组件挂载到新创建的div上
  })
  document.body.appendChild(toastDom.$el)
}

/**
 * toast一段时间后消失，time默认1500
 * @param {*} config
 */
const toggle = (config) => {
  const time = config && config.time ? config.time : 1500
  zty_toast_timer && clearInterval(zty_toast_timer)
  show(config)
  zty_toast_timer = setTimeout(() => {
    hide()
  }, time)
}
// show
const show = (config) => {
  if (!toastDom) {
    init()
  } else if (toastDom.isShow) {
    hide()
  }
  if (typeof config === 'string' || typeof config === 'number') {
    config = {
      content: config
    }
  }
  config.content && toastDom.show(config)
}
// disappear
const hide = () => {
  toastDom.hide()
}

/* harmony default export */ var packages_zty_toast = ({
  init,
  toggle,
  show,
  hide
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7119b568-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zty-valid-btn/index.vue?vue&type=template&id=6365209d&scoped=true&
var zty_valid_btnvue_type_template_id_6365209d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"code-btn",on:{"click":_vm.count}},[(_vm.end)?_c('span',[_vm._v(" "+_vm._s(_vm.defaultText)+" ")]):_vm._t("default",[_vm._v(" "+_vm._s(_vm.stamp)+"s ")],{"stamp":_vm.stamp})],2)}
var zty_valid_btnvue_type_template_id_6365209d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/zty-valid-btn/index.vue?vue&type=template&id=6365209d&scoped=true&

// CONCATENATED MODULE: ./packages/utils/index.js
function setRem (pageSize) {
  const wWidth = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth
  document.getElementsByTagName('html')[0].style.fontSize = wWidth / pageSize * 100 + 'px'
}
function fixRem () {
  const html = document.getElementsByTagName('html')[0]
  const originFontSize = parseFloat(html.style.fontSize)
  const hideDom = document.createElement('div')
  document.body.appendChild(hideDom)
  hideDom.style.cssText = 'position: absolute; top: -10000px; left: -10000px; width: 1rem'
  const currentWidth = parseFloat(hideDom.offsetWidth)
  if (currentWidth !== originFontSize) {
    html.style.fontSize = originFontSize / currentWidth * originFontSize + 'px'
  }
  hideDom.parentElement.removeChild(hideDom)
}

function noop () {}

function isFunction (val) {
  return typeof val === 'function'
}

function isObject (val) {
  return val !== null && typeof val === 'object'
}

function isPromise (val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zty-valid-btn/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//


const regex = /^([1-9]\d*|0)$/
/* harmony default export */ var zty_valid_btnvue_type_script_lang_js_ = ({
  name: 'ztyValidBtn',
  props: {
    time: {
      type: Number,
      default: 10,
      validator: function (value) { // 正整数
        return regex.test(value)
      }
    },
    beforeStart: {
      type: Function
    },
    finish: {
      type: Function
    },
    defaultText: {
      type: String,
      default: '获取验证码'
    }
  },
  data () {
    return {
      stamp: 0,
      end: true,
      locked: false
    }
  },
  created () {
    this.stamp = this.time
  },
  methods: {
    count () {
      if (!this.time || !regex.test(this.time)) {
        this.finish && this.finish()
        return
      }
      if (this.locked) {
        return
      }
      this.locked = true
      this.stamp = this.time
      if (this.beforeStart && isFunction(this.beforeStart)) {
        const beforeStart = this.beforeStart()
        if (isPromise(beforeStart)) {
          this.beforeStart().then(() => {
            this.startCount()
          })
        } else if (beforeStart) {
          this.startCount()
        } else {
          this.locked = false
        }
      } else {
        this.startCount()
      }
    },
    startCount () {
      this.end = false
      let t = this.time
      const timer = setInterval(() => {
        t--
        if (t > -1) {
          this.stamp--
        } else {
          clearInterval(timer)
          this.end = true
          this.finish && isFunction(this.finish) && this.finish()
          this.locked = false
        }
      }, 1000)
    }
  }
});

// CONCATENATED MODULE: ./packages/zty-valid-btn/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_zty_valid_btnvue_type_script_lang_js_ = (zty_valid_btnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/zty-valid-btn/index.vue?vue&type=style&index=0&id=6365209d&lang=scss&scoped=true&
var zty_valid_btnvue_type_style_index_0_id_6365209d_lang_scss_scoped_true_ = __webpack_require__("b8d5");

// CONCATENATED MODULE: ./packages/zty-valid-btn/index.vue






/* normalize component */

var zty_valid_btn_component = normalizeComponent(
  packages_zty_valid_btnvue_type_script_lang_js_,
  zty_valid_btnvue_type_template_id_6365209d_scoped_true_render,
  zty_valid_btnvue_type_template_id_6365209d_scoped_true_staticRenderFns,
  false,
  null,
  "6365209d",
  null
  
)

/* harmony default export */ var zty_valid_btn = (zty_valid_btn_component.exports);
// CONCATENATED MODULE: ./packages/zty-valid-btn/index.js

zty_valid_btn.install = function (Vue) {
  Vue.component(zty_valid_btn.name, zty_valid_btn)
}
/* harmony default export */ var packages_zty_valid_btn = (zty_valid_btn);

// CONCATENATED MODULE: ./packages/index.js





const components = {
  ztyMarquee: packages_zty_marquee,
  ztyPicture: packages_zty_picture,
  ztyValidBtn: packages_zty_valid_btn
}

// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  // eslint-disable-next-line prefer-const
  for (let comp of Object.values(components)) {
    Vue.component(comp.name, comp)
  }
  // 原型链上
  Vue.prototype.$ztyToast = packages_zty_toast
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  install,
  ...components
});



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport components */__webpack_require__.d(__webpack_exports__, "components", function() { return components; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });