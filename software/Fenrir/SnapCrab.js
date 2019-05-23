'use strict'

let data = {
  url: 'https://www.fenrir-inc.com/jp/snapcrab/note.html',
  version: {
    selector: '.section>h2'
  },
  download: {
    plain: 'https://www.fenrir-inc.com/services/download.php?file=SnapCrab-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
