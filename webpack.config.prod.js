const path = require("path");

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/webpack-react/",
  },
  devtool: "inline-source-map",
};
