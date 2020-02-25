'use strict'

let data = {
  url: 'http://squid.diladele.com/',
  version: ['a[href$=".msi"]', 'href'],
  download: 'a[href$=".msi"]',
  install: ['install_msi', null, 'bin/squid.exe']
}
module.exports = data
