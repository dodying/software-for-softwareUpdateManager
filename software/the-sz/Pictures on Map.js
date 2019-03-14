'use strict'

let data = {
  url: 'https://www.the-sz.com/products/pictures_on_map/',
  version: {
    selector: ''
  },
  download: {
    selector: ''
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
