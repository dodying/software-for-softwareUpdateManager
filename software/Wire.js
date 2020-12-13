'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/wireapp/wire-desktop/releases/latest'
  },
  versionChoice: { filter: i => i.tag_name.match(/windows/), match: /windows\/(.*)/ },
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
};
module.exports = data;
