'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/print-multiple-web-pages/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/print-multiple-web-pages.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
