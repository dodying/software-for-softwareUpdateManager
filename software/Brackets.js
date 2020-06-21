'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/adobe/brackets/releases/latest'
  },
  versionChoice: ['.msi', /release-(.*)/],
  install: ['install_msi', null, 'Brackets.exe']
};
module.exports = data;
