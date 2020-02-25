'use strict'

let data = {
  url: 'http://www.rdfsnap.com/',
  version: ['.version', 'text', /软件版本：v([\d.]+ build \d+)/],
  changelog: ['http://www.rdfsnap.cn/updatelog.html', '#updatelog'],
  download: '.download>a',
  install: 'install_inno'
}
module.exports = data
