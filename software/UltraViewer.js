'use strict';

const data = {
  url: 'https://ultraviewer.net/en/download.html',
  version: ['[href$=".exe"]', 'href', /UltraViewer_setup_([\d.]+)_en.exe/],
  download: '[href$=".exe"]',
  install: 'install_inno_cli'
};
module.exports = data;
