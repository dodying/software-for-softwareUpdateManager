'use strict';

module.exports = {
  type: 'software-list',
  list: {
    iDailyDiary: {
      commercial: 3,
      url: 'https://www.splinterware.com/products/idailydiary.html',
      version: '.main-boxdiv-bottom>p',
      download: 'https://www.splinterware.com/download/iddproeval.exe',
      install: 'install',
      other: {
        free: {
          commercial: 0,
          download: 'https://www.splinterware.com/download/iddfree.exe'
        }
      }
    },
    'System Scheduler': {
      commercial: 3,
      url: 'https://www.splinterware.com/products/scheduler.html',
      version: '.main-boxdiv-bottom>p',
      download: 'https://www.splinterware.com/download/ssproeval.exe',
      install: 'install',
      other: {
        free: {
          commercial: 0,
          download: 'https://www.splinterware.com/download/ssfree.exe'
        }
      }
    }
  }
};
