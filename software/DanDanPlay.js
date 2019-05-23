'use strict'

let data = {
  url: 'http://dandanplay.com/',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.ai(output, iPath)
  }
}
module.exports = data
