'use strict'

let data = {
  url: 'http://dandanplay.com/',
  version: ['a[href$=".exe"]', 'href'],
  changelog: ['http://dandanplay.com/blog.html', '#blogs li:contains("Windows版")'],
  download: 'a[href$=".exe"]',
  install: 'install_ai'
}
module.exports = data
