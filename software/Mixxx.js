'use strict'

let data = {
  withoutHeader: true,
  url: 'https://mixxx.org/download/',
  preferPath: 'mixxx.exe',
  version: {
    selector: 'h1'
  },
  download: {
    selector: 'a[href$="win64.exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_wix')(output, iPath, null, /^mixxx/, data.preferPath)
  }
}
module.exports = data
