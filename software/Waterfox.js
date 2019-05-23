'use strict'

let data = {
  url: 'https://www.waterfox.net/releases/',
  version: {
    selector: '[href$=".exe"]'
  },
  download: {
    selector: '[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'core')
  }
}
module.exports = data
