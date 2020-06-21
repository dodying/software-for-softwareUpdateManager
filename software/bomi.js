'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/xylosper/bomi/releases/latest'
  },
  versionChoice: i => !i.prerelease,
  download: 'https://sourceforge.net/projects/bomi/files/windows/latest/bomi-64bit.7z/download',
  install: 'install'
};
module.exports = data;
