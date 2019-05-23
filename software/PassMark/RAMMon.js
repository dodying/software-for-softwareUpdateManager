'use strict'

let data = {
  url: 'https://www.passmark.com/products/rammon.htm',
  version: {
    selector: 'p:contains("Version")',
    match: /V(\d.*)/
  },
  download: {
    plain: 'https://www.passmark.com/ftp/rammon.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
