'use strict'

let data = {
  // url: 'http://blog.bahraniapps.com/gifcam/',
  // version: {
  //   selector: 'a[title="GifCam.zip"]'
  // },
  // download: {
  //   plain: 'http://www.bahraniapps.com/apps/gifcam/gifcam.php'
  // },
  url: 'https://en.softonic.com/download/gifcam/windows/post-download',
  version: {
    selector: '[data-auto="app-info"]>dd',
    match: /(.*)/
  },
  download: {
    selector: '[name="trackingConfig[download][internalDownloadUrl]"]',
    attr: 'content'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
