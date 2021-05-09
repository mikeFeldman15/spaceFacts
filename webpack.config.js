const path = require('path');
// const BUILD_DIR = './Documents/coding/codesmithImmersive/week5/soloproject/newSoloPjt/public/build'
const BUILD_DIR = path.resolve(__dirname, './public/build');
// const APP_DIR = './Documents/coding/codesmithImmersive/week5/soloproject/newSoloPjt/client'
const APP_DIR = path.resolve(__dirname, './client');
console.log(path.resolve(__dirname));
module.exports = {
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        }
      },
      {
        test: /.(css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  },
  // target: 'node',
  // resolve: {
  //   fallback: {
  //     "path": false,
  //     "url": false,
  //     "util": false,
  //     "stream": false,
  //     "buffer": false,
  //     "http": false,
  //     "crypto": false,
  //     "zlib": false
  //   }
  // }
}