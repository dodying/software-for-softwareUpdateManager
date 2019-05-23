'use strict'

let data = {
  url: 'https://www.crystalidea.com/speedyfox/release-notes',
  version: {
    selector: '.release>.content-title'
  },
  download: {
    plain: 'https://www.crystalidea.com/downloads/speedyfox.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
