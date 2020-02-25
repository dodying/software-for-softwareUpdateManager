'use strict'

let data = {
  url: 'http://www.multicommander.com/downloads',
  version: ['a[href$=".exe"][href*="x64"]', 'text', /v([\d.]+) \(Build (\d+)\)/, '$1.$2'],
  changelog: {
    url: '[href^="/release/multicommander/version"]',
    selector: '.field-name-body'
  },
  download: 'a[href$=".exe"][href*="x64"]',
  install: 'install_nsis'
}
module.exports = data
