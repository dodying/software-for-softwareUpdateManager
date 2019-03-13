'use strict'

let data = {
  url: 'http://www.the-sz.com/products/portscan/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    plain: 'http://www.the-sz.com/common/get.php?product=portscan'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
