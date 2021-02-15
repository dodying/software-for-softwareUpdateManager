'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Connectify Hotspot': {
      commercial: 3,
      url: 'https://www.connectify.me/new-release/',
      version: 'h2.h2+h2.h3',
      changelog: '#x-section-2 .x-text+.x-text',
      download: 'https://downloads.connectify.me/',
      install: ['install_nsis', null, '$TEMP\\Connectify\\$_13_']
    },
    Speedify: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Other-Internet-Related/Speedify.shtml'
      },
      download: 'https://downloads.speedify.com/SpeedifyInstaller.exe',
      install: ['install_nsis', null, '$TEMP\\Speedify\\$_13_']
    }
  }
};
