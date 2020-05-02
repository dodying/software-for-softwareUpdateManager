'use strict';

const data = {
  url: 'https://updates.signal.org/desktop/latest.yml?bar=ndtelr',
  version: (res, $) => res.body.match(/version: ([\d.]+)/)[1],
  download: (res, $) => 'https://updates.signal.org/desktop/' + res.body.match(/path: (.*)/)[1],
  install: ['install_zipped', 'install', 'app-64.7z']
};
module.exports = data;
