'use strict';

module.exports = {
  type: 'software-list',
  list: {
    nnBackup: {
      url: 'http://www.nncron.ru/download.shtml',
      version: 'body > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table.text > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(4)',
      download: 'body > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table.text > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(1) > a',
      install: 'install_nsis'
    },
    nnCron: {
      url: 'http://www.nncron.ru/download.shtml',
      version: 'body > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table.text > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(4)',
      download: 'body > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table.text > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > a',
      install: 'install_nsis',
      other: {
        lite: {
          version: 'body > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table.text > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(4)',
          download: 'body > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table.text > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(1) > a'
        }
      }
    },
    nnSync: {
      url: 'http://www.nncron.ru/download.shtml',
      version: ['body > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table.text > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(4)', 'text', /(.*)/],
      download: 'body > table:nth-child(3) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table.text > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(1) > a',
      install: 'install_nsis'
    }
  }
};
