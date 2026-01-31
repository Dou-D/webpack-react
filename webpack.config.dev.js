const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
    <link rel="icon" href="webpack.ico">
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
    `,
    }),
  ],
};
