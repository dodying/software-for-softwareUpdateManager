'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/vov-watermark-image/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vov-watermark-image.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
