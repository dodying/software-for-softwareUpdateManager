'use strict'

let data = {
  url: 'https://www.ntwind.com/software/utilities/badapp.html',
  version: {
    selector: '.btn_download'
  },
  download: {
    selector: '.btn_download'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
