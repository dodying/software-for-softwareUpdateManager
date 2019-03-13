'use strict'

let data = {
  url: 'http://app.rrysapp.com/',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_inno')(output, iPath)
  }
}
module.exports = data
