'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekPhone")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tekphone/release/TekPhone.zip',
  install: ['install_zipped', 'install_msi_single', '.msi', null, 'TekPhone.exe']
}
module.exports = data
