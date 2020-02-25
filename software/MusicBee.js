'use strict'

let data = {
  commercial: 1,
  url: 'https://www.getmusicbee.com/downloads/',
  version: '.installer_layer_wrapper>h2',
  changelog: ['https://www.getmusicbee.com/help/release-note/', '.markdownView'],
  download: 'a[href*="Portable"][href$=".zip/file"]',
  install: ['install_zipped', 'install_nsis']
}
module.exports = data
