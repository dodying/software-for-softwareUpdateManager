'use strict';

const data = {
  url: 'https://codedead.com/?page_id=35',
  version: ['[href$=".exe"]:contains("Portable")', 'href', /DeadHash%20(.*?).exe/],
  download: '[href$=".exe"]:contains("Portable")',
  install: ['install_zipped', 'install', 'app-64.7z']
};
module.exports = data;
