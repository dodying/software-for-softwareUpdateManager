'use strict'

let data = {
  url: 'http://www.alexnolan.net/software/window_seizer.htm',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'http://www.alexnolan.net/software/WinSeizer.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
