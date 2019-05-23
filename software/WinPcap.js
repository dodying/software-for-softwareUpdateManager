'use strict'

let data = {
  url: 'https://www.winpcap.org/install/default.htm',
  version: {
    selector: 'p+h1'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.nsis(output, iPath)
  }
}
module.exports = data
