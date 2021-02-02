const path = require("path");

module.exports = 
{
    entry: "./src/main.js",
    output: 
    {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "dist/"
    },
    module: 
    {
        rules:
        [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: 
            [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
          }
        ]
    }
}