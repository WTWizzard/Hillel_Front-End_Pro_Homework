// const { resolve } = require("path");
// const htmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = (env) => {
//   console.log(env);
//   return {
//     mode: "development",
//     entry: ["./src/index.jsx", "./src/main.css"],
//     output: {
//       path: resolve(__dirname, "./dist"),
//       filename: "index.js",
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(sa?)?css$/,
//           use: [MiniCssExtractPlugin.loader, "css-loader"],
//         },

//       {
//         test: /\.js$/,
//         loader: "babel-loader",
//         exclude: /node_modules/,
//       }
//       ],
//     },
//     plugins: [
//       new MiniCssExtractPlugin({
//         filename: "[name].[hash].css",
//       }),
//       new htmlWebPackPlugin({
//         template: "./src/index.html",
//       }),
//     ],
//   };
// };

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          preset: ["es2015","@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
