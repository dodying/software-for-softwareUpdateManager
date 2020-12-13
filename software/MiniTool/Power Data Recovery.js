'use strict';

const data = {
  commercial: 2,
  url: 'https://www.minitool.com/data-recovery-software/upgrade-history.html',
  version: '.timeline-item>h3+p',
  changelog: '.timeline-item>ul',
  download: (res, $) => {
    const href = $('a.mdr-down').attr('href');
    const product = href.match(/(\?|&)p=(.*?)(&|$)/)[2];
    const edition = href.match(/(\?|&)e=(.*?)(&|$)/)[2];
    return 'https://cdn2.minitool.com/?' + 'p=' + product + '&e=' + edition;
  },
  install: 'install_inno_type'
};
module.exports = data;
