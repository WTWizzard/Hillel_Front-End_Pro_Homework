const { resolve } = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  console.log(env);
  return {
    mode: "development",
    entry: ["./src/index.js", "./src/main.css"],
    output: {
      path: resolve(__dirname, "./dist"),
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /\.(sa?)?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
      }),
      new htmlWebPackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
