'use strict'

let data = {
  url: 'https://www.easyuefi.com/data-recovery/free-data-recovery.html',
  version: {
    selector: '.span_title_w'
  },
  download: {
    plain: 'https://www.easyuefi.com/data-recovery/downloads/hdr_free.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
