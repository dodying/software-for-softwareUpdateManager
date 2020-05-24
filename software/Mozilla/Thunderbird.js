'use strict';

const data = {
  url: 'https://www.thunderbird.net/notes/',
  version: ['h1+p', 'text', /Version (.*?),/],
  changelog: 'main>section>aside:has(h3[id])',
  download: 'https://download-installer.cdn.mozilla.net/pub/thunderbird/releases/{version}/win64/zh-CN/Thunderbird%20Setup%20{version}.exe',
  install: ['install', null, 'core'],
  other: {
    beta: {
      url: 'https://www.thunderbird.net/',
      version: ['.download-button-beta .download-link[href*="-SSL&os=win64"]', 'href', /thunderbird-(.*?)-SSL/],
      changelog: {
        url: '.download-button-beta [href*="releasenotes"]',
        selector: 'main>section>aside:has(h3[id])'
      }
    },
    nightly: {
      url: 'https://www.thunderbird.net/',
      version: ['.download-button-nightly .download-link[href*="win64"]', 'href', /thunderbird-(.*?)\.en-US/],
      changelog: null,
      download: '.download-button-nightly .download-link[href*="win64"]'
    }
  }
};
module.exports = data;
