'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/who_is_connected_sniffer.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/whoisconnectedsniffer-x64.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
