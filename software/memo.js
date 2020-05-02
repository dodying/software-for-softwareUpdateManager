'use strict';

const data = {
  url: 'https://github.com/btk/memo/blob/master/CHANGELOG.md',
  version: ['.markdown-body h3:has(.anchor[href^="#v"])', 'text', /^v(.*)/],
  download: 'https://usememo.com/MemoSetup.exe',
  install: ['install_zipped', 'install', 'app-64.7z']
};
module.exports = data;
