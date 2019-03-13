'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/dot_net_resources_extract.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/dotnetresourcesextract.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
