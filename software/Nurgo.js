'use strict';

module.exports = {
  type: 'software-list',
  list: {
    AquaSnap: {
      commercial: 1,
      url: 'https://www.nurgo-software.com/company/news/13-aquasnap',
      version: '[href^="/company/news/"][title^="AquaSnap"]',
      changelog: '.article-intro>ul',
      download: 'https://www.nurgo-software.com/download/AquaSnap.msi',
      install: ['install_msi', null, 'AquaSnap.Configurator.exe']
    },
    GameLibBooster: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Gaming-Related/GameLibBooster.shtml'
      },
      install: ['install_msi', null, 'GameLibBooster.Gui.exe']
    },
    TidyTabs: {
      commercial: 1,
      url: 'https://www.nurgo-software.com/company/news/20-tidytabs',
      version: '[href^="/company/news/"][title^="TidyTabs"]',
      changelog: '.article-intro>ul',
      download: 'https://www.nurgo-software.com/download/TidyTabs.msi',
      install: ['install_msi', null, 'TidyTabs.Gui.exe']
    }
  }
};
