'use strict'

let data = {
  url: 'http://www.mitec.cz/index.html',
  version: {
    selector: '.doc>tbody>tr+tr td[class$="title"]>a[href="netmet.html"]'
  },
  download: {
    plain: 'http://www.mitec.cz/Downloads/NetMet.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
