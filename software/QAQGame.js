'use strict'

let data = {
  url: 'https://www.qaqgame.com/',
  version: {
    selector: 'a[href="/download"]+p'
  },
  download: {
    plain: 'https://www.qaqgame.com/download'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
