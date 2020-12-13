'use strict';

module.exports = {
  commercial: 3,
  site: {
    download: 'https://safelyremove.com/download.htm'
  },
  versionChoice: ['https://safelyremove.com/startdownload.htm?imm&v=&t=', /usbsafelyremovesetup_([\d-]+).exe/, [1, /-/g, '.']],
  install: 'install_inno_type'
};
