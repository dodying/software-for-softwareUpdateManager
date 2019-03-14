'use strict'

let data = {
  commercial: 3,
  url: 'https://www.digitalvolcano.co.uk/tcdownloads.html',
  version: {
    selector: 'li:has(a[href="tcchangelog.html"])'
  },
  download: {
    plain: 'https://www.digitalvolcano.co.uk/download/TextCrawlerPro_setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    crack: {
      commercial: 0,
      install: function (output, iPath, fns) {
        return fns.install(output, iPath, 'IsLicense50.dll')
      }
    }
  }
}
module.exports = data
