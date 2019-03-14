'use strict'

let data = {
  url: 'http://www.the-sz.com/products/bedford/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    plain: 'http://www.the-sz.com/common/get.php?product=bedford'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
