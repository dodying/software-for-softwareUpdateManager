'use strict'

let data = {
  url: 'https://updates.haztek-software.com/changes.php?appid=7',
  version: {
    selector: 'h1+div+div'
  },
  download: {
    plain: 'https://www.haztek-software.com/files/HFM2.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
