'use strict'

let data = {
  url: 'https://www.nirsoft.net/dot_net_tools/gac_viewer.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/dot_net_tools/gacview.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
