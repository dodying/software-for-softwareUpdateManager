'use strict'

let data = {
  withoutHeader: true,
  url: 'https://github.com/x64dbg/x64dbg/releases/latest',
  version: {
    selector: '.release-header a',
    match: /(\d+[\d-_]+)/
  },
  download: {
    plain: 'https://sourceforge.net/projects/x64dbg/files/latest/download'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'release\\')
  }
}
module.exports = data
