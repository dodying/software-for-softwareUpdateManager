'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Bulk Image Downloader': {
      commercial: 3,
      url: 'https://bulkimagedownloader.com/download',
      version: '[href$="setup.exe"]',
      changelog: ['https://bulkimagedownloader.com/whats-new', 'h4+ul'],
      download: '[href$="setup.exe"]',
      install: 'install_inno'
    },
    WizFile: {
      url: 'https://antibody-software.com/web/software/software/wizfile-finds-your-files-fast/',
      version: '.smalldark',
      changelog: 'div:contains("WizFile")+div>ul',
      download: 'a[href*="/files/"]',
      install: 'install_inno'
    },
    WizKey: {
      commercial: 3,
      url: 'https://antibody-software.com/web/software/software/wizkey-makes-it-easy-to-type-accented-and-other-special-unicode-characters/',
      version: 'a[href*="/files/"]',
      changelog: '.componentheading+div>ul',
      download: 'a[href*="/files/"]',
      install: 'install_inno'
    },
    WizMouse: {
      url: 'https://antibody-software.com/web/software/software/wizmouse-makes-your-mouse-wheel-work-on-the-window-under-the-mouse/',
      version: '.smalldark',
      changelog: '.componentheading+ul',
      download: 'a[href*="/files/"]',
      install: 'install_inno'
    },
    WizTree: {
      url: 'https://wiztreefree.com/download',
      version: '[href$="setup.exe"]',
      changelog: ['https://wiztreefree.com/whats-new', 'h4+ul'],
      download: '[href$="setup.exe"]',
      install: 'install_inno'
    }
  }
};
