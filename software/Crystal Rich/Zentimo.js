'use strict';

module.exports = {
  commercial: 3,
  site: {
    download: 'https://zentimo.com/download.htm'
  },
  versionChoice: ['https://zentimo.com/startdownload.htm?imm&v=&t=', /zentimosetuppro_([\d-]+).exe/, [1, /-/g, '.']],
  install: 'install_inno_type'
};
