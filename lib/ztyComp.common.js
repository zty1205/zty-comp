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

/***/ "27d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0f1f8630_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3f3b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0f1f8630_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0f1f8630_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0f1f8630_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3f3b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6d4c":
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7119b568-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/zty-picture/index.vue?vue&type=template&id=0f1f8630&scoped=true&
var zty_picturevue_type_template_id_0f1f8630_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"image-container",style:({
    paddingTop: (_vm.pictureData.height / _vm.pictureData.width) * 100 + '%'
  })},_vm.$listeners),[_c('img',{staticClass:"image-content",attrs:{"src":_vm.pictureData.src}})])}
var zty_picturevue_type_template_id_0f1f8630_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/zty-picture/index.vue?vue&type=template&id=0f1f8630&scoped=true&

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
  name: 'Picture',
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
// EXTERNAL MODULE: ./packages/zty-picture/index.vue?vue&type=style&index=0&id=0f1f8630&scoped=true&lang=scss&
var zty_picturevue_type_style_index_0_id_0f1f8630_scoped_true_lang_scss_ = __webpack_require__("27d6");

// CONCATENATED MODULE: ./packages/zty-picture/index.vue






/* normalize component */

var zty_picture_component = normalizeComponent(
  packages_zty_picturevue_type_script_lang_js_,
  zty_picturevue_type_template_id_0f1f8630_scoped_true_render,
  zty_picturevue_type_template_id_0f1f8630_scoped_true_staticRenderFns,
  false,
  null,
  "0f1f8630",
  null
  
)

/* harmony default export */ var zty_picture = (zty_picture_component.exports);
// CONCATENATED MODULE: ./packages/zty-picture/index.js

zty_picture.install = function (Vue) {
  Vue.component(zty_picture.name, zty_picture)
}
/* harmony default export */ var packages_zty_picture = (zty_picture);

// CONCATENATED MODULE: ./packages/index.js



const components = {
  ztyMarquee: packages_zty_marquee,
  ztyPicture: packages_zty_picture
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