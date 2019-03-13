'use strict'

let data = {
  url: 'http://www.the-sz.com/products/york/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    plain: 'http://www.the-sz.com/common/get.php?product=york'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped')(output, iPath, 'install_inno')
  }
}
module.exports = data
