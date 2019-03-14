'use strict'

let data = {
  commercial: 3,
  url: 'http://www.pcclean.io/winutilities-pro/download/',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.pcclean.io/product-winutilities-pro/wuinstall.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
