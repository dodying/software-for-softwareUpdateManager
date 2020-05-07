'use strict';

const data = {
  url: 'https://nodejs.org/en/download/current/',
  version: '.color-lightgray>strong',
  download: (res, $) => $('.download-matrix a[href$="x64.zip"]').eq(0).attr('href').replace(/\.zip$/, '.7z'),
  install: 'install',
  other: {
    LTS: {
      url: 'https://nodejs.org/en/download/'
    }
  }
};
module.exports = data;
