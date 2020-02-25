'use strict'

let data = {
  commercial: 3,
  url: 'https://www.automailsender.com/email-checker/p.htm',
  version: '.green-button>span:nth-child(3)',
  download: 'https://www.automailsender.com/email-checker/email-checker-pro.exe',
  install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
}
module.exports = data
