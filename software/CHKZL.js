'use strict';

module.exports = {
  type: 'software-list',
  list: {
    DDTV: {
      site: {
        GitHub: 'https://github.com/CHKZL/DDTV/releases/latest'
      },
      versionChoice: '.rar',
      install: ['install', null, 'DDTV*']
    },
    DDTV2: {
      site: {
        GitHub: 'https://github.com/CHKZL/DDTV2/releases/latest'
      },
      versionChoice: 'DDTV-.*?.rar',
      install: ['install', null, 'DDTV*']
    }
  }
};
