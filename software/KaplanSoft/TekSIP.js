'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekSIP")>td[align="center"]',
  download: 'https://www.kaplansoft.com/teksip/release/TekSIP.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TekSIP.exe']
}
module.exports = data
