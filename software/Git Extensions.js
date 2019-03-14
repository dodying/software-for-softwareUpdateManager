'use strict'

let data = {
  url: 'https://github.com/gitextensions/gitextensions/releases',
  version: {
    selector: '.release-header a',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href*="Portable"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
