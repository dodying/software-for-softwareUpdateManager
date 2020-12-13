'use strict';

module.exports = {
  site: {
    download: 'https://www.expandrive.com/download-expandrive/'
  },
  versionChoice: ['https://updates.expandrive.com/apps/expandrive7_win64/download_latest', /ExpanDrive_Setup_([\d.]+).exe/],
  download: 'https://packages.expandrive.com/msi/{version}/ExpanDriveInstaller64.msi',
  install: ['install_msi', null, 'ExpanDrive.exe']
};
