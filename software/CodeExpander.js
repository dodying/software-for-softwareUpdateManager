'use strict'

let data = {
  url: 'https://github.com/oncework/codeexpander/releases/latest',
  version: 'a[href*="/releases/download/"][href$=".exe"]',
  changelog: '.release-header+.markdown-body',
  download: 'a[href*="/releases/download/"][href$=".exe"]',
  install: ['install_zipped', 'install', 'app-64.7z']
}
module.exports = data
