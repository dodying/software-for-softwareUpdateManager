'use strict'

let data = {
  url: 'http://www.chameleon-managers.com/downloads.php',
  version: {
    selector: '[id="wrap-main"]:has(.folder-logo) td[rowspan="3"]+td'
  },
  download: {
    plain: 'http://www.chameleon-managers.com/files/cfolder_freeware.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
