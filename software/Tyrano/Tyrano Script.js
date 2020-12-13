'use strict';

module.exports = {
  url: 'https://tyrano.jp/dl/v5',
  version: ['[href$=".zip"]', 'text', /Ver(.*?)（/],
  download: '[href$=".zip"]',
  install: 'install'
};
