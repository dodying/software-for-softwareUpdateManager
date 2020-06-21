'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/yupi2/synergy/releases/latest'
  },
  versionChoice: ['_x64_(.*).msi', /(.*)_master/],
  install: ['install_msi', null, 'synergys.exe']
};
module.exports = data;
