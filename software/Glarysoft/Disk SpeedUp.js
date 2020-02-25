'use strict'

let data = {
  url: 'https://www.glarysoft.com/disk-speedup/download/',
  version: '[class$="download_ver"]',
  changelog: ['https://www.glarysoft.com/update/release-notes/?p=5&v={version}', '#content_002_wenzi_nb ul'],
  download: 'https://download.glarysoft.com/dssetup.exe',
  install: 'install_nsis'
}
module.exports = data
