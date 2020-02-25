'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekSIP Route Server")>td[align="center"]',
  download: 'https://www.kaplansoft.com/tsrserver/release/TSRServer.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TSRServer.exe']
}
module.exports = data
