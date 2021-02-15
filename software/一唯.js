'use strict';

module.exports = {
  type: 'software-list',
  list: {
    EV剪辑: {
      commercial: 2,
      url: 'https://www.ieway.cn/evedit.html',
      version: '[href$=".exe"]',
      download: '[href$=".exe"]',
      install: ['install_zipped', 'install', 'app.7z']
    },
    EV加密: {
      commercial: 2,
      url: 'https://www.ieway.cn/videoenc.html',
      version: '[href$=".exe"]',
      download: '[href$=".exe"]',
      install: ['install_zipped', 'install', 'app.7z']
    },
    'EV加密播放器 2': {
      commercial: 2,
      url: 'https://www.ieway.cn/evplayer2.html',
      version: '[href$=".exe"]',
      download: '[href$=".exe"]',
      install: ['install_zipped', 'install', 'app.7z']
    },
    EV录屏: {
      commercial: 2,
      url: 'https://www.ieway.cn/evcapture.html',
      version: '[href$=".exe"]',
      download: '[href$=".exe"]',
      install: ['install_zipped', 'install', 'app.7z']
    },
    EV播放器: {
      commercial: 2,
      url: 'https://www.ieway.cn/evplayer.html',
      version: '[href$=".exe"]',
      download: '[href$=".exe"]',
      install: ['install_zipped', 'install', 'app.7z']
    }
  }
};
