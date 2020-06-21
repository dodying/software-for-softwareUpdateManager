'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/mozilla/rhino/releases/latest'
  },
  versionChoice: ['.jar', /Rhino ([\d.]+)/, false, 'name'],
  install: 'install_single'
};
module.exports = data;
