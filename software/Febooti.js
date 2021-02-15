'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Automation Workshop': {
      commercial: 3,
      url: 'https://www.febooti.com/products/automation-workshop/history/',
      version: '.ver>h2',
      changelog: '.ver',
      download: 'https://x.febooti.com/downloads/files/AutomationWorkshopSetup-x64.msi',
      install: ['install_msi', null, 'AutomationWorkshop.exe']
    },
    'Command line email': {
      commercial: 3,
      url: 'https://www.febooti.com/products/command-line-email/history/',
      version: '.ver>h2',
      changelog: '.ver',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.febooti.com/downloads/x64/', fns, '[href$="x64.msi"][href*="/febootimail"]'),
      install: ['install_msi', null, 'febootimail.exe']
    },
    'Hash & CRC': {
      url: 'https://www.febooti.com/products/filetweak/members/hash-and-crc/history/',
      version: '.ver>h2',
      changelog: '.ver',
      download: 'https://x.febooti.com/downloads/files/ftweak-hash-x64.msi',
      install: ['install_msi', null, 'fHash.dll']
    },
    'Hex Editor': {
      url: 'https://www.febooti.com/products/filetweak/members/hex-editor/history/',
      version: '.ver>h2',
      changelog: '.ver',
      download: 'https://x.febooti.com/downloads/files/ftweak-hex-x64.msi',
      install: ['install_msi', null, 'fHex.dll']
    }
  }
};
