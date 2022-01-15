const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

let mode= 'development';
let target="web";
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
    favicon: './public/favicon.ico',
    manifest: './public/manifest.json',
})]


if(process.env.NODE_ENV ==='production') {
    mode="production";
    target="browserslist"
} else {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode: mode,
    target: target,

    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        assetModuleFilename: "images/[hash][ext][query]",
    },
    module:{
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                type: 'asset',
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024,
                //     }
                // }
            },
            {
                test:/\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: ""},
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude:[/node_modules/, /bower_components/],
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: plugins,

    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"],
    },

    devtool: 'source-map',
    devServer: {
        static: [
            { directory: path.join(__dirname, 'dist') },
            { directory: path.join(__dirname, 'public') },
        ],
        hot: true,
    },
}