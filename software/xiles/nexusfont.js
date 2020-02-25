'use strict'

let data = {
  url: 'http://www.xiles.net/',
  version: ['.product:contains("nexusfont") [title$=".zip"]', 'href', /ver=([\d.]+)/],
  download: '.product:contains("nexusfont") [title$=".zip"]',
  install: 'install'
}
module.exports = data
