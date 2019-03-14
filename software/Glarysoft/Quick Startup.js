'use strict'

let data = {
  url: 'https://www.glarysoft.com/quick-startup/',
  version: {
    selector: '.index_pro_ver'
  },
  download: {
    selector: '.downloadspeedup'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
