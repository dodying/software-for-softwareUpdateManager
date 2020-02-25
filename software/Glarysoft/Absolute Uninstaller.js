'use strict'

let data = {
  url: 'https://www.glarysoft.com/absolute-uninstaller/download/',
  version: '[class$="download_ver"]',
  changelog: ['https://www.glarysoft.com/update/release-notes/?p=7&v={version}', '#content_002_wenzi_nb ul'],
  download: 'https://download.glarysoft.com/ausetup.exe',
  install: 'install_nsis'
}
module.exports = data
