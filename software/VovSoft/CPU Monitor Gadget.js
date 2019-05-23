'use strict'

let data = {
  url: 'https://vovsoft.com/software/cpu-monitor-gadget/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/cpu-monitor-gadget.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
