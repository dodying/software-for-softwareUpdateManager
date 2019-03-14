'use strict'

let data = {
  url: 'https://github.com/Foundry376/Mailspring/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="full.nupkg"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'lib\\net45')
  }
}
module.exports = data
