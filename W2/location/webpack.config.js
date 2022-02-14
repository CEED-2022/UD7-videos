const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
      index: path.resolve(__dirname, "src", "index.js"),
      page2: path.resolve(__dirname, "src", "page2.js"),
      page3: path.resolve(__dirname, "src", "page3.js"),
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
        filename: 'index.html',
        template: path.resolve(__dirname, "src", "index.html"),
        chunks: ['index']
      }),
      new HtmlWebpackPlugin({
        filename: 'page2.html',
        template: path.resolve(__dirname, "src", "page2.html"),
        chunks: ['page2']
      }),
      new HtmlWebpackPlugin({
        filename: 'page3.html',
        template: path.resolve(__dirname, "src", "page3.html"),
        chunks: ['page3']
      }),
      new MiniCssExtractPlugin()
    ],
    devServer:{
      hot: false,
    }
}


