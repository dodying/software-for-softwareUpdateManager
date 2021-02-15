'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'FTP Library': {
      commercial: 3,
      url: 'https://www.smartftp.com/en-us/ftplib/download',
      version: '.download-button',
      changelog: ['https://www.smartftp.com/en-us/changelog/2', 'section[id]>ul'],
      download: 'https://www.smartftp.com/get/SFTPFTPLib.exe',
      install: 'install_nsis'
    },
    SmartFTP: {
      commercial: 3,
      url: 'https://www.smartftp.com/en-us/download',
      version: '.download-button',
      changelog: ['https://www.smartftp.com/en-us/changelog/1', 'section[id]>ul'],
      download: 'https://www.smartftp.com/get/SFTPMSI64.exe',
      install: ['install_zipped', 'install_msi', /.msi$/, null, 'SmartFTP.exe']
    }
  }
};
