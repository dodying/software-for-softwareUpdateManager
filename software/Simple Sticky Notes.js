'use strict'

let data = {
  url: 'https://www.simplestickynotes.com/download/',
  version: {
    selector: '.dwn-info',
    match: /Version: (.*)/
  },
  download: {
    plain: 'https://www.simplestickynotes.com/setup/Setup_SimpleStickyNotes.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
