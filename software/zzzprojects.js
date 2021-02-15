'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Find and Replace': {
      site: {
        GitHub: 'https://github.com/zzzprojects/findandreplace/releases/latest'
      },
      versionChoice: (i) => !i.prerelease,
      download: 'http://findandreplace.io/downloads/fnr.zip',
      install: 'install_zipped_single'
    }
  }
};
