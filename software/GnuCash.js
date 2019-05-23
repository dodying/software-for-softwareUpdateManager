'use strict'

let data = {
  url: 'https://gnucash.org/download.phtml',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href',
    match: /gnucash-(.*?).setup.exe/
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
