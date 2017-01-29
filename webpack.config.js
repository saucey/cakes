var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: "./src/app/app.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)/,
        loader: 'url?limit=100000',
      },
      {
        test: /\.js$/, exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html',
        exclude: /index\.html/
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src/public/views'
    ]
  },

  devServer: {
    inline:true,
    port: 8008
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/views/index.html',
      inject: 'body',
    })]
};