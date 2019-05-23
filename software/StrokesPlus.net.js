'use strict'

let data = {
  url: 'https://www.strokesplus.net/Downloads',
  version: {
    selector: 'h4>b'
  },
  download: {
    plain: 'https://www.strokesplus.net/download/latest/portable'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, 'StrokesPlus.net.bin')
  }
}
module.exports = data
