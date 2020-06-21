'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/zyedidia/micro/releases/latest'
  },
  versionChoice: 'win64.zip',
  install: 'install_zipped_single',
  other: {
    nightly: {
      site: {
        GitHub: 'https://github.com/zyedidia/micro/releases'
      },
      versionChoice: ['win64.zip', null, null, 'published_at']
    }
  }
};
