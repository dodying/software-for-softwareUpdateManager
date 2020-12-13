'use strict';

let url;

const data = {
  url: 'https://mirrors.ustc.edu.cn/kde/stable/labplot/',
  version: async (res, $, fns, choice) => {
    url = await fns.walkLink(res, fns, {
      selector: 'a',
      sort: true
    }, {
      selector: 'a',
      matchCheck: '.exe'
    });
    return url.match(/(\d+[\d.]+\d+)/)[1];
  },
  download: async (res, $, fns, choice) => url,
  install: ['install_zipped', 'install', '.7z']
};
module.exports = data;
