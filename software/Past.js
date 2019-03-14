'use strict'

let data = {
  url: 'https://folk.uio.no/ohammer/past/',
  version: {
    selector: 'font>b'
  },
  download: {
    selector: 'p>a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
