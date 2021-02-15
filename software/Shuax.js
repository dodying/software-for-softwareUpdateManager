'use strict';

module.exports = {
  type: 'software-list',
  list: {
    GreenChrome: {
      site: {
        GitHub: 'https://github.com/shuax/GreenChrome/releases/latest'
      },
      versionChoice: '.7z',
      install: ['install', null, 'x64']
    },
    MouseInc: {
      url: 'https://shuax.com/project/mouseinc/',
      version: '.title',
      changelog: {
        url: 'https://docs.shuax.com/MouseInc/docs/update.md',
        match: /^## [\d.]+/,
        split: true
      },
      download: 'https://shuax.com/mi',
      install: 'install_zipped_single'
    }
  }
};
