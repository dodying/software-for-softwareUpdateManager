'use strict'

let data = {
  url: 'https://www.folder2list.com/download.aspx',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://www.folder2list.com/downloads/folder2list-setup.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data
