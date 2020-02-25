'use strict'

let data = {
  url: 'https://www.gnupg.org/download/index.html',
  version: '#text-1-1 > table > tbody:nth-child(3) > tr > td:nth-child(2)',
  changelog: ['https://www.gnupg.org/download/release_notes.html', 'h3[id]+div'],
  download: 'a[href$=".exe"][href*="w32"]',
  install: 'install_nsis'
}
module.exports = data
