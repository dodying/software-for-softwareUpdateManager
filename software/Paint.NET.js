'use strict'

let data = {
  url: 'https://www.dotpdn.com/downloads/pdn.html',
  version: {
    selector: 'a[href$=".zip"]+b'
  },
  download: {
    selector: 'a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
