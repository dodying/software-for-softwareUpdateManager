'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/copy-files-into-multiple-folders/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/copy-files-into-multiple-folders.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
