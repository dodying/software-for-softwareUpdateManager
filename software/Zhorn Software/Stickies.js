'use strict';

module.exports = {
  url: 'https://www.zhornsoftware.co.uk/stickies/versions.html',
  version: '.versionheading',
  changelog: {
    selector: 'article',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: (res, $, fns, choice) => fns.walkLink('https://www.zhornsoftware.co.uk/stickies/download.html', fns, '.downloadbar>a'),
  install: 'install_zipped_single'
};
