'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Mr.Otter': {
      url: 'http://xlrocket.com/mrotter/',
      version: 'div>strong',
      changelog: ['http://xlrocket.com/mrotter/changelog/', '.entry-content-cc>ul'],
      download: '#lnkDownWin1',
      install: ['install_nsis', null, 'run\\*']
    },
    tagLyst: {
      url: 'http://www.taglyst.com/download-next',
      version: 'h1 .s-text-color-custom1',
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('http://xlrocket.com/taglyst/changelog/', fns, '[href^="http://xlrocket.com/changelog/v"]', {
        selector: '.entry-content-cc',
        attr: 'html'
      })), true],
      download: '[href$=".exe"][href*="release/tagLyst.Next.setup"]',
      install: ['install_nsis', null, 'run']
    }
  }
};
