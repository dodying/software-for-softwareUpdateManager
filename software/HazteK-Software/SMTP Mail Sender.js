'use strict'

let data = {
  url: 'https://updates.haztek-software.com/changes.php?appid=4',
  version: {
    selector: 'h1+div+div'
  },
  download: {
    plain: 'https://www.haztek-software.com/files/SMTPMailSender.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
