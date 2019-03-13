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
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data
