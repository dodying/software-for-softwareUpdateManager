'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Blocker: {
      commercial: 2,
      url: 'https://getcoldturkey.com/news/',
      version: '.win',
      changelog: '.container-odd>.features-blocker>div',
      download: 'https://getcoldturkey.com/files/Cold_Turkey_Installer.exe',
      install: 'install_inno'
    },
    Micromanager: {
      commercial: 2,
      url: 'https://getcoldturkey.com/micromanager/news/',
      version: '.win',
      changelog: '.container-odd>.features-blocker>div',
      download: 'https://getcoldturkey.com/files/Cold_Turkey_Micromanager_Free_Installer.exe',
      install: 'install_inno'
    },
    Writer: {
      commercial: 2,
      url: 'https://getcoldturkey.com/writer/news/',
      version: '.win',
      changelog: '.container-odd>.features-blocker>div',
      download: 'https://getcoldturkey.com/files/Cold_Turkey_Writer_Free.exe',
      install: 'install_single'
    }
  }
};
