'use strict';

const data = {
  url: 'https://www.wodeabc.com/Article/Show/8002027',
  version: 'h1:contains("最新")+p',
  changelog: 'h1:contains("最新")+p+ul',
  download: '[href$="64bit.zip"]',
  install: 'install'
};
module.exports = data;
