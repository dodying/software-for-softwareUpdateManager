'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/mailpv.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/toolsdownload/mailpv.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data