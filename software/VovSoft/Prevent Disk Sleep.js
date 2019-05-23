'use strict'

let data = {
  url: 'https://vovsoft.com/software/prevent-disk-sleep/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/prevent-disk-sleep.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
