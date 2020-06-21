'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/apache/cloudstack-cloudmonkey/releases/latest'
  },
  versionChoice: 'windows.x86-64.exe',
  install: 'install_single',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/apache/cloudstack-cloudmonkey/releases/latest'
      },
      versionChoice: ['windows.x86-64.exe', null, null, 'published_at']
    }
  }
};
