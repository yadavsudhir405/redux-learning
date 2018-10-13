const webpack = require("webpack");
const path =  require("path");
const HtmlWebpackPlugin =  require("html-webpack-plugin");
const configs = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        index: "./index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\*.js$/,
                use:[
                    {
                        loader: "babel-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
            template: path.join(__dirname, 'index.html'),
            inject: 'body',
            hash: false
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true
    }
};
module.exports = configs;