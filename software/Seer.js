'use strict'

let data = {
  url: 'http://www.1218.io/seer/release-note.html',
  version: {
    selector: 'h3'
  },
  download: {
    plain: 'http://www.1218.io/seer/dl'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
