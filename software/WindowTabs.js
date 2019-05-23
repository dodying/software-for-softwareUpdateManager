'use strict'

let data = {
  url: 'http://windowtabs.com/download/',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'http://windowtabs.com/WindowTabs.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
