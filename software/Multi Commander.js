'use strict'

let data = {
  url: 'http://www.multicommander.com/downloads',
  version: {
    selector: 'a[href$=".exe"][href*="x64"]',
    match: /v(.*?\(Build .*?\))/
  },
  download: {
    selector: 'a[href$=".exe"][href*="x64"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
