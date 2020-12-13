'use strict';

const data = {
  url: 'https://www.rawtherapee.com/',
  version: '.dl-buttons>div',
  changelog: {
    url: '#intro [href^="/downloads/"]',
    selector: '#new-features+ul'
  },
  download: '[href$="exe"]',
  install: 'install_inno'
};
module.exports = data;
