'use strict';

module.exports = {
  type: 'software-list',
  list: {
    FontExpert: {
      commercial: 3,
      url: 'https://www.proximasoftware.com/downloads/',
      version: ['#content .row>.span6:contains("FontExpert") p>strong', 'text', /Version ([\d.]+) Release (\d+)/, '$1.$2'],
      changelog: {
        url: 'https://www.proximasoftware.com/fontexpert/release-notes/',
        selector: '.well',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '#content .row>.span6:contains("FontExpert") .btn[href$=".exe"][href*="x64"]',
      install: 'install'
    },
    'Photo Manager': {
      commercial: 3,
      url: 'https://www.proximasoftware.com/downloads/',
      version: ['#content .row>.span6:contains("Photo Manager") p>strong', 'text', /Photo Manager Pro ([\d.]+) Release (\d+)/, '$1.$2'],
      changelog: {
        url: 'https://www.proximasoftware.com/photomanager/release-notes/',
        selector: '.well',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '#content .row>.span6:contains("Photo Manager") .btn[href$=".exe"][href*="x64"]',
      install: 'install'
    }
  }
};
