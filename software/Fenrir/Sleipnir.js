'use strict'

let data = {
  url: 'https://www.fenrir-inc.com/jp/sleipnir/note.html',
  version: {
    selector: '.version>.version_detailed'
  },
  download: {
    plain: 'https://www.fenrir-inc.com/services/download.php?file=sleipnir6.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
