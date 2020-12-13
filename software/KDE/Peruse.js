'use strict';

let url;

const data = {
  url: 'https://mirrors.ustc.edu.cn/kde/stable/peruse/',
  version: async (res, $, fns, choice) => {
    url = await fns.walkLink(res, fns, {
      selector: 'a',
      matchCheck: 'peruse-(.*)-x64.exe'
    });
    return url.match(/(\d+[\d.]+\d+)/)[1];
  },
  download: async (res, $, fns, choice) => url,
  install: 'install_nsis'
};
module.exports = data;
