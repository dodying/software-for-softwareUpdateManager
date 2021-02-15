'use strict';

module.exports = {
  type: 'software-list',
  list: {
    irreader: {
      commercial: 2,
      url: 'http://irreader.fatecore.com/',
      version: 'h1',
      changelog: {
        selector: 'pre',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: 'a[href*="irreader"][href$=".zip"]',
      install: ['install_zipped', 'install_zipped', '.exe', 'install', 'app-32.7z']
    },
    OpenWebMonitor: {
      url: 'http://owm.fatecore.com/',
      version: ['a[href$=".zip"]', 'href'],
      changelog: {
        selector: 'pre',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: 'a[href$=".zip"]',
      install: ['install_zipped', 'install_zipped', '.exe', 'install', 'app-32.7z']
    }
  }
};
