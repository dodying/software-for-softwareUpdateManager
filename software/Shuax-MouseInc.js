'use strict'

let data = {
  url: 'https://shuax.com/project/mouseinc/',
  version: {
    selector: '.title'
  },
  download: {
    plain: 'https://shuax.com/mi'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
