'use strict'

let data = {
  url: 'https://vovsoft.com/software/file-checksum-calculator/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/file-checksum-calculator.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
