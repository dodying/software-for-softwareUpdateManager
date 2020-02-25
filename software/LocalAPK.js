'use strict'

let data = {
  url: 'https://www.breezie.be/dev/localapk/download.htm',
  version: '[href$="x64.zip"]',
  changelog: ['https://www.breezie.be/dev/localapk/index.htm', '.vet:contains("Version History")+ul ul'],
  download: '[href$="x64.zip"]',
  install: 'install'
}
module.exports = data
