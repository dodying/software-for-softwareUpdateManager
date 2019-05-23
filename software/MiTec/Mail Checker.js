'use strict'

let data = {
  url: 'http://www.mitec.cz/index.html',
  version: {
    selector: '.doc>tbody>tr+tr td[class$="title"]>a[href="mailchecker.html"]'
  },
  download: {
    plain: 'http://www.mitec.cz/Downloads/MAILCHECKER_Instal.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
