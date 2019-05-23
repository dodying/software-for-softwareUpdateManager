'use strict'

let data = {
  url: 'http://www.ivanyu.ca/windock/',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href',
    match: /WinDock_Setup_(.*?).exe/
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
