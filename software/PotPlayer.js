'use strict'

let data = {
  url: 'https://potplayer.daum.net/',
  version: '.tit_version',
  changelog: {
    url: 'http://potplayer.daum.net/update.html?lang=en&bit',
    match: /^\[[\d.]+/,
    split: true
  },
  download: 'http://get.daum.net/PotPlayer64/Version/Latest/PotPlayerSetup64.exe',
  install: 'install_nsis'
}
module.exports = data
