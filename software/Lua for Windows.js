'use strict'

let data = {
  url: 'https://github.com/rjpcomputing/luaforwindows/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(\d[\d.-]+)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
