'use strict'

let data = {
  url: 'http://www.pcclean.io/winutilities-free/download/',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.pcclean.io/product-winutilities-free/wufinstall.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data
