const webpack = require("webpack");
const path =  require("path");
const HtmlWebpackPlugin =  require("html-webpack-plugin");
const configs = {
    mode: "development",
    devtool: 'inline-app-map',
    entry: {
        index: "./app/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use:[
                    {
                        loader: "babel-loader"
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
            template: path.join(__dirname, 'app/index.html'),
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