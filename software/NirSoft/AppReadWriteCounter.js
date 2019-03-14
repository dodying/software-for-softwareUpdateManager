'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/app_read_write_counter.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/appreadwritecounter-x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
