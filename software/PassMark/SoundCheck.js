'use strict'

let data = {
  url: 'https://www.passmark.com/products/soundcheck.htm',
  version: {
    selector: 'p:contains("Version")',
    match: /V(\d.*)/
  },
  download: {
    plain: 'https://www.passmark.com/ftp/soundchk.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
