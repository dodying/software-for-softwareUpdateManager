'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/wixtoolset/wix3/releases/latest'
  },
  versionChoice: ['binaries.zip', /v([\d.]+)/, false, 'name'],
  install: 'install'
};
module.exports = data;
