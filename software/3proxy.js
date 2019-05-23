'use strict'

let data = {
  url: 'https://github.com/z3APA3A/3proxy/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="-x64.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    lite: {
      download: {
        selector: 'a[href*="/releases/download/"][href$="-lite.zip"]'
      }
    }
  }
}
module.exports = data
