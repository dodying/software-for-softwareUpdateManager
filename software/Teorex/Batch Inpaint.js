'use strict'

let data = {
  commercial: 3,
  url: 'https://www.theinpaint.com/download.html',
  version: {
    selector: 'h4.media-heading:contains("Download Batch Inpaint")+p'
  },
  download: {
    plain: 'https://www.theinpaint.com/download/BatchInpaintSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
