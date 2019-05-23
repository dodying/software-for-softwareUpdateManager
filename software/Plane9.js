'use strict'

let data = {
  url: 'http://www.plane9.com/download',
  version: {
    selector: 'h2+p'
  },
  download: {
    selector: '[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
