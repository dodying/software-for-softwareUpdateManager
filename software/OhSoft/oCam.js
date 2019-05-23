'use strict'

let data = {
  url: 'http://ohsoft.net/eng/ocam/download.php?cate=1002',
  version: {
    selector: 'a[href^="/eng/product/oCam"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href^="/eng/product/oCam"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
