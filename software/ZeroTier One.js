'use strict';

const data = {
  commercial: 2,
  site: {
    GitHub: 'https://github.com/zerotier/ZeroTierOne/releases/latest'
  },
  versionChoice: i => !i.prerelease,
  download: 'https://download.zerotier.com/dist/ZeroTier%20One.msi',
  install: ['install_msi', null, 'ZeroTier One.exe']
};
module.exports = data;
