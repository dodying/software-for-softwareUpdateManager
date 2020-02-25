'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekConSer")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tekconser/release/TekConSer.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TekConSer.exe']
}
module.exports = data
