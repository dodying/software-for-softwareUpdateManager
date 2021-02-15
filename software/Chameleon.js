'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Explorer: {
      commercial: 3,
      url: 'http://www.chameleon-managers.com/windows-explorer/',
      version: '.wrap-right a[href$=".exe"]',
      download: 'http://www.chameleon-managers.com/files/cexplorer.exe',
      install: 'install_inno_type'
    },
    Folder: {
      url: 'http://www.chameleon-managers.com/downloads.php',
      version: '[id="wrap-main"]:has(.folder-logo) td[rowspan="3"]+td',
      download: 'http://www.chameleon-managers.com/files/cfolder_freeware.exe',
      install: 'install_inno'
    },
    Shutdown: {
      url: 'http://www.chameleon-managers.com/downloads.php',
      version: '[id="wrap-main"]:has(.shutdown-logo) td[rowspan="3"]+td',
      download: 'http://www.chameleon-managers.com/files/cshutdown_freeware.exe',
      install: 'install_zipped_single'
    },
    'Startup Manager': {
      commercial: 3,
      url: 'http://www.chameleon-managers.com/windows-startup-manager/',
      version: '.wrap-right a[href$=".exe"]',
      download: 'http://www.chameleon-managers.com/files/cstartup.exe',
      install: 'install_inno_single'
    },
    'Task Manager': {
      commercial: 3,
      url: 'http://www.chameleon-managers.com/windows-task-manager/',
      version: '.wrap-right a[href$=".exe"]',
      download: 'http://www.chameleon-managers.com/files/ctask.exe',
      install: 'install_inno_single'
    },
    Volume: {
      commercial: 3,
      url: 'http://www.chameleon-managers.com/windows-volume-manager/',
      version: '.wrap-right a[href$=".exe"]',
      download: 'http://www.chameleon-managers.com/files/cvolume.exe',
      install: 'install_nsis'
    },
    'Window Manager': {
      commercial: 3,
      url: 'http://www.chameleon-managers.com/window-manager/',
      version: '.wrap-right a[href$=".exe"]',
      download: 'http://www.chameleon-managers.com/files/cwindow.exe',
      install: 'install_inno_single'
    }
  }
};
