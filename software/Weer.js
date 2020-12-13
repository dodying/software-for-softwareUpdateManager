'use strict';

const data = {
  url: 'https://weerdbg.com/zh-cn/download.md',
  version: '[href$="windows.zip"]',
  changelog: {
    url: 'https://weerdbg.com/zh-cn/changelog.md',
    match: /^v[\d.]+/,
    split: true
  },
  download: '[href$="windows.zip"]',
  install: 'install_zipped_single'
};
module.exports = data;
