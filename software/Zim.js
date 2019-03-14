'use strict'

let data = {
  url: 'https://zim.glump.net/windows/',
  version: {
    selector: 'h3'
  },
  download: {
    selector: 'a[href*="setup"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
