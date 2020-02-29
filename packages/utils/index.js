export function setRem (pageSize) {
  const wWidth = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth
  document.getElementsByTagName('html')[0].style.fontSize = wWidth / pageSize * 100 + 'px'
}
export function fixRem () {
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

export function noop () {}

export function isFunction (val) {
  return typeof val === 'function'
}

export function isObject (val) {
  return val !== null && typeof val === 'object'
}

export function isPromise (val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
