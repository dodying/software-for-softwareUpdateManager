'use strict'

let data = {
  url: 'https://rammichael.com/downloads/7tt_setup.exe?changelog',
  version: {
    selector: 'b'
  },
  download: {
    plain: 'https://rammichael.com/downloads/7tt_setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, '^inject.dll')
  }
}
module.exports = data
