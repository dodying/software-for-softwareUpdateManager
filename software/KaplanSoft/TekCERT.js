'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TekCERT.exe',
  version: {
    selector: '.pricerow:contains("TekCERT")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekcert/release/TekCERT.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
