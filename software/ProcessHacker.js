'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/processhacker/processhacker/releases/latest'
  },
  install: ['install', null, '64bit'],
  other: {
    nightly: {
      site: {
        AppVeyor: 'https://ci.appveyor.com/api/projects/processhacker/processhacker'
      },
      versionChoice: 'bin.zip'
    }
  }
};
module.exports = data;
