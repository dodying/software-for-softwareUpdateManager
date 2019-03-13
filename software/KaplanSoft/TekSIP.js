'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TekSIP.exe',
  version: {
    selector: '.pricerow:contains("TekSIP")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/teksip/release/TekSIP.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
