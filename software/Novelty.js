'use strict';

module.exports = {
  url: 'https://www.visualnovelty.com/download.html',
  version: '[href$=".zip"]',
  changelog: {
    url: 'https://www.visualnovelty.com/docs/changes.html',
    selector: '.content',
    attr: 'text',
    match: /^Version [\d.]+/,
    split: true
  },
  download: '[href$=".zip"]',
  install: 'install'
};
