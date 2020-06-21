'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/henrypp/chromium/releases'
  },
  versionChoice: {
    filter: i => i.assets.some(j => j.name.match('.exe')) && i.tag_name.match('win64'),
    match: 'v(.*)-win64'
  },
  downloadChoice: '.exe',
  install: ['install_zipped', 'install']
};
module.exports = data;
