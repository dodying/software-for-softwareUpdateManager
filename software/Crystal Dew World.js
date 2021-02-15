'use strict';

module.exports = {
  type: 'software-list',
  list: {
    CrystalDiskInfo: {
      site: {
        OSDN: 'https://osdn.net/projects/crystaldiskinfo/releases/'
      },
      install: 'install'
    },
    CrystalDiskMark: {
      site: {
        OSDN: 'https://osdn.net/projects/crystaldiskmark/releases/'
      },
      install: 'install'
    },
    VirtualChecker: {
      url: 'https://openlibsys.org/',
      version: ['.contentBlock>h1', 'text', /VirtualChecker (\d+[\d.]+\d+)/],
      download: '[href$=".zip"]',
      install: 'install'
    }
  }
};
