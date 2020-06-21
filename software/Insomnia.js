'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/Kong/insomnia/releases/latest'
  },
  versionChoice: 'Insomnia.Core-(.*?).exe$',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
  other: {
    designer: {
      versionChoice: 'Insomnia.Designer-(.*?).exe$'
    },
    core: {}
  }
};
module.exports = data;
