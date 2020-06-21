'use strict';

module.exports = {
  url: 'https://www.lastingpaper.com/worker/latest_downloadable_version_info',
  version: (res) => res.json.windows.latestVersion,
  changelog: {
    url: 'https://www.lastingpaper.com/release_notes/',
    selector: '.page>.container',
    attr: 'text',
    match: /^[\d.]+/,
    split: true
  },
  download: (res) => 'https://www.lastingpaper.com/releases/windows/' + res.json.windows.fileName,
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
};
