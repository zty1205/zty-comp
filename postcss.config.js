module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-url': {},
    'cssnano': { // 压缩和清理css，和css-loader捆绑在了一起
      'cssnano-preset-advanced': {
        zindex: false,
        autoprefixer: false
      }
    }
  }
}
