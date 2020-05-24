'use strict';

const data = {
  site: {
    'GitHub-Api': 'https://api.github.com/repos/Kong/insomnia/releases'
  },
  versionChoice: /Insomnia.Setup.(.*?).exe$/,
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
  other: {
    designer: {
      versionChoice: /insomnia-designer-(.*?)-full.nupkg$/,
      install: ['install', null, 'lib\\net*']
    },
    core: {}
  }
};
module.exports = data;
