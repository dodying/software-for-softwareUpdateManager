'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: {
    selector: '.pricerow:contains("TekOTP")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekotp/release/TekOTP.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
