'use strict'

let data = {
  url: 'https://www.sunlitgreen.com/downloads.html',
  version: {
    selector: '.gradbox:has([href="free-batch-photo-resizer.html"]) b+p'
  },
  download: {
    plain: 'https://www.sunlitgreen.com/downloads/SGPR_Portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
