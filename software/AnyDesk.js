'use strict'

let data = {
  commercial: 1,
  url: 'https://anydesk.com/platforms/windows',
  version: {
    selector: '#download-info'
  },
  download: {
    plain: 'http://download.anydesk.com/AnyDesk.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
