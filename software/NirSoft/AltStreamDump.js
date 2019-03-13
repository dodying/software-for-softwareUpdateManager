'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/alternate_stream_dump.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/altstreamdump.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
