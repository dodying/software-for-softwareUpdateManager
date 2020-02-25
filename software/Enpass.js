'use strict'

let data = {
  commercial: 2,
  url: 'https://www.enpass.io/downloads/',
  version: ['[href$=".exe"]', 'href'],
  changelog: {
    url: 'https://www.enpass.io/release-notes/windows-pc/',
    selector: '.entry-content',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: '[href$=".exe"]',
  install: ['install_wix', null, 'Enpass.msi', 'Enpass.exe']
}
module.exports = data
