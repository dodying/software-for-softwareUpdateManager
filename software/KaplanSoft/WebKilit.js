'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("WebKilit")>td[align="center"]',
  download: 'https://www.kaplansoft.com/webkilit/release/WebKilit.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'WKManager.exe']
}
module.exports = data
