const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@impot "global.sass"',
        includePaths: [path.resolve(__dirname, 'src/assets/style')],
      }
    }
  },
  publicPath: './'
}
