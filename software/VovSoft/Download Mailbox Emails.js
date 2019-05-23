'use strict'

let data = {
  commercial: 3,
  url: 'https://vovsoft.com/software/download-mailbox-emails/',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'http://vovsoft.com/files/download-mailbox-emails.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
