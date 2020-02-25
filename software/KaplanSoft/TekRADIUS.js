'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekRADIUS")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tekradius/release/TekRADIUS.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TekRADIUS.exe']
}
module.exports = data
