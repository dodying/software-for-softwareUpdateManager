'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/web_cache_image_info.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/webcacheimageinfo.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
