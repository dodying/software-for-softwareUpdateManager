'use strict'

let data = {
  commercial: 3,
  url: 'http://www.mitec.cz/index.html',
  version: {
    selector: '.doc>tbody>tr+tr td[class$="title"]>a[href="wrr.html"]'
  },
  download: {
    plain: 'http://www.mitec.cz/Downloads/WRR.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
