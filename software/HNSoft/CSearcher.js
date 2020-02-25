'use strict'

let data = {
  url: 'https://www.hnsoft.pt/Downloads_CSearcher',
  version: ['[href$=".zip"]', 'href'],
  changelog: {
    selector: '#body',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: '[href$=".zip"]',
  install: 'install'
}
module.exports = data
