'use strict'

let data = {
  commercial: 3,
  url: 'https://www.iresizer.com/download.html',
  version: {
    selector: 'h4.media-heading:contains("Download iResizer")+p'
  },
  download: {
    plain: 'https://www.iresizer.com/download/iResizerSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
