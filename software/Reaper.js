'use strict'

let data = {
  commercial: 3,
  url: 'https://www.reaper.fm/download.php',
  version: {
    selector: '.downloadinfo'
  },
  download: {
    selector: '[href$="x64-install.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
