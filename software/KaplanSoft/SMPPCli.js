'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: {
    selector: '.pricerow:contains("SMPPCli")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/smppcli/release/SMPPCli.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
