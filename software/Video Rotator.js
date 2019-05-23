'use strict'

let data = {
  commercial: 3,
  url: 'https://www.videorotator.com/download.html',
  version: {
    selector: 'h1+p'
  },
  download: {
    plain: 'https://www.videorotator.com/down/videorotator.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
