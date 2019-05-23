'use strict'

let data = {
  url: 'https://www.jam-software.com/treesize_free/',
  version: {
    selector: '.uppercase'
  },
  download: {
    plain: 'https://www.jam-software.com/treesize_free/TreeSizeFree-Portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
