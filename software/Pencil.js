'use strict'

let data = {
  url: 'http://pencil.evolus.vn/Downloads.html',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data