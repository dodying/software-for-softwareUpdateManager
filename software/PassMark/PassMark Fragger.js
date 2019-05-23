'use strict'

let data = {
  url: 'https://www.passmark.com/products/fragger.htm',
  version: {
    selector: 'p:contains("Version")',
    match: /v(\d.*)/
  },
  download: {
    plain: 'https://www.passmark.com/ftp/fragger-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
