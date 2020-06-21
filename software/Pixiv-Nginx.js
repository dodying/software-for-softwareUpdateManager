'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/mashirozx/Pixiv-Nginx/releases/latest'
  },
  versionChoice: i => !i.prerelease,
  download: 'https://github.com/mashirozx/Pixiv-Nginx/archive/v{version}.zip',
  install: 'install'
};
module.exports = data;
