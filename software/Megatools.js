'use strict';

const data = {
  url: 'https://megatools.megous.com/builds/experimental/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    match: /megatools-(.*?)-win64.zip/
  }),
  changelog: {
    url: 'https://megatools.megous.com/builds/NEWS',
    match: /^megatools [\d.]+/,
    split: true
  },
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    matchCheck: /megatools-(.*?)-win64.zip/
  }),
  install: ['install', 'mega.ini']
};
module.exports = data;
