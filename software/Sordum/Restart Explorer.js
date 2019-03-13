'use strict'

let data = {
  url: 'https://www.sordum.org/9192/',
  version: {
    selector: '.entry-title'
  },
  download: {
    plain: 'https://www.sordum.org/files/downloads.php?st-restart-explorer'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
