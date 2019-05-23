'use strict'

let data = {
  url: 'https://www.jam-software.com/ultrasearch/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/ultrasearch/UltraSearch-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
