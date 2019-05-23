'use strict'

let data = {
  url: 'http://www.uedrive.com/products/standalone/',
  version: {
    selector: '.download>a>span'
  },
  download: {
    selector: '.download>a'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.cli(output, iPath)
  }
}
module.exports = data
