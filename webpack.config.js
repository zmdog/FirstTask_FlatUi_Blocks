const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        summary: './src/js/index.js',
        another: './src/js/another_modules.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 500000
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                loader:[
                    "style-loader",
                    miniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'file-loader',
                    options : {
                        name: 'png/[name].[ext]'
                    }
                }
            },
            {
                test: /\.scss$/,
                loader:[
                    "style-loader",
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options : {
                        name: 'fonts/[name].[ext]'
                    }
                }
            }
            ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
        new miniCssExtractPlugin({filename: "[name].css"}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pug') + "/index.pug",
            inject: false
        })
    ],
    devServer: {
        overlay: true
    }
};