'use strict'

let data = {
  url: 'https://github.com/junegunn/fzf-bin/releases/latest',
  version: {
    selector: '.release-header a'
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="amd64.zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
