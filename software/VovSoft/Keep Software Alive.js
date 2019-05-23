'use strict'

let data = {
  url: 'https://vovsoft.com/software/keep-software-alive/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/keep-software-alive.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
