'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/blur-multiple-images/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/blur-multiple-images.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
