'use strict'

let data = {
  url: 'https://gottcode.org/kapow/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/kapow/download/?os=windows'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
