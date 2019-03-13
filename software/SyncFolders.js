'use strict'

let data = {
  url: 'http://www.syncfolders.elementfx.com/download.html',
  version: {
    selector: '#content>h1+h2'
  },
  download: {
    plain: 'http://www.syncfolders.elementfx.com/setupfile/SyncFoldersSetup.zip'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install_inno')
  }
}
module.exports = data
