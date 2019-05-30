'use strict'

let data = {
  url: 'http://softpointer.com/download.htm',
  version: {
    selector: '[href*="TagRename"]'
  },
  download: {
    selector: '[href*="TagRename"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
