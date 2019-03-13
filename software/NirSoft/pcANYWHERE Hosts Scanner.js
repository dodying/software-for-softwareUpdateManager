'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/pcanyscan.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/pcanyscan.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath, 'pcanyscan.exe')
  }
}
module.exports = data
