'use strict';

const data = {
  commercial: 2,
  url: 'https://privacyroot.com/software/net1/all.index',
  version: (res, $) => res.body.match(/TITLE=Safe Startup\r?\nVERSION=(.*)/m)[1],
  download: 'https://privacyroot.com/software/setups/setup_safe_startup.exe'
};
module.exports = data;
