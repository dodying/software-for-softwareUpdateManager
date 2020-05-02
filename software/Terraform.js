'use strict';

const data = {
  url: 'https://www.terraform.io/downloads.html',
  version: ['[href$="windows_amd64.zip"]', 'href', /terraform_(.*?)_windows_amd64.zip/],
  download: '[href$="windows_amd64.zip"]',
  install: 'install_zipped_single'
};
module.exports = data;
