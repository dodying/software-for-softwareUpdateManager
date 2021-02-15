'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'bsnes-mt': {
      url: 'https://tanalin.com/en/projects/bsnes-mt/',
      version: '.download>a',
      download: '.download>a',
      install: 'install_zipped_single'
    },
    DoNothing: {
      url: 'https://tanalin.com/en/projects/do-nothing/',
      version: '.download>a',
      download: '.download>a',
      install: 'install_zipped_single'
    },
    ExplorerHiDpiFix: {
      url: 'https://tanalin.com/en/projects/explorer-hi-dpi-fix/',
      version: '.download>a',
      download: '.download>a',
      install: ['install_zipped_single', '64bit.exe']
    },
    IntegerScaler: {
      url: 'https://tanalin.com/en/projects/integer-scaler/',
      version: '.download>a',
      download: '.download>a',
      install: ['install_zipped_single', '64bit.exe']
    },
    MultilinePathEnv: {
      url: 'https://tanalin.com/en/projects/multiline-path-env/',
      version: '.download>a',
      download: '.download>a',
      install: 'install_zipped_single'
    },
    WhiteScreen: {
      url: 'https://tanalin.com/en/projects/white-screen/',
      version: '.download>a',
      download: '.download>a',
      install: 'install_zipped_single'
    }
  }
};
