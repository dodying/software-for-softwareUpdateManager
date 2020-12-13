'use strict';

module.exports = {
  commercial: 2,
  url: 'http://www.sigma-rt.com/en/tcgames/version/index.html',
  version: ['.m-header', 'text', /TC Games ([\d.]+) \(([\d.]+)\)/, '$1.$2'],
  download: '[href$=".exe"]',
  install: 'install_nsis'
};
