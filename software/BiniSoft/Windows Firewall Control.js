'use strict'

let data = {
  url: 'https://www.binisoft.org/wfc.php',
  version: '#sideright table tr',
  changelog: {
    url: 'https://www.binisoft.org/changelog.txt',
    match: /^What's new in version [\d.]+/,
    split: true
  },
  download: 'https://www.binisoft.org/download/wfc6setup.exe'
}
module.exports = data
