'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Direct Folders': {
      commercial: 2,
      url: 'https://www.codesector.com/downloads',
      version: '.col:contains("Windows") td:contains("Direct Folders")',
      download: 'https://www.codesector.com/files/directfolders.exe',
      install: 'install_inno_type'
    },
    JetStart: {
      url: 'https://www.codesector.com/downloads',
      version: '.col:contains("Windows") td:contains("JetStart")',
      download: 'https://www.codesector.com/files/jetstart.exe',
      install: 'install_inno_type'
    },
    MemoClip: {
      url: 'https://www.codesector.com/downloads',
      version: '.col:contains("Windows") td:contains("MemoClip")',
      download: 'https://www.codesector.com/files/memoclip.exe',
      install: 'install_inno_type'
    },
    TeraCopy: {
      commercial: 2,
      url: 'https://www.codesector.com/downloads',
      version: '.col:contains("Windows") td:contains("TeraCopy")',
      download: 'https://www.codesector.com/files/teracopy.exe',
      install: 'install_inno_type',
      other: {
        2: {
          version: '.col:contains("Windows") td:contains("TeraCopy 2")',
          download: '.col:contains("Windows") tr:contains("TeraCopy 2") a[href$=".exe"]'
        }
      }
    }
  }
};
