'use strict'

let data = {
  withoutHeader: true,
  url: 'https://www.videolan.org/vlc/download-windows.html',
  version: {
    selector: '#downloadVersion'
  },
  download: {
    selector: 'a[href$="win32.7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
