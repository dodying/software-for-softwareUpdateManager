'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TAManager.exe',
  version: {
    selector: '.pricerow:contains("Tekaba")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekaba/release/Tekaba.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
