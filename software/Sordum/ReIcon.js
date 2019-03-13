'use strict'

let data = {
  url: 'https://www.sordum.org/8366/',
  version: {
    selector: '.entry-title'
  },
  download: {
    plain: 'https://www.sordum.org/files/downloads.php?restore-desktop-icon-layouts'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data