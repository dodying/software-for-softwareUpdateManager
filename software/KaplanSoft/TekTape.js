'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekTape")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tektape/release/TekTape.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TekTape.exe']
}
module.exports = data
