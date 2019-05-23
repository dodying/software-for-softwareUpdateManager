'use strict'

let data = {
  commercial: 3,
  url: 'https://www.easyuefi.com/bitlocker-anywhere/bitlocker-anywhere-home.html',
  version: {
    selector: '.span_title_w'
  },
  download: {
    plain: 'https://www.easyuefi.com/bitlocker-anywhere/downloads/BitLockerAnywhere_Trial.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
