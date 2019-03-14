'use strict'

let data = {
  url: 'https://github.com/zzzprojects/findandreplace/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /V(.*)/
  },
  download: {
    plain: 'http://findandreplace.io/downloads/fnr.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
