'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Tirano Builder': {
      url: 'https://b.tyrano.jp/download/builder',
      version: '.tutorial>h4',
      download: (res, $) => $('.btn-info[onclick]').attr('onclick').replace(/location.href='\/home\/download_exe\/(.*?)'/, '/download/$1'),
      install: 'install'
    },
    'Tyrano Script': {
      url: 'https://tyrano.jp/dl/v5',
      version: ['[href$=".zip"]', 'text', /Ver(.*?)（/],
      download: '[href$=".zip"]',
      install: 'install'
    }
  }
};
