'use strict';

let download;

const data = {
  url: 'https://haocha.co',
  version: async (res, $, fns, choice) => {
    const uri1 = $('script[src^="/static/js/main."][src$=".chunk.js"]').eq(0).attr('src');
    const res1 = await fns.req(uri1);
    download = res1.body.match(/H="(.*?)"/)[1];
    return download.match(/Setup%20(.*?).exe/)[1];
  },
  download: (res, $) => download,
  install: ['install_zipped', 'install', 'app-64.7z']
};
module.exports = data;
