'use strict'

let data = {
  url: 'https://www.sourcetreeapp.com/',
  version: ['a[href$=".exe"]', 'href'],
  changelog: ['https://product-downloads.atlassian.com/software/sourcetree/windows/ga/ReleaseNotes_{version}.html', 'ul'],
  download: 'a[href$=".exe"]',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
}
module.exports = data
