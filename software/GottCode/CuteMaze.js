'use strict'

let data = {
  url: 'https://gottcode.org/cutemaze/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/cutemaze/download/?os=windows'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
