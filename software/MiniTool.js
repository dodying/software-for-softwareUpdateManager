'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Partition Wizard': {
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
    },
    'Power Data Recovery': {
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
    },
    ShadowMaker: {
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
  }
};
