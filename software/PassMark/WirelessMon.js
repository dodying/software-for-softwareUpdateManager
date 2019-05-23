'use strict'

let data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/wirelessmonitor.htm',
  version: {
    selector: 'p:contains("Version")',
    match: /V(\d.*)/
  },
  download: {
    plain: 'https://www.passmark.com/ftp/wirelessmon.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
