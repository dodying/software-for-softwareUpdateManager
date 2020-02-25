'use strict'

let data = {
  commercial: 0,
  url: 'https://www.trisunsoft.com/vb6-pure-code-lines-calculator/',
  version: '.green-button>span:nth-child(3)',
  download: 'https://www.trisunsoft.com/freeware/vb6-pure-code-lines-calculator.exe',
  install: info => info.fns.install.inno(info, null, { '{userappdata}': require('path').resolve(info.parentPath, './../') })
}
module.exports = data
