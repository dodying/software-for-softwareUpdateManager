'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/lordmulder/LameXP/releases/latest'
  },
  versionChoice: ['.zip$', /LameXP v([\d.]+)/, false, 'name'],
  install: 'install_zipped_single'
};
module.exports = data;
