'use strict'

let data = {
  url: 'https://apk.ghpym.com/downloads.html',
  version: {
    selector: '.button-info'
  },
  download: {
    selector: 'a.button[href$=".7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
