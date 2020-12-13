'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/kile/files/'
  },
  versionChoice: 'kile-(.*?).exe',
  install: ['install_zipped', 'install', '.7z'],
  other: {
    unstable: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/kile/files/unstable/'
      },
      versionChoice: ['kile-(.*)', 'kile-(.*?).exe']
    }
  }
};
