'use strict'

let data = {
  url: 'http://owm.fatecore.com/',
  version: ['a[href$=".zip"]', 'href'],
  changelog: {
    selector: 'pre',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'a[href$=".zip"]',
  install: ['install_zipped', 'install_zipped', '.exe', 'install', 'app-32.7z']
}
module.exports = data
