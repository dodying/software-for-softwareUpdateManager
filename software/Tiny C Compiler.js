'use strict';

module.exports = {
  url: 'https://download.savannah.gnu.org/releases/tinycc/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    match: /tcc-(.*?)-win64-bin.zip/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    matchCheck: /tcc-(.*?)-win64-bin.zip/
  }),
  install: 'install'
};
