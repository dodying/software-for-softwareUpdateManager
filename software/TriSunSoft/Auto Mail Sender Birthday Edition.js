'use strict'

let data = {
  commercial: 3,
  url: 'https://www.automailsender.com/birthday-edition/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.automailsender.com/birthday-edition/auto-mail-sender-birthday-edition.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
