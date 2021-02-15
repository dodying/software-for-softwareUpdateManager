'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Daphne: {
      url: 'http://www.drk.com.ar/daphne.php',
      version: 'h1',
      changelog: 'h3+ul',
      download: 'http://www.drk.com.ar/daphne/Daphne_setup_x64.msi',
      install: ['install_msi', null, 'Daphne.exe']
    },
    DRKSpiderJava: {
      url: 'http://www.drk.com.ar/spider.php',
      version: 'h1',
      changelog: 'h3:contains("What\'s new")+ul',
      download: 'http://www.drk.com.ar/spider/DRKSpiderJava.zip',
      install: 'install'
    },
    'TCP-IP Builder': {
      url: 'http://www.drk.com.ar/builder.php',
      version: 'h1',
      changelog: 'h3:contains("New in")+ul',
      download: 'http://www.drk.com.ar/builder/Builder_setup.exe',
      install: 'install_nsis'
    }
  }
};
