'use strict';

module.exports = {
  url: 'https://photoflare.io/downloads/',
  version: '.versiontitle',
  changelog: {
    url: '.versiontitle>a',
    selector: '.entry-content'
  },
  download: '[href$="win_portable.zip"]',
  install: 'install'
};
