'use strict'

let data = {
  commercial: 3,
  url: 'https://www.ntwind.com/software/windowspace.html',
  version: {
    selector: '.btn_download'
  },
  download: {
    selector: '.btn_download'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
