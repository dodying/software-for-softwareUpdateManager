'use strict'

let data = {
  url: 'https://www.seamonkey-project.org/releases/',
  version: 'h2>a',
  changelog: {
    url: '.release-date+div a',
    selector: '#new+.section'
  },
  download: 'https://download-installer.cdn.mozilla.net/pub/seamonkey/releases/{version}/win32/zh-CN/SeaMonkey%20Setup%20{version}.exe',
  install: ['install', null, 'core']
}
module.exports = data
