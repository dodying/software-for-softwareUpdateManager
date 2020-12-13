'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/zzzprojects/findandreplace/releases/latest'
  },
  versionChoice: (i) => !i.prerelease,
  download: 'http://findandreplace.io/downloads/fnr.zip',
  install: 'install_zipped_single'
};
module.exports = data;
