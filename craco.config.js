const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = pathName => path.resolve(__dirname, pathName)
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          //这里依赖lessLoader
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' }, //配置主题颜色
            javascriptEnabled: true // 组件库中使用到了less编写了函数，需要开启或者配置项
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils')
    }
  }
}
