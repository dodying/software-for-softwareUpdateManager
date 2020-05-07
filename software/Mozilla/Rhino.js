'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/mozilla/rhino/releases/latest'
  },
  versionChoice: [/Rhino ([\d.]+)/, true],
  downloadChoice: '.jar',
  install: 'install_single'
};
module.exports = data;
