'use strict';

const data = {
  url: 'https://www.contaware.com/downloads/latest/ContaCam/english/',
  version: ['a[href^="ContaCam"][href$="Setup.exe"]', 'href', /ContaCam-(.*?)-Setup.exe/],
  changelog: {
    url: 'https://www.contaware.com/downloads/HistoryContaCam.txt',
    split: true
  },
  download: 'a[href^="ContaCam"][href$="Setup.exe"]',
  install: 'install_nsis'
};
module.exports = data;
