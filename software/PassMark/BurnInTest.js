'use strict'

let data = {
  commercial: 3,
  url: 'https://www.passmark.com/products/bit_history.htm',
  version: {
    selector: 'p>em>strong',
    match: /Version (\d.*),/
  },
  download: {
    plain: 'https://www.passmark.com/ftp/bitpro.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
