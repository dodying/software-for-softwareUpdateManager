'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/nircmd.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/nircmd-x64.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath, 'nircmd.exe')
  }
}
module.exports = data
