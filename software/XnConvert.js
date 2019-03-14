'use strict'

let data = {
  url: 'https://www.xnview.com/en/xnconvert/',
  version: {
    selector: '.muted'
  },
  download: {
    plain: 'https://download.xnview.com/XnConvert-win-x64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
