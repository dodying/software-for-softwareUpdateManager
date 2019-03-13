'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: {
    selector: '.pricerow:contains("ENUM Resolver")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/enumresolver/release/ENUMResolver.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
