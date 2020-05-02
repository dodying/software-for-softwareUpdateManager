'use strict';

const data = {
  tags: ['open-source'],
  site: {
    GitHub: 'https://github.com/chiflix/splayerx/releases/'
  },
  url: 'https://www.splayer.org/changelog.html',
  version: '[href*="releases/tag"]',
  changelog: 'ul',
  download: 'https://cdn.splayer.org/download/SPlayer-Setup-{version}.exe',
  install: ['install_zipped', 'install', 'app-64.7z'],
  other: {
    beta: {
      url: 'https://beta.splayer.org/',
      version: ['a[href$=".exe"]', 'href', /SPlayer-Setup-(.*?).exe/]
    }
  }
};
module.exports = data;
