'use strict';

const data = {
  site: {
    'GitHub-Api': 'https://api.github.com/repos/wireapp/wire-desktop/releases'
  },
  versionChoice: { filter: i => i.tag_name.match(/windows/), match: /windows\/(.*)/ },
  download: 'https://wire-app.wire.com/win/prod/WireSetup.exe',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
};
module.exports = data;
