'use strict'

let data = {
  url: 'https://www.passmark.com/products/diskcheckup.htm',
  version: {
    selector: 'p:contains("Version")',
    match: /V(\d.*)/
  },
  download: {
    plain: 'https://www.passmark.com/ftp/diskcheckup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
