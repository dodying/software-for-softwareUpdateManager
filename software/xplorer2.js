'use strict'

let data = {
  commercial: 2,
  url: 'https://www.zabkat.com/index.htm',
  version: 'h1+p+p',
  changelog: {
    url: 'https://www.zabkat.com/changes.txt',
    match: /^\[[\d.]+/,
    split: true
  },
  download: 'https://www.zabkat.com/download.php?p=3',
  install: 'install_nsis',
  other: {
    ultimate: {
      download: 'https://www.zabkat.com/download.php?p=3&u=1'
    }
  }
}
module.exports = data
