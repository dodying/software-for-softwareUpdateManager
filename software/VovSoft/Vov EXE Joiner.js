'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/vov-exe-joiner/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vov-exe-joiner.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
