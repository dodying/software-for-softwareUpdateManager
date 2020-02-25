'use strict'

let data = {
  url: 'http://www.shutterencoder.com/en/',
  version: ['[href$=".exe"]', 'href', /\(PC Version (.*?)\)/],
  changelog: {
    url: 'http://www.shutterencoder.com/changelog.txt',
    match: /^Version [\d.]+/,
    split: true
  },
  download: '[href$=".exe"]',
  install: 'install_inno'
}
module.exports = data
