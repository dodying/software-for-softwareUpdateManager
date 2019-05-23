'use strict'

let data = {
  url: 'https://vovsoft.com/software/prime-number-counter/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/prime-number-counter.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
