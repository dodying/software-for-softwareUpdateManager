'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/ukanth/monitores/releases/latest'
  },
  versionChoice: ['.zip$', /Google Code Release (.*)$/, false, 'name'],
  install: 'install',
  other: {
    lite: {
      downloadChoice: 'MonitorESLite.exe',
      install: 'install_single'
    }
  }
};
module.exports = data;
