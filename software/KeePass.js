'use strict'

let data = {
  withoutHeader: true,
  url: 'https://keepass.info/download.html',
  version: {
    selector: 'body > table > tbody > tr:nth-child(1) > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > small > b'
  },
  download: {
    selector: 'a[href$=".zip/download"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
