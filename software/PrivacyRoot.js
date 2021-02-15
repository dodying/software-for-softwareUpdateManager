'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Prevent Restore': {
      commercial: 2,
      url: 'https://privacyroot.com/software/net1/all.index',
      version: (res, $) => res.body.match(/TITLE=Prevent Restore\r?\nVERSION=(.*)/m)[1],
      download: 'https://privacyroot.com/software/setups/setup_prevent_restore.exe'
    },
    'Secret Disk': {
      commercial: 2,
      url: 'https://privacyroot.com/software/net1/all.index',
      version: (res, $) => res.body.match(/TITLE=Secret Disk\r?\nVERSION=(.*)/m)[1],
      download: 'https://privacyroot.com/software/setups/setup_secret_disk.exe'
    },
    Wipe: {
      commercial: 2,
      url: 'https://privacyroot.com/software/net1/all.index',
      version: (res, $) => res.body.match(/TITLE=Wipe\r?\nVERSION=(.*)/m)[1],
      download: 'https://privacyroot.com/software/setups/setup_wipe.exe'
    }
  }
};
