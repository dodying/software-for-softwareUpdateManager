'use strict'

let data = {
  url: 'https://gottcode.org/tetzle/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/tetzle/download/?os=windows'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
