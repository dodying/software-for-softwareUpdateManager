'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'AM-DeadLink': {
      url: 'https://www.aignes.com/deadlink.htm#',
      version: '.mobile .medium',
      changelog: 'u:contains("Changes")~ul',
      download: 'https://www.aignes.info/download/dlsetup.exe',
      install: 'install_inno'
    },
    'AM-Notebook': {
      commercial: 3,
      url: 'https://www.aignes.com/note_history.htm',
      version: '.larger>b',
      changelog: '.history',
      download: 'https://www.aignes.info/download/notesetup.exe',
      install: 'install_inno'
    },
    'Local Website Archive': {
      commercial: 3,
      url: 'https://www.aignes.com/lwa_history.htm',
      version: ['.larger>b', 'text', /\((.*)\)/],
      changelog: '.history',
      download: 'https://www.aignes.info/download/wsasetup.exe',
      install: 'install_inno'
    },
    'Portable Start Menu': {
      url: 'https://www.aignes.com/psmenu_history.htm',
      version: '.larger>b',
      changelog: '.history',
      download: 'https://www.aignes.info/download/psmsetup.exe',
      install: 'install_inno'
    },
    'WebSite-Watcher': {
      commercial: 3,
      url: 'https://www.aignes.com/wsw_history.htm',
      version: ['.larger>b', 'text', /\((.*)\)/],
      changelog: '.history',
      download: 'https://www.aignes.info/download/wswsetup.exe',
      install: 'install_inno',
      other: {
        free: {
          commercial: 0,
          download: 'https://www.aignes.info/download/wswfreesetup.exe'
        }
      }
    }
  }
};
