'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TekPhone.exe',
  version: {
    selector: '.pricerow:contains("TelCLI")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekphone/release/TekPhone.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_msi_single', '.msi', data.preferPath)
  }
}
module.exports = data
