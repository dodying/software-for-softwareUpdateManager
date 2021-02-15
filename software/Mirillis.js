'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Action: {
      url: 'https://mirillis.com/download-action',
      version: '.download_btn+ul>li',
      changelog: ['https://mirillis.com/action-history', '.list_pos ul'],
      download: '.download_btn',
      install: 'install_nsis'
    },
    Monflo: {
      commercial: 3,
      url: 'https://monflo.mirillis.com/download/thank-you?file=monflopc',
      version: '.download+ul>li',
      download: 'a.download',
      install: 'install_nsis'
    },
    Splash: {
      url: 'https://mirillis.com/download-splash-free-hd-video-player',
      version: '.download_btn+ul>li',
      changelog: ['https://mirillis.com/splash-history', '.list_pos ul'],
      download: '.download_btn',
      install: 'install_nsis'
    }
  }
};
