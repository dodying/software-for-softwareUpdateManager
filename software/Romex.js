'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Primo Ramdisk': {
      commercial: 3,
      url: 'https://www.romexsoftware.com/en-us/primo-ramdisk/download.html',
      version: '.label-info',
      changelog: ['https://www.romexsoftware.com/en-us/primo-ramdisk/changelog.html', '.container-body>ul'],
      download: 'https://www.romexsoftware.com/download/Primo.Ramdisk.Mui.Setup.zip',
      install: 'install_inno_type',
      other: {
        server: {
          download: 'https://www.romexsoftware.com/download/Primo.Ramdisk.Srv.Mui.Setup.zip'
        }
      }
    },
    PrimoCache: {
      commercial: 3,
      url: 'https://www.romexsoftware.com/en-us/primo-cache/download.html',
      version: '.label-info',
      changelog: ['https://www.romexsoftware.com/en-us/primo-cache/changelog.html', '.container-body>ul'],
      download: 'https://www.romexsoftware.com/download/PrimoCache.Setup.zip',
      install: 'install_inno_type',
      other: {
        server: {
          download: 'https://www.romexsoftware.com/download/PrimoCache.Srv.Setup.zip'
        }
      }
    }
  }
};
