'use strict'

let data = {
  commercial: 3,
  url: 'https://www.systemax.jp/en/sai/',
  version: ['[href$="ful-en.exe"]', 'href', /sai-(.*?)-ful-en.exe/],
  changelog: {
    url: 'https://www.systemax.jp/en/sai/history_v1.txt',
    match: /Ver\.[\d.]+/,
    split: true
  },
  download: '[href$="ful-en.exe"]',
  install: 'install',
  other: {
    'v2': {
      url: 'https://www.systemax.jp/en/sai/devdept.html',
      version: ['[href$="64bit-en.zip"]', 'href', /sai2-(.*?)-64bit-en.zip/],
      changelog: {
        url: 'https://www.systemax.jp/en/sai/history_v2.txt',
        match: /^[\d-]+/,
        split: true
      },
      download: '[href$="64bit-en.zip"]'
    }
  }
}
module.exports = data
