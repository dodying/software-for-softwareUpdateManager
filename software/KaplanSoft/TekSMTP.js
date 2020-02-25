'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: '.pricerow:contains("TekSMTP")>td[align="center"]',
  download: 'https://www.kaplansoft.com/teksmtp/release/TekSMTP.zip',
  install: ['install_zipped', 'install_msi', '.msi', null, 'TekSMTP.exe']
}
module.exports = data
