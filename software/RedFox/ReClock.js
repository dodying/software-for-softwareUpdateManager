'use strict'

let data = {
  url: 'https://www.redfox.bz/en/download.html',
  version: {
    selector: '[href="/download/changes_reclock.txt"]'
  },
  download: {
    plain: 'https://www.redfox.bz/download/SetupReClock.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.nsis(output, iPath)
  }
}
module.exports = data
