'use strict'

let data = {
  url: 'http://vaemendis.net/ubooquity/static2/download',
  version: {
    selector: '#static-2 > p:nth-child(8)'
  },
  download: {
    selector: '#static-2 > p:nth-child(7) > a'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
