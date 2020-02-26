import Vue from 'vue'
import Toast from './index.vue' // 引入组件
const ToastConstructor = Vue.extend(Toast) // 返回一个“扩展实例构造器”
let toastDom
let timer
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
  timer && clearInterval(timer)
  show(config)
  timer = setTimeout(() => {
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

export default {
  init,
  toggle,
  show,
  hide
}
