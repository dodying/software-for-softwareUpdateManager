'use strict'

let data = {
  url: 'https://gottcode.org/connectagram/',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gottcode.org/connectagram/download/?os=windows'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data