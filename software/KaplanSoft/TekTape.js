'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TekTape.exe',
  version: {
    selector: '.pricerow:contains("TekTape")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tektape/release/TekTape.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
