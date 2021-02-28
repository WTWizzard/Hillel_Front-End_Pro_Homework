const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTSCheckerWebpack = require("fork-ts-checker-webpack-plugin");
const { resolve } = require("path");
const webpack = require("webpack");

module.exports = () => {
  return {
    entry:[ resolve(__dirname, "./src/index.ts"), resolve(__dirname, './src/main.scss')],
    resolve: {
      extensions: [".js", ".ts"],
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.[tj]s$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-typescript",
              ],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        },
        {
          test: /\.s[ca]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
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
