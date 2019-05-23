'use strict'

let data = {
  url: 'http://www.xrayz.co.uk/download/clipcache',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.xrayz.co.uk/download/ccsetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
