'use strict'

let data = {
  url: 'https://www.wisecleaner.com/wise-data-recovery.html',
  version: {
    selector: '#free-download+p'
  },
  download: {
    plain: 'http://downloads.wisecleaner.com/soft/WDRSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
