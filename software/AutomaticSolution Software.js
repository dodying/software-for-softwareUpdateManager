'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Axife: {
      commercial: 3,
      url: 'https://www.axife.com/downloads.html',
      version: 'body > div.macro > div.down > table > tbody > tr:nth-child(3) > td:nth-child(2)',
      download: 'http://dl.axife.com/AxifeStandard-Setup.exe',
      install: 'install_inno'
    },
    'Efficient Macro Recorder': {
      commercial: 3,
      url: 'http://www.emacrorecorder.com/downloads.html',
      version: 'body > div.macro > div.down > table > tbody > tr:nth-child(6) > td:nth-child(2)',
      download: 'http://down.emacrorecorder.com/EMacroRecorderXls-Setup.zip',
      install: ['install_zipped', 'install_inno']
    },
    GhostMouse: {
      url: 'https://www.remouse.com/ghostmouse-remouse-downloads.html',
      version: 'body > div.macro > div.down > table > tbody > tr:nth-child(2) > td:nth-child(3)',
      download: 'http://down.ghost-mouse.com/GhostMouse-Setup.exe',
      install: 'install_inno'
    },
    ReMouse: {
      commercial: 2,
      url: 'https://www.remouse.com/downloads.html',
      version: 'body > div.macro > div.down > table > tbody > tr:nth-child(3) > td:nth-child(2)',
      download: 'http://dl.remouse.com/ReMouseStandard-Setup.exe',
      install: 'install_inno'
    }
  }
};
