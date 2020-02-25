'use strict'

let data = {
  url: 'https://www.binisoft.org/usbc',
  version: '#sideright table tr',
  changelog: {
    url: 'https://www.binisoft.org/changes.txt',
    match: /^What's new in version [\d.]+/,
    split: true
  },
  download: 'https://www.binisoft.org/download/usbc4setup.exe'
}
module.exports = data
