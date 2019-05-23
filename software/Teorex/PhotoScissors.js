'use strict'

let data = {
  commercial: 3,
  url: 'https://www.photoscissors.com/download.html',
  version: {
    selector: 'h4.media-heading:contains("PhotoScissors for Windows")+p'
  },
  download: {
    plain: 'https://www.photoscissors.com/download/PhotoScissorsSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
