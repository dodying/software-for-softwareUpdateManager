'use strict'

let data = {
  commercial: 2,
  url: 'https://airexplorer.net/en/download.php',
  version: {
    selector: 'h2+br+br+h2'
  },
  download: {
    plain: 'https://airexplorer.net/downloads/AirExplorer-OnlineInstaller.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
