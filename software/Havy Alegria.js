'use strict';

module.exports = {
  type: 'software-list',
  list: {
    InnoExtractor: {
      url: 'http://www.havysoft.cl/descargar.html',
      version: '#principal > table:nth-child(6) > tbody > tr:nth-child(1) > td:nth-child(2)',
      download: 'http://www.havysoft.cl/download/IE_Install.zip',
      install: ['install_zipped', 'install_inno']
    },
    MassTube: {
      commercial: 2,
      url: 'http://www.havysoft.cl/descargar.html',
      version: '#principal > table:nth-child(6) > tbody > tr:nth-child(2) > td:nth-child(2)',
      download: 'http://www.masstube.cl/download/MT_Install.zip',
      install: ['install_zipped', 'install_inno']
    }
  }
};
