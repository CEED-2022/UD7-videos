const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
      page1: path.resolve(__dirname, "src", "page1.js"),
      page2: path.resolve(__dirname, "src", "page2.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'page1.html',
        template: path.resolve(__dirname, "src", "page1.html"),
        chunks: ['page1', 'common']
      }),
      new HtmlWebpackPlugin({
        filename: 'page2.html',
        template: path.resolve(__dirname, "src", "page2.html"),
        chunks: ['page2', 'common']
      }),
      new MiniCssExtractPlugin()
    ],
    devServer:{
      hot: false,
    }
}


