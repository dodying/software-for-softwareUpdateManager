'use strict'

let data = {
  url: 'https://www.wisecleaner.com/wise-memory-optimizer.html',
  version: {
    selector: '#free-download+p'
  },
  download: {
    plain: 'http://downloads.wisecleaner.com/soft/WMOSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
