'use strict'

let data = {
  url: 'https://vovsoft.com/software/baby-computer-fun/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/baby-computer-fun.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
