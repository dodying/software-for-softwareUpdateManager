'use strict';

const data = {
  commercial: 2,
  url: 'https://flavio.tordini.org/finetune',
  version: ['#news li>a', 'text', /Finetune ([\d.]+)/],
  download: 'https://flavio.tordini.org/files/finetune/finetune.exe',
  install: 'install_nsis'
};
module.exports = data;
