'use strict';

const data = {
  commercial: 2,
  url: 'https://sysprogs.com/analyzer2go/download/',
  version: ['.download_button', 'href', /Analyzer2Go-(.*?)-trial.msi/i],
  download: '.download_button',
  install: ['install_msi', null, 'LogicViewer.exe']
};
module.exports = data;
