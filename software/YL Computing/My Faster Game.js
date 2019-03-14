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
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
