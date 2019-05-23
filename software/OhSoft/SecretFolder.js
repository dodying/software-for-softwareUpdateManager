'use strict'

let data = {
  url: 'http://ohsoft.net/eng/sfolder/download.php?cate=1005',
  version: {
    selector: 'a[href^="/eng/product/SecretFolder"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href^="/eng/product/SecretFolder"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
