'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Finetune: {
      commercial: 2,
      url: 'https://flavio.tordini.org/finetune',
      version: ['#news li>a', 'text', /Finetune ([\d.]+)/],
      download: 'https://flavio.tordini.org/files/finetune/finetune.exe',
      install: 'install_nsis'
    },
    Minitube: {
      commercial: 2,
      url: 'https://flavio.tordini.org/minitube',
      version: '#news li>a',
      download: 'https://flavio.tordini.org/files/minitube/minitube.exe',
      install: 'install_nsis'
    },
    Musictube: {
      commercial: 2,
      url: 'https://flavio.tordini.org/musictube',
      version: '#news li>a',
      download: 'https://flavio.tordini.org/files/musictube/musictube.exe',
      install: 'install_nsis'
    },
    Musique: {
      url: 'https://flavio.tordini.org/musique',
      version: '#news li>a',
      download: 'https://flavio.tordini.org/files/musique/musique.exe',
      install: 'install_nsis'
    }
  }
};
