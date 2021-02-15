'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Alfa eBooks Manager': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Others/E-Book/Alfa-Ebooks-Manager.shtml'
      },
      download: 'https://www.alfaebooks.com/aemsetup.msi',
      install: ['install_msi', null, 'aem.exe']
    },
    AlfaReader: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Others/E-Book/AlfaReader.shtml'
      },
      download: 'https://www.alfareader.org/alfareader.msi',
      install: ['install_msi', null, 'AlfaReader.exe']
    },
    Kindlian: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Others/E-Book/Kindlian.shtml'
      },
      download: 'https://www.kindlian.com/files/kindlian.msi',
      install: ['install_msi', null, 'Kindlian.exe']
    }
  }
};
