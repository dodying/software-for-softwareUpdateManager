'use strict'

let data = {
  url: 'https://www.digitalvolcano.co.uk/tcdownloads.html',
  version: {
    selector: 'div+h3+ul>li:has(a[href="tcchangelog.html"])'
  },
  download: {
    plain: 'https://www.digitalvolcano.co.uk/download/TextCrawler_Setup.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath, 'TextCrawler.exe')
  }
}
module.exports = data
