'use strict'

let data = {
  url: 'http://www.taglyst.com/download-next',
  version: 'h1 .s-text-color-custom1',
  changelog: async (res, $, fns, choice) => [(await fns.walkLink('http://xlrocket.com/taglyst/changelog/', fns, '[href^="http://xlrocket.com/changelog/v"]', {
    selector: '.entry-content-cc',
    attr: 'html'
  })), true],
  download: '[href$=".exe"][href*="release/tagLyst.Next.setup"]',
  install: ['install_nsis', null, 'run']
}
module.exports = data
