'use strict'

let data = {
  commercial: 3,
  url: 'https://www.automailsender.com/auto-mail-sender-standard-edition.htm',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.automailsender.com/auto-mail-sender.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
