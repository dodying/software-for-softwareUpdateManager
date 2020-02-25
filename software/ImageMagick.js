'use strict'

let data = {
  url: 'https://imagemagick.org/script/download.php',
  version: ['a[href*="portable"][href$="x64.zip"]', 'href', /(\d+[\d.-]+\d+)/],
  changelog: ['https://www.imagemagick.org/script/changelog.php', 'dt+li+dt+li'],
  download: 'a[href*="portable"][href$="x64.zip"]',
  install: ['install', ['www', 'index.html', 'images']]
}
module.exports = data
