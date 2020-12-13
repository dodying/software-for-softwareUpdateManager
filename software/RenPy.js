'use strict';

module.exports = {
  url: 'https://www.renpy.org/latest.html',
  version: 'h1',
  changelog: {
    url: 'https://www.renpy.org/doc/html/changelog.html',
    selector: '#full-changelog',
    attr: 'text',
    match: /^[\d.]+/,
    split: true
  },
  download: '.center>a[href$=".exe"]',
  install: 'install'
};
