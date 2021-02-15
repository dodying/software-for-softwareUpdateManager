'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'MahJong Suite': {
      commercial: 2,
      url: 'https://www.mahjongsuite.com/whatsnew.htm',
      version: '[size="5"]+[size="3"]',
      changelog: '[background="images/lft.gif"]+td',
      download: (res, $) => res.body.match(/window.open\("(.*?)"/)[1],
      install: 'install_inno'
    },
    'SolSuite Solitaire': {
      commercial: 2,
      url: 'https://www.solsuite.com/whatsnew.htm',
      version: '[size="5"]+[size="3"]',
      changelog: '[background="images/lft.gif"]+td',
      download: (res, $) => res.body.match(/window.open\("(.*?)"/)[1],
      install: 'install_inno'
    },
    'Spider Solitaire': {
      commercial: 2,
      url: 'https://www.solitaire-spider.com/whats_new.htm',
      version: '#content>h3',
      changelog: {
        selector: '#content',
        attr: 'text',
        match: /^vNew Features in/,
        split: true
      },
      download: async (res, $, fns, choice) => {
        const res1 = await fns.req('https://www.solitaire-spider.com/download_spider_solitaire.htm');
        return res1.body.match(/window.open\("(.*?\.exe)"/)[1];
      },
      install: 'install_inno'
    },
    'Sudoku Up': {
      commercial: 2,
      url: 'https://www.sudokuup.com/what_s_new.htm',
      version: '[size="5"]+[size="3"]',
      changelog: '[background="images/lft.gif"]+td',
      download: (res, $) => res.body.match(/window.open\("(.*?)"/)[1],
      install: 'install_inno'
    }
  }
};
