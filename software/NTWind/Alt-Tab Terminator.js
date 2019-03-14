'use strict'

let data = {
  url: 'https://www.ntwind.com/software/alttabter.html',
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
