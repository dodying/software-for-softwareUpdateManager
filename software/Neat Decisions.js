'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Detwinner: {
      commercial: 3,
      url: 'https://neatdecisions.com/products/detwinner/',
      version: '[itemprop="softwareVersion"]',
      changelog: ['https://neatdecisions.com/products/detwinner/history.php', '.history-section'],
      download: '[itemprop="downloadURL"][href$="x64.exe"]',
      install: 'install_inno'
    },
    NeatMouse: {
      url: 'https://neatdecisions.com/products/neatmouse/',
      version: '[itemprop="softwareVersion"]',
      changelog: ['https://neatdecisions.com/products/neatmouse/history.php', '.history-section'],
      download: '[itemprop="downloadURL"][href$=".exe"]',
      install: 'install_inno_single'
    }
  }
};
