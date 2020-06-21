'use strict';

module.exports = {
  url: 'http://pan-yz.chaoxing.com/app/downloadurl',
  version: (res) => res.json.versions,
  download: (res) => res.json.url,
  install: 'install_nsis'
};
