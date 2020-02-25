'use strict'

let data = {
  url: 'https://www.xvast.cn/',
  version: ['.section-desc', 'text', /^([\w.]+)/],
  changelog: '#update-log>p:contains("Windows")',
  download: 'https://cn.haihaisoft.com/download/XvastInstaller.exe',
  install: 'install_inno'
}
module.exports = data
