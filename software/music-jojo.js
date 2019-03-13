'use strict'

let data = {
  url: 'https://github.com/liuzhuoling2011/music-jojo/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: '[href$="x64.exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
