'use strict'

let data = {
  url: 'http://ohsoft.net/eng/vdvd/download.php?cate=1003',
  version: {
    selector: 'a[href^="/eng/product/VirtualDVD"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href^="/eng/product/VirtualDVD"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
