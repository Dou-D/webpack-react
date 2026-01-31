const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
    <link rel="icon" href="webpack.ico">
    <script src="config.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
    `,
    }),
  ],
};
