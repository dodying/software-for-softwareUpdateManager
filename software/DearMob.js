'use strict';

module.exports = {
  type: 'software-list',
  list: {
    '5KPlayer': {
      url: 'http://dl1.5kplayer.com/download/onlineload.config',
      version: (res, $) => res.json.version,
      download: (res, $) => res.json.x64.url,
      installType: 'nsis',
      install: ['install_zipped', 'install', 'app.7z']
    },
    'iPhone Manager': {
      site: {
        FileHippo: 'https://filehippo.com/download_dearmob-iphone-manager/'
      },
      download: 'https://www.5kplayer.com/download/dearmob-iphone-manager.exe',
      install: ['install_zipped', 'install', 'app.7z']
    }
  }
};
