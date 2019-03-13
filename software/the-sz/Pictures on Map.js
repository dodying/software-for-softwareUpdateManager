'use strict'

let data = {
  url: 'https://www.the-sz.com/products/pictures_on_map/',
  version: {
    selector: ''
  },
  download: {
    selector: ''
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
