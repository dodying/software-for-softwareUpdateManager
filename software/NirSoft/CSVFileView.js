'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/csv_file_view.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/csvfileview-x64.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
