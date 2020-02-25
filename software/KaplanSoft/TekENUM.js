'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekENUM")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tekenum/release/TekENUM.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TEManager.exe']
}
module.exports = data
