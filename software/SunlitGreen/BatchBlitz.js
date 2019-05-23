'use strict'

let data = {
  url: 'https://www.sunlitgreen.com/downloads.html',
  version: {
    selector: '.gradbox:has([href="batchblitz.html"]) b+p'
  },
  download: {
    plain: 'https://www.sunlitgreen.com/downloads/SGBB_Portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'BatchBlitz.exe')
  }
}
module.exports = data
