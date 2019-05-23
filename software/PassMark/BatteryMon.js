'use strict'

let data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/batmon.htm',
  version: {
    selector: 'p:contains("Version")',
    match: /V(\d.*)/
  },
  download: {
    plain: 'https://www.passmark.com/ftp/batmon.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
