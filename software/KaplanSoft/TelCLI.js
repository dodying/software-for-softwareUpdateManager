'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TelCLI")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tekphone/release/TekPhone.zip',
  install: ['install_zipped', 'install_msi_single', '.msi', 'TekPhone.exe']
}
module.exports = data
