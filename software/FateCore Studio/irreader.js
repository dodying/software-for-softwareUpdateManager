'use strict'

let data = {
  url: 'http://irreader.fatecore.com/',
  version: 'h1',
  changelog: {
    selector: 'pre',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'a[href$="green.zip"]',
  install: ['install_zipped', 'install_zipped', '.exe', 'install', 'app-32.7z']
}
module.exports = data
