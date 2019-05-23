'use strict'

let data = {
  url: 'http://www.poweriso.com/download.php',
  version: {
    selector: 'body > div:nth-child(1) > center:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1) > center:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > p:nth-child(1) > b:nth-child(1)'
  },
  download: {
    selector: '.download_link[href$="x64.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
