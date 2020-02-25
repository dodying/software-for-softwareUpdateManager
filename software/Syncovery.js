'use strict'

let data = {
  commercial: 3,
  url: 'https://www.syncovery.com/detailed-version-history/',
  version: ['p:contains("for Windows")', 'text', /v(.*?) for Windows/],
  changelog: 'p:contains("for Windows")+ul',
  download: 'https://www.syncovery.com/release/Syncovery64Setup.exe',
  install: 'install_inno'
}
module.exports = data
