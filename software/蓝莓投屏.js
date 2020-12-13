'use strict';

const data = {
  url: 'http://deeprd.com/', // https://github.com/xfirefly/Airplay-SDK
  version: () => '1',
  download: '[href$="win-airplay.zip"]',
  install: 'install',
  other: {
    cast: {
      download: '[href$="windows_sender.zip"]'
    }
  }
};
module.exports = data;
