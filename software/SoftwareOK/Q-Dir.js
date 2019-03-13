'use strict'

let data = {
  url: 'https://www.softwareok.com/?Download=Q-Dir',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://www.softwareok.com/Download/Q-Dir_Portable_x64.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data