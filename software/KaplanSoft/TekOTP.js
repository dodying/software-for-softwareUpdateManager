'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: {
    selector: '.pricerow:contains("TekOTP")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekotp/release/TekOTP.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
