'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/crystalidea/macs-fan-control/releases/latest'
  },
  versionChoice: '.exe',
  install: ['install_inno', null, { '{code_Qt32Dir}': '{dir}' }]
};
module.exports = data;
