'use strict';

let url;

const data = {
  url: 'https://mirrors.ustc.edu.cn/kde/stable/clazy/',
  version: async (res, $, fns, choice) => {
    url = await fns.walkLink(res, fns, {
      selector: 'a',
      sort: true
    }, {
      selector: 'a',
      matchCheck: 'msvc\\d+.zip'
    });
    return url.match(/(\d+[\d.]+\d+)/)[1];
  },
  download: async (res, $, fns, choice) => url,
  install: ['install', null, '*\\bin']
};
module.exports = data;
