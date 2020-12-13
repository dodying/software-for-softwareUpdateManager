'use strict'

let data = {
  commercial: 2,
  url: 'https://www.minitool.com/backup/upgrade-history.html',
  version: '.sm-upgrade-history>h3',
  changelog: '.sm-upgrade-history>ul',
  download: (res, $) => {
    const href = $('.sm-upgrade-history-banner-btn').attr('href');
    const product = href.match(/(\?|&)p=(.*?)(&|$)/)[2];
    const edition = href.match(/(\?|&)e=(.*?)(&|$)/)[2];
    return 'https://cdn2.minitool.com/?' + 'p=' + product + '&e=' + edition;
  },
  install: 'install_inno_type'
}
module.exports = data
