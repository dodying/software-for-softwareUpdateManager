'use strict'

let data = {
  url: 'https://github.com/x64dbg/x64dbg/releases/latest',
  version: {
    selector: '.release-header a',
    match: /(\d+[\d-_]+)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'release\\')
  }
}
module.exports = data
