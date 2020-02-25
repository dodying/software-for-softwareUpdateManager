'use strict'

let data = {
  commercial: 2,
  url: 'https://www.airlivedrive.com/en/download/',
  version: '[id^="post"]>.entry>h2+h3',
  changelog: 'h2+h3+p',
  download: 'http://www.airlivedrive.com/downloads/AirLiveDrive-OfflineInstaller.exe',
  install: 'install_nsis'
}
module.exports = data
