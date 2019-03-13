'use strict'

let data = {
  url: 'https://github.com/wireapp/wire-desktop/releases',
  version: {
    selector: '.release-entry:has(.muted-link.css-truncate[title^="window"])',
    match: /windows\/(.*)/
  },
  download: {
    selector: '.release-entry:has(.muted-link.css-truncate[title^="window"]) a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
