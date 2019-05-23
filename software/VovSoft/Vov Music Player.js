'use strict'

let data = {
  url: 'https://vovsoft.com/software/vov-music-player/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vov-music-player.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
