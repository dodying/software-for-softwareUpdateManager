'use strict'

let data = {
  url: 'https://www.fenrir-inc.com/jp/pictbear/',
  version: {
    selector: 'a.dl'
  },
  download: {
    plain: 'https://www.fenrir-inc.com/services/download.php?file=pb.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
