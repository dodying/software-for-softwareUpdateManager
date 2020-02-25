'use strict'

let data = {
  url: 'https://hexchat.github.io/downloads.html',
  version: ['[href$="x64.exe"]', 'href', /%20(.*?)%20x64/],
  changelog: ['https://hexchat.readthedocs.io/en/latest/changelog.html', '.simple'],
  download: '[href$="x64.exe"]',
  install: 'install_inno'
}
module.exports = data
