'use strict'

let data = {
  url: 'https://www.digitalvolcano.co.uk/dcdownloads.html',
  version: {
    selector: 'div+div+div>h3+ul>li:has(a[href="dcchangelog.html"])'
  },
  download: {
    plain: 'https://www.digitalvolcano.co.uk/download/DuplicateCleanerFree4_setup.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
