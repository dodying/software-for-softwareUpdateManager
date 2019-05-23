'use strict'

let data = {
  url: 'http://www.chameleon-managers.com/downloads.php',
  version: {
    selector: '[id="wrap-main"]:has(.shutdown-logo) td[rowspan="3"]+td'
  },
  download: {
    plain: 'http://www.chameleon-managers.com/files/cshutdown_freeware.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
