'use strict'

let data = {
  url: 'http://cajviewer.cnki.net/download.html',
  version: {
    selector: '.downlbtn',
    attr: 'href'
  },
  download: {
    selector: '.downlbtn'
  },
  preferPath: 'CAJVieweru.exe',
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_msi', '.msi', null, data.preferPath)
  }
}
module.exports = data
