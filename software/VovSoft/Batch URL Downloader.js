'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/batch-url-downloader/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/batch-url-downloader.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
