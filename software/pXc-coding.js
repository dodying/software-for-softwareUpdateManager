'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Alternative Flash Player Auto-Updater': {
      commercial: 2,
      url: 'https://pxc-coding.com/alternative-flash-player-auto-updater/changelog/',
      version: '.fusion-toggle-heading',
      changelog: '.panel-body',
      download: 'https://pxc-coding.com/dl/alternative-flash-player-auto-updater/',
      install: 'install_inno'
    },
    DoNotSpy10: {
      commercial: 2,
      url: 'https://pxc-coding.com/donotspy10/donotspy-10-changelog/',
      version: ['.fusion-toggle-heading', 'text', /Version (.*) \(/],
      changelog: '.panel-body',
      download: 'https://pxc-coding.com/dl/donotspy10/',
      install: 'install_inno'
    },
    DoNotSpy78: {
      commercial: 2,
      url: 'https://pxc-coding.com/donotspy78/changelog/',
      version: '.fusion-toggle-heading',
      changelog: '.panel-body',
      download: 'https://pxc-coding.com/dl/donotspy78/',
      install: 'install_inno'
    },
    'Office Key Remover': {
      url: 'https://pxc-coding.com/office-key-remover/changelog/',
      version: '.fusion-toggle-heading',
      changelog: '.panel-body',
      download: 'https://pxc-coding.com/dl/office-key-remover/',
      install: 'install_inno_single'
    },
    'Tweak Me': {
      url: 'https://pxc-coding.com/tweakme/changelog/',
      version: '.fusion-toggle-heading',
      changelog: '.panel-body',
      download: 'https://pxc-coding.com/dl/tweak-me/'
    }
  }
};
