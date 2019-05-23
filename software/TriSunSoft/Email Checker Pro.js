'use strict'

let data = {
  commercial: 3,
  url: 'https://www.automailsender.com/email-checker/p.htm',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.automailsender.com/email-checker/email-checker-pro.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath, null, { '{userappdata}': require('path').resolve(iPath, './../../') })
  }
}
module.exports = data
