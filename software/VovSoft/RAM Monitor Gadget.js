'use strict'

let data = {
  url: 'https://vovsoft.com/software/ram-monitor-gadget/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/ram-monitor-gadget.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
