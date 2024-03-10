const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Webpack rozpoczyna w tym miejscu jako jsx
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // pliki scss wpuszczam do sass-loader, następnie do css-loader a na końcu do style-loader
      },
      {
        test: /\.ts|tsx$/,
        use: 'ts-loader'
      },
      {
        test: /\.js|jsx$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  }
};
