'use strict'

let data = {
  url: 'http://www.nand.it/nandeck/',
  version: {
    selector: '.tit1'
  },
  download: {
    selector: '.tit1>a'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
