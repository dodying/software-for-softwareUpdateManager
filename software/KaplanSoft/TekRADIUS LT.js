'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekRADIUS LT")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tekradius/release/TekRADIUSLT.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TekRADIUSLT.exe']
}
module.exports = data
