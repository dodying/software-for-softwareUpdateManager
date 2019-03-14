'use strict'

let data = {
  commercial: 1,
  url: 'http://www.kls-soft.com/wscc/downloads.php',
  version: {
    selector: '.graytext'
  },
  download: {
    plain: 'http://www.kls-soft.com/downloads/wscc_x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
