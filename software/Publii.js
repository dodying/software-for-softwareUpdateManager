'use strict'

let data = {
  url: 'https://getpublii.com/download/',
  version: {
    selector: 'a[href$=".exe"]+small'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_inno')(output, iPath)
  }
}
module.exports = data
