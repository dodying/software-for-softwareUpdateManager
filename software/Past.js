'use strict'

let data = {
  url: 'https://folk.uio.no/ohammer/past/',
  version: {
    selector: 'font>b'
  },
  download: {
    selector: 'p>a[href$=".zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
