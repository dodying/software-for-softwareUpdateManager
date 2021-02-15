'use strict';

const data = {
  url: 'https://rink.hockeyapp.net/apps/6037e69fa4944acc9d83ef7682e60732',
  version: '.app-body>h3',
  changelog: {
    selector: '.release-notes',
    attr: 'text',
    match: /^Release notes for [\d.]+/,
    split: true
  },
  download: '.btn-ha-primary',
  install: ['install_msi', null, 'Stack.exe']
};
module.exports = data;
