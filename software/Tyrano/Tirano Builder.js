'use strict';

module.exports = {
  url: 'https://b.tyrano.jp/download/builder',
  version: '.tutorial>h4',
  download: (res, $) => $('.btn-info[onclick]').attr('onclick').replace(/location.href='\/home\/download_exe\/(.*?)'/, '/download/$1'),
  install: 'install'
};
