const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[chunkhash].js",
        publicPath: "/",
    },

    node: {
        fs: "empty",
    },

    resolve: {
        modules: [path.resolve(__dirname, "../src"), "node_modules"],

        extensions: ["*", ".js", ".jsx"],

        alias: {
            Actions: path.resolve(__dirname, "../src/actions"),
            Assets: path.resolve(__dirname, "../src/assets"),
            Components: path.resolve(__dirname, "../src/components"),
            Constants: path.resolve(__dirname, "../src/constants"),
            Pages: path.resolve(__dirname, "../src/pages"),
            Reducers: path.resolve(__dirname, "../src/reducers"),
            Routes: path.resolve(__dirname, "../src/routes"),
            Selectors: path.resolve(__dirname, "../src/selectors"),
            Store: path.resolve(__dirname, "../src/store"),
            Sagas: path.resolve(__dirname, "../src/sagas"),
        },
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "style-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/images",
                        },
                    },
                ],
            },
        ],
    },

    devServer: {
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "naover::explorer",
            template: "./public/index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new CleanWebpackPlugin(),
    ],
};
