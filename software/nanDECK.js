'use strict'

let data = {
  url: 'http://www.nand.it/nandeck/',
  version: {
    selector: '.tit1'
  },
  download: {
    selector: '.tit1>a'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
