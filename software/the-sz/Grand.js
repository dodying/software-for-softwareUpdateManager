'use strict'

let data = {
  url: 'http://www.the-sz.com/products/grand/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    plain: 'http://www.the-sz.com/common/get.php?product=grand'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
