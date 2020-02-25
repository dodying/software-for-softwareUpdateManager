'use strict'

let data = {
  commercial: 2,
  url: 'https://ultracopier.first-world.info/download.html',
  version: ['.piwik_download[href*="x86_64"]', 'href', /ultracopier-windows-x86_64-(.*?)-setup.exe/],
  download: '.piwik_download[href*="x86_64"]',
  install: 'install_nsis'
}
module.exports = data
