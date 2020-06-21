'use strict';

module.exports = {
  url: 'https://windows.php.net/download/',
  version: ['#main-column .info>h3', 'text', /\((.*?)\)/],
  download: '#main-column .info>h3~.innerbox [id*="-nts-"]~ul>li>a[href$="x64.zip"]',
  install: 'install',
  other: {
    ts: {
      download: '#main-column .info>h3~.innerbox [id*="-ts-"]~ul>li>a[href$="x64.zip"]'
    },
    qa: {
      url: 'https://windows.php.net/qa/'
    },
    'qa-ts': {
      url: 'https://windows.php.net/qa/',
      download: '#main-column .info>h3~.innerbox [id*="-ts-"]~ul>li>a[href$="x64.zip"]'
    },
    snapshots: {
      url: 'https://windows.php.net/snapshots/',
      version: ['#main-column .info>h3+p+p', 'text', /Revision: (.*?) \(/],
      download: '#main-column .info>h3~.innerbox [id*="-nts-"]~ul>li>a[href*="x64"][href$=".zip"]'
    },
    'snapshots-ts': {
      url: 'https://windows.php.net/snapshots/',
      version: ['#main-column .info>h3+p+p', 'text', /Revision: (.*?) \(/],
      download: '#main-column .info>h3~.innerbox [id*="-ts-"]~ul>li>a[href*="x64"][href$=".zip"]'
    }
  }
};
