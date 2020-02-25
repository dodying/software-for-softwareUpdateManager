'use strict'

let data = {
  url: 'https://www.thunderbird.net/notes/',
  version: '.notes-head>h2',
  changelog: '.main-column',
  download: 'https://download-installer.cdn.mozilla.net/pub/thunderbird/releases/{version}/win64/zh-CN/Thunderbird%20Setup%20{version}.exe',
  install: ['install', null, 'core']
}
module.exports = data
