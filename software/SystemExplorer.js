'use strict'

let data = {
  url: 'http://systemexplorer.net/downloading.php',
  version: {
    selector: '.downloading'
  },
  download: {
    plain: 'http://systemexplorer.net/download/SystemExplorerSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
