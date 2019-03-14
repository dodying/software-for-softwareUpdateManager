'use strict'

let data = {
  commercial: 3,
  url: 'http://www.pcclean.io/coin-balance-tracker/',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.pcclean.io/product-coin-balance-tracker/balance_tracker.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
