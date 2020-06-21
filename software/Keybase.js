'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/keybase/client/releases/latest'
  },
  versionChoice: i => !i.prerelaese,
  download: 'https://prerelease.keybase.io/keybase_setup_amd64.msi',
  install: ['install_msi', null, 'keybase.exe']
};
module.exports = data;