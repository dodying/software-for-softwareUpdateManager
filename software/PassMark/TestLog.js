'use strict'

let data = {
  commercial: 3,
  url: 'http://www.testlog.com/',
  version: {
    selector: 'p:contains("Version")',
    match: /V(\d.*)/
  },
  download: {
    plain: 'http://www.testlog.com/ftp/testlog.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
