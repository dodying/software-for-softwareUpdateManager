'use strict'

let data = {
  url: 'https://vovsoft.com/software/keyboard-lights/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/keyboard-lights.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
