'use strict';

module.exports = {
  type: 'software-list',
  list: {
    DIPP: {
      url: 'https://www.yunqa.de/delphi/products/dipp/history',
      version: '.page>.level1+h3',
      changelog: '.page>.level1+h3~.level2',
      download: '[href*="delphi/downloads/"]',
      install: 'install_single'
    },
    PasDoc: {
      url: 'https://www.yunqa.de/delphi/products/pasdoc/history',
      version: '.page>.level1+h2',
      changelog: '.page>.level1+h2~.level2',
      download: '[href*="delphi/downloads/"]',
      install: 'install'
    },
    SQLiteSpy: {
      url: 'https://www.yunqa.de/delphi/products/sqlitespy/history',
      version: '.page>.level1+h2',
      changelog: '.page>.level1+h2~.level2',
      download: '[href*="delphi/downloads/"]',
      install: 'install'
    },
    WikiTaxi: {
      url: 'https://www.yunqa.de/delphi/products/wikitaxi/history',
      version: '.page>.level1+h2',
      changelog: '.page>.level1+h2~.level2',
      download: '[href*="delphi/downloads/"]',
      install: 'install'
    }
  }
};
