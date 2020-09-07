const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/main.js',
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true,  // ???
  },
  module: {
    rules: [{
      test: /\.(jpg|png)$/,
      use: {
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
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),  // package.json和webpack只能存在一个，不然出现溢出。
  ],
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'dist'),  // 必须使用绝对路径
  }
}