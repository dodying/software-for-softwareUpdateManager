'use strict';

module.exports = {
  url: 'https://download.delta.chat/desktop/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    match: 'v([\\d.]+)/',
    sort: true
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    matchCheck: 'v([\\d.]+)/',
    sort: true
  }, {
    selector: 'a',
    matchCheck: 'Setup.*?.exe'
  }),
  install: ['install_zipped', 'install', 'app-64.7z']
};
