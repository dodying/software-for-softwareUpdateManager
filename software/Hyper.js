'use strict'

let data = {
  url: 'https://github.com/zeit/hyper/releases',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="full.nupkg"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath, null, 'lib\\net45')
  }
}
module.exports = data