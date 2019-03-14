'use strict'

let data = {
  url: 'https://www.conyedit.com/download',
  version: {
    selector: 'h3+div>h4'
  },
  download: {
    selector: 'a[href$="win_x64_Setup.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
