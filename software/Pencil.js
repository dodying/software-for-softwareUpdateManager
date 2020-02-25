'use strict'

let data = {
  url: 'http://pencil.evolus.vn/Downloads.html',
  version: ['a[href$=".exe"]', 'href'],
  changelog: {
    url: '[href*="RELEASE/RELEASE-NOTE"]',
    selector: '.markdown-body'
  },
  download: 'a[href$=".exe"]',
  install: ['install_zipped', 'install', 'app-64.7z'],
  other: {
    nightly: {
      url: 'https://pencil.evolus.vn/Nightly.html',
      version: '[href^="/dl/"][href$="x86_64.exe"]',
      download: '[href^="/dl/"][href$="x86_64.exe"]'
    }
  }
}
module.exports = data
