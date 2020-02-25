'use strict'

let data = {
  commercial: 3,
  url: 'https://avocode.com/changelog',
  version: ['[data-test="changelog__dynamic__log"]', 'id', /(.*)/],
  changelog: '[data-test="changelog__dynamic__log"]>div',
  download: 'https://manager.avocode.com/download/avocode-app/windows-x64/',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
}
module.exports = data
