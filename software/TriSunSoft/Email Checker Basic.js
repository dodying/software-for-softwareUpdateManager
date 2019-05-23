'use strict'

let data = {
  url: 'https://www.automailsender.com/email-checker/basic.htm',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.automailsender.com/email-checker/email-checker-basic.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.single(output, iPath)
  }
}
module.exports = data
