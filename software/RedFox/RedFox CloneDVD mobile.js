'use strict'

let data = {
  commercial: 3,
  url: 'https://www.redfox.bz/en/download.html',
  version: {
    selector: '[href="/download/changes_clonedvdmobile.txt"]'
  },
  download: {
    plain: 'https://www.redfox.bz/download/SetupCloneDVDmobile.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.nsis(output, iPath)
  }
}
module.exports = data
