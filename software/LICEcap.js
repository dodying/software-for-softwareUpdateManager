'use strict'

let data = {
  url: 'https://www.cockos.com/licecap/',
  version: {
    selector: 'a[href$="install.exe"]'
  },
  download: {
    selector: 'a[href$="install.exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath, 'licecap.exe')
  }
}
module.exports = data
