const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'template.js',
    asyncChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
        }]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],

  },
  resolve: {

    extensions: [".js", ".jsx", ".ts", ".tsx"]
  }
}