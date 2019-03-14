'use strict'

let data = {
  url: 'https://www.wisecleaner.com/wise-windows-key-finder.html',
  version: {
    selector: '#free-download+p'
  },
  download: {
    plain: 'http://downloads.wisecleaner.com/soft/WiseMSKey.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
