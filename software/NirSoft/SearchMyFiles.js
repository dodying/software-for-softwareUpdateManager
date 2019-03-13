'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/search_my_files.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/searchmyfiles-x64.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
