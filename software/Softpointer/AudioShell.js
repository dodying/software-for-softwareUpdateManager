'use strict'

let data = {
  url: 'http://softpointer.com/download.htm',
  version: {
    selector: '[href*="AudioShell"]'
  },
  download: {
    selector: '[href*="AudioShell"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
