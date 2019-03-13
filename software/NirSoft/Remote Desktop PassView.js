'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/remote_desktop_password.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/toolsdownload/rdpv.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
