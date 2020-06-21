'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/HelloZeroNet/ZeroNet/releases/latest'
  },
  versionChoice: i => !i.prerelease,
  download: 'https://github.com/HelloZeroNet/ZeroNet-win/archive/dist/ZeroNet-win.zip',
  install: 'install'
};
module.exports = data;
