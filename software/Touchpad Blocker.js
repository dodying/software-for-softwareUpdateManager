'use strict'

let data = {
  url: 'https://touchpad-blocker.com',
  version: {
    selector: '#quick dd'
  },
  download: {
    plain: 'https://touchpad-blocker.com/files/touchpad-blocker.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'TouchpadBlocker')
  }
}
module.exports = data
