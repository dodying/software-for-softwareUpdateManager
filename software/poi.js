'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/poooi/poi/releases/latest'
  },
  versionChoice: /poi-(.*?)-win.7z/,
  install: 'install',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/poooi/poi/releases'
      },
      versionChoice: /poi-(.*?)-win.7z/
    }
  }
};
module.exports = data;
