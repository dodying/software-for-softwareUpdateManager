'use strict';

module.exports = {
  type: 'software-list',
  list: {
    AHT: {
      url: 'https://www.zhornsoftware.co.uk/aht/index.html',
      version: '.versionheading',
      changelog: '.versionheading+p',
      download: '.downloadbar>a',
      install: 'install_zipped_single'
    },
    Bart: {
      url: 'https://www.zhornsoftware.co.uk/bart/index.html',
      version: '.versionheading',
      changelog: '.versionheading+p',
      download: '.downloadbar>a',
      install: 'install_zipped_single'
    },
    Caffeine: {
      url: 'https://www.zhornsoftware.co.uk/caffeine/index.html',
      version: '.versionheading',
      changelog: '.versionheading+p',
      download: '.downloadbar>a',
      install: 'install'
    },
    Stickies: {
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
    },
    ZMeter: {
      url: 'https://www.zhornsoftware.co.uk/zmeter/index.html',
      version: '.versionheading',
      changelog: '.versionheading+p',
      download: '.downloadbar>a',
      install: 'install_zipped_single'
    }
  }
};
