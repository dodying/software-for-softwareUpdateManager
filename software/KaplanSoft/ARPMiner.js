'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("ARPMiner")>td[align="center"]',
  download: 'https://www.kaplansoft.com/arpminer/release/ARPMiner.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'ARPMiner.exe']
}
module.exports = data
