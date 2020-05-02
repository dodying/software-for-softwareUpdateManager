'use strict';

const data = {
  url: 'https://kdenlive.org/en/download/',
  version: 'a[href$="exe"]',
  download: (res, $) => 'https://mirrors.ustc.edu.cn/kde-application' + new URL($('a[href$="exe"]').eq(0).attr('href')).pathname,
  install: ['install_zipped', 'install', '.7z']
};
module.exports = data;
