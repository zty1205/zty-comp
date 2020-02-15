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

export default {
  setRem,
  fixRem
}

export {
  setRem,
  fixRem
}
