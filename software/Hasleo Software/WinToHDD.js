'use strict'

let data = {
  url: 'https://www.easyuefi.com/wintohdd/index.html',
  version: {
    selector: '.span_title_w'
  },
  download: {
    plain: 'http://www.easyuefi.com/wintohdd/downloads/WinToHDD_Free.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
