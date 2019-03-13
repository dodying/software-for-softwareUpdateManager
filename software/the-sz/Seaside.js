'use strict'

let data = {
  url: 'http://www.the-sz.com/products/seaside/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    plain: 'http://www.the-sz.com/common/get.php?product=seaside'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_inno_single')
  }
}
module.exports = data
