'use strict'

let data = {
  url: 'https://www.glarysoft.com/disk-speedup/',
  version: {
    selector: '.index_pro_ver'
  },
  download: {
    selector: '.downloadspeedup'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
