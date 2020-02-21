// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    entry: ['react-hot-loader/patch', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: 'file-loader',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: ['url-loader?limit=10000', 'img-loader'],
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    devServer: {
        disableHostCheck: true,
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './build-index.html',
            inject: true,
            appMountId: 'app',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            cacheGroups: {
                raectLib: {
                    test: /[\\/]node_modules[\\/](react|react-dom|redux|redux-saga|react-redux|redux-logger|react-dom|react-bootstrap|react-hot-loader|prop-types|react-datepicker)[\\/]/,
                    name: 'raectLib',
                    chunks: 'all',
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    },
}

module.exports = (env, argv) => {
    if (!argv.hot && argv.mode === 'developement') {
        config.devtool = '#inline-source-map'
        config.output = {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
        }
    }
    if (argv.mode === 'production') {
        config.output = {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
        }
    }
    if (argv.hot) {
        config.output = {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].js',
        }
    }

    return config
}
