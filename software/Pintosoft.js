'use strict';

module.exports = {
  type: 'software-list',
  list: {
    AutoOff: {
      url: 'http://www.starcodec.com/en/autooff/',
      version: ['[href^="/en/downloading.php?"]', 'href', /ver=(.*)/],
      changelog: 'p:contains("Changes")+ul',
      download: 'http://sg.pintosoft.com/autooff/AutoOff_{version}.exe',
      install: 'install_nsis'
    },
    'FocusOn Image Viewer': {
      url: 'http://www.pintosoft.com/en/foni',
      version: ['[href^="/en/download?"]', 'href', /ver=(.*?)($|&)/],
      download: 'http://sg.pintosoft.com/foni/{version}/FocusOnIV_{version}.exe',
      install: 'install_nsis'
    },
    'FocusOn Renamer': {
      url: 'http://www.pintosoft.com/en/foren',
      version: ['[href^="/en/download?"]', 'href', /ver=(.*?)($|&)/],
      download: 'http://sg.pintosoft.com/foren/FocusOnRenamer{version}.exe',
      install: 'install_nsis'
    },
    StarCodec: {
      url: 'http://www.starcodec.com/en/x64.php',
      version: ['[href^="/en/downloading.php?"]', 'href', /ver=(.*?)($|&)/],
      download: 'http://sg.pintosoft.com/codec/StarCodec64_{version}.exe',
      install: 'install_nsis'
    }
  }
};
