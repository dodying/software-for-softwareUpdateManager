'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/vov-syslog-server/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/vov-syslog-server.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
