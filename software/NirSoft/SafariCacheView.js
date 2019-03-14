'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/safari_cache_view.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/safaricacheview.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
