const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const webpack = require("webpack")
const CopyPlugin = require("copy-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // Import CSS minimizer plugin


const mode =
  process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
  mode: mode,
  entry: path.resolve(__dirname, "./src/index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|jpg|webp|gif|woff|woff2|eot|ttf|svg|ico|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.json$/,
        type: "json",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets",
        },
        
      ],
    }),

  new TerserPlugin({
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'] // Example of removing console.log calls
      },
      mangle: {
        toplevel: true
      },
      output: {
        comments: false,
        ascii_only: true
      }
    }
  }),


  // Add CssMinimizerPlugin to minify CSS
  new CssMinimizerPlugin(),
  // new FontPreloadPlugin({
  //   extensions: ["ttf"],
  //   crossorigin: true,
  //   loadType: "preload",
  //   families: [
  //     {
  //       family: "Be Vietnam Pro",
  //       weights: [400],
  //     },
  //     {
  //       family: "Bebas Neue",
  //       weights: [400],
  //     },
  //     {
  //       family: "Gothic A1",
  //       weights: [400, 600, 700],
  //     },
  //   ],
  // }),
],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    headers: {
      "Cache-Control": "no-store",
    },
    hot: true,
    open: true,
    client: {
      overlay: false,
    },
    historyApiFallback: true,
  },
}
