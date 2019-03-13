'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/mozilla_cache_viewer.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/mozillacacheview.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
