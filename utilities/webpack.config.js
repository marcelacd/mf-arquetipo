const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { 
  ModuleFederationPlugin 
} = require('webpack').container;

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8000,
  },

  output: {
    publicPath: 'auto',
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'utilities',
      filename: 'remoteEntry.js',
      exposes: {
        './Hello': './src/components/Hello.jsx',
        './ErrorBoundary': './src/errors/ErrorBoundary.jsx',
        './styles': './src/styles/style.css',
        // './apiService': './src/services/apiService.js',
        // './eventBus': './src/communication/eventBus.js',
      },
      shared: {
        react: { 
          singleton: true, 
          eager: true 
        },
        'react-dom': { 
          singleton: true, 
          eager: true 
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
