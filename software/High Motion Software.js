'use strict';

module.exports = {
  type: 'software-list',
  list: {
    BonAView: {
      url: 'https://www.highmotionsoftware.com/download-center/bonaview',
      version: '.field-item>p>b',
      changelog: '.field-item>ul',
      download: 'https://www.highmotionsoftware.com/download/BonAView/file/setup-bonaview-latest.exe',
      install: 'install_inno'
    },
    ImBatch: {
      url: 'https://www.highmotionsoftware.com/download-center/imbatch',
      version: '.field-item>p>b',
      changelog: '.field-item>ul',
      download: 'https://www.highmotionsoftware.com/download/ImBatch/file/setup-imbatch-latest.exe',
      install: 'install_inno'
    },
    ImWatcher: {
      url: 'https://www.highmotionsoftware.com/download-center/imwatcher',
      version: '.field-item>p>b',
      changelog: '.field-item>ul',
      download: 'https://www.highmotionsoftware.com/download/imwatcher/file/imwatcher-setup.exe',
      install: 'install_inno'
    }
  }
};
