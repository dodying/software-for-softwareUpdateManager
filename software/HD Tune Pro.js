'use strict'

let data = {
  commercial: 2,
  url: 'http://www.hdtune.com/download.html',
  version: {
    selector: 'h3+table tbody>tr:nth-child(2)>td:nth-child(2)'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
