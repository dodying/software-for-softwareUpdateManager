'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/sysprogs/WinCDEmu/releases/latest'
  },
  versionChoice: '^WinCDEmu-.*.exe',
  other: {
    portable: {
      versionChoice: '^PortableWinCDEmu-.*.exe',
      install: 'install_single'
    }
  }
};
module.exports = data;
