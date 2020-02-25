'use strict'

let data = {
  url: 'https://www.kalkules.com/download/',
  version: 'h2',
  changelog: ['https://www.kalkules.com/category/version-history/', '.entry-content'],
  download: 'h2:contains("zip")+p+p>a',
  install: 'install'
}
module.exports = data
