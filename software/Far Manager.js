'use strict'

let data = {
  url: 'https://farmanager.com/download.php?l=en',
  version: {
    selector: 'li>b'
  },
  download: {
    selector: 'a.body_link[href$=".7z"][href*="x64"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
