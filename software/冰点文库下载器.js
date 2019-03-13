'use strict'

let data = {
  url: 'https://www.crsky.com/soft/25711.html',
  version: {
    selector: '[itemprop="version"]',
    match: /(.*)/
  },
  download: {
    selector: 'a[href$=".zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
