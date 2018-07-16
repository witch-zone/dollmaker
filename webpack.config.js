const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const autoprefixer = require('autoprefixer')

module.exports = {
  target: 'web',

  entry: {
    lookmaker: './src/index.jsx'
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash].js',
    library: 'LookMaker',
    libraryTarget: 'umd',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/i,
        include: [
          /src/,
        ],
        use: [
          process.env.NODE_ENV === 'development'
            ? { loader: 'style-loader' }
            : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  autoprefixer(),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['node_modules'],
                sourceMap: true,
              },
            },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new CleanWebpackPlugin([
      './dist',
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets/',
      to: 'assets/',
    }]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== 'production',
      pngquant: {
        quality: '80-100',
      }
    }),
  ],

  devServer: {
    contentBase: './dist'
  }
}
