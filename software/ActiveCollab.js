'use strict'

let data = {
  url: 'https://activecollab.com/help/release-notes/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://accounts.activecollab.com/api/v2/desktop-apps/activecollab/releases/win32/download'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
