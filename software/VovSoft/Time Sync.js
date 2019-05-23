'use strict'

let data = {
  url: 'https://vovsoft.com/software/time-sync/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/time-sync.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
