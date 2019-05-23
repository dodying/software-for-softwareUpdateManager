'use strict'

let data = {
  commercial: 3,
  url: 'https://www.binarymark.com/products/free-regex-editor',
  version: {
    selector: '[title^="Latest"]',
    attr: 'title'
  },
  download: {
    plain: 'https://www.binarymark.com/download/1001'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
