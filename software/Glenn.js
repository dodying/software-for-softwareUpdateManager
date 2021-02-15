'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Desktop Calendar': {
      url: 'https://www.glenn.delahoy.com/desktopcalendar/',
      version: ['.featured-artist', 'text', /Version: (.*)/],
      download: '[href$=".zip"]',
      install: 'install'
    },
    'Desktop Info': {
      url: 'https://www.glenn.delahoy.com/desktopinfo/',
      version: ['.entry', 'text', /Version: (.*)/],
      download: '[href$=".zip"]',
      install: 'install'
    },
    'Really Simple Menu': {
      url: 'https://www.glenn.delahoy.com/really-simple-menu/',
      version: ['.featured-artist', 'text', /Version: (.*)/],
      download: '[href$=".zip"]',
      install: 'install_zipped_single'
    },
    'Snappy Driver Installer Origin': {
      url: 'https://www.snappy-driver-installer.org/download/',
      version: ['[href*="downloads/SDIO"][href$=".zip"]', 'href'],
      changelog: {
        url: 'https://snappy-driver-installer.org/downloads/changelog.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '[href*="downloads/SDIO"][href$=".zip"]',
      install: 'install'
    }
  }
};
