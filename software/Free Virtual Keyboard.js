'use strict'

let data = {
  url: 'http://freevirtualkeyboard.com/',
  version: {
    selector: '.lnk+p'
  },
  download: {
    plain: 'http://freevirtualkeyboard.com/FreeVK.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
