'use strict';

module.exports = {
  type: 'software-list',
  list: {
    GoldWave: {
      commercial: 3,
      url: 'https://www.goldwave.com/release.php',
      version: '#downloadprimary',
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://goldwave.ca/forums/viewforum.php?f=5', fns, '.topictitle', {
        selector: '.content',
        attr: 'html'
      })), true],
      download: '#downloadprimary',
      install: 'install'
    },
    VideoMeld: {
      commercial: 3,
      url: 'https://www.goldwave.com/vmrelease.php',
      version: '.sidebutton',
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://goldwave.ca/forums/viewforum.php?f=16', fns, '.topictitle', {
        selector: '.content',
        attr: 'html'
      })), true],
      download: '.sidebutton',
      install: 'install'
    }
  }
};
