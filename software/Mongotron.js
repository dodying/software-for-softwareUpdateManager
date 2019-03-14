'use strict'

let data = {
  url: 'https://github.com/officert/mongotron/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="win32-x64.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
