'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Color Palette Editor': {
      url: 'https://www.cyotek.com/cyotek-palette-editor/downloads',
      version: '.file-version>a',
      changelog: ['https://www.cyotek.com/cyotek-palette-editor/revision-history', '.col-md-9>.row'],
      download: (res, $) => $('.file-option>a').eq(0).attr('href').replace('/info/', '/get/'),
      install: 'install_inno'
    },
    CopyTools: {
      url: 'https://www.cyotek.com/cyotek-copytools/downloads',
      version: '.file-version>a',
      changelog: ['https://www.cyotek.com/cyotek-copytools/revision-history', '.col-md-9>.row'],
      download: (res, $) => $('.file-option>a').eq(0).attr('href').replace('/info/', '/get/'),
      install: 'install_inno'
    },
    'Gif Animator': {
      url: 'https://www.cyotek.com/cyotek-gif-animator/downloads',
      version: '.file-version>a',
      changelog: ['https://www.cyotek.com/cyotek-gif-animator/revision-history', '.col-md-9>.row'],
      download: (res, $) => $('.file-option>a').eq(0).attr('href').replace('/info/', '/get/'),
      install: 'install_inno'
    },
    'Sitemap Creator': {
      url: 'https://www.cyotek.com/cyotek-sitemap-creator/downloads',
      version: '.file-version>a',
      changelog: ['https://www.cyotek.com/cyotek-sitemap-creator/revision-history', '.col-md-9>.row'],
      download: (res, $) => $('.file-option>a').eq(0).attr('href').replace('/info/', '/get/'),
      install: 'install_inno'
    },
    Slicr: {
      url: 'https://www.cyotek.com/cyotek-slicr/downloads',
      version: '.file-version>a',
      changelog: ['https://www.cyotek.com/cyotek-slicr/revision-history', '.col-md-9>.row'],
      download: (res, $) => $('.file-option>a').eq(0).attr('href').replace('/info/', '/get/'),
      install: 'install_inno'
    },
    Spriter: {
      url: 'https://www.cyotek.com/cyotek-spriter/downloads',
      version: '.file-version>a',
      changelog: ['https://www.cyotek.com/cyotek-spriter/revision-history', '.col-md-9>.row'],
      download: (res, $) => $('.file-option>a').eq(0).attr('href').replace('/info/', '/get/'),
      install: 'install_inno'
    },
    WebCopy: {
      url: 'https://www.cyotek.com/cyotek-webcopy/downloads',
      version: '.file-version>a',
      changelog: ['https://www.cyotek.com/cyotek-webcopy/revision-history', '.col-md-9>.row'],
      download: (res, $) => $('.file-option>a').eq(0).attr('href').replace('/info/', '/get/'),
      install: 'install_inno'
    }
  }
};
