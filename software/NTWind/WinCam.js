'use strict'

let data = {
  commercial: 3,
  url: 'https://www.ntwind.com/software/wincam.html',
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
