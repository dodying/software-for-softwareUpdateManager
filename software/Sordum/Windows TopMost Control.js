'use strict'

let data = {
  url: 'https://www.sordum.org/9182/',
  version: {
    selector: '.entry-title'
  },
  download: {
    plain: 'https://www.sordum.org/files/downloads.php?st-topmost'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
