'use strict'

let data = {
  url: 'http://www.mitec.cz/index.html',
  version: {
    selector: '.doc>tbody>tr+tr td[class$="title"]>a[href="dirlist.html"]'
  },
  download: {
    plain: 'http://www.mitec.cz/Downloads/DirList.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
