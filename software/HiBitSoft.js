'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'HiBit Startup Manager': {
      url: 'http://hibitsoft.ir/StartupManager.html',
      version: '.info',
      changelog: {
        url: 'http://www.hibitsoft.ir/HibitStartup/Changelog.txt',
        match: /^HiBit Startup Manager [\d.]+/,
        split: true
      },
      download: '[href$=".exe"]',
      install: 'install_inno'
    },
    'HiBit System Information': {
      url: 'http://hibitsoft.ir/SystemInformation.html',
      version: '.info',
      changelog: {
        url: 'http://www.hibitsoft.ir/HiBitSysynfo/Changelog.txt',
        match: /^HiBit System Information [\d.]+/,
        split: true
      },
      download: '[href$=".exe"]',
      install: 'install_inno'
    },
    'HiBit Uninstaller': {
      url: 'http://hibitsoft.ir/Uninstaller.html',
      version: '.info',
      changelog: {
        url: 'http://www.hibitsoft.ir/HiBitUninstaller/Changelog.txt',
        match: /^HiBit Uninstaller [\d.]+/,
        split: true
      },
      download: '[href$=".exe"]',
      install: 'install_inno'
    }
  }
};
