'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/convert-video-to-audio/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/convert-video-to-audio.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
