'use strict'

let data = {
  url: 'https://www.kaplansoft.com/download.html',
  version: {
    selector: '.pricerow:contains("TekRecorder")>td[align="center"]'
  },
  download: {
    plain: 'https://www.kaplansoft.com/tekrecorder/release/TekRecorder.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
