'use strict';

module.exports = {
  url: 'https://www.dvdvideosoft.com/download.htm?fname=FreeVideoConverter.exe&ls=topWinPrimary&auid=true',
  version: ['#downloadlink', 'href', /FreeVideoConverter_([\d.]+)/],
  download: '#downloadlink', // http://ic.dvdvideosoft.net/FreeVideoConverter.exe
  install: 'install'
};
