'use strict'

let data = {
  url: 'https://www.automaticimagedownloader.com/',
  version: {
    selector: 'body > table:nth-child(2) > tbody > tr > td > table:nth-child(21) > tbody > tr:nth-child(3) > td:nth-child(1) > p'
  },
  download: {
    plain: 'https://www.automaticimagedownloader.com/AutomaticImageDownloader.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
