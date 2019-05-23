'use strict'

let data = {
  url: 'https://www.fenrir-inc.com/jp/fenrirfs/note.html',
  version: {
    selector: 'article>h2>fd-width'
  },
  download: {
    plain: 'https://www.fenrir-inc.com/services/download.php?file=FenrirFS-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
