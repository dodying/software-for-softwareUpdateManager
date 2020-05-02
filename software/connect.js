'use strict';

const data = {
  site: {
    BitBucket: 'https://api.bitbucket.org/2.0/repositories/gotoh/connect/downloads'
  },
  versionChoice: /connect-([\d.]+)-win32-msvc.zip/,
  install: 'install_zipped_single'
};
module.exports = data;
