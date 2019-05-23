'use strict'

let data = {
  commercial: 3,
  url: 'https://www.photostitcher.com/download.html',
  version: {
    selector: 'h4.media-heading:contains("Download PhotoStitcher")+p'
  },
  download: {
    plain: 'https://www.photostitcher.com/download/PhotoStitcherSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
