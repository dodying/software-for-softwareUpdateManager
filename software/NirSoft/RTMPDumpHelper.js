'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/rtmp_dump_helper.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/rtmpdumphelper-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
