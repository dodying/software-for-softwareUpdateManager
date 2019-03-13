'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: {
    selector: '.pricerow:contains("TekWiFi")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekwifi/release/TekWiFi.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
