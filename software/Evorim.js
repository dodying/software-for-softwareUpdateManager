'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Advanced Backup': {
      commercial: 2,
      url: 'https://www.evorim.com/en/advancedbackup',
      version: '.col-sm-2:has(.btn)+div>h3',
      changelog: '#development .row:has(.label-success)>.border-left-sm',
      download: 'https://www.evorim.com/download/advbackup-x64-setup.exe'
    },
    Cloudevo: {
      commercial: 2,
      url: 'https://www.evorim.com/en/cloudevo',
      version: '.col-sm-2:has(.btn)+div>h3',
      changelog: '#development .row:has(.label-success)>.border-left-sm',
      download: 'https://www.evorim.com/download/cloudevo-x64-setup.exe'
    },
    'Free Firewall': {
      url: 'https://www.evorim.com/en/free-firewall',
      version: '.col-sm-2:has(.btn)+div>h3',
      changelog: '#development .row:has(.label-success)>.border-left-sm',
      download: 'https://www.evorim.com/download/freefirewall-x64-setup.exe'
    },
    HotkeyPro: {
      commercial: 2,
      url: 'https://www.evorim.com/en/hotkeypro',
      version: '.col-sm-2:has(.btn)+div>h3',
      changelog: '#development .row:has(.label-success)>.border-left-sm',
      download: 'https://www.evorim.com/download/hotkeypro-x64-setup.exe'
    }
  }
};
