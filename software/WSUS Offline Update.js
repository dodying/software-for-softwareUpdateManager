'use strict'

let data = {
  url: 'http://download.wsusoffline.net/',
  version: 'a[href$=".zip"]',
  changelog: '#content>p',
  download: 'a[href$=".zip"]',
  install: 'install'
}
module.exports = data
