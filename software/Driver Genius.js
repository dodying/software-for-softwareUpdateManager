'use strict'

let data = {
  useProxy: true,
  commercial: 3,
  url: 'http://www.driver-soft.com/download.html',
  version: {
    selector: 'p>strong'
  },
  download: {
    plain: 'http://www.driver-soft.com/products/DG_Setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
