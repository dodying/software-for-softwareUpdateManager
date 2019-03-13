'use strict'

let data = {
  url: 'https://gottcode.org/simsu/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/simsu/download/?os=windows'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
