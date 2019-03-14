'use strict'

let data = {
  commercial: 1,
  url: 'https://biblprog.com/en/foxit_reader/download/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    selector: '.download_prog a'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
