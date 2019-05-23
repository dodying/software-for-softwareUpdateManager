'use strict'

let data = {
  url: 'https://wiki.actiona.tools/doku.php?id=:en:start',
  version: {
    selector: 'p:has([href="/doku.php?id=en:changelog"])'
  },
  download: {
    selector: 'a[href$="windows-64bit.7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
