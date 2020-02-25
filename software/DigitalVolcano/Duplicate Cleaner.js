'use strict'

let data = {
  url: 'https://www.digitalvolcano.co.uk/dcdownloads.html',
  version: 'div+div+div>h3+ul>li:has(a[href="dcchangelog.html"])',
  changelog: ['https://www.digitalvolcano.co.uk/dcchangelog.html', '.content-wrap>div>div:nth-child(2)>ul'],
  download: 'https://www.digitalvolcano.co.uk/download/DuplicateCleanerFree4_setup.exe',
  install: 'install_nsis',
  other: {
    pro: {
      commercial: 3,
      version: 'li:has(a[href="dcchangelog.html"])',
      download: 'https://www.digitalvolcano.co.uk/download/DuplicateCleanerPro4_setup.exe'
    }
  }
}
module.exports = data
