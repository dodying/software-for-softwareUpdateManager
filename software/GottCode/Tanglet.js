'use strict'

let data = {
  url: 'https://gottcode.org/tanglet/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/tanglet/download/?os=windows'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
