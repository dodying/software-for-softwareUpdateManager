'use strict'

let data = {
  commercial: 3,
  url: 'http://www.pcclean.io/my-faster-game/download/',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.pcclean.io/product-myfastgame/mfginstall.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data
