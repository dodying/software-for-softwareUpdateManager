'use strict'

let data = {
  commercial: 0,
  url: 'https://www.trisunsoft.com/file-folder-lister/',
  version: '.green-button>span:nth-child(3)',
  download: 'https://www.trisunsoft.com/freeware/file-folder-lister.exe',
  install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
}
module.exports = data
