'use strict'

let data = {
  url: 'http://www.the-sz.com/products/flash/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    plain: 'http://www.the-sz.com/common/get.php?product=flash'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_inno_single')
  }
}
module.exports = data
