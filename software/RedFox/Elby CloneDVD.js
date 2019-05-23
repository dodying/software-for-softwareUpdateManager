'use strict'

let data = {
  commercial: 3,
  url: 'https://www.redfox.bz/en/download.html',
  version: {
    selector: '[href="/download/changes_clonedvd.txt"]'
  },
  download: {
    plain: 'https://www.redfox.bz/download/SetupCloneDVD.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.nsis(output, iPath)
  }
}
module.exports = data
