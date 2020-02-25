'use strict'

let data = {
  url: 'https://www.contaware.com/downloads/latest/FreeVimager/english/',
  version: ['a[href^="FreeVimager"][href$="Setup.exe"]', 'href', /FreeVimager-(.*?)-Setup.exe/],
  changelog: {
    url: 'https://www.contaware.com/downloads/HistoryFreeVimager.txt',
    split: true
  },
  download: 'a[href^="FreeVimager"][href$="Setup.exe"]',
  install: 'install_nsis',
  other: {
    beta: {
      url: 'https://www.contaware.com/downloads/beta/'
    }
  }
}
module.exports = data
