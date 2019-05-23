'use strict'

let data = {
  url: 'https://www.osforensics.com/tools/write-usb-images.html',
  version: {
    selector: '.feature:contains("Download")+p'
  },
  download: {
    plain: 'https://www.osforensics.com/downloads/imageusb.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
