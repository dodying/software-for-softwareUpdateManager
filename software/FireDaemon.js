'use strict';

const data = {
  commercial: 3,
  url: 'https://firedaemon.com/firedaemon-pro-release-notes',
  version: '#article-body>table>tbody>tr:nth-child(2)>td:nth-child(1)>p>a',
  changelog: '#article-body>table>tbody>tr:nth-child(4)>td:nth-child(1)',
  download: '#article-body>table>tbody>tr:nth-child(2)>td:nth-child(1)>p>a',
  installType: 'InstallShield',
  other: {
    RC: {
      version: '#article-body>table>tbody>tr:nth-child(2)>td:nth-child(2)>p>a',
      changelog: '#article-body>table>tbody>tr:nth-child(4)>td:nth-child(2)',
      download: '#article-body>table>tbody>tr:nth-child(2)>td:nth-child(2)>p>a'
    },
    Fusion: {
      url: 'https://firedaemon.com/firedaemon-fusion-release-notes',
      version: '[href*="FireDaemon-Fusion-x86"][href$=".exe"]',
      download: '[href*="FireDaemon-Fusion-x86"][href$=".exe"]'
    },
    'Fusion-RC': {
      url: 'https://firedaemon.com/firedaemon-fusion-release-notes',
      version: '[href*="FireDaemon-Fusion-x64"][href$=".exe"]',
      download: '[href*="FireDaemon-Fusion-x64"][href$=".exe"]'
    },
    Zero: {
      url: 'https://firedaemon.com/firedaemon-zero-release-notes',
      version: '[href*="FireDaemon-Zero-x64"]',
      download: 'https://firedaemon.com/download-firedaemon-zero-x64'
    },
    daeMON: {
      commercial: 0,
      url: 'https://firedaemon.com/download/',
      version: '.two-col-inner:contains("FireDaemon daeMON")>p>small',
      changelog: null,
      download: 'https://firedaemon.com/download-firedaemon-daemon',
      install: ['install_zipped_single', 'daeMON-x64.exe']
    }
  }
};
module.exports = data;
