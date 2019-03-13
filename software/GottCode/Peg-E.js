'use strict'

let data = {
  url: 'https://gottcode.org/peg-e/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/peg-e/download/?os=windows'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
