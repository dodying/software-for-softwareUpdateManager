'use strict'

let data = {
  url: 'https://github.com/Superfly-Inc/ShowKeyPlus/releases/latest',
  version: {
    selector: '.release-header a'
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_zipped_single', 'ShowKeyPlus_x64.zip')
  }
}
module.exports = data
