'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekCERT")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tekcert/release/TekCERT.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TekCERT.exe']
}
module.exports = data
