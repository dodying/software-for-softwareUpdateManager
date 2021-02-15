'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'USB Flash Drives Control': {
      url: 'https://www.binisoft.org/usbc',
      version: '#sideright table tr',
      changelog: {
        url: 'https://www.binisoft.org/changes.txt',
        match: /^What's new in version [\d.]+/,
        split: true
      },
      download: 'https://www.binisoft.org/download/usbc4setup.exe'
    },
    'Windows Firewall Control': {
      url: 'https://www.binisoft.org/wfc.php',
      version: '#sideright table tr',
      changelog: {
        url: 'https://www.binisoft.org/changelog.txt',
        match: /^What's new in version [\d.]+/,
        split: true
      },
      download: 'https://www.binisoft.org/download/wfc6setup.exe'
    }
  }
};
