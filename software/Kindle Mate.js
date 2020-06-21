'use strict';

module.exports = {
  url: 'https://kmate.me/download/',
  version: '[href$="Portable.zip"]',
  changelog: {
    url: 'https://kmate.me/new/',
    selector: '.entry-content',
    attr: 'text',
    match: /^Kindle Mate Version [\d.]+/,
    split: true
  },
  download: '[href$="Portable.zip"]',
  install: 'install'
};
