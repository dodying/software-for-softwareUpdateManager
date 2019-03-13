'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TEManager.exe',
  version: {
    selector: '.pricerow:contains("TekENUM")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekenum/release/TekENUM.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
