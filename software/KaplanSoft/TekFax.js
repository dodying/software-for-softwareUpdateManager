'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TekFax.exe',
  version: {
    selector: '.pricerow:contains("TekFax")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekfax/release/TekFax.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
