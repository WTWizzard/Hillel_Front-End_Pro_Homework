const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTSCheckerWebpack = require('fork-ts-checker-webpack-plugin')
const { resolve } = require("path");
const webpack = require("webpack");

module.exports = ({ production }) => {
  return {
    entry: resolve(__dirname, "./src/index.ts"),
    resolve: {
      extensions: ['.js', '.ts']
    },
    module: {
      rules: [
        {
          test: /\.[tj]s$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  {
                    targets: {
                      node: 10,
                    },
                  },
                ],
                "@babel/preset-typescript"
              ],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        },
        {
          test: /\.s[ca]ss$/,
          use: [
            production ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new ForkTSCheckerWebpack(),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, "./src/index.html"),
      }),
    ],
  };
};
