'use strict'

let data = {
  url: 'https://vovsoft.com/software/open-multiple-files/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/open-multiple-files.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
