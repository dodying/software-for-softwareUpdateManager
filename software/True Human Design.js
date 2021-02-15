'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Diffinity: {
      url: 'http://truehumandesign.se/s_diffinity.php',
      version: ['.downloadtable', 'text', /Version: ([\d.]+)/],
      changelog: {
        selector: '.content',
        attr: 'text',
        match: /^\[Diffinity [\d.]+/,
        split: true
      },
      download: 'a[href^="dl.php"]',
      install: 'install_nsis'
    },
    Filelister: {
      url: 'https://truehumandesign.se/s_filelister.php',
      version: ['.downloadtable', 'text', /Version: ([\d.]+)/],
      changelog: {
        selector: '.content',
        attr: 'text',
        match: /^\[Filelister [\d.]+/,
        split: true
      },
      download: 'a[href^="dl.php"]',
      install: 'install_nsis'
    },
    NFOPad: {
      url: 'https://truehumandesign.se/s_nfopad.php',
      version: ['.downloadtable', 'text', /Version: ([\d.]+)/],
      changelog: {
        selector: '.content',
        attr: 'text',
        match: /^\[NFOPad [\d.]+/,
        split: true
      },
      download: 'a[href^="dl.php"]',
      install: 'install_nsis'
    },
    'Vocable Tool': {
      url: 'https://truehumandesign.se/s_voctool.php',
      version: ['.downloadtable', 'text', /Version: ([\d.]+)/],
      download: 'a[href^="dl.php"]',
      install: 'install_nsis'
    },
    Winfluence: {
      url: 'https://truehumandesign.se/s_filelister.php',
      version: ['.downloadtable', 'text', /Version: ([\d.]+)/],
      download: 'a[href^="dl.php"]',
      install: 'install_nsis'
    }
  }
};
