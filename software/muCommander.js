'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/mucommander/mucommander/releases/latest'
  },
  versionChoice: '.exe',
  install: 'install_zipped_single',
  other: {
    nightly: {
      site: {
        GitHub: 'https://github.com/mucommander/mucommander/releases'
      },
      versionChoice: ['portable.zip', null, null, 'published_at'],
      install: 'install'
    }
  }
};
module.exports = data;
