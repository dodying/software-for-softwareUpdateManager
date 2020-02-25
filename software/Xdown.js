'use strict'

let data = {
  url: 'https://xdown.org/',
  version: ['[href$="zip"][href*="dl.xdown.org/xdown"]', 'href', /xdown-([\d.]+).zip/],
  download: '[href$="zip"][href*="dl.xdown.org/xdown"]',
  install: 'install'
}
module.exports = data
