'use strict'

let data = {
  url: 'http://www.cccp-project.net/download.php?type=cccp64',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href',
    match: /64bit-(.*?).exe$/
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
