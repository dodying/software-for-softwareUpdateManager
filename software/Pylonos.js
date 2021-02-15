'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'oMega Commander': {
      commercial: 3,
      url: 'https://pylonos.com/omega/download',
      version: ['.downloadBut', 'href'],
      changelog: ['https://pylonos.com/omega/history', '.histBlock>.pagecell'],
      download: '.downloadBut',
      install: ['install_inno_type', null, '2']
    },
    'Stress Processor': {
      commercial: 3,
      url: 'https://pylonos.com/sp/download',
      version: ['.downloadBut', 'href'],
      download: '.downloadBut',
      install: 'install_inno'
    }
  }
};
