'use strict'

let data = {
  url: 'https://vovsoft.com/software/visual-notes/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/visual-notes.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
