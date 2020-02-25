'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekIVR")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tekivr/release/TekIVR.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TekIVR.exe']
}
module.exports = data
