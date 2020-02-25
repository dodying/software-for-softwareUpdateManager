'use strict'

let data = {
  url: 'http://www.httrack.com/page/2/en/index.html',
  version: ['h2', 'text', /(\d+[\d.-]+\d+)/],
  download: 'a[href*="x64"][href$=".zip"]',
  install: ['install', null, 'httrack']
}
module.exports = data
