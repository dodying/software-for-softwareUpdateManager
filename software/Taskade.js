'use strict';

const data = {
  url: 'https://www.taskade.com/downloads',
  version: ['[href$=".exe"]', 'href', /Taskade_Setup_([\d.]+).exe/],
  download: '[href$=".exe"]',
  install: ['install_zipped', 'install_zipped', null, 'install', 'app-64.7z']
};
module.exports = data;
