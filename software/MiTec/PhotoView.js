'use strict'

let data = {
  url: 'http://www.mitec.cz/index.html',
  version: {
    selector: '.doc>tbody>tr+tr td[class$="title"]>a[href="photo.html"]'
  },
  download: {
    plain: 'http://www.mitec.cz/Downloads/PhotoView.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
