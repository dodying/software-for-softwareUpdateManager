'use strict'

let data = {
  url: 'https://www.qbittorrent.org/download.php',
  version: {
    selector: '.flexbox strong'
  },
  download: {
    selector: '.flexbox a[href$="x64_setup.exe/download"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
