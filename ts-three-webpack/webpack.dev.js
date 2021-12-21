const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(frag|vert|glsl)$/,
        use: [
          {
            loader: 'glsl-shader-loader',
            options: {}
          }
        ]
      }
    ]
  },
  cache: {
    type: 'filesystem'
  },
  optimization: {
    runtimeChunk: 'multiple',
    splitChunks: { chunks: 'all' }
  },
  devtool: 'source-map',
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverstatic
    hot: true,
    port: 9000,
    devMiddleware: {
      writeToDisk: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: true
    })
  ],
  output: {
    filename: '[name].bundle.js',
    clean: {
      dry: true
    }
  }
};
