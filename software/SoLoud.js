'use strict'

let data = {
  url: 'http://sol.gfxile.net/soloud/downloads.html',
  version: {
    selector: 'a[href$=".zip"]'
  },
  download: {
    selector: 'a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
