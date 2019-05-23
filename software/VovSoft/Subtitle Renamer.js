'use strict'

let data = {
  url: 'https://vovsoft.com/software/subtitle-renamer/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/subtitle-renamer.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
