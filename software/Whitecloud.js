'use strict';

const data = {
  url: 'https://whitecloud.xyyaya.com/',
  version: ['a[href$=".zip"]', 'href', /%20([\d.]+).zip/],
  download: 'a[href$=".zip"]',
  install: 'install'
};
module.exports = data;
