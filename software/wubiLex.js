'use strict';

module.exports = {
  url: 'http://wubi.aardio.com/update/',
  version: (res) => res.json.version,
  changelog: (res) => res.json.description,
  download: 'http://wubi.aardio.com/update/wubiLex.7z',
  install: 'install_single'
};
