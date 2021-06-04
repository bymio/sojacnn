module.exports = {
  // 公共路径(必须有的)
  // publicPath: "./",
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-use-tinymce/' : '/',
  // 输出文件目录
  outputDir: "dist",
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: "assets",
  // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
  lintOnSave: false,
  // 我用的only，打包后小些
  // compiler: false,//有
  productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建


  configureWebpack: {
    devServer: {
      proxy: {
        '/api': { //访问路径，可以自己设置，
          target: 'http://1.117.81.44', //代理接口，即后端运行所在的端口
          changeOrigin: true, //设置是否跨域
          ws: true,
          pathRewrite: { //访问路径重写
            '^/api': '/'
          }
        }
      }
    },

    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },

}
