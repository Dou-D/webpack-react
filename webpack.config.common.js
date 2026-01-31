const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    clean: true,
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env"],
                ["@babel/preset-react", { runtime: "automatic" }],
                ["@babel/preset-typescript"],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 1024 * 1, // 2MB
          },
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
          toType: "dir",
        },
      ],
    }),
  ],
};
