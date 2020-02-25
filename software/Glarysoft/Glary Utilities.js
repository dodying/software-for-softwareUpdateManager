'use strict'

let data = {
  url: 'https://www.glarysoft.com/glary-utilities/download/',
  version: '.gu_ver_all',
  changelog: ['https://www.glarysoft.com/update/release-notes/?p=1&v={version}', '#content_002_wenzi_nb ul'],
  download: 'https://download.glarysoft.com/gu5setup.exe',
  install: 'install_nsis',
  other: {
    pro: {
      commercial: 3,
      url: 'https://www.glarysoft.com/glary-utilities-pro/download/',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=2&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/gup5setup.exe'
    }
  }
}
module.exports = data
