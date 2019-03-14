'use strict'

let data = {
  url: 'https://biblprog.com/en/audacity/download/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    selector: '.download_prog a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
