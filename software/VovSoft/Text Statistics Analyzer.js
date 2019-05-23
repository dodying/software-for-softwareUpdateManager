'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/text-statistics-analyzer/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/text-statistics-analyzer.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
