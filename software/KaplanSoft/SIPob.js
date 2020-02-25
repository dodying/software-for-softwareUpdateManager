'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("SIPob")>td[align="center"]',
  download: 'https://www.kaplansoft.com/sipob/release/SIPob.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'SIPob.exe']
}
module.exports = data
