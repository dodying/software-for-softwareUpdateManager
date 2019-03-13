'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  preferPath: 'TSRServer.exe',
  version: {
    selector: '.pricerow:contains("TekSIP Route Server")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tsrserver/release/TSRServer.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data