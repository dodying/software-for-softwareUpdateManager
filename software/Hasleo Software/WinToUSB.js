'use strict'

let data = {
  url: 'https://www.easyuefi.com/wintousb/',
  version: {
    selector: '.span_title_w'
  },
  download: {
    plain: 'https://www.easyuefi.com/wintousb/downloads/WinToUSB_Free.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
