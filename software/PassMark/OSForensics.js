'use strict';

const data = {
  commercial: 3,
  url: 'https://www.osforensics.com/whatsnew.html',
  version: ['.whats-new-block>h3', 'text', /([\d.]+ build \d+)/],
  changelog: '.whats-new-block',
  download: 'https://downloads.passmark.com/osforensics/downloads/osf.exe',
  install: 'install_inno'
};
module.exports = data;
