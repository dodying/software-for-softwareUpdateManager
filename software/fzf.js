'use strict'

let data = {
  url: 'https://github.com/junegunn/fzf-bin/releases/latest',
  version: {
    selector: '.release-header a'
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="amd64.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
