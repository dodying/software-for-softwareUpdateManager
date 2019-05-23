'use strict'

let data = {
  url: 'https://vovsoft.com/software/webcam-capture/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/webcam-capture.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
