'use strict'

let data = {
  url: 'https://www.glarysoft.com/duplicate-cleaner/download/',
  version: '[class$="download_ver"]',
  changelog: ['https://www.glarysoft.com/update/release-notes/?p=8&v={version}', '#content_002_wenzi_nb ul'],
  download: 'https://download.glarysoft.com/ducsetup.exe',
  install: 'install_nsis'
}
module.exports = data
