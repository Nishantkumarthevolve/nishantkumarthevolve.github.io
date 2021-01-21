const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
    mode: mode,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/images/',
                            outputPath: 'images',
                        },
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.html']
    },

    plugins: [
        new HTMLWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],

    devtool: 'source-map',

    devServer: {
        contentBase: './dist'
    }
}