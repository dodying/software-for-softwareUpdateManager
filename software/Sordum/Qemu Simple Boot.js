'use strict'

let data = {
  url: 'https://www.sordum.org/7763/',
  version: {
    selector: '.entry-title'
  },
  download: {
    plain: 'https://www.sordum.org/files/downloads.php?qemu-simple-boot'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
