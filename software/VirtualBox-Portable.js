'use strict'

let data = {
  url: 'http://www.vbox.me/changelog/',
  version: {
    selector: 'h2'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
