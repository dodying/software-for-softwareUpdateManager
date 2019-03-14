'use strict'

let data = {
  url: 'https://biblprog.com/en/steam/download/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    selector: '.download_prog a'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
