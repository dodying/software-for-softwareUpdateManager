'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/text-edit-plus/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/text-edit-plus.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
