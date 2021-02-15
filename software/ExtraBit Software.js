'use strict';

module.exports = {
  type: 'software-list',
  list: {
    CopyFilenames: {
      url: 'https://www.extrabit.com/copyfilenames/download',
      version: '[role="button"][href$=".exe"]',
      download: '[role="button"][href$=".exe"]',
      install: 'install_inno',
      other: {
        pro: {
          commercial: 3,
          url: 'https://www.extrabit.com/copyfilenamespro/download'
        }
      }
    },
    ExeProperties: {
      url: 'https://www.extrabit.com/exeproperties/download',
      version: '[role="button"][href$=".exe"]',
      download: '[role="button"][href$=".exe"]',
      install: 'install_inno'
    },
    ExtraBits: {
      commercial: 3,
      url: 'https://www.extrabit.com/extrabits/download',
      version: '[role="button"][href$=".exe"]',
      download: '[role="button"][href$=".exe"]',
      install: 'install_inno'
    },
    'Peg Solitaire': {
      url: 'https://www.extrabit.com/pegsol/download',
      version: '[role="button"][href$=".exe"]',
      download: '[role="button"][href$=".exe"]',
      install: 'install_inno'
    },
    PlainTextClipboard: {
      url: 'https://www.extrabit.com/plaintextclipboard/download',
      version: '[role="button"][href$=".exe"]',
      download: '[role="button"][href$=".exe"]',
      install: 'install_inno'
    },
    RenameMan: {
      commercial: 3,
      url: 'https://www.extrabit.com/renameman/download',
      version: '[role="button"][href$=".exe"]',
      download: '[role="button"][href$=".exe"]',
      install: 'install_inno'
    },
    'SpaceMan 99': {
      commercial: 3,
      url: 'https://www.extrabit.com/spaceman99/download',
      version: '[role="button"][href$=".exe"]',
      download: '[role="button"][href$=".exe"]',
      install: 'install_inno'
    }
  }
};
