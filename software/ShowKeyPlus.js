'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/Superfly-Inc/ShowKeyPlus/releases/latest'
  },
  versionChoice: ['.zip$', /([\d.]+)/, false, 'name'],
  install: ['install_zipped', 'install_zipped_single', 'ShowKeyPlus_x64.zip'],
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/Superfly-Inc/ShowKeyPlus/releases'
      },
      versionChoice: ['.zip$', null, null, 'published_at']
    }
  }
};
module.exports = data;
