const path = require('path')
function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  // 默认src目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages'),
        '~': resolve('src'),
        assets: resolve('examples/assets'),
        views: resolve('examples/views')
      }
    }
  },
  // 使得package加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  },
  devServer: {
    host: '0.0.0.0',
    port: '8082',
    open: true,
    proxy: {
      '/': {
        target: 'https://test.com/',
        ws: false,
        changOrigin: true
      }
    }
  }
}
