'use strict'

let data = {
  url: 'https://openlibsys.org/',
  version: ['.contentBlock>h1','text',/VirtualChecker (\d+[\d.]+\d+)/],
  download: '[href$=".zip"]',
  install: 'install'
}
module.exports = data
