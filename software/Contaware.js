'use strict';

module.exports = {
  type: 'software-list',
  list: {
    ContaCam: {
      url: 'https://www.contaware.com/downloads/latest/ContaCam/english/',
      version: ['a[href^="ContaCam"][href$="Setup.exe"]', 'href', /ContaCam-(.*?)-Setup.exe/],
      changelog: {
        url: 'https://www.contaware.com/downloads/HistoryContaCam.txt',
        split: true
      },
      download: 'a[href^="ContaCam"][href$="Setup.exe"]',
      install: 'install_nsis'
    },
    FreeVimager: {
      url: 'https://www.contaware.com/downloads/latest/FreeVimager/english/',
      version: ['a[href^="FreeVimager"][href$="Setup.exe"]', 'href', /FreeVimager-(.*?)-Setup.exe/],
      changelog: {
        url: 'https://www.contaware.com/downloads/HistoryFreeVimager.txt',
        split: true
      },
      download: 'a[href^="FreeVimager"][href$="Setup.exe"]',
      install: 'install_nsis'
    }
  }
};
