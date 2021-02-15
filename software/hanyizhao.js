'use strict';

module.exports = {
  type: 'software-list',
  list: {
    NetSpeedMonitor: {
      site: {
        GitHub: 'https://github.com/hanyizhao/NetSpeedMonitor/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'NetSpeedMonitor.exe']
    }
  }
};
