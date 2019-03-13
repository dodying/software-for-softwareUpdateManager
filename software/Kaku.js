'use strict'

let data = {
  url: 'https://github.com/EragonJ/Kaku/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="Setup-2.0.1.exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
