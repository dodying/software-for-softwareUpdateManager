'use strict'

let data = {
  url: 'http://www.xiles.net/',
  version: ['.product:contains("nexusfile") [title$=".zip"]', 'href', /ver=([\d.]+)/],
  download: '.product:contains("nexusfile") [title$=".zip"]',
  install: 'install'
}
module.exports = data
