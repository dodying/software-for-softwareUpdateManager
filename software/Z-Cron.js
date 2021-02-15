'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Z-Cron': {
      url: 'https://www.z-cron.com/download.html',
      version: ['.zcron .box:contains("Version")+.boxe', 'text', /([\d.]+ Build \d+)/i],
      changelog: ['https://wordpress.z-dbackup.de/z-cron-update-information/', '.article'],
      download: 'http://www.z-download.de/down/zcron.zip'
    },
    'Z-FTPcopyII': {
      commercial: 3,
      url: 'https://www.z-cron.com/download.html',
      version: ['.zftpcopy .box:contains("Version")+.boxe', 'text', /([\d.]+ Build \d+)/i],
      download: 'http://www.z-download.de/down/zcopy2.zip'
    },
    'Z-ParSwitch': {
      url: 'https://www.z-cron.com/download.html',
      version: '.zparswitch .box:contains("Version")+.boxe',
      download: 'http://www.z-download.de/down/z-parsw.zip'
    },
    'Z-TaskHelp': {
      url: 'https://www.z-cron.com/download.html',
      version: ['.ztaskhelp .box:contains("Version")+.boxe', 'text', /([\d.]+ Build \d+)/i],
      download: 'http://www.z-download.de/down/Z-TaskHelp.zip'
    }
  }
};
