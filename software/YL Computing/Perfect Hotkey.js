'use strict'

let data = {
  commercial: 3,
  url: 'http://www.pcclean.io/perfect-hotkey/download/',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.pcclean.io/product-perfecthotkey/phinstall.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data
