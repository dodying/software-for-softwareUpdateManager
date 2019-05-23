'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/image-to-pdf/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/image-to-pdf.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
