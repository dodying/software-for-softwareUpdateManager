'use strict'

let data = {
  commercial: 3,
  url: 'https://www.digitalvolcano.co.uk/dcdownloads.html',
  version: {
    selector: 'li:has(a[href="dcchangelog.html"])'
  },
  download: {
    plain: 'https://www.digitalvolcano.co.uk/download/DuplicateCleanerPro4_setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
