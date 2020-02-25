'use strict'

let data = {
  url: 'https://www.glarysoft.com/software-update/download/',
  version: '[class$="download_ver"]',
  changelog: ['https://www.glarysoft.com/update/release-notes/?p=12&v={version}', '#content_002_wenzi_nb ul'],
  download: 'http://download.glarysoft.com/susetup.exe',
  install: 'install_nsis',
  other: {
    pro: {
      commercial: 3,
      url: 'https://www.glarysoft.com/software-update/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=14&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/susetupPro.exe',
      install: 'install_nsis'
    }
  }
}
module.exports = data
