const { resolve } = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: [
      resolve(__dirname, "./src/index.js"),
      resolve(__dirname, "./src/main.scss"),
    ],
    output: {
      path: resolve(__dirname, "./dist"),
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      node: "10",
                    },
                  },
                ],
              ],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        },
        {
          test: /\.s[ca]ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new htmlWebPackPlugin({
        template: resolve(__dirname, "./src/index.html"),
      }),
    ],
  };
};

// module.exports = ({ NODE_ENV }) => {
//   
//     plugins: [
//       new MiniCssExtractPlugin({
//         filename: "[name].css",
//       }),
//       new HTMLWebpackPlugin({
//         template: "./src/index.html",
//       }),
//       new webpack.DefinePlugin({
//         process: JSON.stringify({ env: envVariables }),
//       }),
//     ],
//   };
// };
