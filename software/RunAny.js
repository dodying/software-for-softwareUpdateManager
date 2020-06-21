'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/hui-Zz/RunAny/releases/latest'
  },
  versionChoice: i => !i.prerelease,
  download: 'https://github.com/hui-Zz/RunAny/archive/v{version}.zip',
  install: 'install'
};
module.exports = data;
