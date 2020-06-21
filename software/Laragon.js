'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/leokhoa/laragon/releases/latest'
  },
  versionChoice: 'laragon-full.exe',
  install: 'install_inno_type',
  other: {
    full: {},
    wamp: {
      versionChoice: 'laragon-wamp.exe'
    },
    portable: {
      versionChoice: 'laragon.7z',
      install: 'install'
    }
  }
};
