'use strict'

let data = {
  url: 'http://www.the-sz.com/products/doro/',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    plain: 'http://www.the-sz.com/common/get.php?product=doro'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno_with_type', null, null, null, { '{code_GetDirectory}': null })
  }
}
module.exports = data
