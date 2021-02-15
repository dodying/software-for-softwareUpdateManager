'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Aezay Utilities': {
      url: 'http://aezay.dk/aezay/azutils/',
      version: ['a[href$=".rar"]', 'text', /([\d.]+\w*)/],
      download: 'a[href$=".rar"]',
      install: 'install'
    },
    FileGraph: {
      url: 'http://aezay.dk/aezay/filegraph/',
      version: ['a[href$=".rar"]', 'text', /([\d.]+\w*)/],
      download: 'a[href$=".rar"]',
      install: 'install'
    },
    'FSB Extractor': {
      url: 'http://aezay.dk/aezay/fsbextractor/',
      version: ['a[href$=".rar"]', 'text', /([\d.]+\w*)/],
      download: 'a[href$=".rar"]',
      install: 'install_zipped_single'
    },
    'Registry Commander': {
      url: 'http://aezay.dk/aezay/regcmd/',
      version: ['a[href$=".rar"]', 'text', /([\d.]+\w*)/],
      download: 'a[href$=".rar"]',
      install: 'install'
    },
    'SSD-Z': {
      url: 'http://aezay.dk/aezay/ssdz/',
      version: ['a[href$=".zip"]', 'text', /([\d.]+\w*)/],
      download: 'a[href$=".zip"]',
      install: 'install_zipped_single'
    },
    'Steam Sweeper': {
      url: 'http://aezay.dk/aezay/steamsweeper/',
      version: ['a[href$=".zip"]', 'text', /([\d.]+\w*)/],
      download: 'a[href$=".zip"]',
      install: 'install'
    },
    'Window Hacker': {
      url: 'http://aezay.dk/aezay/wndhack/',
      version: ['a[href$=".rar"]', 'text', /([\d.]+\w*)/],
      download: 'a[href$=".rar"]',
      install: 'install'
    }
  }
};
