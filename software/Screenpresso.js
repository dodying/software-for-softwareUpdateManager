'use strict'

let data = {
  commercial: 2,
  url: 'https://www.screenpresso.com/download/',
  version: '.release>h1',
  changelog: {
    url: '[href^="/releases/"]',
    selector: '.main>div>h4+div'
  },
  download: 'https://cdn.screenpresso.com/binaries/v1/Screenpresso.exe',
  install: 'install_single',
  other: {
    Enterprise: {
      download: 'https://www.screenpresso.com/binaries/v1/ScreenpressoSetup.msi',
      install: ['install_msi', null, 'Screenpresso.exe']
    }
  }
}
module.exports = data
