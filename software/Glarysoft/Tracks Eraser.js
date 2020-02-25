'use strict'

let data = {
  url: 'https://www.glarysoft.com/tracks-eraser/download/',
  version: '[class$="download_ver"]',
  changelog: ['https://www.glarysoft.com/update/release-notes/?p=9&v={version}', '#content_002_wenzi_nb ul'],
  download: 'https://download.glarysoft.com/tesetup.exe',
  install: 'install_nsis'
}
module.exports = data
