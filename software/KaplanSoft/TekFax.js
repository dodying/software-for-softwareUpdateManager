'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekFax")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tekfax/release/TekFax.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TekFax.exe']
}
module.exports = data
