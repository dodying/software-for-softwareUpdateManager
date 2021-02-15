'use strict';

module.exports = {
  type: 'software-list',
  list: {
    QveAudio: {
      url: 'http://www.qvevideo.com/audio',
      version: ['.download>a', 'href', /QveAudio-(.*?).exe/],
      download: '.download>a',
      install: 'install_nsis'
    },
    QveCompress: {
      url: 'http://www.qvevideo.com/compress',
      version: ['.download>a', 'href', /QveCompress-(.*?).exe/],
      download: '.download>a',
      install: 'install_nsis'
    },
    QveRecorder: {
      url: 'http://www.qvevideo.com/',
      version: ['.download>a', 'href', /QveRecorder-(.*?).exe/],
      download: '.download>a',
      install: 'install_nsis'
    },
    QveVideoConverter: {
      url: 'http://www.qvevideo.com/converter',
      version: ['.download>a', 'href', /QveVideoConverter-(.*?).exe/],
      download: '.download>a',
      install: 'install_nsis'
    }
  }
};
