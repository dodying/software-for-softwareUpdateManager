'use strict'

let data = {
  commercial: 3,
  url: 'https://www.trisunsoft.com/tail-for-windows.htm',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/products/tail-for-windows.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
