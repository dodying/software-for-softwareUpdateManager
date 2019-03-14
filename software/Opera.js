'use strict'

let data = {
  url: 'https://biblprog.com/en/opera/download/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    selector: '.download_prog a[href$="x64.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
