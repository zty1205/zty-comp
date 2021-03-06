import ztyMarquee from './zty-marquee'
import ztyPicture from './zty-picture'
import ztyToast from './zty-toast'
import ztyValidBtn from './zty-valid-btn'

const components = {
  ztyMarquee,
  ztyPicture,
  ztyValidBtn
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
  Vue.prototype.$ztyToast = ztyToast
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}

export { components }
