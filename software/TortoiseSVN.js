'use strict'

let data = {
  withoutHeader: true,
  url: 'https://tortoisesvn.net/downloads.html',
  version: '.title +div>h1',
  changelog: {
    url: 'https://tortoisesvn.net/Changelog.txt',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'a[href*="x64"][href$=".msi/"]',
  install: ['install_msi', null, 'bin/TortoiseBlame.exe'],
  other: {
    nightly: {
      url: 'https://nightlybuilds.tortoisesvn.net/latest/x64/full/',
      version: '[href$=".msi"][href^="TortoiseSVN"]',
      download: '[href$=".msi"][href^="TortoiseSVN"]'
    }
  }
}
module.exports = data
