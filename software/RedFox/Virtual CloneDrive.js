'use strict'

let data = {
  url: 'https://www.redfox.bz/en/download.html',
  version: {
    selector: '[href="/download/changes_vcd.txt"]'
  },
  download: {
    plain: 'https://www.redfox.bz/download/SetupVirtualCloneDrive.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.nsis(output, iPath)
  }
}
module.exports = data
