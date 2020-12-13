'use strict';

const data = {
  commercial: 2,
  url: 'https://www.partitionwizard.com/upgrade-history.html',
  version: '.upgrade-v>h2',
  changelog: '.upgrade-v>ul',
  download: (res, $) => {
    const href = $('.down-btn').attr('href');
    const product = href.match(/(\?|&)p=(.*?)(&|$)/)[2];
    const edition = href.match(/(\?|&)e=(.*?)(&|$)/)[2];
    return 'https://cdn2.minitool.com/?' + 'p=' + product + '&e=' + edition;
  },
  install: 'install_inno_type'
};
module.exports = data;
