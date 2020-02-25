'use strict'

let data = {
  commercial: 3,
  url: 'https://www.automailsender.com/file-edition/',
  version: '.green-button>span:nth-child(3)',
  download: 'https://www.automailsender.com/file-edition/auto-mail-sender-file-edition.exe',
  install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
}
module.exports = data
