'use strict'

let data = {
  commercial: 3,
  url: 'http://quickmacros.com/download.html',
  version: {
    selector: 'div.body:nth-child(2) > p:nth-child(1)'
  },
  download: {
    plain: 'http://quickmacros.com/quickmac.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
