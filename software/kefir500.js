'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'APK Editor Studio': {
      site: {
        GitHub: 'https://github.com/kefir500/apk-editor-studio/releases/latest'
      },
      versionChoice: 'win32(.*).zip',
      install: 'install'
    },
    'APK Icon Editor': {
      site: {
        GitHub: 'https://github.com/kefir500/apk-icon-editor/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    }
  }
};
