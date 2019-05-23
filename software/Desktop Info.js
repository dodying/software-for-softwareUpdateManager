'use strict'

let data = {
  url: 'https://www.glenn.delahoy.com/desktopinfo/',
  version: {
    selector: '.featured-artist > p:nth-child(5)',
    match: /Version: (.*)/
  },
  download: {
    selector: '[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
