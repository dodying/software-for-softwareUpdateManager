'use strict';

module.exports = {
  commercial: 3,
  url: 'https://www.medcalc.org/download.php',
  version: '#content>h1',
  download: 'https://www.medcalc.org/download/medcalcsetup.msi',
  install: ['install_msi', null, 'medcalc.exe'],
  other: {
    'file viewer': {
      commercial: 0,
      download: 'https://www.medcalc.org/download/medcalcviewersetup.msi'
    }
  }
};
