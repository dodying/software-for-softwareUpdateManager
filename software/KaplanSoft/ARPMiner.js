'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'ARPMiner.exe',
  version: {
    selector: '.pricerow:contains("ARPMiner")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/arpminer/release/ARPMiner.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
