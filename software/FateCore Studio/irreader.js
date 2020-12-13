'use strict';

const data = {
  commercial: 2,
  url: 'http://irreader.fatecore.com/',
  version: 'h1',
  changelog: {
    selector: 'pre',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'a[href*="irreader"][href$=".zip"]',
  install: ['install_zipped', 'install_zipped', '.exe', 'install', 'app-32.7z']
};
module.exports = data;
