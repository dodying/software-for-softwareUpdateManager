'use strict';

const data = {
  commercial: 3,
  url: 'https://www.superscript.app/download',
  version: ['[download="Superscript Setup.exe"]', 'href', /windows\/([\d.]+)/],
  changelog: 'h4+ul',
  download: '[download="Superscript Setup.exe"]',
  install: ['install_zipped', 'install', 'app-64.7z']
};
module.exports = data;
