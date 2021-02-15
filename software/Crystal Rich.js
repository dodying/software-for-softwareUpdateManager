'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'USB Safely Remove': {
      commercial: 3,
      site: {
        download: 'https://safelyremove.com/download.htm'
      },
      versionChoice: ['https://safelyremove.com/startdownload.htm?imm&v=&t=', /usbsafelyremovesetup_([\d-]+).exe/, [1, /-/g, '.']],
      install: 'install_inno_type'
    },
    Zentimo: {
      commercial: 3,
      site: {
        download: 'https://zentimo.com/download.htm'
      },
      versionChoice: ['https://zentimo.com/startdownload.htm?imm&v=&t=', /zentimosetuppro_([\d-]+).exe/, [1, /-/g, '.']],
      install: 'install_inno_type'
    }
  }
};
