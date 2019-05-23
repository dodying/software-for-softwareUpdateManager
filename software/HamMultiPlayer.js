'use strict'

let data = {
  url: 'http://www.hammultiplayer.org/',
  version: {
    selector: 'a[href$=".exe"]'
  },
  download: {
    plain: 'http://www.hammultiplayer.org/Softs/HamMultiPlayer.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
