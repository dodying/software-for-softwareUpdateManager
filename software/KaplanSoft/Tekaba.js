'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("Tekaba")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tekaba/release/Tekaba.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TAManager.exe']
}
module.exports = data
