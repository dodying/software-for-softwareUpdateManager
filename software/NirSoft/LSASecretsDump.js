'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/lsa_secrets_dump.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/toolsdownload/lsasecretsdump-x64.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
