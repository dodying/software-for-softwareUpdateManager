'use strict'

let data = {
  url: 'https://sol.gfxile.net/soloud/downloads.html',
  version: 'a[href$=".zip"]',
  changelog: '#release-history~ul',
  download: 'a[href$=".zip"]',
  install: 'install'
}
module.exports = data
