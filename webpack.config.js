const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const autoprefixer = require('autoprefixer')

const common = {
  target: 'web',

  entry: {
    lookmaker: './src/index.jsx'
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash].js',
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
      {
        test: /\.(jpe?g|png)$/i,
        include: [
          /src/,
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            },
          },
          {
            loader: 'img-loader',
            options: {
              minimize: true,
              svgo: {
                plugins: [
                  { removeUnknownsAndDefaults: false },
                  { removeUselessStrokeAndFill: false },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.woff2?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
            },
          },
        ],
      }
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new CleanWebpackPlugin([
      './dist',
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inlineSource: 'preloader\.(.*)\.(js|css)$',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new CopyWebpackPlugin([{
      from: 'src/assets/looks/',
      to: 'assets/looks/',
    }]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== 'production',
      pngquant: {
        quality: '80-100',
      }
    }),
  ],
}

const production = {
  mode: 'production',

  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCssAssetsPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        preloader: {
          name: 'preloader',
          test: /preloader\.scss$/,
          chunks: 'all',
          enforce: true
        },
      },
    }
  },
}

const development = {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist'
  }
}

module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      ...common,
      ...production,
    }
  }

  return {
    ...common,
    ...development,
  }
}
