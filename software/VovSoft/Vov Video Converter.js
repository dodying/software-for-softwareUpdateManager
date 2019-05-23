'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/vov-video-converter/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vov-video-converter.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
