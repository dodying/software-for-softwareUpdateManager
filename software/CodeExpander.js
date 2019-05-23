'use strict'

let data = {
  url: 'https://github.com/oncework/codeexpander/releases/latest',
  version: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
