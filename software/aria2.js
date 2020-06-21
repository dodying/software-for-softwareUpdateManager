'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/aria2/aria2/releases/latest'
  },
  versionChoice: ['win-64bit(.*).zip', /release-(.*)/],
  install: ['install_zipped_single', 'aria2c.exe']
};
module.exports = data;
