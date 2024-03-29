const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const RemoveCommentsPlugin = require('./remove-comments-plugin');

const config = {
  mode: 'development',
  // devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/main.js',
  },
  devServer: {
    contentBase: './dist',  // 根目录；
    // progress: true, // 显示打包的进度条；
    open: true, // 自动打开浏览器；
    port: 8080, // 打开的端口；
    hot: true,  
    compress: true, // 启动gzip压缩；
    // 设置代理
    proxy: {
      // 将本地 /api/xxx代理到localhost:3000/api/xxx
      '/api': 'http://localhost: 3000',
      // 将本地 /api/xxx代理到localhost:3000/xxx
      '/api2': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api2': '',
        }
      }
    },
  },
  module: {
    rules: [{
      test: /\.(jpg|png|jpeg|gif)$/,
      use: {
        // 小于5kb的图片用base64格式产出；否则用file-loader打包；
        // limit: 5 * 1024,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
        }
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          // options: {
          //   importLoaders: 2, // ???
          //   modules: true,  // ???
          // }
        },
        'sass-loader', // 从后往前
      ]
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            require.resolve('@babel/preset-react'),
            [require.resolve('@babel/preset-env'), {modules: false}]
          ],
          cacheDirectory: true,
        }
      }
    }, {
      test: /\.md$/,
      exclude: /node_modules/,
      use: [
        'html-loader',
        './markdown-loader'
      ],
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  plugins: [
    // 用于生成index.html
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new VueLoaderPlugin(),
    // 开发太慢，上线再用
    // new CleanWebpackPlugin(),
    // new RemoveCommentsPlugin(),
    // new webpack.HotModuleReplacementPlugin(),  // package.json和webpack只能存在一个，不然出现溢出。
  ],
  // 其他配置项
  optimization: {
    // 模块只导出被使用的成员
    usedExports: true,
    // 尽可能合并每一个模块到一个函数中
    concatenateModules: true,
    // 压缩输出结果,开发太慢，上线再用
    // minimize: true,
  },
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'dist'),  // 必须使用绝对路径
  }
}

module.exports = config;