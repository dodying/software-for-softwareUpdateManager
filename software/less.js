'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/jftuga/less-Windows/releases/latest'
  },
  versionChoice: ['less.exe', 'less-v(.*)'],
  install: 'install_single',
  other: {
    lesskey: {
      versionChoice: ['lesskey.exe', 'less-v(.*)']
    },
    beta: {
      site: {
        GitHub: 'https://github.com/jftuga/less-Windows/releases'
      }
    },
    'lesskey-beta': {
      site: {
        GitHub: 'https://github.com/jftuga/less-Windows/releases'
      },
      versionChoice: ['lesskey.exe', 'less-v(.*)']
    }
  }
};
