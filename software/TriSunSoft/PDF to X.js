'use strict'

let data = {
  commercial: 3,
  url: 'https://www.pdf-helper.com/pdf-to-x/',
  version: '.green-button>span:nth-child(3)',
  download: 'https://www.pdf-helper.com/files/pdf-to-x.exe',
  install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
}
module.exports = data
