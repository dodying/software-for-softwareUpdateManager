'use strict'

let data = {
  url: 'http://www.bradsoft.com/',
  version: {
    selector: 'h1'
  },
  download: {
    selector: '[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
