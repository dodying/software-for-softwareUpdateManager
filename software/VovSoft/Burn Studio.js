'use strict'

let data = {
  url: 'https://vovsoft.com/software/burn-studio/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/burn-studio.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
