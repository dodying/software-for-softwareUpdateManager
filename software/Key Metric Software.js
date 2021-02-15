'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Duplicate File Detective': {
      commercial: 3,
      url: 'https://www.duplicatedetective.com/download',
      version: '[itemprop="softwareVersion"]',
      changelog: {
        url: '[itemprop="releaseNotes"]',
        selector: 'p+ul'
      },
      download: 'https://f000.backblazeb2.com/file/KeyMetricSoft/Duplicate+File+Detective/DFD6-Setup.exe',
      install: 'install_ai'
    },
    FolderSizes: {
      commercial: 3,
      url: 'https://www.foldersizes.com/download',
      version: '[itemprop="softwareVersion"]',
      changelog: {
        url: '[itemprop="releaseNotes"]',
        selector: 'p+ul'
      },
      download: 'https://f000.backblazeb2.com/file/KeyMetricSoft/FolderSizes/fs9-setup.exe',
      install: 'install_ai'
    }
  }
};
