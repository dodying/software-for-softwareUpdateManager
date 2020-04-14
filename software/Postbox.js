'use strict';

const data = {
  commercial: 3,
  url: 'https://www.postbox-inc.com/product/releasenotes',
  version: '[role="main"] h3',
  changelog: '[role="main"] h3+ul',
  download: async (res, $, fns, choice) => fns.walkLink('https://www.postbox-inc.com/download/success-win', fns, {
    selector: '[role="main"]>iframe',
    attr: 'src'
  }),
  install: ['install', null, 'core']
};
module.exports = data;
